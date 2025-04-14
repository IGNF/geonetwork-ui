"use strict";(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[7707],{"./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Wr:()=>TranslateLoader,c$:()=>TranslateService,h:()=>TranslateModule,kJ:()=>TranslateCompiler});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isObservable.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js"),rxjs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),rxjs__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/defer.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/concatMap.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");class TranslateLoader{}class TranslateFakeLoader extends TranslateLoader{getTranslation(lang){return(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({})}}TranslateFakeLoader.ɵfac=function(){let ɵTranslateFakeLoader_BaseFactory;return function TranslateFakeLoader_Factory(t){return(ɵTranslateFakeLoader_BaseFactory||(ɵTranslateFakeLoader_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TranslateFakeLoader)))(t||TranslateFakeLoader)}}(),TranslateFakeLoader.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({token:TranslateFakeLoader,factory:TranslateFakeLoader.ɵfac}),("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateFakeLoader,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable}],null,null);class MissingTranslationHandler{}class FakeMissingTranslationHandler{handle(params){return params.key}}function equals(o1,o2){if(o1===o2)return!0;if(null===o1||null===o2)return!1;if(o1!=o1&&o2!=o2)return!0;let length,key,keySet,t1=typeof o1;if(t1==typeof o2&&"object"==t1){if(!Array.isArray(o1)){if(Array.isArray(o2))return!1;for(key in keySet=Object.create(null),o1){if(!equals(o1[key],o2[key]))return!1;keySet[key]=!0}for(key in o2)if(!(key in keySet)&&void 0!==o2[key])return!1;return!0}if(!Array.isArray(o2))return!1;if((length=o1.length)==o2.length){for(key=0;key<length;key++)if(!equals(o1[key],o2[key]))return!1;return!0}}return!1}function isDefined(value){return null!=value}function isObject(item){return item&&"object"==typeof item&&!Array.isArray(item)}function mergeDeep(target,source){let output=Object.assign({},target);return isObject(target)&&isObject(source)&&Object.keys(source).forEach((key=>{isObject(source[key])?key in target?output[key]=mergeDeep(target[key],source[key]):Object.assign(output,{[key]:source[key]}):Object.assign(output,{[key]:source[key]})})),output}FakeMissingTranslationHandler.ɵfac=function FakeMissingTranslationHandler_Factory(t){return new(t||FakeMissingTranslationHandler)},FakeMissingTranslationHandler.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({token:FakeMissingTranslationHandler,factory:FakeMissingTranslationHandler.ɵfac}),("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FakeMissingTranslationHandler,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable}],null,null);class TranslateParser{}class TranslateDefaultParser extends TranslateParser{constructor(){super(...arguments),this.templateMatcher=/{{\s?([^{}\s]*)\s?}}/g}interpolate(expr,params){let result;return result="string"==typeof expr?this.interpolateString(expr,params):"function"==typeof expr?this.interpolateFunction(expr,params):expr,result}getValue(target,key){let keys="string"==typeof key?key.split("."):[key];key="";do{key+=keys.shift(),!isDefined(target)||!isDefined(target[key])||"object"!=typeof target[key]&&keys.length?keys.length?key+=".":target=void 0:(target=target[key],key="")}while(keys.length);return target}interpolateFunction(fn,params){return fn(params)}interpolateString(expr,params){return params?expr.replace(this.templateMatcher,((substring,b)=>{let r=this.getValue(params,b);return isDefined(r)?r:substring})):expr}}TranslateDefaultParser.ɵfac=function(){let ɵTranslateDefaultParser_BaseFactory;return function TranslateDefaultParser_Factory(t){return(ɵTranslateDefaultParser_BaseFactory||(ɵTranslateDefaultParser_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TranslateDefaultParser)))(t||TranslateDefaultParser)}}(),TranslateDefaultParser.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({token:TranslateDefaultParser,factory:TranslateDefaultParser.ɵfac}),("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateDefaultParser,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable}],null,null);class TranslateCompiler{}class TranslateFakeCompiler extends TranslateCompiler{compile(value,lang){return value}compileTranslations(translations,lang){return translations}}TranslateFakeCompiler.ɵfac=function(){let ɵTranslateFakeCompiler_BaseFactory;return function TranslateFakeCompiler_Factory(t){return(ɵTranslateFakeCompiler_BaseFactory||(ɵTranslateFakeCompiler_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TranslateFakeCompiler)))(t||TranslateFakeCompiler)}}(),TranslateFakeCompiler.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({token:TranslateFakeCompiler,factory:TranslateFakeCompiler.ɵfac}),("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateFakeCompiler,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable}],null,null);class TranslateStore{constructor(){this.currentLang=this.defaultLang,this.translations={},this.langs=[],this.onTranslationChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.onLangChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.onDefaultLangChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter}}const USE_STORE=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken("USE_STORE"),USE_DEFAULT_LANG=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken("USE_DEFAULT_LANG"),DEFAULT_LANGUAGE=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken("DEFAULT_LANGUAGE"),USE_EXTEND=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken("USE_EXTEND");class TranslateService{constructor(store,currentLoader,compiler,parser,missingTranslationHandler,useDefaultLang=!0,isolate=!1,extend=!1,defaultLanguage){this.store=store,this.currentLoader=currentLoader,this.compiler=compiler,this.parser=parser,this.missingTranslationHandler=missingTranslationHandler,this.useDefaultLang=useDefaultLang,this.isolate=isolate,this.extend=extend,this.pending=!1,this._onTranslationChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this._onLangChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this._onDefaultLangChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this._langs=[],this._translations={},this._translationRequests={},defaultLanguage&&this.setDefaultLang(defaultLanguage)}get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(defaultLang){this.isolate?this._defaultLang=defaultLang:this.store.defaultLang=defaultLang}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(currentLang){this.isolate?this._currentLang=currentLang:this.store.currentLang=currentLang}get langs(){return this.isolate?this._langs:this.store.langs}set langs(langs){this.isolate?this._langs=langs:this.store.langs=langs}get translations(){return this.isolate?this._translations:this.store.translations}set translations(translations){this.isolate?this._translations=translations:this.store.translations=translations}setDefaultLang(lang){if(lang===this.defaultLang)return;let pending=this.retrieveTranslations(lang);void 0!==pending?(null==this.defaultLang&&(this.defaultLang=lang),pending.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.s)(1)).subscribe((res=>{this.changeDefaultLang(lang)}))):this.changeDefaultLang(lang)}getDefaultLang(){return this.defaultLang}use(lang){if(lang===this.currentLang)return(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.translations[lang]);let pending=this.retrieveTranslations(lang);return void 0!==pending?(this.currentLang||(this.currentLang=lang),pending.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.s)(1)).subscribe((res=>{this.changeLang(lang)})),pending):(this.changeLang(lang),(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.translations[lang]))}retrieveTranslations(lang){let pending;return(void 0===this.translations[lang]||this.extend)&&(this._translationRequests[lang]=this._translationRequests[lang]||this.getTranslation(lang),pending=this._translationRequests[lang]),pending}getTranslation(lang){this.pending=!0;const loadingTranslations=this.currentLoader.getTranslation(lang).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.t)(1),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.s)(1));return this.loadingTranslations=loadingTranslations.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.T)((res=>this.compiler.compileTranslations(res,lang))),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.t)(1),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.s)(1)),this.loadingTranslations.subscribe({next:res=>{this.translations[lang]=this.extend&&this.translations[lang]?{...res,...this.translations[lang]}:res,this.updateLangs(),this.pending=!1},error:err=>{this.pending=!1}}),loadingTranslations}setTranslation(lang,translations,shouldMerge=!1){translations=this.compiler.compileTranslations(translations,lang),(shouldMerge||this.extend)&&this.translations[lang]?this.translations[lang]=mergeDeep(this.translations[lang],translations):this.translations[lang]=translations,this.updateLangs(),this.onTranslationChange.emit({lang,translations:this.translations[lang]})}getLangs(){return this.langs}addLangs(langs){langs.forEach((lang=>{-1===this.langs.indexOf(lang)&&this.langs.push(lang)}))}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(translations,key,interpolateParams){let res;if(key instanceof Array){let result={},observables=!1;for(let k of key)result[k]=this.getParsedResult(translations,k,interpolateParams),(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.A)(result[k])&&(observables=!0);if(observables){const sources=key.map((k=>(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.A)(result[k])?result[k]:(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(result[k])));return(0,rxjs__WEBPACK_IMPORTED_MODULE_6__.p)(sources).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.T)((arr=>{let obj={};return arr.forEach(((value,index)=>{obj[key[index]]=value})),obj})))}return result}if(translations&&(res=this.parser.interpolate(this.parser.getValue(translations,key),interpolateParams)),void 0===res&&null!=this.defaultLang&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(res=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],key),interpolateParams)),void 0===res){let params={key,translateService:this};void 0!==interpolateParams&&(params.interpolateParams=interpolateParams),res=this.missingTranslationHandler.handle(params)}return void 0!==res?res:key}get(key,interpolateParams){if(!isDefined(key)||!key.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.H)((res=>(res=this.getParsedResult(res,key,interpolateParams),(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.A)(res)?res:(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(res)))));{let res=this.getParsedResult(this.translations[this.currentLang],key,interpolateParams);return(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.A)(res)?res:(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(res)}}getStreamOnTranslationChange(key,interpolateParams){if(!isDefined(key)||!key.length)throw new Error('Parameter "key" required');return(0,rxjs__WEBPACK_IMPORTED_MODULE_8__.x)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.v)((()=>this.get(key,interpolateParams))),this.onTranslationChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.n)((event=>{const res=this.getParsedResult(event.translations,key,interpolateParams);return"function"==typeof res.subscribe?res:(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(res)}))))}stream(key,interpolateParams){if(!isDefined(key)||!key.length)throw new Error('Parameter "key" required');return(0,rxjs__WEBPACK_IMPORTED_MODULE_8__.x)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.v)((()=>this.get(key,interpolateParams))),this.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.n)((event=>{const res=this.getParsedResult(event.translations,key,interpolateParams);return(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.A)(res)?res:(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(res)}))))}instant(key,interpolateParams){if(!isDefined(key)||!key.length)throw new Error('Parameter "key" required');let res=this.getParsedResult(this.translations[this.currentLang],key,interpolateParams);if((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.A)(res)){if(key instanceof Array){let obj={};return key.forEach(((value,index)=>{obj[key[index]]=key[index]})),obj}return key}return res}set(key,value,lang=this.currentLang){this.translations[lang][key]=this.compiler.compile(value,lang),this.updateLangs(),this.onTranslationChange.emit({lang,translations:this.translations[lang]})}changeLang(lang){this.currentLang=lang,this.onLangChange.emit({lang,translations:this.translations[lang]}),null==this.defaultLang&&this.changeDefaultLang(lang)}changeDefaultLang(lang){this.defaultLang=lang,this.onDefaultLangChange.emit({lang,translations:this.translations[lang]})}reloadLang(lang){return this.resetLang(lang),this.getTranslation(lang)}resetLang(lang){this._translationRequests[lang]=void 0,this.translations[lang]=void 0}getBrowserLang(){if("undefined"==typeof window||void 0===window.navigator)return;let browserLang=window.navigator.languages?window.navigator.languages[0]:null;return browserLang=browserLang||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,void 0!==browserLang?(-1!==browserLang.indexOf("-")&&(browserLang=browserLang.split("-")[0]),-1!==browserLang.indexOf("_")&&(browserLang=browserLang.split("_")[0]),browserLang):void 0}getBrowserCultureLang(){if("undefined"==typeof window||void 0===window.navigator)return;let browserCultureLang=window.navigator.languages?window.navigator.languages[0]:null;return browserCultureLang=browserCultureLang||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,browserCultureLang}}TranslateService.ɵfac=function TranslateService_Factory(t){return new(t||TranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TranslateStore),_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TranslateLoader),_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TranslateCompiler),_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TranslateParser),_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MissingTranslationHandler),_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](USE_DEFAULT_LANG),_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](USE_STORE),_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](USE_EXTEND),_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DEFAULT_LANGUAGE))},TranslateService.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({token:TranslateService,factory:TranslateService.ɵfac}),("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateService,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable}],(function(){return[{type:TranslateStore},{type:TranslateLoader},{type:TranslateCompiler},{type:TranslateParser},{type:MissingTranslationHandler},{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,args:[USE_DEFAULT_LANG]}]},{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,args:[USE_STORE]}]},{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,args:[USE_EXTEND]}]},{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,args:[DEFAULT_LANGUAGE]}]}]}),null);class TranslateDirective{constructor(translateService,element,_ref){this.translateService=translateService,this.element=element,this._ref=_ref,this.onTranslationChangeSub||(this.onTranslationChangeSub=this.translateService.onTranslationChange.subscribe((event=>{event.lang===this.translateService.currentLang&&this.checkNodes(!0,event.translations)}))),this.onLangChangeSub||(this.onLangChangeSub=this.translateService.onLangChange.subscribe((event=>{this.checkNodes(!0,event.translations)}))),this.onDefaultLangChangeSub||(this.onDefaultLangChangeSub=this.translateService.onDefaultLangChange.subscribe((event=>{this.checkNodes(!0)})))}set translate(key){key&&(this.key=key,this.checkNodes())}set translateParams(params){equals(this.currentParams,params)||(this.currentParams=params,this.checkNodes(!0))}ngAfterViewChecked(){this.checkNodes()}checkNodes(forceUpdate=!1,translations){let nodes=this.element.nativeElement.childNodes;nodes.length||(this.setContent(this.element.nativeElement,this.key),nodes=this.element.nativeElement.childNodes);for(let i=0;i<nodes.length;++i){let node=nodes[i];if(3===node.nodeType){let key;if(forceUpdate&&(node.lastKey=null),isDefined(node.lookupKey))key=node.lookupKey;else if(this.key)key=this.key;else{let content=this.getContent(node),trimmedContent=content.trim();trimmedContent.length&&(node.lookupKey=trimmedContent,content!==node.currentValue?(key=trimmedContent,node.originalContent=content||node.originalContent):node.originalContent?key=node.originalContent.trim():content!==node.currentValue&&(key=trimmedContent,node.originalContent=content||node.originalContent))}this.updateValue(key,node,translations)}}}updateValue(key,node,translations){if(key){if(node.lastKey===key&&this.lastParams===this.currentParams)return;this.lastParams=this.currentParams;let onTranslation=res=>{res!==key&&(node.lastKey=key),node.originalContent||(node.originalContent=this.getContent(node)),node.currentValue=isDefined(res)?res:node.originalContent||key,this.setContent(node,this.key?node.currentValue:node.originalContent.replace(key,node.currentValue)),this._ref.markForCheck()};if(isDefined(translations)){let res=this.translateService.getParsedResult(translations,key,this.currentParams);(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.A)(res)?res.subscribe({next:onTranslation}):onTranslation(res)}else this.translateService.get(key,this.currentParams).subscribe(onTranslation)}}getContent(node){return isDefined(node.textContent)?node.textContent:node.data}setContent(node,content){isDefined(node.textContent)?node.textContent=content:node.data=content}ngOnDestroy(){this.onLangChangeSub&&this.onLangChangeSub.unsubscribe(),this.onDefaultLangChangeSub&&this.onDefaultLangChangeSub.unsubscribe(),this.onTranslationChangeSub&&this.onTranslationChangeSub.unsubscribe()}}TranslateDirective.ɵfac=function TranslateDirective_Factory(t){return new(t||TranslateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TranslateService),_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef),_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef))},TranslateDirective.ɵdir=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({type:TranslateDirective,selectors:[["","translate",""],["","ngx-translate",""]],inputs:{translate:"translate",translateParams:"translateParams"}}),("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateDirective,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,args:[{selector:"[translate],[ngx-translate]"}]}],(function(){return[{type:TranslateService},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef}]}),{translate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],translateParams:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}]});class TranslatePipe{constructor(translate,_ref){this.translate=translate,this._ref=_ref,this.value="",this.lastKey=null,this.lastParams=[]}updateValue(key,interpolateParams,translations){let onTranslation=res=>{this.value=void 0!==res?res:key,this.lastKey=key,this._ref.markForCheck()};if(translations){let res=this.translate.getParsedResult(translations,key,interpolateParams);(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.A)(res.subscribe)?res.subscribe(onTranslation):onTranslation(res)}this.translate.get(key,interpolateParams).subscribe(onTranslation)}transform(query,...args){if(!query||!query.length)return query;if(equals(query,this.lastKey)&&equals(args,this.lastParams))return this.value;let interpolateParams;if(isDefined(args[0])&&args.length)if("string"==typeof args[0]&&args[0].length){let validArgs=args[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{interpolateParams=JSON.parse(validArgs)}catch(e){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`)}}else"object"!=typeof args[0]||Array.isArray(args[0])||(interpolateParams=args[0]);return this.lastKey=query,this.lastParams=args,this.updateValue(query,interpolateParams),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe((event=>{this.lastKey&&event.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(query,interpolateParams,event.translations))}))),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe((event=>{this.lastKey&&(this.lastKey=null,this.updateValue(query,interpolateParams,event.translations))}))),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe((()=>{this.lastKey&&(this.lastKey=null,this.updateValue(query,interpolateParams))}))),this.value}_dispose(){void 0!==this.onTranslationChange&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),void 0!==this.onLangChange&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),void 0!==this.onDefaultLangChange&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}}TranslatePipe.ɵfac=function TranslatePipe_Factory(t){return new(t||TranslatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TranslateService,16),_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef,16))},TranslatePipe.ɵpipe=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({name:"translate",type:TranslatePipe,pure:!1}),TranslatePipe.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({token:TranslatePipe,factory:TranslatePipe.ɵfac}),("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslatePipe,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,args:[{name:"translate",pure:!1}]}],(function(){return[{type:TranslateService},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef}]}),null);class TranslateModule{static forRoot(config={}){return{ngModule:TranslateModule,providers:[config.loader||{provide:TranslateLoader,useClass:TranslateFakeLoader},config.compiler||{provide:TranslateCompiler,useClass:TranslateFakeCompiler},config.parser||{provide:TranslateParser,useClass:TranslateDefaultParser},config.missingTranslationHandler||{provide:MissingTranslationHandler,useClass:FakeMissingTranslationHandler},TranslateStore,{provide:USE_STORE,useValue:config.isolate},{provide:USE_DEFAULT_LANG,useValue:config.useDefaultLang},{provide:USE_EXTEND,useValue:config.extend},{provide:DEFAULT_LANGUAGE,useValue:config.defaultLanguage},TranslateService]}}static forChild(config={}){return{ngModule:TranslateModule,providers:[config.loader||{provide:TranslateLoader,useClass:TranslateFakeLoader},config.compiler||{provide:TranslateCompiler,useClass:TranslateFakeCompiler},config.parser||{provide:TranslateParser,useClass:TranslateDefaultParser},config.missingTranslationHandler||{provide:MissingTranslationHandler,useClass:FakeMissingTranslationHandler},{provide:USE_STORE,useValue:config.isolate},{provide:USE_DEFAULT_LANG,useValue:config.useDefaultLang},{provide:USE_EXTEND,useValue:config.extend},{provide:DEFAULT_LANGUAGE,useValue:config.defaultLanguage},TranslateService]}}}TranslateModule.ɵfac=function TranslateModule_Factory(t){return new(t||TranslateModule)},TranslateModule.ɵmod=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({type:TranslateModule,declarations:[TranslatePipe,TranslateDirective],exports:[TranslatePipe,TranslateDirective]}),TranslateModule.ɵinj=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({}),("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateModule,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,args:[{declarations:[TranslatePipe,TranslateDirective],exports:[TranslatePipe,TranslateDirective]}]}],null,null)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ReplaySubject});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_Subject__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),_scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js"),ReplaySubject=function(_super){function ReplaySubject(_bufferSize,_windowTime,_timestampProvider){void 0===_bufferSize&&(_bufferSize=1/0),void 0===_windowTime&&(_windowTime=1/0),void 0===_timestampProvider&&(_timestampProvider=_scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.U);var _this=_super.call(this)||this;return _this._bufferSize=_bufferSize,_this._windowTime=_windowTime,_this._timestampProvider=_timestampProvider,_this._buffer=[],_this._infiniteTimeWindow=!0,_this._infiniteTimeWindow=_windowTime===1/0,_this._bufferSize=Math.max(1,_bufferSize),_this._windowTime=Math.max(1,_windowTime),_this}return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.C6)(ReplaySubject,_super),ReplaySubject.prototype.next=function(value){var _a=this,isStopped=_a.isStopped,_buffer=_a._buffer,_infiniteTimeWindow=_a._infiniteTimeWindow,_timestampProvider=_a._timestampProvider,_windowTime=_a._windowTime;isStopped||(_buffer.push(value),!_infiniteTimeWindow&&_buffer.push(_timestampProvider.now()+_windowTime)),this._trimBuffer(),_super.prototype.next.call(this,value)},ReplaySubject.prototype._subscribe=function(subscriber){this._throwIfClosed(),this._trimBuffer();for(var subscription=this._innerSubscribe(subscriber),_infiniteTimeWindow=this._infiniteTimeWindow,copy=this._buffer.slice(),i=0;i<copy.length&&!subscriber.closed;i+=_infiniteTimeWindow?1:2)subscriber.next(copy[i]);return this._checkFinalizedStatuses(subscriber),subscription},ReplaySubject.prototype._trimBuffer=function(){var _bufferSize=this._bufferSize,_timestampProvider=this._timestampProvider,_buffer=this._buffer,_infiniteTimeWindow=this._infiniteTimeWindow,adjustedBufferSize=(_infiniteTimeWindow?1:2)*_bufferSize;if(_bufferSize<1/0&&adjustedBufferSize<_buffer.length&&_buffer.splice(0,_buffer.length-adjustedBufferSize),!_infiniteTimeWindow){for(var now=_timestampProvider.now(),last=0,i=1;i<_buffer.length&&_buffer[i]<=now;i+=2)last=i;last&&_buffer.splice(0,last+1)}},ReplaySubject}(_Subject__WEBPACK_IMPORTED_MODULE_2__.B)},"./node_modules/rxjs/dist/esm5/internal/observable/defer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>defer});var _Observable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");function defer(observableFactory){return new _Observable__WEBPACK_IMPORTED_MODULE_0__.c((function(subscriber){(0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Tg)(observableFactory()).subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>forkJoin});var _Observable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_innerFrom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js");function forkJoin(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.ms)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.D)(args),sources=_a.args,keys=_a.keys,result=new _Observable__WEBPACK_IMPORTED_MODULE_2__.c((function(subscriber){var length=sources.length;if(length)for(var values=new Array(length),remainingCompletions=length,remainingEmissions=length,_loop_1=function(sourceIndex){var hasValue=!1;(0,_innerFrom__WEBPACK_IMPORTED_MODULE_3__.Tg)(sources[sourceIndex]).subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__._)(subscriber,(function(value){hasValue||(hasValue=!0,remainingEmissions--),values[sourceIndex]=value}),(function(){return remainingCompletions--}),void 0,(function(){remainingCompletions&&hasValue||(remainingEmissions||subscriber.next(keys?(0,_util_createObject__WEBPACK_IMPORTED_MODULE_5__.e)(keys,values):values),subscriber.complete())})))},sourceIndex=0;sourceIndex<length;sourceIndex++)_loop_1(sourceIndex);else subscriber.complete()}));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.I)(resultSelector)):result}},"./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>shareReplay});var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js"),_share__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js");function shareReplay(configOrBufferSize,windowTime,scheduler){var _a,_b,_c,bufferSize,refCount=!1;return configOrBufferSize&&"object"==typeof configOrBufferSize?(_a=configOrBufferSize.bufferSize,bufferSize=void 0===_a?1/0:_a,_b=configOrBufferSize.windowTime,windowTime=void 0===_b?1/0:_b,refCount=void 0!==(_c=configOrBufferSize.refCount)&&_c,scheduler=configOrBufferSize.scheduler):bufferSize=null!=configOrBufferSize?configOrBufferSize:1/0,(0,_share__WEBPACK_IMPORTED_MODULE_0__.u)({connector:function(){return new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.m(bufferSize,windowTime,scheduler)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:refCount})}},"./node_modules/rxjs/dist/esm5/internal/util/isObservable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>isObservable});var _Observable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_isFunction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");function isObservable(obj){return!!obj&&(obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.c||(0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.T)(obj.lift)&&(0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.T)(obj.subscribe))}}}]);