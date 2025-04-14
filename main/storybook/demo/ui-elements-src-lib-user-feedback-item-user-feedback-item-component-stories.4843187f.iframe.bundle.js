(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[4726],{"./libs/ui/elements/src/lib/user-feedback-item/time-since.pipe.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>TimeSincePipe});var tslib__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),date_fns__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/date-fns/esm/formatDistance/index.js"),date_fns_locale__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/locale/fr/index.js"),date_fns_locale__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/esm/locale/de/index.js"),date_fns_locale__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/esm/locale/es/index.js"),date_fns_locale__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/date-fns/esm/locale/it/index.js"),date_fns_locale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/date-fns/esm/locale/nl/index.js"),date_fns_locale__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/date-fns/esm/locale/pt/index.js"),date_fns_locale__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/date-fns/esm/locale/sk/index.js"),date_fns_locale__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/date-fns/esm/locale/en-US/index.js");let TimeSincePipe=class TimeSincePipe{constructor(translate){this.translate=translate}transform(value){if(isNaN(value.getTime()))throw new Error("Invalid Date");const maintenant=new Date;let locale;switch(this.translate.currentLang){case"fr":locale=date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.Z;break;case"de":locale=date_fns_locale__WEBPACK_IMPORTED_MODULE_1__.Z;break;case"es":locale=date_fns_locale__WEBPACK_IMPORTED_MODULE_2__.Z;break;case"it":locale=date_fns_locale__WEBPACK_IMPORTED_MODULE_3__.Z;break;case"nl":locale=date_fns_locale__WEBPACK_IMPORTED_MODULE_4__.Z;break;case"pt":locale=date_fns_locale__WEBPACK_IMPORTED_MODULE_5__.Z;break;case"sk":locale=date_fns_locale__WEBPACK_IMPORTED_MODULE_6__.Z;break;default:locale=date_fns_locale__WEBPACK_IMPORTED_MODULE_7__.Z}return(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.Z)(value,maintenant,{addSuffix:!0,locale})}static#_=this.ctorParameters=()=>[{type:_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.sK}]};TimeSincePipe=(0,tslib__WEBPACK_IMPORTED_MODULE_10__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Pipe)({name:"timeSince",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:paramtypes",[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.sK])],TimeSincePipe)},"./libs/ui/elements/src/lib/user-feedback-item/user-feedback-item.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>UserFeedbackItemComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var user_feedback_item_componentngResource=__webpack_require__("./libs/ui/elements/src/lib/user-feedback-item/user-feedback-item.component.css?ngResource"),user_feedback_item_componentngResource_default=__webpack_require__.n(user_feedback_item_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let UserFeedbackItemComponent=class UserFeedbackItemComponent{constructor(){this.newUserFeedbackAnswer=new core.EventEmitter,this.isAnAnswer=!1,this.newAnswer="",this.isAnswerEmpty=!0}ngOnInit(){this.isAnAnswer=!!this.userFeedbackParent.parentUuid}onNewAnswerValueChange(){this.isAnswerEmpty=0===this.newAnswer.length}publishNewAnswer(){if(""===this.newAnswer.trim())return;const newAnswer={...this.userFeedbackParent,uuid:void 0,published:!0,comment:this.newAnswer,parentUuid:this.userFeedbackParent.uuid,authorUserId:this.activeUser?.id,authorEmail:this.activeUser?.email,date:new Date,authorName:`${this.activeUser?.name} ${this.activeUser?.surname}`};this.newUserFeedbackAnswer.emit(newAnswer),this.newAnswer="",this.onNewAnswerValueChange()}static#_=this.propDecorators={userFeedbackParent:[{type:core.Input}],userFeedBacksAnswers:[{type:core.Input}],isActiveUserEditor:[{type:core.Input}],activeUser:[{type:core.Input}],isLastComment:[{type:core.Input}],isAddUserFeedbackLoading:[{type:core.Input}],newUserFeedbackAnswer:[{type:core.Output}]}};UserFeedbackItemComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-user-feedback-item",template:'<div\n  *ngIf="userFeedbackParent.published"\n  class="flex flex-col bg-white rounded w-full"\n  [ngClass]="[isAnAnswer ? \'ps-4 \' : \'p-4\']"\n>\n  <div class="flex flex-row">\n    <div class="avatar">\n      <img\n        class="rounded-full"\n        [src]="userFeedbackParent.avatarUrl"\n        alt="avatar"\n      />\n    </div>\n    <div class="p-4 flex flex-col">\n      <span>{{ userFeedbackParent.authorName }}</span>\n      <span> {{ userFeedbackParent.date | timeSince }}</span>\n    </div>\n  </div>\n  <div data-cy="commentText" class="mt-4 whitespace-pre-line">\n    {{ userFeedbackParent.comment }}\n  </div>\n  <div\n    class="w-full"\n    *ngFor="let userFeedBacksAnswer of userFeedBacksAnswers; let last = last"\n  >\n    <hr class="-mx-4 my-6" />\n    <gn-ui-user-feedback-item\n      [userFeedbackParent]="userFeedBacksAnswer"\n      [isLastComment]="last"\n    ></gn-ui-user-feedback-item>\n  </div>\n\n  <div *ngIf="isActiveUserEditor" class="mt-2 flex flex-col">\n    <hr class="-mx-4 my-4" />\n    <div\n      id="new-comment-buttons"\n      class="flex flex-row gap-2 items-center justify-end"\n    >\n      <gn-ui-text-area\n        [disabled]="isAddUserFeedbackLoading"\n        [(value)]="newAnswer"\n        (valueChange)="onNewAnswerValueChange()"\n        (keyup.control.enter)="publishNewAnswer()"\n        [placeholder]="\n          \'record.metadata.userFeedbacks.newAnswer.placeholder\' | translate\n        "\n        class="grow"\n        extraClass="bg-transparent border-0 placeholder-primary-darker text-primary-darker h-9"\n      ></gn-ui-text-area>\n      <div *ngIf="!isAnswerEmpty" class="flex flex-row justify-end">\n        <gn-ui-button\n          [disabled]="isAddUserFeedbackLoading"\n          [type]="\'outline\'"\n          (buttonClick)="publishNewAnswer()"\n          [title]="\n            \'record.metadata.userFeedbacks.newAnswer.buttonTitle\' | translate\n          "\n          extraClass="!p-[0.5em] text-primary-darker border-primary-darker h-9"\n        >\n          <mat-icon\n            class="material-symbols-outlined"\n            *ngIf="!isAddUserFeedbackLoading"\n          >\n            send\n          </mat-icon>\n          <ng-container *ngIf="isAddUserFeedbackLoading">\n            <div class="flex justify-center w-full">\n              <gn-ui-spinning-loader></gn-ui-spinning-loader>\n            </div>\n          </ng-container>\n        </gn-ui-button>\n      </div>\n    </div>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[user_feedback_item_componentngResource_default()]})],UserFeedbackItemComponent)},"./libs/ui/elements/src/lib/user-feedback-item/user-feedback-item.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_user_feedback_item_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/elements/src/lib/user-feedback-item/user-feedback-item.component.ts"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/util/i18n/src/index.ts"),_time_since_pipe__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/elements/src/lib/user-feedback-item/time-since.pipe.ts"),_angular_common_http__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_geonetwork_ui_ui_inputs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui/inputs/src/index.ts"),_geonetwork_ui_ui_widgets__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/ui/widgets/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/UserFeedbackItemComponent",component:_user_feedback_item_component__WEBPACK_IMPORTED_MODULE_1__.A,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_user_feedback_item_component__WEBPACK_IMPORTED_MODULE_1__.A,_geonetwork_ui_ui_widgets__WEBPACK_IMPORTED_MODULE_5__.Ws],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__.pw,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.aw.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__.fR),_time_since_pipe__WEBPACK_IMPORTED_MODULE_3__.A,_geonetwork_ui_ui_inputs__WEBPACK_IMPORTED_MODULE_4__.U5,_geonetwork_ui_ui_inputs__WEBPACK_IMPORTED_MODULE_4__.r0]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.JF)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`<div style="max-width: 800px">${story}</div>`))]},Primary={args:{userFeedbackParent:{published:!0,avatarUrl:"https://hips.hearstapps.com/hmg-prod/images/red-small-german-spitz-walking-in-the-autumn-park-royalty-free-image-1580496879.jpg?crop=0.670xw:1.00xh;0.173xw,0&resize=75:*",authorName:"John Doe",date:new Date("2024-01-01T00:00:00Z"),comment:"Sample comment",parentUuid:null,uuid:"1",metadataUUID:"",authorUserId:"",authorEmail:""},userFeedBacksAnswers:[{published:!0,avatarUrl:"https://wp.inews.co.uk/wp-content/uploads/2019/06/Papageitaucher_Fratercula_arctica-1.jpg?resize=67,67&strip=all&quality=90",authorName:"Maria Carmen",date:new Date("2024-03-30T00:00:00Z"),comment:"Sample answer number one",parentUuid:"1",uuid:"",metadataUUID:"",authorUserId:"",authorEmail:""},{published:!0,avatarUrl:"https://resize.prod.femina.ladmedia.fr/rblr/80,80/img/var/2023-07/mourir-peut-attendre.jpg",authorName:"James Bond",date:new Date("2024-04-18T00:00:00Z"),comment:"Sample answer number two",parentUuid:"1",uuid:"",metadataUUID:"",authorUserId:"",authorEmail:""}],isActiveUserEditor:!0,activeUser:{id:"1",email:"john@example.com",name:"John",surname:"Doe",profile:"ADMIN",username:"",organisation:""},isLastComment:!0,isAddUserFeedbackLoading:!1}}},"./libs/ui/elements/src/lib/user-feedback-item/user-feedback-item.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);