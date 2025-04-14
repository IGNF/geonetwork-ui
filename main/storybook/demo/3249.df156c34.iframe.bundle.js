"use strict";(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[3249],{"./node_modules/@camptocamp/ogc-client/dist/wmts/ol-tilegrid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{buildOpenLayersTileGrid:()=>buildOpenLayersTileGrid});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),TileGrid=__webpack_require__("./node_modules/ol/tilegrid/TileGrid.js"),proj=__webpack_require__("./node_modules/ol/proj.js");class WMTSTileGrid extends TileGrid.A{constructor(options){super({extent:options.extent,origin:options.origin,origins:options.origins,resolutions:options.resolutions,tileSize:options.tileSize,tileSizes:options.tileSizes,sizes:options.sizes}),this.matrixIds_=options.matrixIds}getMatrixId(z){return this.matrixIds_[z]}getMatrixIds(){return this.matrixIds_}}var proj4=__webpack_require__("./node_modules/ol/proj/proj4.js"),lib=__webpack_require__("./node_modules/proj4/lib/index.js");function buildOpenLayersTileGrid(_x,_x2){return _buildOpenLayersTileGrid.apply(this,arguments)}function _buildOpenLayersTileGrid(){return(_buildOpenLayersTileGrid=(0,asyncToGenerator.A)((function*(matrixSet,limits){let projection=(0,proj.Jt)(matrixSet.crs);if(projection||(projection=yield(0,proj4.N1)(matrixSet.crs)),!projection)throw new Error(`[ogc-client] could not create OpenLayers tile grid, the following projection is unknown: ${matrixSet.crs}`);return function createFromCapabilitiesMatrixSet(matrixSet,extent,matrixLimits){const resolutions=[],matrixIds=[],origins=[],tileSizes=[],sizes=[];matrixLimits=void 0!==matrixLimits?matrixLimits:[];const code=matrixSet.SupportedCRS,projection=(0,proj.Jt)(code),metersPerUnit=projection.getMetersPerUnit(),switchOriginXY="ne"==projection.getAxisOrientation().substr(0,2);return matrixSet.TileMatrix.sort((function(a,b){return b.ScaleDenominator-a.ScaleDenominator})),matrixSet.TileMatrix.forEach((function(elt){let matrixAvailable;if(matrixAvailable=!(matrixLimits.length>0)||matrixLimits.find((function(elt_ml){return elt.Identifier==elt_ml.TileMatrix||!elt.Identifier.includes(":")&&matrixSet.Identifier+":"+elt.Identifier===elt_ml.TileMatrix})),matrixAvailable){matrixIds.push(elt.Identifier);const resolution=28e-5*elt.ScaleDenominator/metersPerUnit,tileWidth=elt.TileWidth,tileHeight=elt.TileHeight;switchOriginXY?origins.push([elt.TopLeftCorner[1],elt.TopLeftCorner[0]]):origins.push(elt.TopLeftCorner),resolutions.push(resolution),tileSizes.push(tileWidth==tileHeight?tileWidth:[tileWidth,tileHeight]),sizes.push([elt.MatrixWidth,elt.MatrixHeight])}})),new WMTSTileGrid({extent,origins,resolutions,matrixIds,tileSizes,sizes})}({SupportedCRS:projection,TileMatrix:matrixSet.tileMatrices.map((tileMatrix=>({Identifier:tileMatrix.identifier,ScaleDenominator:tileMatrix.scaleDenominator,TopLeftCorner:tileMatrix.topLeft,TileWidth:tileMatrix.tileWidth,TileHeight:tileMatrix.tileHeight,MatrixWidth:tileMatrix.matrixWidth,MatrixHeight:tileMatrix.matrixHeight})))},null,limits.map((limit=>({TileMatrix:limit.tileMatrix}))))}))).apply(this,arguments)}(0,proj4.kz)(lib.A)}}]);