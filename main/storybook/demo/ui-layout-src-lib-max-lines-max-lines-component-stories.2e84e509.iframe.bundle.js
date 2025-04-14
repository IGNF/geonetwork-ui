(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[4353],{"./libs/ui/layout/src/lib/max-lines/max-lines.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>MaxLinesComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var max_lines_componentngResource=__webpack_require__("./libs/ui/layout/src/lib/max-lines/max-lines.component.css?ngResource"),max_lines_componentngResource_default=__webpack_require__.n(max_lines_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/dist/fesm2022/ngx-translate-core.mjs");let MaxLinesComponent=class MaxLinesComponent{constructor(cdr){this.cdr=cdr,this.maxLines=6,this.isExpanded=!1,this.maxHeight="",this.showToggleButton=!1}ngAfterViewInit(){this.calculateMaxHeight(),this.observer=new ResizeObserver((mutations=>{mutations.forEach((()=>{this.calculateMaxHeight()}))})),this.observer.observe(this.container.nativeElement.children[0])}toggleDisplay(){this.isExpanded=!this.isExpanded,this.calculateMaxHeight()}calculateMaxHeight(){const containerElement=this.container.nativeElement,contentElement=containerElement.children[0],contentHeight=contentElement.getBoundingClientRect().height;contentHeight&&(contentHeight>this.maxLines*this.getLineHeight(contentElement)?(this.showToggleButton=!0,this.maxHeight=this.isExpanded?`${contentHeight}px`:this.maxLines*this.getLineHeight(contentElement)+"px"):(this.showToggleButton=!1,this.maxHeight=`${contentHeight}px`),containerElement.setAttribute("style",`max-height: ${this.maxHeight}; overflow: hidden`),this.cdr.detectChanges())}getLineHeight(element){const computedStyle=window.getComputedStyle(element),lineHeight=parseFloat(computedStyle.lineHeight),fontSize=parseFloat(computedStyle.fontSize||"14");return isNaN(lineHeight)?1.2*fontSize:lineHeight}ngOnDestroy(){this.observer&&this.observer.unobserve(this.container.nativeElement.children[0])}static{this.ctorParameters=()=>[{type:core.ChangeDetectorRef}]}static{this.propDecorators={maxLines:[{type:core.Input}],container:[{type:core.ViewChild,args:["container"]}]}}};MaxLinesComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-max-lines",template:'<div\n  #container\n  class="max-lines overflow-hidden transition-[max-height] duration-300 relative"\n  [ngClass]="isExpanded ? \'ease-in\' : \'ease-out\'"\n  [style.maxHeight]="maxHeight"\n>\n  <ng-content></ng-content>\n  <div\n    *ngIf="showToggleButton && !isExpanded"\n    class="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-white h-10"\n  ></div>\n</div>\n<div\n  *ngIf="showToggleButton"\n  (click)="toggleDisplay()"\n  class="text-secondary cursor-pointer pt-2.5"\n  data-cy="readMoreButton"\n>\n  {{ (isExpanded ? \'ui.readLess\' : \'ui.readMore\') | translate }}\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[common.CommonModule,ngx_translate_core.h],styles:[max_lines_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[core.ChangeDetectorRef])],MaxLinesComponent)},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js");exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${(0,ComputesTemplateFromComponent_1.formatPropInTemplate)(key)}($event)"`:`[${key}]="${(0,ComputesTemplateFromComponent_1.formatPropInTemplate)(key)}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/portable-stories.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/portable-stories.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.setProjectAnnotations=void 0;const preview_api_1=__webpack_require__("storybook/internal/preview-api"),INTERNAL_DEFAULT_PROJECT_ANNOTATIONS=__importStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"));exports.setProjectAnnotations=function setProjectAnnotations(projectAnnotations){return(0,preview_api_1.setDefaultProjectAnnotations)(INTERNAL_DEFAULT_PROJECT_ANNOTATIONS),(0,preview_api_1.setProjectAnnotations)(projectAnnotations)}},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/ui/layout/src/lib/max-lines/max-lines.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_max_lines_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/layout/src/lib/max-lines/max-lines.component.ts"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ngx-translate/core/dist/fesm2022/ngx-translate-core.mjs"),_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/util/i18n/src/index.ts"),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/MaxLinesComponent",component:_max_lines_component__WEBPACK_IMPORTED_MODULE_1__.x,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[],imports:[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.h,_max_lines_component__WEBPACK_IMPORTED_MODULE_1__.x]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.importProvidersFrom)(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__.D7),(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.importProvidersFrom)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.h.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__.sU))]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`<div class="border border-gray-300 p-2" style="width: 600px; height:400px; resize: both; overflow: auto">${story}</div>`))]},Primary={args:{maxLines:6},render:args=>({template:`<div>\n    <gn-ui-max-lines [maxLines]=${args.maxLines}><div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus elit, tincidunt et gravida sit amet, mattis eget orci. Suspendisse dignissim magna sed neque rutrum lobortis. Aenean vitae quam sapien. Phasellus eleifend tortor ac imperdiet tristique. Curabitur aliquet mauris tristique, iaculis est sit amet, pulvinar ipsum. Maecenas lacinia varius felis sit amet tempor. Curabitur pulvinar ipsum eros, quis accumsan odio hendrerit sit amet.\n\nVestibulum placerat posuere lectus, sed lacinia orci sagittis consectetur. Duis eget eros consectetur, pretium nulla semper, pretium justo. Nullam facilisis maximus ipsum, a tempus erat eleifend non. Nulla nec lorem sed lorem porttitor ornare. Aliquam condimentum ante at laoreet dignissim. Vestibulum vel laoreet libero. Nam finibus augue ut ligula vulputate porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Nunc lorem nunc, interdum sed leo vel, vestibulum venenatis diam. Nam eget dignissim purus. Cras convallis leo sed porta tristique.</p></div></gn-ui-max-lines>\n  </div>`})},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    maxLines: 6\n  },\n  render: args => ({\n    template: `<div>\n    <gn-ui-max-lines [maxLines]=${args.maxLines}>${largeContent}</gn-ui-max-lines>\n  </div>`\n  })\n}",...Primary.parameters?.docs?.source}}}},"./libs/ui/layout/src/lib/max-lines/max-lines.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);