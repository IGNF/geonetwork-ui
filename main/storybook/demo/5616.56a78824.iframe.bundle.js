(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[5616],{"./libs/feature/dataviz/src/lib/service/data.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>DataService});var _home_runner_work_geonetwork_ui_geonetwork_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@biesbjerg/ngx-translate-extract-marker/fesm5/biesbjerg-ngx-translate-extract-marker.js"),_camptocamp_ogc_client__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@camptocamp/ogc-client/dist/index.js"),_geonetwork_ui_data_fetcher__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/util/data-fetcher/src/index.ts"),_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/util/shared/src/index.ts"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),rxjs__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/throwError.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js");(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.J)("wfs.unreachable.cors"),(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.J)("wfs.unreachable.http"),(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.J)("wfs.unreachable.unknown"),(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.J)("wfs.featuretype.notfound"),(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.J)("wfs.geojsongml.notsupported"),(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.J)("ogc.unreachable.unknown"),(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.J)("dataset.error.network"),(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.J)("dataset.error.http"),(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.J)("dataset.error.parse"),(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.J)("dataset.error.unsupportedType"),(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.J)("dataset.error.unknown");let DataService=class DataService{constructor(proxy){this.proxy=proxy}getDownloadUrlsFromWfs(wfsUrl,featureTypeName){return(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.D)(new _camptocamp_ogc_client__WEBPACK_IMPORTED_MODULE_0__.VR(this.proxy.getProxiedUrl(wfsUrl)).isReady()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.K)((error=>{if(error instanceof Error)throw new Error("wfs.unreachable.unknown");if("network"===error.type)throw new Error("wfs.unreachable.cors");if("http"===error.type)throw new Error("wfs.unreachable.http");if("parse"===error.type)throw new Error("wfs.unreachable.parse");throw"unsupportedType"===error.type?new Error("wfs.unreachable.unsupportedType"):new Error("wfs.unreachable.unknown")})),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)((endpoint=>{const featureTypes=endpoint.getFeatureTypes(),featureType=endpoint.getFeatureTypeSummary(1!==featureTypes.length||featureTypeName?featureTypeName:featureTypes[0].name);if(!featureType)throw new Error("wfs.featuretype.notfound");return{all:featureType.outputFormats.reduce(((prev,curr)=>({...prev,[curr]:endpoint.getFeatureUrl(featureType.name,{outputFormat:curr})})),{}),geojson:endpoint.supportsJson(featureType.name)?endpoint.getFeatureUrl(featureType.name,{asJson:!0,outputCrs:"EPSG:4326"}):null,gml:featureType.outputFormats.find((f=>f.toLowerCase().includes("gml")))&&("EPSG:4326"===featureType.defaultCrs||featureType.otherCrs?.includes("EPSG:4326"))?{featureUrl:endpoint.getFeatureUrl(featureType.name,{outputFormat:featureType.outputFormats.find((f=>f.toLowerCase().includes("gml"))),outputCrs:"EPSG:4326"}),namespace:featureType.name,wfsVersion:endpoint.getVersion()}:null}})))}getDownloadUrlFromEsriRest(apiUrl,format){return this.proxy.getProxiedUrl(`${apiUrl}/query?f=${format}&where=1=1&outFields=*`)}getDownloadLinksFromWfs(wfsLink){return this.getDownloadUrlsFromWfs(wfsLink.url.toString(),wfsLink.name).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)((urls=>urls.all)),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)((urls=>Object.keys(urls).map((format=>({...wfsLink,type:"download",url:new URL(urls[format]),mimeType:(0,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__._N)((0,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__.mJ)(format))}))))))}getDownloadLinksFromOgcApiFeatures(ogcApiLink){var _this=this;return(0,_home_runner_work_geonetwork_ui_geonetwork_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.Z)((function*(){const collectionInfo=yield _this.getDownloadUrlsFromOgcApi(ogcApiLink.url.href);return Object.keys(collectionInfo.bulkDownloadLinks).map((downloadLink=>({...ogcApiLink,type:"download",url:new URL(collectionInfo.bulkDownloadLinks[downloadLink]),mimeType:(0,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__._N)((0,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__.mJ)(downloadLink))})))}))()}getDownloadUrlsFromOgcApi(url){var _this2=this;return(0,_home_runner_work_geonetwork_ui_geonetwork_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.Z)((function*(){const endpoint=new _camptocamp_ogc_client__WEBPACK_IMPORTED_MODULE_0__.ld(_this2.proxy.getProxiedUrl(url));return yield endpoint.allCollections.then((collections=>endpoint.getCollectionInfo(collections[0].name))).catch((error=>{throw new Error("ogc.unreachable.unknown")}))}))()}getItemsFromOgcApi(url){var _this3=this;return(0,_home_runner_work_geonetwork_ui_geonetwork_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.Z)((function*(){const endpoint=new _camptocamp_ogc_client__WEBPACK_IMPORTED_MODULE_0__.ld(_this3.proxy.getProxiedUrl(url));return yield endpoint.featureCollections.then((collections=>collections.length?endpoint.getCollectionItem(collections[0],"1"):null)).catch((error=>{throw new Error("ogc.unreachable.unknown")}))}))()}getDownloadLinksFromEsriRest(esriRestLink){return["json","geojson"].map((format=>({...esriRestLink,url:new URL(this.getDownloadUrlFromEsriRest(esriRestLink.url.toString(),format)),mimeType:(0,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__._N)((0,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__.mJ)(format))})))}readAsGeoJson(link){return this.getDataset(link).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.w)((dataset=>dataset.selectAll().read())),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)((features=>({type:"FeatureCollection",features}))))}getDataset(link){if("service"===link.type&&"wfs"===link.accessServiceProtocol)return this.getDownloadUrlsFromWfs(link.url.toString(),link.name).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.w)((urls=>urls.geojson?(0,_geonetwork_ui_data_fetcher__WEBPACK_IMPORTED_MODULE_1__.Yo)(urls.geojson,"geojson"):urls.gml?(0,_geonetwork_ui_data_fetcher__WEBPACK_IMPORTED_MODULE_1__.Yo)(urls.gml.featureUrl,"gml",{namespace:urls.gml.namespace,wfsVersion:urls.gml.wfsVersion}):null)),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.b)((url=>{if(null===url)throw new Error("wfs.geojsongml.notsupported")})));if("download"===link.type){const linkProxifiedUrl=this.proxy.getProxiedUrl(link.url.toString()),format=(0,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__.TG)(link),supportedType=_geonetwork_ui_data_fetcher__WEBPACK_IMPORTED_MODULE_1__.N3.indexOf(format)>-1?format:void 0;return(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.D)((0,_geonetwork_ui_data_fetcher__WEBPACK_IMPORTED_MODULE_1__.Yo)(linkProxifiedUrl,supportedType)).pipe()}if("service"===link.type&&"esriRest"===link.accessServiceProtocol){const url=this.getDownloadUrlFromEsriRest(link.url.toString(),"geojson");return(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.D)((0,_geonetwork_ui_data_fetcher__WEBPACK_IMPORTED_MODULE_1__.Yo)(url,"geojson")).pipe()}return"service"===link.type&&"ogcFeatures"===link.accessServiceProtocol?(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.D)(this.getDownloadUrlsFromOgcApi(link.url.href)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.w)((collectionInfo=>{const geojsonUrl=collectionInfo.jsonDownloadLink;return(0,_geonetwork_ui_data_fetcher__WEBPACK_IMPORTED_MODULE_1__.Yo)(geojsonUrl,"geojson")})),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.b)((url=>{if(null===url)throw new Error("wfs.geojsongml.notsupported")}))):(0,rxjs__WEBPACK_IMPORTED_MODULE_10__._)((()=>"protocol not supported"))}static#_=this.ctorParameters=()=>[{type:_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__.yn}]};DataService=(0,tslib__WEBPACK_IMPORTED_MODULE_11__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({providedIn:"root"}),(0,tslib__WEBPACK_IMPORTED_MODULE_11__.w6)("design:paramtypes",[_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__.yn])],DataService)},"./libs/ui/dataviz/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{xH:()=>chart_component.x,ac:()=>table_component.a,CP:()=>ui_dataviz_module.C,mO:()=>someHabTableItemFixture,Cx:()=>tableItemFixture});var ui_dataviz_module=__webpack_require__("./libs/ui/dataviz/src/lib/ui-dataviz.module.ts"),chart_component=__webpack_require__("./libs/ui/dataviz/src/lib/chart/chart.component.ts"),table_component=__webpack_require__("./libs/ui/dataviz/src/lib/table/table.component.ts");const tableItemFixture=()=>[{name:"name 1",id:"id 1",age:15},{name:"name 2",id:"id 2",age:10},{name:"name 3",id:"id 3",age:55}],someHabTableItemFixture=()=>[{name:"France",id:"1",pop:505e5},{name:"Italy",id:"2",pop:155878789655},{name:"UK",id:"3",pop:31522456},{name:"US",id:"4",pop:3215448888}];__webpack_require__("./libs/ui/dataviz/src/lib/figure/figure.component.ts")},"./libs/ui/dataviz/src/lib/chart/chart.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>ChartComponent});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var chart_componentngResource=__webpack_require__("./libs/ui/dataviz/src/lib/chart/chart.component.css?ngResource"),chart_componentngResource_default=__webpack_require__.n(chart_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),chart=__webpack_require__("./node_modules/chart.js/dist/chart.js");chart.kL.register(chart.vn,chart.ZL,chart.uw,chart.f$,chart.ST,chart.jn,chart.od,chart.tt,chart.qi,chart.ho,chart.u,chart.wL,chart.De);let ChartComponent=class ChartComponent{constructor(){this.type="bar",this.dataRaw=[],this.ready=new Promise((resolve=>this.setReady=resolve))}set data(value){this.dataRaw=value}ngAfterViewInit(){this.setReady()}ngOnChanges(){this.refreshChart()}createChart(){return new chart.kL(this.canvasRef.nativeElement,{type:this.getChartType(),data:this.getChartData(),options:this.getOptions()})}getChartData(){const data=this.handlesSecondaryValue()?this.getDataProxy(this.valueProperty,this.secondaryValueProperty):this.getDataProxy(this.valueProperty);return{labels:this.getDataProxy(this.labelProperty),datasets:[{label:this.valueProperty,data}]}}getOptions(){const truncateString=this.truncateString,options={maintainAspectRatio:!1,parsing:{},scales:{x:{ticks:{callback:function(value){return truncateString(this.getLabelForValue(Number(value)),30)}}},y:{ticks:{callback:function(value){return truncateString(this.getLabelForValue(Number(value)),30)}}}}};switch(this.type){case"line-interpolated":return{...options,elements:{line:{cubicInterpolationMode:"monotone"}}};case"bar-horizontal":return{...options,indexAxis:"y"};case"pie":return{...options,scales:{},plugins:{legend:{position:"left",align:"start"}}};default:return options}}truncateString(str,truncateLength){return str?str.length<=truncateLength?str:`${str.slice(0,truncateLength)}...`:""}getChartType(){switch(this.type){case"bar":case"bar-horizontal":return"bar";case"line":case"line-interpolated":return"line";case"scatter":case"pie":return this.type}}handlesSecondaryValue(){return this.secondaryValueProperty&&"scatter"===this.type}getDataProxy(property,secondaryProperty){return new Proxy(this.dataRaw,{get:(target,index)=>"string"!=typeof index||Number.isNaN(parseInt(index))||void 0===target[index]?target[index]:secondaryProperty?{y:target[index][property],x:target[index][secondaryProperty]}:target[index][property]})}refreshChart(){var _this=this;return(0,asyncToGenerator.Z)((function*(){_this.chart&&(_this.chart.destroy(),_this.chart=null),yield _this.ready,_this.chart=_this.createChart()}))()}static#_=this.propDecorators={data:[{type:core.Input}],labelProperty:[{type:core.Input}],valueProperty:[{type:core.Input}],secondaryValueProperty:[{type:core.Input}],type:[{type:core.Input}],canvasRef:[{type:core.ViewChild,args:["chartCanvas"]}]}};ChartComponent=(0,tslib_es6.gn)([(0,core.Component)({standalone:!0,selector:"gn-ui-chart",template:'<div class="h-full flex justify-center items-center p-1">\n  <canvas #chartCanvas></canvas>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[chart_componentngResource_default()]})],ChartComponent)},"./libs/ui/dataviz/src/lib/figure/figure.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>FigureComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var figure_componentngResource=__webpack_require__("./libs/ui/dataviz/src/lib/figure/figure.component.css?ngResource"),figure_componentngResource_default=__webpack_require__.n(figure_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FigureComponent=class FigureComponent{constructor(){this.unit="",this.color="primary"}get textClass(){return"primary"===this.color?"text-primary":"text-secondary"}get bgClass(){return"primary"===this.color?"bg-primary-white":"bg-secondary-white"}static#_=this.propDecorators={icon:[{type:core.Input}],title:[{type:core.Input}],figure:[{type:core.Input}],unit:[{type:core.Input}],color:[{type:core.Input}]}};FigureComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-figure",template:'<div\n  class="flex flex-row justify-start items-center overflow-hidden"\n  data-test="figureTitle"\n  [title]="\n    figure.toString() +\n    \' \' +\n    unit +\n    \' \' +\n    (title | translate: { count: figure })\n  "\n>\n  <mat-icon\n    class="material-symbols-outlined {{ bgClass }} {{\n      textClass\n    }} text-[1.875em] rounded-full mr-[0.55em] p-[0.6em] w-[2.2em] h-[2.2em] shrink-0"\n    style="width: 2.2em; height: 2.2em"\n  >\n    {{ icon }}\n  </mat-icon>\n  <div class="shrink overflow-hidden">\n    <div class="figure-block text-[1.5em] text-black">\n      <span class="figure font-medium mr-[0.3em]" data-test="figure">{{\n        figure\n      }}</span>\n      <span class="unit text-[0.665em]">{{ unit }}</span>\n    </div>\n    <div translate class="title truncate" [translateParams]="{ count: figure }">\n      {{ title }}\n    </div>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[figure_componentngResource_default()]})],FigureComponent)},"./libs/ui/dataviz/src/lib/table/table.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>TableComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var table_componentngResource=__webpack_require__("./libs/ui/dataviz/src/lib/table/table.component.css?ngResource"),table_componentngResource_default=__webpack_require__.n(table_componentngResource),scrolling=__webpack_require__("./node_modules/@angular/cdk/fesm2022/scrolling.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),sort=__webpack_require__("./node_modules/@angular/material/fesm2022/sort.mjs"),table=__webpack_require__("./node_modules/@angular/material/fesm2022/table.mjs"),ng_table_virtual_scroll=__webpack_require__("./node_modules/ng-table-virtual-scroll/fesm2020/ng-table-virtual-scroll.mjs"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs");let TableComponent=class TableComponent{set data(value){this.dataSource=new ng_table_virtual_scroll.kL(value),this.dataSource.sort=this.sort,this.properties=Array.isArray(value)&&value.length?Object.keys(value[0]):[],this.count=value.length}constructor(eltRef){this.eltRef=eltRef,this.selected=new core.EventEmitter}ngAfterViewInit(){this.headerHeight=this.eltRef.nativeElement.querySelector("thead").offsetHeight}scrollToItem(itemId){const row=this.eltRef.nativeElement.querySelector(`#${this.getRowEltId(itemId)}`);this.eltRef.nativeElement.scrollTop=row.offsetTop-this.headerHeight}getRowEltId(id){return"table-item-"+id}static#_=this.ctorParameters=()=>[{type:core.ElementRef}];static#_2=this.propDecorators={data:[{type:core.Input}],activeId:[{type:core.Input}],selected:[{type:core.Output}],sort:[{type:core.ViewChild,args:[sort.YE,{static:!0}]}]}};TableComponent=(0,tslib_es6.gn)([(0,core.Component)({standalone:!0,imports:[table.p0,sort.JX,ng_table_virtual_scroll.oJ,scrolling.Cl,common.NgForOf,ngx_translate_core.aw],selector:"gn-ui-table",template:'<div class="border border-gray-300 rounded-lg overflow-hidden bg-white h-full">\n  <cdk-virtual-scroll-viewport\n    tvsItemSize="48"\n    headerHeight="56"\n    style="height: calc(100% - 37px)"\n  >\n    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8" matSort>\n      <ng-container *ngFor="let prop of properties" [matColumnDef]="prop">\n        <th\n          mat-header-cell\n          *matHeaderCellDef\n          mat-sort-header\n          class="text-sm text-black bg-white"\n        >\n          {{ prop }}\n        </th>\n        <td\n          mat-cell\n          *matCellDef="let element"\n          class="whitespace-nowrap pr-1 truncate"\n        >\n          {{ element[prop] }}\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef="properties; sticky: true"></tr>\n      <tr\n        [id]="getRowEltId(row.id)"\n        mat-row\n        *matRowDef="let row; columns: properties"\n        (click)="selected.emit(row)"\n        [class.active]="row.id === activeId"\n      ></tr>\n    </table>\n  </cdk-virtual-scroll-viewport>\n  <div class="text-gray-900 border-t border-gray-300 px-4 py-2 text-sm">\n    <span class="count font-extrabold text-primary">{{ count }}</span\n    >&nbsp;<span translate>table.object.count</span>.\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[table_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],TableComponent)},"./libs/ui/dataviz/src/lib/ui-dataviz.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>UiDatavizModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_figure_figure_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/dataviz/src/lib/figure/figure.component.ts"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs");let UiDatavizModule=class UiDatavizModule{};UiDatavizModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.Ps,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.aw.forChild()],declarations:[_figure_figure_component__WEBPACK_IMPORTED_MODULE_0__.D],exports:[_figure_figure_component__WEBPACK_IMPORTED_MODULE_0__.D]})],UiDatavizModule)},"./libs/util/data-fetcher/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kp:()=>model_FetchError,N3:()=>SupportedTypes,fW:()=>getJsonDataItemsProxy,Yo:()=>openDataset});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");class model_FetchError{constructor(type,info,httpStatus=0){this.type=type,this.info=info,this.httpStatus=httpStatus,this.stack=null,this.message=`An error happened in the data fetcher, type: ${type}, info: ${info}`}static http(code){return new model_FetchError("http","",code)}static corsOrNetwork(message){return new model_FetchError("network",message,0)}static parsingFailed(info){return new model_FetchError("parse",info,0)}static unsupportedType(mimeType){return new model_FetchError("unsupportedType",mimeType,0)}static unknownType(){return new model_FetchError("unknown","",0)}}const SupportedTypes=["csv","json","geojson","excel","gml"],AllMimeTypes={csv:["text/csv","application/csv"],json:["application/json"],geojson:["application/geo+json","application/vnd.geo+json"],excel:["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],gml:["application/gml+xml"]};var papaparse_min=__webpack_require__("./node_modules/papaparse/papaparse.min.js"),dist=__webpack_require__("./node_modules/@camptocamp/ogc-client/dist/index.js"),parse=__webpack_require__("./node_modules/date-fns/esm/parse/index.js"),parseISO=__webpack_require__("./node_modules/date-fns/esm/parseISO/index.js");function _inferDatasetType(){return(_inferDatasetType=(0,asyncToGenerator.Z)((function*(url,typeHint){const fileExtensionMatches=new URL(url,"undefined"!=typeof window?window.location.toString():void 0).pathname.match(/\.(.+)$/),fileExtension=fileExtensionMatches&&fileExtensionMatches.length?fileExtensionMatches[1].toLowerCase():null;if(typeHint)return Promise.resolve(typeHint);const headers=yield function fetchHeaders(url){return(0,dist.Td)(url,"HEAD").catch((error=>{throw model_FetchError.corsOrNetwork(error.message)})).then((response=>{if(!response.ok)throw model_FetchError.http(response.status);return function headers_parseHeaders(httpHeaders){const result={};if(httpHeaders.has("Content-Type")){result.mimeType=httpHeaders.get("Content-Type").split(";")[0];const supported=SupportedTypes.filter((type=>AllMimeTypes[type].indexOf(result.mimeType)>-1))[0]||null;null!==supported&&(result.supportedType=supported)}if(httpHeaders.has("Content-Length")&&(result.fileSizeBytes=parseInt(httpHeaders.get("Content-Length"))),httpHeaders.has("Last-Modified")){const date=new Date(httpHeaders.get("Last-Modified"));Number.isNaN(date.valueOf())?result.lastUpdateInvalid=!0:result.lastUpdate=date}return result}(response.headers)}))}(url);if("supportedType"in headers)return headers.supportedType;if(SupportedTypes.indexOf(fileExtension)>-1)return fileExtension;throw"mimeType"in headers?model_FetchError.unsupportedType(headers.mimeType):model_FetchError.unknownType()}))).apply(this,arguments)}function fetchDataAsText(url){return(0,dist.YT)((()=>(0,dist.Td)(url).catch((error=>{throw model_FetchError.corsOrNetwork(error.message)})).then(function(){var _ref=(0,asyncToGenerator.Z)((function*(response){if(!response.ok)throw model_FetchError.http(response.status);return response.text()}));return function(_x3){return _ref.apply(this,arguments)}}())),url,"asText")}function tryParseDate(input){function tryFormat(format){const parsed=(0,parse.Z)(input,format,new Date);return isNaN(parsed.getDate())?null:parsed}return function tryIso(){const parsed=(0,parseISO.Z)(input);return isNaN(parsed.getDate())?null:parsed}()||tryFormat("dd/MM/yyyy")||tryFormat("dd.MM.yyyy")||tryFormat("MM/dd/yyyy")||null}function tryParseNumber(input){if(isNaN(input))return null;const parsed=parseFloat(input);return isNaN(parsed)?null:parsed}function jsonToGeojsonFeature(object){const{id,properties}=Object.keys(object).map((property=>property||"unknown")).reduce(((prev,curr)=>curr.toLowerCase().endsWith("id")?{...prev,id:object[curr]}:{...prev,properties:{...prev.properties,[curr]:object[curr]}}),{id:void 0,properties:{}});return{type:"Feature",geometry:null,properties,...void 0!==id&&{id}}}const SAMPLE_SIZE=20;function processItemProperties(items,inferTypes=!1){const foundFields={};for(let i=0,ii=Math.min(SAMPLE_SIZE,items.length);i<ii;i++){const item=items[i],fields=Object.keys(item.properties);for(const field of fields){field in foundFields||(foundFields[field]={label:field,name:field,type:null});const value=item.properties[field],info=foundFields[field];if(void 0===value||""===value||null===value)continue;if(!inferTypes){null===info.type&&"number"==typeof value?info.type="number":"number"===info.type&&"number"!=typeof value&&(info.type="string");continue}const parsedNumber=tryParseNumber(value);if(null===info.type&&null!==parsedNumber){info.type="number";continue}if("number"===info.type&&null===parsedNumber){info.type="string";continue}const parsedDate=tryParseDate(value);null===info.type&&null!==parsedDate?info.type="date":"date"===info.type&&null===parsedDate&&(info.type="string")}}const properties=[],mutators={};for(const field in foundFields){const info=foundFields[field];"number"===info.type?mutators[field]=tryParseNumber:"date"===info.type&&(mutators[field]=tryParseDate),properties.push({...info,type:info.type||"string"})}return inferTypes&&function mutateProperties(items,mutators){const mutatorKeys=Object.keys(mutators);for(let i=0,ii=items.length;i<ii;i++){const item=items[i];for(const mutatorField of mutatorKeys)mutatorField in item.properties&&(item.properties[mutatorField]=mutators[mutatorField](item.properties[mutatorField]))}return items}(items,mutators),{items,properties}}function getJsonDataItemsProxy(items){return new Proxy(items,{get:(target,p)=>"string"==typeof p&&!Number.isNaN(parseInt(p))&&target[p]?.properties?target[p].properties:target[p],set(){throw new Error("This object is read-only")}})}class BaseReader{constructor(url){this.url=url,this.selected=null,this.groupedBy=null,this.aggregations=null,this.filter=null,this.sort=null,this.startIndex=null,this.count=null}load(){throw new Error("not implemented")}get properties(){throw new Error("not implemented")}get info(){throw new Error("not implemented")}read(){throw new Error("not implemented")}selectAll(){return this.groupedBy=null,this.aggregations=null,this.selected=null,this.filter=null,this.startIndex=null,this.count=null,this}select(...selectedFields){return this.selected=selectedFields,this.aggregations=null,this.groupedBy=null,this}groupBy(...groupBy){return this.groupedBy=groupBy,this.selected=null,this}aggregate(...aggregations){return this.aggregations=aggregations,this}where(filter){return this.filter=filter,this}orderBy(...fieldSorts){return this.sort=fieldSorts,this}limit(startIndex,count){return this.startIndex=startIndex,this.count=count,this}}function filterToSql(filter){const operator=filter[0],args=filter.slice(1);function valueToSql(value){return"number"==typeof value?value:`'${value}'`}switch(operator){case"<":case"<=":case">":case">=":case"=":case"!=":case"like":return`[${args[0]}] ${operator.toUpperCase()} ${valueToSql(args[1])}`;case"in":{const values=args.slice(1);return`[${args[0]}] IN (${values.map(valueToSql).join(", ")})`}case"and":case"or":return`(${args.map(filterToSql).join(` ${operator.toUpperCase()} `)})`;case"not":return`NOT (${filterToSql(args[0])})`}throw new Error(`Could not generate SQL query, operator not recognized: ${operator}`)}function aggregationToSql(aggregation){const operation=aggregation[0],field=aggregation[1];switch(operation){case"average":return`AVG([${field}]) as [average(${field})]`;case"sum":case"max":case"min":return`${operation.toUpperCase()}([${field}]) as [${operation}(${field})]`;case"count":return"COUNT(*) as [count()]"}}class BaseFileReader extends BaseReader{getData(){throw new Error("not implemented")}load(){this.parseResult_=this.getData()}get properties(){return this.parseResult_.then((result=>result.properties))}get info(){return this.parseResult_.then((result=>({itemsCount:result.items.length})))}read(){var _this=this;return(0,asyncToGenerator.Z)((function*(){const items=(yield _this.parseResult_).items;if(null==_this.groupedBy&&null==_this.aggregations&&null==_this.selected&&null==_this.sort&&null==_this.filter&&null==_this.startIndex&&null==_this.count)return items;const jsonItems=getJsonDataItemsProxy(items),query=function generateSqlQuery(selected=null,filter=null,sort=null,startIndex=null,count=null,groupBy=null,aggregations=null){let sqlSelect="SELECT *",sqlOrderBy="",sqlWhere="",sqlLimit="",sqlGroupBy="";if(null!==selected&&(sqlSelect=`SELECT ${selected.map((name=>`[${name}]`)).join(", ")}`),null!==filter&&(sqlWhere=` WHERE ${filterToSql(filter)}`),sort?.length&&(sqlOrderBy=` ORDER BY ${sort.map((sort=>`[${sort[1]}] ${sort[0].toUpperCase()}`)).join(", ")}`),null!==startIndex&&null!==count&&(sqlLimit=` LIMIT ${count} OFFSET ${startIndex}`),null!==groupBy&&null!==aggregations){sqlSelect=`SELECT ${aggregations.map(aggregationToSql).join(", ")}`;const groupedByDistinct=groupBy.filter((group=>"distinct"===group[0])),sqlGroupByFields=groupedByDistinct.map((group=>`[${group[1]}]`)).join(", "),sqlGroupBySelect=groupedByDistinct.map((group=>`[${group[1]}] as [distinct(${group[1]})]`)).join(", ");sqlGroupByFields&&sqlGroupBySelect&&(sqlGroupBy=` GROUP BY ${sqlGroupByFields}`,sqlSelect+=`, ${sqlGroupBySelect}`)}return sqlSelect+" FROM ?"+sqlGroupBy+sqlOrderBy+sqlWhere+sqlLimit}(_this.selected,_this.filter,_this.sort,_this.startIndex,_this.count,_this.groupedBy,_this.aggregations);return(yield __webpack_require__.e(3098).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/alasql/dist/alasql.min.js",23)).then((module=>module.default(query,[jsonItems])))).map(jsonToGeojsonFeature)}))()}}function parseCsv(text){let delimiter;try{const header=text.split("\n")[0];delimiter=papaparse_min.parse(header,{header:!1}).meta.delimiter}catch(e){throw new Error("CSV parsing failed: the delimiter could not be guessed")}const parsed=papaparse_min.parse(text,{header:!0,skipEmptyLines:!0,delimiter});if(parsed.errors.length)throw new Error("CSV parsing failed for the following reasons:\n"+parsed.errors.map((error=>`* ${error.message} at row ${error.row}, column ${error.index}`)).join("\n"));return processItemProperties(parsed.data.map(jsonToGeojsonFeature),!0)}class CsvReader extends BaseFileReader{getData(){return fetchDataAsText(this.url).then(parseCsv)}}function parseJson(text){const parsed=JSON.parse(text);if(!Array.isArray(parsed))throw new Error("Could not parse JSON, expected an array at root level");return processItemProperties(parsed.map(jsonToGeojsonFeature))}class JsonReader extends BaseFileReader{getData(){return fetchDataAsText(this.url).then(parseJson)}}function parseGeojson(text){const parsed=JSON.parse(text),features="FeatureCollection"===parsed.type?parsed.features:parsed;if(!Array.isArray(features))throw new Error("Could not parse GeoJSON, expected a features collection or an array of features at root level");return processItemProperties(features)}class GeojsonReader extends BaseFileReader{getData(){return fetchDataAsText(this.url).then(parseGeojson)}}function parseExcel(buffer){return __webpack_require__.e(4235).then(__webpack_require__.bind(__webpack_require__,"./node_modules/xlsx/xlsx.mjs")).then((({read,utils})=>{const workbook=read(buffer),sheet=workbook.Sheets[workbook.SheetNames[0]];let json=utils.sheet_to_json(sheet);return json.length||(json=[]),processItemProperties(json.map(jsonToGeojsonFeature),!0)}))}class ExcelReader extends BaseFileReader{getData(){return function fetchDataAsArrayBuffer(url){return(0,dist.YT)((()=>(0,dist.Td)(url).catch((error=>{throw model_FetchError.corsOrNetwork(error.message)})).then(function(){var _ref2=(0,asyncToGenerator.Z)((function*(response){if(!response.ok)throw model_FetchError.http(response.status);return Array.from(new Uint8Array(yield response.arrayBuffer()))}));return function(_x4){return _ref2.apply(this,arguments)}}())),url,"asArrayBuffer").then((array=>new Uint8Array(array).buffer))}(this.url).then(parseExcel)}}var WFS=__webpack_require__("./node_modules/ol/format/WFS.js"),GeoJSON=__webpack_require__("./node_modules/ol/format/GeoJSON.js");class GmlReader extends BaseFileReader{constructor(url,namespace,version){super(url),this.namespace=namespace,this.version=version}getData(){return fetchDataAsText(this.url).then((text=>function parseGml(text,namespace,version){const splittedNamespace=namespace.split(":"),match=new RegExp(`xmlns:${splittedNamespace[0]}=["']([^'"]*)["']`).exec(text);if(match&&match.length>=2){const wf=new WFS.Z({featureNS:match[1],featureType:splittedNamespace[1],version});let features;try{features=wf.readFeatures(text)}catch(e){throw Error("Couldn't parse WFS with GML features")}return processItemProperties((new GeoJSON.Z).writeFeaturesObject(features).features,!0)}throw Error("Couldn't retrieve namespace url")}(text,this.namespace,this.version)))}}function openDataset(_x,_x2,_x3){return _openDataset.apply(this,arguments)}function _openDataset(){return _openDataset=(0,asyncToGenerator.Z)((function*(url,typeHint,options){const fileType=yield function inferDatasetType(_x,_x2){return _inferDatasetType.apply(this,arguments)}(url,typeHint);let reader;try{switch(fileType){case"csv":reader=new CsvReader(url);break;case"json":reader=new JsonReader(url);break;case"geojson":reader=new GeojsonReader(url);break;case"excel":reader=new ExcelReader(url);break;case"gml":reader=new GmlReader(url,options.namespace,options.wfsVersion)}return reader.load(),reader}catch(e){throw model_FetchError.parsingFailed(e.message)}})),_openDataset.apply(this,arguments)}},"./libs/ui/dataviz/src/lib/chart/chart.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/dataviz/src/lib/figure/figure.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inherit;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/dataviz/src/lib/table/table.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"table {\n  width: 100%;\n  background: white;\n}\nth.mat-mdc-header-cell,\ntd.mat-mdc-cell,\ntd.mat-mdc-footer-cell {\n  padding-right: 20px;\n}\ntr.mat-mdc-row,\ntr.mat-mdc-footer-row {\n  height: 36px;\n}\ntr:hover {\n  background: whitesmoke;\n}\ntr.mat-mdc-header-row {\n  height: 48px;\n}\n\n[mat-header-cell] {\n  color: #0000008a;\n  font-size: 12px;\n  font-weight: 500;\n}\ntr {\n  cursor: pointer;\n}\n\n.active .mat-mdc-cell {\n  color: var(--color-primary);\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);