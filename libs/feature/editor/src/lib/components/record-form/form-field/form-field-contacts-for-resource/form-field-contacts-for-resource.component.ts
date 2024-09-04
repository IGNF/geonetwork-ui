import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core'
import {
  Individual,
  Organization,
  Role,
  RoleLabels,
} from '@geonetwork-ui/common/domain/model/record'
import { UserModel } from '@geonetwork-ui/common/domain/model/user'
import { OrganizationsServiceInterface } from '@geonetwork-ui/common/domain/organizations.service.interface'
import { PlatformServiceInterface } from '@geonetwork-ui/common/domain/platform.service.interface'
import { DynamicElement, SortableListComponent } from '@geonetwork-ui/ui/layout'
import {
  AutocompleteComponent,
  DropdownSelectorComponent,
  UiInputsModule,
} from '@geonetwork-ui/ui/inputs'
import { UiWidgetsModule } from '@geonetwork-ui/ui/widgets'
import { createFuzzyFilter } from '@geonetwork-ui/util/shared'
import { TranslateModule } from '@ngx-translate/core'
import {
  debounceTime,
  distinctUntilChanged,
  firstValueFrom,
  switchMap,
} from 'rxjs'
import { map } from 'rxjs/operators'
import { ContactCardComponent } from '../../../contact-card/contact-card.component'

@Component({
  selector: 'gn-ui-form-field-contacts-for-resource',
  templateUrl: './form-field-contacts-for-resource.component.html',
  styleUrls: ['./form-field-contacts-for-resource.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DropdownSelectorComponent,
    UiInputsModule,
    CommonModule,
    UiWidgetsModule,
    AutocompleteComponent,
    TranslateModule,
    ContactCardComponent,
    SortableListComponent,
  ],
})
export class FormFieldContactsForResourceComponent
  implements OnChanges, OnInit
{
  @Input() value: Individual[]
  @Output() valueChange: EventEmitter<Individual[]> = new EventEmitter()

  contactsForRessourceByRole: Map<Role, Individual[]> = new Map()

  contactsAsDynElemByRole: Map<Role, DynamicElement[]> = new Map()

  rolesToPick: Role[] = [
    'resource_provider',
    'custodian',
    'owner',
    'point_of_contact',
    'author',
  ]

  roleSectionsToDisplay: Role[] = []

  allOrganizations: Map<string, Organization> = new Map()

  constructor(
    private platformServiceInterface: PlatformServiceInterface,
    private organizationsServiceInterface: OrganizationsServiceInterface
  ) {}

  ngOnChanges() {
    this.updateContactsForRessource()
    this.manageRoleSectionsToDisplay(this.value)
    this.filterRolesToPick()
  }

  async ngOnInit(): Promise<void> {
    this.allOrganizations = new Map<string, Organization>(
      (
        await firstValueFrom(this.organizationsServiceInterface.organisations$)
      ).map((organization) => [organization.name, organization])
    )
    this.updateContactsForRessource()
    this.manageRoleSectionsToDisplay(this.value)
    this.filterRolesToPick()
  }

  addRoleToDisplay(roleToAdd: string) {
    this.roleSectionsToDisplay.push(roleToAdd)
    this.filterRolesToPick()
  }

  filterRolesToPick() {
    this.rolesToPick = this.rolesToPick.filter(
      (role) => !this.roleSectionsToDisplay.includes(role)
    )
  }

  updateContactsForRessource() {
    this.contactsForRessourceByRole = this.value.reduce((acc, contact) => {
      const completeOrganization = this.allOrganizations.get(
        contact.organization.name
      )

      const updatedContact = {
        ...contact,
        organization:
          completeOrganization ??
          ({ name: contact.organization.name } as Organization),
      }

      if (!acc.has(contact.role)) {
        acc.set(contact.role, [])
      }

      acc.get(contact.role).push(updatedContact)

      return acc
    }, new Map<Role, Individual[]>())

    this.contactsAsDynElemByRole = this.value.reduce((acc, contact) => {
      const completeOrganization = this.allOrganizations.get(
        contact.organization.name
      )

      const updatedContact = {
        ...contact,
        organization:
          completeOrganization ??
          ({ name: contact.organization.name } as Organization),
      }

      const contactAsDynElem = {
        component: ContactCardComponent,
        inputs: {
          contact: updatedContact,
          removable: false,
        },
      } as DynamicElement

      if (!acc.has(contact.role)) {
        acc.set(contact.role, [])
      }

      acc.get(contact.role).push(contactAsDynElem)

      return acc
    }, new Map<Role, DynamicElement[]>())
  }

  manageRoleSectionsToDisplay(contactsForResource: Individual[]) {
    const roles = contactsForResource.map(
      (contact: Individual) => contact.role
    ) as Role[]

    roles.forEach((role: Role) => {
      if (!this.roleSectionsToDisplay.includes(role)) {
        this.roleSectionsToDisplay.push(role)
      }
    })
  }

  removeContact(index: number) {
    const newContactsforRessource = this.value.filter((_, i) => i !== index)
    this.valueChange.emit(newContactsforRessource)
  }

  handleContactsChanged(event: DynamicElement[]) {
    const newContactsOrdered = event.map(
      (contactAsDynElem) => contactAsDynElem.inputs['contact']
    ) as Individual[]

    const role = newContactsOrdered[0].role

    this.contactsForRessourceByRole.set(role, newContactsOrdered)

    const newControlValue = Array.from(
      this.contactsForRessourceByRole.values()
    ).flat()

    this.valueChange.emit(newControlValue)
  }

  protected roleToLabel(role: string): string {
    return RoleLabels.get(role)
  }

  /**
   * gn-ui-autocomplete
   */
  displayWithFn: (user: UserModel) => string = (user) =>
    `${user.name} ${user.surname} ${
      user.organisation ? `(${user.organisation})` : ''
    }`

  /**
   * gn-ui-autocomplete
   */
  autoCompleteAction = (query: string) => {
    const fuzzyFilter = createFuzzyFilter(query)
    return this.platformServiceInterface.getUsers().pipe(
      switchMap((users) => [
        users.filter((user) => fuzzyFilter(user.username)),
      ]),
      map((results) => results.slice(0, 10)),
      debounceTime(300),
      distinctUntilChanged()
    )
  }

  /**
   * gn-ui-autocomplete
   */
  addContact(contact: unknown, role: string) {
    const newContact = contact as UserModel
    const newContactsForRessource = {
      firstName: newContact.name ?? '',
      lastName: newContact.surname ?? '',
      organization:
        this.allOrganizations.get(newContact.organisation) ??
        ({ name: newContact.organisation } as Organization),
      email: newContact.email ?? '',
      role,
      address: '',
      phone: '',
      position: '',
    } as Individual

    const newControlValue = [...this.value, newContactsForRessource]

    this.valueChange.emit(newControlValue)
  }
}
