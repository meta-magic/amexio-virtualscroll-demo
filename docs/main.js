(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-nav [enable-more-mode]=\"true\" [enable-side-nav-position]=\"true\" [title]=\"'Movies'\" [logo]=\"'https://cedemo.amexio.org/assets/images/a_Logo.png'\">\n    <amexio-nav-item position-right [title]=\"'TV'\" [icon]=\"'fa fa-television fa-fw fa-lg'\" [type]=\"'link'\" style=\"cursor: pointer;\">\n    </amexio-nav-item>\n    <amexio-nav-item position-right [title]=\"'Movies'\" [icon]=\"'fa fa-film fa-fw fa-lg'\" [type]=\"'link'\" style=\"cursor: pointer;\">\n    </amexio-nav-item>\n    <amexio-nav-item position-right [title]=\"'Sports'\" [icon]=\"'fa fa-gamepad fa-fw fa-lg'\" [type]=\"'link'\" style=\"cursor: pointer;\">\n    </amexio-nav-item>\n    <amexio-nav-item position-right [title]=\"'News'\" [icon]=\"'fa fa-newspaper-o fa-fw fa-lg'\" [type]=\"'link'\" style=\"cursor: pointer;\">\n    </amexio-nav-item>\n    <amexio-nav-item position-right [title]=\"'Premium'\" [icon]=\"'fa fa-user-secret fa-fw fa-lg'\" [type]=\"'link'\" style=\"cursor: pointer;\">\n    </amexio-nav-item>\n</amexio-nav>\n\n<br/><br/><br/><br/>\n<div style=\"margin:10px;height:100%\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _simplescroller_simplescroller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simplescroller/simplescroller.component */ "./src/app/simplescroller/simplescroller.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _multicolumnscrolller_multicolumnscroller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./multicolumnscrolller/multicolumnscroller.component */ "./src/app/multicolumnscrolller/multicolumnscroller.component.ts");
/* harmony import */ var src_app_scrollerwithcarousel_scrollerwithcarousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/scrollerwithcarousel/scrollerwithcarousel.component */ "./src/app/scrollerwithcarousel/scrollerwithcarousel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', redirectTo: 'sc', pathMatch: 'full' },
    { path: 'svs', component: _simplescroller_simplescroller_component__WEBPACK_IMPORTED_MODULE_5__["SimpleScrollerComponent"] },
    { path: 'mvs', component: _multicolumnscrolller_multicolumnscroller_component__WEBPACK_IMPORTED_MODULE_8__["MultiColumnScrollerComponent"] },
    {
        path: 'sc', component: src_app_scrollerwithcarousel_scrollerwithcarousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselScrollerComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _simplescroller_simplescroller_component__WEBPACK_IMPORTED_MODULE_5__["SimpleScrollerComponent"], _multicolumnscrolller_multicolumnscroller_component__WEBPACK_IMPORTED_MODULE_8__["MultiColumnScrollerComponent"], src_app_scrollerwithcarousel_scrollerwithcarousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselScrollerComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioWidgetModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/multicolumnscrolller/multicolumnscroller.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/multicolumnscrolller/multicolumnscroller.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-virtual-scroller *ngIf=\"localData2d\" [item-size]=\"150\" [data]=\"localData2d.items\">\n    <ng-template #amexioBodyTmpl let-row=\"row\">\n        <amexio-row>\n            <amexio-column *ngFor=\"let item of row.data\" size=\"3\" [fit]=\"true\">\n                <amexio-card-ce [align]=\"'center'\">\n                    <amexio-body-ce>\n                        <amexio-image [path]=\"item.imagepath\" [overlay-effect]=\"'slide-left'\" [overlay-text]=\"item.title\">\n                        </amexio-image>\n                    </amexio-body-ce>\n                </amexio-card-ce>\n            </amexio-column>\n        </amexio-row>\n    </ng-template>\n</amexio-virtual-scroller>"

/***/ }),

/***/ "./src/app/multicolumnscrolller/multicolumnscroller.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/multicolumnscrolller/multicolumnscroller.component.ts ***!
  \***********************************************************************/
/*! exports provided: MultiColumnScrollerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiColumnScrollerComponent", function() { return MultiColumnScrollerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultiColumnScrollerComponent = /** @class */ (function () {
    function MultiColumnScrollerComponent(http) {
        this.http = http;
    }
    MultiColumnScrollerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('assets/data/virtualscroller2d.json')
            .subscribe(function (response) {
            _this.localData2d = response;
        });
    };
    MultiColumnScrollerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'multi-column-scroller',
            template: __webpack_require__(/*! ./multicolumnscroller.component.html */ "./src/app/multicolumnscrolller/multicolumnscroller.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MultiColumnScrollerComponent);
    return MultiColumnScrollerComponent;
}());



/***/ }),

/***/ "./src/app/scrollerwithcarousel/scrollerwithcarousel.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/scrollerwithcarousel/scrollerwithcarousel.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-carousel style=\"display: block; margin: 0px -20px;\" [data]=\"localData\" shuffle-interval=\"1000\">\n\n    <ng-template let-gallery amexioTemplate=\"item\">\n        <amexio-image [height]=\"'300px'\" [path]=\"gallery.imagepath\"></amexio-image>\n    </ng-template>\n\n</amexio-carousel>\n<amexio-virtual-scroller *ngIf=\"localData2d\" [item-size]=\"150\" [data]=\"localData2d.items\">\n    <ng-template #amexioBodyTmpl let-row=\"row\">\n        <amexio-row>\n            <amexio-column *ngFor=\"let item of row.data\" size=\"3\" [fit]=\"true\">\n                <amexio-card-ce *ngIf=\"item.imagepath\" [align]=\"'center'\">\n                    <amexio-image [path]=\"item.imagepath\" [overlay-effect]=\"'slide-left'\" [overlay-text]=\"item.title\">\n                    </amexio-image>\n                </amexio-card-ce>\n            </amexio-column>\n        </amexio-row>\n    </ng-template>\n</amexio-virtual-scroller>"

/***/ }),

/***/ "./src/app/scrollerwithcarousel/scrollerwithcarousel.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/scrollerwithcarousel/scrollerwithcarousel.component.ts ***!
  \************************************************************************/
/*! exports provided: CarouselScrollerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselScrollerComponent", function() { return CarouselScrollerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselScrollerComponent = /** @class */ (function () {
    function CarouselScrollerComponent(http) {
        this.http = http;
        this.localData = [
            {
                "title": "Niagara Falls",
                "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_ChasingHappiness/e0f5e0d4-d36c-46ab-8afc-c66c6facf656._UR3000,600_SX3000_FMjpg_.jpg",
                "active": true
            },
            {
                "title": "Happy Child ",
                "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_VinciDa/318c91ec-5551-48e6-acd5-c75f17a9d89d._UR3000,600_SX3000_FMjpg_.jpg",
                "active": false
            },
            {
                "title": "Arches  ",
                "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_VellaiPookal/33ba0686-2ba6-40d2-987a-3b510f5adc15._UR3000,600_SX3000_FMjpg_.jpg\n",
                "active": false
            },
            {
                "title": "Peace Amid",
                "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_Lucifer_MalayalamTamilTelugu/94a4a4b8-4022-4dc7-916d-93fe07022bda._UR3000,600_SX3000_FMjpg_.jpg",
                "active": false
            },
            {
                "title": "Vestrahorn  ",
                "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_yong_sheldon_season2/f8bb3275-9b19-40ea-a61c-4e50726715b1._UR3000,600_SX3000_FMjpg_.jpg\n",
                "active": false
            },
            {
                "title": "Rainy infinite  ",
                "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_2_0_TamilTeluguHindi/3870c79a-1b44-44e8-8443-62830a383a92._UR3000,600_SX3000_FMjpg_.jpg",
                "active": false
            },
            {
                "title": "Eye to Eye ",
                "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Arjun_reddy_updated/e18db314-6a75-435a-939f-b8042f8b3f8b._UR3000,600_SX3000_FMjpg_.jpg\n",
                "active": false
            },
            {
                "title": "Magical dawn",
                "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_FMSPshowlaunch/2bd396d3-c5b8-407a-bb4f-f5eb1419c9b9._UR3000,600_SX3000_FMjpg_.jpg\n\n",
                "active": false
            },
            {
                "title": "Mother  D’Auria ",
                "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_MissionImpossibleFallout/fd7a5baa-3516-4fa5-804f-563874c2f7ff._UR3000,600_SX3000_FMjpg_.jpg",
                "active": false
            },
            {
                "title": "Nikon ",
                "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_GoodOmens/88b43aec-5aa8-406b-8a97-e738eac6903b._UR3000,600_SX3000_FMjpg_.jpg\n",
                "active": false
            },
            {
                "title": "Ala-Archa Dros",
                "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_TumhariSullu/700664ec-553f-4fa0-90b7-f831db8eb1f3._UR3000,600_SX3000_FMjpg_.jpg\n",
                "active": false
            },
            {
                "title": "Dramatic",
                "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_2andhalfmen_v1/efa21f30-ca41-4819-8679-04081d7dd3b9._UR3000,600_SX3000_FMjpg_.jpg",
                "active": false
            }
        ];
    }
    CarouselScrollerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('assets/data/virtualscroller2d.json')
            .subscribe(function (response) {
            _this.localData2d = response;
        });
    };
    CarouselScrollerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sc',
            template: __webpack_require__(/*! ./scrollerwithcarousel.component.html */ "./src/app/scrollerwithcarousel/scrollerwithcarousel.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CarouselScrollerComponent);
    return CarouselScrollerComponent;
}());



/***/ }),

/***/ "./src/app/simplescroller/simplescroller.component.html":
/*!**************************************************************!*\
  !*** ./src/app/simplescroller/simplescroller.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-virtual-scroller [window-scroll]=\"true\" *ngIf=\"localData\" [item-size]=\"150\" [data]=\"localData.items\">\n    <ng-template #amexioBodyTmpl let-row=\"row\">\n        <amexio-layout-columns [orientation]=\"'horizontal'\">\n            <amexio-layout-item>\n                <amexio-image [path]=\"row.imagepath \" [height]=\" '160px' \">\n                </amexio-image>\n            </amexio-layout-item>\n            <amexio-layout-item>\n                <amexio-label [size]=\"'medium-bold' \">\n                    {{row.title}}\n                </amexio-label>\n                <br />\n                <amexio-label size=\"small \">\n                    {{row.description}}\n                </amexio-label>\n                <br />\n                <amexio-label size=\"small-bold \">\n                    {{row.duration}} secs\n                </amexio-label>\n            </amexio-layout-item>\n        </amexio-layout-columns>\n    </ng-template>\n</amexio-virtual-scroller>"

/***/ }),

/***/ "./src/app/simplescroller/simplescroller.component.ts":
/*!************************************************************!*\
  !*** ./src/app/simplescroller/simplescroller.component.ts ***!
  \************************************************************/
/*! exports provided: SimpleScrollerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleScrollerComponent", function() { return SimpleScrollerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleScrollerComponent = /** @class */ (function () {
    function SimpleScrollerComponent(http) {
        this.http = http;
    }
    SimpleScrollerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('assets/data/virtualscroller.json')
            .subscribe(function (response) {
            _this.localData = response;
        });
    };
    SimpleScrollerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-scroller',
            template: __webpack_require__(/*! ./simplescroller.component.html */ "./src/app/simplescroller/simplescroller.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SimpleScrollerComponent);
    return SimpleScrollerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/meta-magic/amexio-virtualscroll-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map