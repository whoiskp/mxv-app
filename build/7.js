webpackJsonp([7],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyInfoPageModule", function() { return MoneyInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__money_info__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoneyInfoPageModule = (function () {
    function MoneyInfoPageModule() {
    }
    return MoneyInfoPageModule;
}());
MoneyInfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__money_info__["a" /* MoneyInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__money_info__["a" /* MoneyInfoPage */]),
        ],
    })
], MoneyInfoPageModule);

//# sourceMappingURL=money-info.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MoneyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoneyInfoPage = (function () {
    function MoneyInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.moneyOfUser = {
            SoTien: '34,345,909,905',
            TamKhoa: '34,345,909,905',
            CoTheGiaoDich: '34,345,909,905',
            TaiSanRong: '34,345,909,905'
        };
    }
    MoneyInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MoneyInfoPage');
    };
    return MoneyInfoPage;
}());
MoneyInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-money-info',template:/*ion-inline-start:"E:\N_MXV\MxvMobile\MobileV2\src\pages\money\money-info\money-info.html"*/'<ion-header>\n  <ion-navbar color="mxv-blue">\n    <ion-title>Tiền</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row text-center padding class="mxv-header">\n      <strong text-uppercase>Xem số dư</strong>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="mxv-tb-stripe">\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Số tiền</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ moneyOfUser.SoTien }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Tạm khóa</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ moneyOfUser.TamKhoa }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Có thể giao dịch</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ moneyOfUser.CoTheGiaoDich }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Tài sản ròng</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ moneyOfUser.TaiSanRong }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Tiền rút tối đa</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ moneyOfUser.TaiSanRong }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Tổng tiền gửi</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ moneyOfUser.TaiSanRong }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Tổng tạm khóa</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ moneyOfUser.TaiSanRong }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Ký quỹ hiện tại</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ moneyOfUser.TaiSanRong }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Ký quỹ bổ sung</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ moneyOfUser.TaiSanRong }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Ký quỹ giao nhận vật chất</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ moneyOfUser.TaiSanRong }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Ký quỹ giao nhận HVC</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ moneyOfUser.TaiSanRong }}</strong>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\N_MXV\MxvMobile\MobileV2\src\pages\money\money-info\money-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MoneyInfoPage);

//# sourceMappingURL=money-info.js.map

/***/ })

});
//# sourceMappingURL=7.js.map