(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[1404],{"./libs/ui/elements/src/lib/api-card/api-card.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>ApiCardComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var api_card_componentngResource=__webpack_require__("./libs/ui/elements/src/lib/api-card/api-card.component.css?ngResource"),api_card_componentngResource_default=__webpack_require__.n(api_card_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),src=__webpack_require__("./libs/ui/inputs/src/index.ts"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),tooltip=__webpack_require__("./node_modules/@angular/material/fesm2022/tooltip.mjs"),ng_icons_core=__webpack_require__("./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs"),ng_icons_material_icons_baseline=__webpack_require__("./node_modules/@ng-icons/material-icons/fesm2022/ng-icons-material-icons-baseline.mjs");let ApiCardComponent=class ApiCardComponent{constructor(){this.currentlyActive=!1,this.openRecordApiForm=new core.EventEmitter}ngOnInit(){this.displayApiFormButton="ogcFeatures"===this.link.accessServiceProtocol||"wfs"===this.link.accessServiceProtocol}ngOnChanges(changes){this.currentlyActive=changes.currentLink.currentValue===this.link}openRecordApiFormPanel(){this.displayApiFormButton&&(this.currentlyActive=!this.currentlyActive,this.openRecordApiForm.emit(this.currentlyActive?this.link:void 0))}static#_=this.propDecorators={link:[{type:core.Input}],currentLink:[{type:core.Input}],openRecordApiForm:[{type:core.Output}]}};ApiCardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-api-card",template:'<div\n  class="group flex flex-col justify-between h-40 pt-5 pb-6 px-7 rounded filter overflow-hidden cursor-default"\n>\n  <div\n    class="font-title font-medium text-21 text-black text-ellipsis overflow-hidden break-words pb-5 h-[4.5rem]"\n  >\n    {{ link.name || link.description }}\n  </div>\n  <div class="">\n    <div class="flex flex-row justify-between">\n      <span\n        class="bg-primary-opacity-50 uppercase inline-flex items-center justify-center px-2 py-1 text-13 font-medium leading-none text-white rounded text-primary-lightest group-hover:bg-primary transition-colors"\n        [ngClass]="{\n          \'!bg-primary\': currentlyActive\n        }"\n        >{{ link.accessServiceProtocol }}</span\n      >\n      <div class="flex flex-row gap-2 items-center">\n        <gn-ui-copy-text-button\n          [text]="link.url"\n          [tooltipText]="\'tooltip.url.copy\' | translate"\n          [displayText]="false"\n        ></gn-ui-copy-text-button>\n        <button\n          *ngIf="displayApiFormButton"\n          type="button"\n          [ngClass]="{\n            \'py-2 px-4 rounded-r-md bg-gray-400 hover:bg-gray-600 focus:bg-gray-800 text-white\':\n              displayText\n          }"\n          [matTooltip]="\n            !currentlyActive\n              ? (\'record.metadata.api.form.openForm\' | translate)\n              : (\'record.metadata.api.form.closeForm\' | translate)\n          "\n          matTooltipPosition="above"\n          (click)="openRecordApiFormPanel()"\n        >\n          <ng-icon\n            class="pointer-events-none align-middle card-icon"\n            name="matMoreHoriz"\n            [ngClass]="{\n              \'text-secondary opacity-100\': currentlyActive\n            }"\n          ></ng-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[common.CommonModule,src.Ug,ngx_translate_core.h,tooltip.uc,ng_icons_core.$e],viewProviders:[(0,ng_icons_core.EB)({matMoreHoriz:ng_icons_material_icons_baseline.ut5})],styles:[api_card_componentngResource_default()]})],ApiCardComponent)},"./libs/ui/elements/src/lib/api-card/api-card.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/util/i18n/src/index.ts"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_api_card_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/elements/src/lib/api-card/api-card.component.ts"),_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/material/fesm2022/tooltip.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/ApiCardComponent",component:_api_card_component__WEBPACK_IMPORTED_MODULE_2__.a,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({imports:[_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_0__.D7,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.h.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_0__.sU),_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.uc]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.applicationConfig)({providers:[]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.componentWrapperDecorator)((story=>`<div style="max-width: 800px">${story}</div>`))]},Primary={args:{link:{type:"service",accessServiceProtocol:"wfs",name:"Scot en cours d'élaboration ou de révision",description:"A file that contains all roads",url:new URL("https://roads.com/wfs")}}}},"./libs/ui/elements/src/lib/api-card/api-card.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);