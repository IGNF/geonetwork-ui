(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[7235],{"./node_modules/basiclightbox/dist/basicLightbox.min.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function e(n,t,o){function r(c,u){if(!t[c]){if(!n[c]){if(!u&&__webpack_require__("./node_modules/basiclightbox/dist sync recursive"))return require(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[c]={exports:{}};n[c][0].call(l.exports,(function(e){return r(n[c][1][e]||e)}),l,l.exports,e,n,t,o)}return t[c].exports}for(var i=void 0,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},r=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=i,t.create=function(e,n){var t=function(e,n){var t=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var c=r(i,"IMG"),u=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===c&&t.classList.add("basicLightbox--img"),!0===u&&t.classList.add("basicLightbox--video"),!0===s&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),c=function(e){return!1!==n.onClose(u)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if("function"==typeof e)return e(u)}))};!0===n.closable&&t.addEventListener("click",(function(e){e.target===t&&c()}));var u={element:function(){return t},visible:function(){return i(t)},show:function(e){return!1!==n.onShow(u)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(t,(function(){if("function"==typeof e)return e(u)}))},close:c};return u}},{}]},{},[1])(1)},"./libs/feature/editor/src/lib/components/online-resource-card/online-resource-card.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OfTypeDownloadDistribution:()=>OfTypeDownloadDistribution,OfTypeLink:()=>OfTypeLink,OfTypeServiceDistribution:()=>OfTypeServiceDistribution,OfTypeServiceEndpoint:()=>OfTypeServiceEndpoint,__namedExportsOrder:()=>__namedExportsOrder,default:()=>online_resource_card_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var online_resource_card_componentngResource=__webpack_require__("./libs/feature/editor/src/lib/components/online-resource-card/online-resource-card.component.css?ngResource"),online_resource_card_componentngResource_default=__webpack_require__.n(online_resource_card_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),src=__webpack_require__("./libs/ui/elements/src/index.ts"),shared_src=__webpack_require__("./libs/util/shared/src/index.ts"),inputs_src=__webpack_require__("./libs/ui/inputs/src/index.ts"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/dist/fesm2022/ngx-translate-core.mjs"),ng_icons_core=__webpack_require__("./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs"),ng_icons_iconoir=__webpack_require__("./node_modules/@ng-icons/iconoir/fesm2022/ng-icons-iconoir.mjs");let OnlineResourceCardComponent=class OnlineResourceCardComponent{constructor(){this.modifyClick=new core.EventEmitter}get title(){switch(this.onlineResource.type){case"link":case"service":case"download":return this.onlineResource.description||this.onlineResource.name||"(unknown)";case"endpoint":return this.onlineResource.description}}get subtitle(){switch(this.onlineResource.type){case"service":return`${this.onlineResource.accessServiceProtocol}`;case"endpoint":return`${this.onlineResource.protocol}`;case"link":case"download":return this.getFormat(this.onlineResource)}}get fileSize(){return"download"!==this.onlineResource.type?"":this.onlineResource.sizeBytes?(0,shared_src.kG)(this.onlineResource.sizeBytes).toLocaleString():""}get identifierInService(){return"service"!==this.onlineResource.type?"":this.onlineResource.identifierInService??""}getFormat(onlineResource){return((0,shared_src.uL)(onlineResource)||"").toUpperCase()}static{this.propDecorators={onlineResource:[{type:core.Input}],modifyClick:[{type:core.Output}]}}};OnlineResourceCardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-online-resource-card",standalone:!0,imports:[common.CommonModule,src.Yg,inputs_src.Qp,ngx_translate_core.h,ng_icons_core.Uq],providers:[(0,ng_icons_core.EB)({iconoirAttachment:ng_icons_iconoir.FXR}),(0,ng_icons_core.PG)({size:"1.5em"})],template:'<div class="gn-ui-card">\n  <div\n    class="bg-gray-100 w-[56px] h-[56px] rounded-[4px] text-primary grid justify-center items-center shrink-0"\n  >\n    <ng-icon name="iconoirAttachment"></ng-icon>\n  </div>\n  <div class="flex flex-col w-full items-start overflow-hidden leading-snug">\n    <div class="text-[16px] font-bold text-main" data-test="card-title">\n      {{ title }}\n    </div>\n    <div\n      class="text-[14px] text-gray-900"\n      *ngIf="subtitle"\n      data-test="card-subtitle"\n    >\n      <span>{{ subtitle }}</span>\n      <span *ngIf="fileSize">\n        •\n        {{\n          \'editor.record.form.field.onlineResource.fileSize\'\n            | translate: { sizeMB: fileSize }\n        }}</span\n      >\n      <span *ngIf="identifierInService"> • {{ identifierInService }}</span>\n    </div>\n    <button\n      class="gn-ui-link text-[14px]"\n      translate\n      (click)="modifyClick.emit(onlineResource)"\n      data-test="card-modify"\n    >\n      editor.record.form.field.onlineResource.modify\n    </button>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[online_resource_card_componentngResource_default()]})],OnlineResourceCardComponent);var fixtures_src=__webpack_require__("./libs/common/fixtures/src/index.ts"),i18n_src=__webpack_require__("./libs/util/i18n/src/index.ts");const online_resource_card_component_stories={title:"Elements/OnlineResourceCardComponent",component:OnlineResourceCardComponent,decorators:[(0,dist.moduleMetadata)({imports:[OnlineResourceCardComponent]}),(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(animations.BrowserAnimationsModule),(0,core.importProvidersFrom)(i18n_src.D7),(0,core.importProvidersFrom)(ngx_translate_core.h.forRoot(i18n_src.sU))]}),(0,dist.componentWrapperDecorator)((story=>`<div class="border border-gray-300 h-[200px] w-[500px] p-[10px]" style="resize: both; overflow: auto; margin: auto;">${story}</div>`))],argTypes:{modifyClick:{action:"modifyClick"}}},OfTypeLink={args:{onlineResource:(0,fixtures_src.j4)().readmeLink()}},OfTypeServiceDistribution={args:{onlineResource:(0,fixtures_src.j4)().geodataWms()}},OfTypeDownloadDistribution={args:{onlineResource:(0,fixtures_src.j4)().dataCsv()}},OfTypeServiceEndpoint={args:{onlineResource:(0,fixtures_src.j4)().wmsEndpoint()}},__namedExportsOrder=["OfTypeLink","OfTypeServiceDistribution","OfTypeDownloadDistribution","OfTypeServiceEndpoint"];OfTypeLink.parameters={...OfTypeLink.parameters,docs:{...OfTypeLink.parameters?.docs,source:{originalSource:"{\n  args: {\n    onlineResource: aSetOfLinksFixture().readmeLink()\n  }\n}",...OfTypeLink.parameters?.docs?.source}}},OfTypeServiceDistribution.parameters={...OfTypeServiceDistribution.parameters,docs:{...OfTypeServiceDistribution.parameters?.docs,source:{originalSource:"{\n  args: {\n    onlineResource: aSetOfLinksFixture().geodataWms()\n  }\n}",...OfTypeServiceDistribution.parameters?.docs?.source}}},OfTypeDownloadDistribution.parameters={...OfTypeDownloadDistribution.parameters,docs:{...OfTypeDownloadDistribution.parameters?.docs,source:{originalSource:"{\n  args: {\n    onlineResource: aSetOfLinksFixture().dataCsv()\n  }\n}",...OfTypeDownloadDistribution.parameters?.docs?.source}}},OfTypeServiceEndpoint.parameters={...OfTypeServiceEndpoint.parameters,docs:{...OfTypeServiceEndpoint.parameters?.docs,source:{originalSource:"{\n  args: {\n    onlineResource: aSetOfLinksFixture().wmsEndpoint()\n  }\n}",...OfTypeServiceEndpoint.parameters?.docs?.source}}}},"./libs/feature/editor/src/lib/components/online-resource-card/online-resource-card.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);