(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[858],{"./libs/ui/catalog/src/lib/organisation-preview/organisation-preview.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>OrganisationPreviewComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var organisation_preview_componentngResource=__webpack_require__("./libs/ui/catalog/src/lib/organisation-preview/organisation-preview.component.css?ngResource"),organisation_preview_componentngResource_default=__webpack_require__.n(organisation_preview_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let OrganisationPreviewComponent=class OrganisationPreviewComponent{constructor(){this.clickedOrganisation=new core.EventEmitter}clickOrganisation(event){event.preventDefault(),this.clickedOrganisation.emit(this.organization)}static#_=this.propDecorators={organization:[{type:core.Input}],organisationUrl:[{type:core.Input}],clickedOrganisation:[{type:core.Output}]}};OrganisationPreviewComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-organisation-preview",template:'<a href (click)="clickOrganisation($event)" [attr.href]="organisationUrl">\n  <div\n    class="group cursor-pointer rounded-lg h-full flex flex-col"\n    [title]="organization.name"\n  >\n    <div\n      class="shrink-0 bg-gray-100 rounded-lg overflow-hidden w-full border border-gray-300 h-36"\n    >\n      <gn-ui-thumbnail\n        class="relative h-full w-full"\n        [thumbnailUrl]="organization.logoUrl"\n        [fit]="\'contain\'"\n      >\n      </gn-ui-thumbnail>\n    </div>\n    <div class="px-3 pb-2 capitalize flex flex-col grow overflow-hidden">\n      <span\n        class="shrink-0 mb-3 mt-5 font-title text-21 text-title group-hover:text-primary line-clamp-2 sm:mt-2 transition-colors"\n        data-cy="organizationName"\n      >\n        {{ organization.name }}</span\n      >\n      <p\n        class="abstract mt-4 mb-5 sm:mb-2 sm:mt-0 grow shrink-1 overflow-hidden"\n        data-cy="organizationDesc"\n      >\n        {{ organization.description }}\n      </p>\n      <div class="shrink-0 text-primary opacity-50 flex leading-6">\n        <ng-icon class="text-primary opacity-50 mr-1" name="tablerFolderOpen">\n        </ng-icon>\n        <span class="mx-1" data-cy="organizationRecordsCount">{{\n          organization.recordCount\n        }}</span>\n        <span translate [translateParams]="{ count: organization.recordCount }"\n          >record.metadata.publications</span\n        >\n      </div>\n    </div>\n  </div>\n</a>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[organisation_preview_componentngResource_default()]})],OrganisationPreviewComponent)},"./node_modules/basiclightbox/dist/basicLightbox.min.js":module=>{module.exports=function e(n,t,o){function r(c,u){if(!t[c]){if(!n[c]){if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[c]={exports:{}};n[c][0].call(l.exports,(function(e){return r(n[c][1][e]||e)}),l,l.exports,e,n,t,o)}return t[c].exports}for(var i=void 0,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},r=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=i,t.create=function(e,n){var t=function(e,n){var t=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var c=r(i,"IMG"),u=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===c&&t.classList.add("basicLightbox--img"),!0===u&&t.classList.add("basicLightbox--video"),!0===s&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),c=function(e){return!1!==n.onClose(u)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if("function"==typeof e)return e(u)}))};!0===n.closable&&t.addEventListener("click",(function(e){e.target===t&&c()}));var u={element:function(){return t},visible:function(){return i(t)},show:function(e){return!1!==n.onShow(u)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(t,(function(){if("function"==typeof e)return e(u)}))},close:c};return u}},{}]},{},[1])(1)},"./node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>throttleTime});var scheduler_async=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");var timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function throttleTime(duration,scheduler,config){void 0===scheduler&&(scheduler=scheduler_async.E);var duration$=(0,timer.O)(duration,scheduler);return function throttle(durationSelector,config){return(0,lift.N)((function(source,subscriber){var _a=null!=config?config:{},_b=_a.leading,leading=void 0===_b||_b,_c=_a.trailing,trailing=void 0!==_c&&_c,hasValue=!1,sendValue=null,throttled=null,isComplete=!1,endThrottling=function(){null==throttled||throttled.unsubscribe(),throttled=null,trailing&&(send(),isComplete&&subscriber.complete())},cleanupThrottling=function(){throttled=null,isComplete&&subscriber.complete()},startThrottle=function(value){return throttled=(0,innerFrom.Tg)(durationSelector(value)).subscribe((0,OperatorSubscriber._)(subscriber,endThrottling,cleanupThrottling))},send=function(){if(hasValue){hasValue=!1;var value=sendValue;sendValue=null,subscriber.next(value),!isComplete&&startThrottle(value)}};source.subscribe((0,OperatorSubscriber._)(subscriber,(function(value){hasValue=!0,sendValue=value,(!throttled||throttled.closed)&&(leading?send():startThrottle(value))}),(function(){isComplete=!0,(!(trailing&&hasValue&&throttled)||throttled.closed)&&subscriber.complete()})))}))}((function(){return duration$}),config)}},"./libs/ui/catalog/src/lib/organisation-preview/organisation-preview.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/util/i18n/src/index.ts"),_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/util/shared/src/index.ts"),_geonetwork_ui_ui_elements__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/elements/src/index.ts"),_organisation_preview_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui/catalog/src/lib/organisation-preview/organisation-preview.component.ts"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Catalog/OrganisationPreviewComponent",component:_organisation_preview_component__WEBPACK_IMPORTED_MODULE_4__.m,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule),(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.q1)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_geonetwork_ui_ui_elements__WEBPACK_IMPORTED_MODULE_3__.Yg],imports:[_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_1__.D7,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__.ek,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.h.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_1__.sU)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`<div class="border border-gray-300 h-[350px] w-[250px] p-[10px]" style="resize: both; overflow: auto">${story}</div>`))]},Primary={args:{organization:{name:"Agglo du Saint Quentinois",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",logoUrl:new URL("https://www.declic-mobilites.org/images/neoentreprises/e/65/agglomeration_du_saint_quentinois_00269100_120312697-20180412122249.png"),recordCount:12}}}},"./libs/ui/catalog/src/lib/organisation-preview/organisation-preview.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".abstract {\n  position: relative;\n}\n\n.abstract::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(0deg, white, transparent);\n  height: 10px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);