(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[3503],{"./libs/ui/layout/src/lib/pagination/pagination.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>PaginationComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var pagination_componentngResource=__webpack_require__("./libs/ui/layout/src/lib/pagination/pagination.component.css?ngResource"),pagination_componentngResource_default=__webpack_require__.n(pagination_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/ui/inputs/src/index.ts"),ng_icons_core=__webpack_require__("./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),ng_icons_material_icons_baseline=__webpack_require__("./node_modules/@ng-icons/material-icons/fesm2022/ng-icons-material-icons-baseline.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/dist/fesm2022/ngx-translate-core.mjs");let PaginationComponent=class PaginationComponent{constructor(){this.hideButton=!1}applyPageBounds(page){return Math.max(1,Math.min(this.listComponent.pagesCount,page||1))}setPage(newPage){Number.isInteger(newPage)&&this.listComponent.goToPage(this.applyPageBounds(newPage))}static{this.propDecorators={listComponent:[{type:core.Input}],hideButton:[{type:core.Input}]}}};PaginationComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-pagination",template:'<div class="relative">\n  <div class="sm:absolute sm:inset-0" *ngIf="!hideButton">\n    <gn-ui-button\n      (buttonClick)="listComponent.goToNextPage()"\n      type="secondary"\n      [disabled]="listComponent.isLastPage"\n      extraClass="lg:m-auto !p-[22px]"\n    >\n      <span class="uppercase font-medium tracking-widest" translate\n        >pagination.nextPage</span\n      >\n    </gn-ui-button>\n  </div>\n  <div\n    class="relative pointer-events-none flex flex-row justify-start sm:justify-end"\n  >\n    <div class="pointer-events-auto flex flex-row items-center py-[13px]">\n      <span class="mr-3 capitalize text-sm text-gray-900" translate\n        >pagination.page</span\n      >\n      <input\n        type="number"\n        [ngModel]="listComponent.currentPage"\n        [min]="1"\n        [max]="listComponent.pagesCount"\n        (ngModelChange)="setPage($event)"\n        class="border border-gray-300 rounded w-[54px] h-[34px] pl-[12px] mr-3 text-center"\n      />\n      <span class="mr-3 text-sm text-gray-900"\n        ><span translate>pagination.pageOf</span>\n        {{ listComponent.pagesCount }}</span\n      >\n      <gn-ui-button\n        (buttonClick)="listComponent.goToPrevPage()"\n        class="mr-2"\n        [disabled]="listComponent.isFirstPage"\n        [type]="\'light\'"\n        extraClass="!px-[3px]"\n        data-cy="prev-page"\n      >\n        <ng-icon name="matChevronLeft"></ng-icon>\n      </gn-ui-button>\n      <gn-ui-button\n        (buttonClick)="listComponent.goToNextPage()"\n        [disabled]="listComponent.isLastPage"\n        [type]="\'light\'"\n        extraClass="!px-[3px]"\n        data-cy="next-page"\n      >\n        <ng-icon name="matChevronRight"></ng-icon>\n      </gn-ui-button>\n    </div>\n  </div>\n</div>\n',standalone:!0,imports:[common.CommonModule,src.Qp,ng_icons_core.$e,fesm2022_forms.YN,ngx_translate_core.h],viewProviders:[(0,ng_icons_core.EB)({matChevronLeft:ng_icons_material_icons_baseline.NEl,matChevronRight:ng_icons_material_icons_baseline.MmW})],styles:[pagination_componentngResource_default()]})],PaginationComponent)},"./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>firstValueFrom});var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js"),_Subscriber__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js");function firstValueFrom(source,config){var hasConfig="object"==typeof config;return new Promise((function(resolve,reject){var subscriber=new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Ms({next:function(value){resolve(value),subscriber.unsubscribe()},error:reject,complete:function(){hasConfig?resolve(config.defaultValue):reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.G)}});source.subscribe(subscriber)}))}},"./libs/ui/layout/src/lib/pagination/pagination.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MockListComponent:()=>MockListComponent,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_pagination_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/layout/src/lib/pagination/pagination.component.ts"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/util/i18n/src/index.ts"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ngx-translate/core/dist/fesm2022/ngx-translate-core.mjs");let MockListComponent=class MockListComponent{constructor(changeDetector){this.changeDetector=changeDetector,this.currentPage=1,this.pagesCount=8}get isFirstPage(){return 1==this.currentPage}get isLastPage(){return this.currentPage==this.pagesCount}goToPage(index){this.currentPage=index,this.changeDetector.detectChanges()}goToPrevPage(){this.isFirstPage||this.goToPage(this.currentPage-1)}goToNextPage(){this.isLastPage||this.goToPage(this.currentPage+1)}static{this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef}]}};MockListComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"gn-ui-mock-list",template:'current page: {{ currentPage }}<br />\n    <button\n      type="button"\n      class="underline hover:text-primary"\n      (click)="goToPrevPage()"\n    >\n      decrease</button\n    >&nbsp;\n    <button\n      type="button"\n      class="underline hover:text-primary"\n      (click)="goToNextPage()"\n    >\n      increase</button\n    ><br />\n    <div>pages count: {{ pagesCount }}</div>',changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Sn)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef])],MockListComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Pagination/PaginationComponent",component:_pagination_component__WEBPACK_IMPORTED_MODULE_1__.e,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[MockListComponent]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__.D7),(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.h.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__.sU))]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`<div class="border border-gray-300 w-[600px] p-[10px]" style="resize: both; overflow: auto">${story}</div>`))]},Primary={args:{hideButton:!1},argTypes:{hideButton:{control:"boolean"}},render:args=>({props:args,template:"\n<gn-ui-pagination [hideButton]='hideButton' [listComponent]=\"list\"></gn-ui-pagination>\n<gn-ui-mock-list #list></gn-ui-mock-list>"})},__namedExportsOrder=["MockListComponent","Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    hideButton: false\n  },\n  argTypes: {\n    hideButton: {\n      control: 'boolean'\n    }\n  },\n  render: args => ({\n    props: args,\n    template: `\n<gn-ui-pagination [hideButton]='hideButton' [listComponent]=\"list\"></gn-ui-pagination>\n<gn-ui-mock-list #list></gn-ui-mock-list>`\n  })\n}",...Primary.parameters?.docs?.source}}}},"./libs/ui/layout/src/lib/pagination/pagination.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);