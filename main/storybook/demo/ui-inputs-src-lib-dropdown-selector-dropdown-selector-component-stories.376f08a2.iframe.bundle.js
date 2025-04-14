(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[795],{"./libs/ui/inputs/src/lib/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,button_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/button/button.component.css?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/util/shared/src/index.ts");let ButtonComponent=((_class=class ButtonComponent{constructor(){this.disabled=!1,this.extraClass="",this.buttonClick=new core.EventEmitter}set type(value){switch(value){case"primary":this.btnClass="btn-primary";break;case"secondary":this.btnClass="btn-secondary";break;case"outline":this.btnClass="btn-outline";break;case"light":this.btnClass="btn-light";break;default:this.btnClass="btn-default"}}get classList(){return`${this.btnClass} ${this.extraClass}`}handleClick(event){this.buttonClick.emit(),event.preventDefault(),(0,src.Yr)(event)}}).propDecorators={type:[{type:core.Input}],disabled:[{type:core.Input}],extraClass:[{type:core.Input}],buttonClick:[{type:core.Output}]},_class);ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-button",template:'<button\n  type="button"\n  class="flex flex-row items-center text-[1em] leading-none p-[1em] rounded-[0.25em] transition-all duration-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"\n  [class]="classList"\n  [disabled]="disabled"\n  (click)="handleClick($event)"\n>\n  <ng-content></ng-content>\n</button>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[button_componentngResource_default()]})],ButtonComponent)},"./libs/ui/inputs/src/lib/dropdown-selector/dropdown-selector.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>DropdownSelectorComponent});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,dropdown_selector_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/dropdown-selector/dropdown-selector.component.css?ngResource"),dropdown_selector_componentngResource_default=__webpack_require__.n(dropdown_selector_componentngResource),overlay=__webpack_require__("./node_modules/@angular/cdk/fesm2022/overlay.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),firstValueFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");let DropdownSelectorComponent=((_class=class DropdownSelectorComponent{constructor(){this.showTitle=!0,this.extraBtnClass="",this.minWidth="",this.selectValue=new core.EventEmitter,this.overlayOpen=!1,this.overlayWidth="auto",this.overlayMaxHeight="none",this.overlayPositions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top",offsetY:8},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",offsetY:-8}]}get selectedChoice(){return this.choices.find((choice=>choice.value===this.selected))??this.choices[0]}get id(){return this.title.toLowerCase().replace(/[^a-z]+/g,"-")}getChoiceLabel(){return this.selectedChoice?.label}ngOnInit(){this.maxRows||(this.maxRows=6),this.choices&&0!==this.choices.length||(this.choices=[])}isSelected(choice){return choice===this.selectedChoice}onSelectValue(choice){this.closeOverlay(),this.selected=choice.value,this.selectValue.emit(this.selected)}openOverlay(){return this.overlayWidth=this.overlayOrigin.elementRef.nativeElement.getBoundingClientRect().width+"px",this.overlayMaxHeight=this.maxRows?29*this.maxRows+60+"px":"none",this.overlayOpen=!0,Promise.all([(0,firstValueFrom.z)(this.overlay.attach),(0,firstValueFrom.z)(this.choiceInputs.changes)])}closeOverlay(){this.overlayOpen=!1}focusFirstItem(){this.choiceInputs.get(0).nativeElement.focus()}focusLastItem(){this.choiceInputs.get(this.choiceInputs.length-1).nativeElement.focus()}handleTriggerKeydown(event){var _this=this;return(0,asyncToGenerator.Z)((function*(){const keyCode=event.code,isCloseKey="Escape"===keyCode;"ArrowDown"===keyCode||"ArrowUp"===keyCode||"ArrowLeft"===keyCode||"ArrowRight"===keyCode||"Enter"===keyCode||"Space"===keyCode?(event.preventDefault(),_this.overlayOpen||(yield _this.openOverlay()),"ArrowLeft"===keyCode||"ArrowUp"===keyCode?_this.focusLastItem():_this.focusFirstItem()):_this.overlayOpen&&isCloseKey&&(event.preventDefault(),_this.closeOverlay())}))()}handleOverlayKeydown(event){if(!this.overlayOpen)return;const keyCode=event.code;"ArrowDown"===keyCode||"ArrowRight"===keyCode?(event.preventDefault(),this.shiftItemFocus(1)):"ArrowLeft"===keyCode||"ArrowUp"===keyCode?(event.preventDefault(),this.shiftItemFocus(-1)):"Escape"===keyCode&&this.closeOverlay()}shiftItemFocus(shift){const index=this.focusedIndex;if(-1===index)return;const max=this.choiceInputs.length,newIndex=((index+shift)%max+max)%max;this.choiceInputs.get(newIndex).nativeElement.focus()}get focusedIndex(){return this.choiceInputs.reduce(((prev,curr,curIndex)=>curr.nativeElement===document.activeElement?curIndex:prev),-1)}selectIfEnter(event,choice){"Enter"===event.code&&(event.preventDefault(),this.onSelectValue(choice))}}).propDecorators={title:[{type:core.Input}],showTitle:[{type:core.Input}],ariaName:[{type:core.Input}],choices:[{type:core.Input}],selected:[{type:core.Input}],maxRows:[{type:core.Input}],extraBtnClass:[{type:core.Input}],minWidth:[{type:core.Input}],selectValue:[{type:core.Output}],overlayOrigin:[{type:core.ViewChild,args:["overlayOrigin"]}],overlay:[{type:core.ViewChild,args:[overlay.pI]}],choiceInputs:[{type:core.ViewChildren,args:["choiceInputs",{read:core.ElementRef}]}]},_class);DropdownSelectorComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-dropdown-selector",template:'<div class="flex flex-col sm:flex-row sm:items-center relative w-full">\n  <span\n    *ngIf="showTitle"\n    class="tracking-wide text-sm mb-2 sm:mb-0 sm:mr-2 whitespace-nowrap"\n    [attr.for]="id"\n  >\n    {{ title }}\n  </span>\n  <gn-ui-button\n    type="outline"\n    class="grow min-w-0"\n    extraClass="!p-[8px] !pl-[16px] flex flex-row w-full {{ extraBtnClass }}"\n    [title]="title"\n    [attr.aria-owns]="id"\n    (buttonClick)="openOverlay()"\n    cdkOverlayOrigin\n    #overlayOrigin="cdkOverlayOrigin"\n    (keydown)="handleTriggerKeydown($event)"\n  >\n    <div class="grow font-medium truncate py-1 mr-2 text-left">\n      {{ getChoiceLabel() | translate }}\n    </div>\n    <mat-icon class="material-symbols-outlined shrink-0 opacity-40">\n      <ng-container *ngIf="overlayOpen">expand_less</ng-container>\n      <ng-container *ngIf="!overlayOpen">expand_more</ng-container>\n    </mat-icon>\n  </gn-ui-button>\n</div>\n\n<ng-template\n  cdkConnectedOverlay\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"\n  [cdkConnectedOverlayOrigin]="overlayOrigin"\n  [cdkConnectedOverlayOpen]="overlayOpen"\n  [cdkConnectedOverlayPositions]="overlayPositions"\n  [cdkConnectedOverlayFlexibleDimensions]="true"\n  (overlayOutsideClick)="closeOverlay()"\n  (detach)="closeOverlay()"\n>\n  <div\n    class="bg-white border border-gray-300 rounded shadow-lg py-2 w-full overflow-x-hidden overflow-y-auto overlay-container"\n    [style.max-height]="overlayMaxHeight"\n    [style.min-width]="overlayWidth"\n    role="listbox"\n    tabindex="-1"\n    [attr.id]="id"\n    [attr.aria-multiselectable]="true"\n    [attr.aria-label]="title"\n    (keydown)="handleOverlayKeydown($event)"\n  >\n    <button\n      #choiceInputs\n      type="button"\n      *ngFor="let choice of choices"\n      [title]="choice.label | translate"\n      class="flex px-5 py-1 w-full text-start cursor-pointer transition-colors"\n      [ngClass]="\n        isSelected(choice)\n          ? \'text-white bg-primary hover:text-white hover:bg-primary-darker focus:text-white focus:bg-primary-darker\'\n          : \'text-gray-900 hover:text-primary-darkest hover:bg-gray-50 focus:text-primary-darkest focus:bg-gray-50\'\n      "\n      (click)="onSelectValue(choice)"\n      (keydown)="selectIfEnter($event, choice)"\n      [attr.data-cy-value]="choice.value.toString()"\n      [attr.data-cy-active]="isSelected(choice) ? \'true\' : undefined"\n    >\n      <span class="text-[14px]">\n        {{ choice.label | translate }}\n      </span>\n    </button>\n  </div>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[dropdown_selector_componentngResource_default()]})],DropdownSelectorComponent)},"./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>firstValueFrom});var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js"),_Subscriber__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js");function firstValueFrom(source,config){var hasConfig="object"==typeof config;return new Promise((function(resolve,reject){var subscriber=new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Hp({next:function(value){resolve(value),subscriber.unsubscribe()},error:reject,complete:function(){hasConfig?resolve(config.defaultValue):reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.K)}});source.subscribe(subscriber)}))}},"./libs/ui/inputs/src/lib/dropdown-selector/dropdown-selector.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_dropdown_selector_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/inputs/src/lib/dropdown-selector/dropdown-selector.component.ts"),_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/cdk/fesm2022/overlay.mjs"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/util/i18n/src/index.ts"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_button_button_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/inputs/src/lib/button/button.component.ts"),_angular_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/DropdownSelectorComponent",component:_dropdown_selector_component__WEBPACK_IMPORTED_MODULE_1__.H,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.Hw,_button_button_component__WEBPACK_IMPORTED_MODULE_3__.r],imports:[_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__.pw,_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.U8,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.aw]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.importProvidersFrom)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.aw.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__.fR))]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`<div class="border border-gray-300 h-[250px] w-[600px] p-[10px]" style="resize: both; overflow: auto">${story}</div>`))]},Primary={args:{title:"my title",ariaName:"select-dropdown",choices:[{label:"My Choice 1",value:"choice1"},{label:"My Choice 2, second choice",value:"choice2"},{label:"My Choice 3, very very very very very very long text",value:"choice3"}],selected:"choice1",showTitle:!0},argTypes:{selectValue:{action:"selectValue"}}}},"./libs/ui/inputs/src/lib/button/button.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/* makes sure icons will not make the buttons grow vertically */\n:host ::ng-deep mat-icon.mat-icon {\n  margin-top: -0.325em;\n  margin-bottom: -0.325em;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/inputs/src/lib/dropdown-selector/dropdown-selector.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);