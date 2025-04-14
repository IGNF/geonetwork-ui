(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[5353],{"./libs/ui/layout/src/lib/sortable-list/sortable-list.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>SortableListComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var sortable_list_componentngResource=__webpack_require__("./libs/ui/layout/src/lib/sortable-list/sortable-list.component.css?ngResource"),sortable_list_componentngResource_default=__webpack_require__.n(sortable_list_componentngResource),drag_drop=__webpack_require__("./node_modules/@angular/cdk/fesm2022/drag-drop.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),src=__webpack_require__("./libs/ui/inputs/src/index.ts");let SortableListComponent=class SortableListComponent{constructor(){this.itemsOrderChange=new core.EventEmitter}drop(event){(0,drag_drop.HD)(this.items,event.previousIndex,event.currentIndex),this.itemsOrderChange.emit([...this.items])}removeItem(index){this.items=this.items.filter(((_,i)=>i!==index)),this.itemsOrderChange.emit(this.items)}trackByFn(index){return index}static#_=this.propDecorators={elementTemplate:[{type:core.Input}],items:[{type:core.Input}],itemsOrderChange:[{type:core.Output}]}};SortableListComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-sortable-list",template:'<div\n  cdkDropList\n  class="sortable-list flex flex-col gap-3 p-2"\n  (cdkDropListDropped)="drop($event)"\n>\n  <ng-container *ngFor="let item of items; index as index; trackBy: trackByFn">\n    <div class="sortable-box bg-white flex items-center" cdkDrag>\n      <span\n        cdkDragHandle\n        class="material-symbols-outlined mx-[10px] cursor-grab gn-ui-icon-medium flex-none"\n      >\n        drag_handle\n      </span>\n      <div class="flex-1">\n        <ng-container\n          *ngTemplateOutlet="\n            elementTemplate;\n            context: { $implicit: item, index }\n          "\n        ></ng-container>\n      </div>\n\n      <gn-ui-button\n        type="light"\n        style="\n          --gn-ui-button-padding: 0px;\n          --gn-ui-button-width: 24px;\n          --gn-ui-button-height: 24px;\n        "\n        class="ml-[8px] mr-[10px]"\n        (buttonClick)="removeItem(index)"\n        data-test="remove-item"\n        ><span class="material-symbols-outlined gn-ui-icon-medium">close</span>\n      </gn-ui-button>\n    </div>\n  </ng-container>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[common.CommonModule,drag_drop.O7,drag_drop.T1,drag_drop.Fb,icon.m_,src.Qp],styles:[sortable_list_componentngResource_default()]})],SortableListComponent)},"./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>firstValueFrom});var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js"),_Subscriber__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js");function firstValueFrom(source,config){var hasConfig="object"==typeof config;return new Promise((function(resolve,reject){var subscriber=new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Ms({next:function(value){resolve(value),subscriber.unsubscribe()},error:reject,complete:function(){hasConfig?resolve(config.defaultValue):reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.G)}});source.subscribe(subscriber)}))}},"./libs/ui/layout/src/lib/sortable-list/sortable-list.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TemporalExtents:()=>TemporalExtents,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_sortable_list_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/layout/src/lib/sortable-list/sortable-list.component.ts"),_geonetwork_ui_ui_inputs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/inputs/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/SortableListComponent",component:_sortable_list_component__WEBPACK_IMPORTED_MODULE_1__.E,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_geonetwork_ui_ui_inputs__WEBPACK_IMPORTED_MODULE_2__.fI,_geonetwork_ui_ui_inputs__WEBPACK_IMPORTED_MODULE_2__.I]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule)]})],argTypes:{startDateChange:{action:"startDateChange"},endDateChange:{action:"endDateChange"},dateChange:{action:"dateChange"},itemsOrderChange:{action:"itemsOrderChange"}}},TemporalExtents={args:{items:[{startDate:new Date("1977-05-25"),endDate:new Date("1977-05-26")},{endDate:new Date("1978-05-25")},{date:new Date("1979-05-25")},{startDate:new Date("1977-06-25")},{}]},render:args=>({props:args,template:'\n<gn-ui-sortable-list [items]="items" (itemsOrderChange)="itemsOrderChange($event)" [elementTemplate]=\'template\'>\n</gn-ui-sortable-list>\n<ng-template #template let-item>\n  <gn-ui-date-range-picker\n    *ngIf="!item.date"\n    [startDate]="item.startDate"\n    [endDate]="item.endDate"\n    (startDateChange)="startDateChange($event)"\n    (endDateChange)="endDateChange($event)">\n  </gn-ui-date-range-picker>\n  <gn-ui-date-picker\n    *ngIf="item.date"\n    [date]="item.date"\n    (dateChange)="dateChange($event)">\n  </gn-ui-date-picker>\n</ng-template>\n    '})}},"./libs/ui/layout/src/lib/sortable-list/sortable-list.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.sortable-list.cdk-drop-list-dragging .sortable-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);