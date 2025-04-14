(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[6755],{"./libs/ui/layout/src/lib/modal-dialog/modal-dialog.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>ModalDialogComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var modal_dialog_componentngResource=__webpack_require__("./libs/ui/layout/src/lib/modal-dialog/modal-dialog.component.css?ngResource"),modal_dialog_componentngResource_default=__webpack_require__.n(modal_dialog_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),dialog=__webpack_require__("./node_modules/@angular/material/fesm2022/dialog.mjs"),src=__webpack_require__("./libs/ui/inputs/src/index.ts");let ModalDialogComponent=class ModalDialogComponent{constructor(dialogRef,data){this.dialogRef=dialogRef,this.data=data}onConfirm(){this.dialogRef.close(!0)}onCancel(){this.dialogRef.close(!1)}static{this.ctorParameters=()=>[{type:dialog.CP},{type:void 0,decorators:[{type:core.Inject,args:[dialog.Vh]}]}]}};ModalDialogComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-modal-dialog",standalone:!0,imports:[common.CommonModule,dialog.hM,src.Qp],template:'<h1 mat-dialog-title>{{ data.title }}</h1>\n<div mat-dialog-content>\n  <ng-container\n    *ngTemplateOutlet="data.body; context: { $implicit: data.bodyContext }"\n  ></ng-container>\n</div>\n<div mat-dialog-actions>\n  <gn-ui-button (buttonClick)="onCancel()">{{ data.cancelText }}</gn-ui-button>\n  <gn-ui-button\n    (buttonClick)="onConfirm()"\n    class="ml-2"\n    data-cy="confirm-button"\n    >{{ data.confirmText }}</gn-ui-button\n  >\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[modal_dialog_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[dialog.CP,Object])],ModalDialogComponent)},"./libs/ui/layout/src/lib/modal-dialog/modal-dialog.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/material/fesm2022/dialog.mjs"),_geonetwork_ui_ui_inputs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/inputs/src/index.ts"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_modal_dialog_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/layout/src/lib/modal-dialog/modal-dialog.component.ts");let LaunchDialogComponent=class LaunchDialogComponent{constructor(_dialog){this._dialog=_dialog,this.title="",this.confirmText="",this.cancelText=""}launch(){this._dialog.open(_modal_dialog_component__WEBPACK_IMPORTED_MODULE_2__.p,{data:{title:this.title,body:this.body,bodyContext:{name:"John Doe"},confirmText:this.confirmText,cancelText:this.cancelText}}).afterClosed().subscribe((confirmed=>{this.confirmed=confirmed}))}static{this.ctorParameters=()=>[{type:_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.bZ}]}static{this.propDecorators={title:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Input}],body:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Input}],confirmText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Input}],cancelText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Input}]}}};LaunchDialogComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({selector:"gn-ui-launcher",template:'\n    <gn-ui-button (buttonClick)="launch()">Open</gn-ui-button>\n    <span *ngIf="confirmed === undefined">Waiting for a result</span>\n    <span *ngIf="confirmed">Confirmed</span>\n    <span *ngIf="confirmed === false">Canceled</span>\n  '}),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Sn)("design:paramtypes",[_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.bZ])],LaunchDialogComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/ModalDialogComponent",component:LaunchDialogComponent,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({imports:[_geonetwork_ui_ui_inputs__WEBPACK_IMPORTED_MODULE_0__.Qp,_modal_dialog_component__WEBPACK_IMPORTED_MODULE_2__.p]})]},Primary={args:{title:"Some title",bodyText:"welcome to this website!",confirmText:"OK",cancelText:"KO"},render:args=>({props:args,template:'\n<gn-ui-launcher [title]="title" [body]="body" [confirmText]="confirmText" [cancelText]="cancelText"></gn-ui-launcher>\n<ng-template #body let-context>\n  The body of the dialog is: {{ bodyText }}<br>\n  The name in the context is: {{ context.name }}\n</ng-template>\n'})},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Some title',\n    bodyText: 'welcome to this website!',\n    confirmText: 'OK',\n    cancelText: 'KO'\n  },\n  render: args => ({\n    props: args,\n    template: `\n<gn-ui-launcher [title]=\"title\" [body]=\"body\" [confirmText]=\"confirmText\" [cancelText]=\"cancelText\"></gn-ui-launcher>\n<ng-template #body let-context>\n  The body of the dialog is: {{ bodyText }}<br>\n  The name in the context is: {{ context.name }}\n</ng-template>\n`\n  })\n}",...Primary.parameters?.docs?.source}}}},"./libs/ui/layout/src/lib/modal-dialog/modal-dialog.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);