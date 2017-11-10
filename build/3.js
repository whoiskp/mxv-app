webpackJsonp([3],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderPageModule = (function () {
    function OrderPageModule() {
    }
    return OrderPageModule;
}());
OrderPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
        ],
    })
], OrderPageModule);

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
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


var OrderPage = (function () {
    function OrderPage(navCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.order = 'buy';
        this.isSearchOn = false;
        this.listContract = [
            { Code: 'CoffeeJan18' },
            { Code: 'RubberMar17' },
            { Code: 'RubberMar18' },
            { Code: 'CoffeeApr17' }
        ];
        this.contract = this.listContract[0].Code;
        this.listSell = [
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' }
        ];
        this.listBuy = [
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' }
        ];
        this.gaming = 'n64';
        this.gender = 'f';
        this.musicAlertOpts = {
            title: '1994 Music',
            subTitle: 'Select your favorite'
        };
    }
    OrderPage.prototype.toggleDetails = function () {
        this.isSearchOn = !this.isSearchOn;
    };
    OrderPage.prototype.stpSelect = function () {
        console.log('STP selected');
    };
    OrderPage.prototype.goMenuPage = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    return OrderPage;
}());
OrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order',template:/*ion-inline-start:"E:\N_MXV\MxvMobile\MobileV2\src\pages\order\order.html"*/'<ion-header>\n  <ion-navbar color="mxv-blue">\n    <ion-buttons left>\n      <button ion-button *ngIf="!isSearchOn" (click)="goMenuPage()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!isSearchOn">Lệnh</ion-title>\n    <ion-searchbar *ngIf="isSearchOn" placeholder="Tìm kiếm hợp đồng"></ion-searchbar>\n    <ion-buttons right>\n      <button (click)="toggleDetails()" ion-button>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]="order" margin-top>\n    <ion-segment-button value="buy">\n      <i class="fa fa-shopping-cart full-left"></i>\n      <span text-uppercase text-center>mua</span>\n    </ion-segment-button>\n    <ion-segment-button value="sell">\n      <i class="fa fa-telegram full-left"></i>\n      <span text-uppercase text-center>bán</span>\n    </ion-segment-button>\n    <ion-segment-button value="edit">\n      <i class="fa fa-pencil-square-o full-left"></i>\n      <span text-uppercase>Sửa</span>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-grid class="order-head">\n    <ion-row [ngClass]="order">\n      <ion-col col-7>\n        <strong>Lệnh</strong>\n      </ion-col>\n      <ion-col col-5>\n        <strong>Dư mua / Bán</strong>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row padding-right>\n      <ion-col col-7 id="order-info">\n        <ion-row>\n          <ion-select [(ngModel)]="contract" interface="popover">\n            <ion-option *ngFor="let ct of listContract" value="{{ ct.Code }}">{{ ct.Code }}</ion-option>\n          </ion-select>\n        </ion-row>\n        <ion-row>\n          <ion-col ion-6>\n            <ion-label>Loại lệnh</ion-label>\n          </ion-col>\n          <ion-col ion-6>\n            <ion-select [(ngModel)]="loailenh" interface="popover">\n              <ion-option value="lo" selected>LO</ion-option>\n              <ion-option value="mo">MO</ion-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col ion-6>\n            <ion-label>Giá</ion-label>\n          </ion-col>\n          <ion-col ion-6>\n            <ion-input type="text" value="27,000"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col ion-6>\n            <ion-label>Số lượng</ion-label>\n          </ion-col>\n          <ion-col ion-6>\n            <ion-input type="text" value="03"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col ion-6>\n            <ion-label>Giá trị HĐ</ion-label>\n          </ion-col>\n          <ion-col ion-6>\n            <ion-label>10,000</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col ion-6>\n            <ion-label>Giá trị GD</ion-label>\n          </ion-col>\n          <ion-col ion-6>\n            <ion-label>10,000</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col ion-6>\n            <ion-label>Ký quỹ</ion-label>\n          </ion-col>\n          <ion-col ion-6>\n            <ion-label>30,000</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col col-5 id="sell-buy">\n        <ion-row text-center [ngClass]="order" class="text-mxv-blue">\n          <ion-col col-6 text-center text-uppercase>\n            <strong>Trần</strong>\n          </ion-col>\n          <ion-col col-6>16,800</ion-col>\n        </ion-row>\n        <ion-row *ngFor="let sell of listSell" text-center id="sell-list">\n          <ion-col col-6 class="text-secondary">{{ sell.Price }}</ion-col>\n          <ion-col col-6 class="text-mxv-gray">{{ sell.Vol }}</ion-col>\n        </ion-row>\n        <ion-row *ngFor="let buy of listBuy" text-center id="buy-list">\n          <ion-col col-6 class="text-secondary">{{ buy.Price }}</ion-col>\n          <ion-col col-6 class="text-mxv-gray">{{ buy.Vol }}</ion-col>\n        </ion-row>\n        <ion-row text-center class="text-secondary">\n          <ion-col col-6 text-center text-uppercase>\n            <strong>sàn</strong>\n          </ion-col>\n          <ion-col col-6>13,800</ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div [ngSwitch]="order">\n    <div *ngSwitchCase="\'buy\'">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button block outline class="btn-buy">\n              <i class="fa fa-trash fa-2x full-left"></i>\n              <span style="padding-left: 10px" text-uppercase>XÓA</span>\n            </button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button block color="secondary">\n              <i class="fa fa-shopping-cart fa-2x full-left"></i>\n              <span style="padding-left: 10px" text-uppercase>mua</span>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngSwitchCase="\'sell\'">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button block outline class="btn-sell">\n              <i class="fa fa-trash fa-2x full-left"></i>\n              <span style="padding-left: 10px" text-uppercase>XÓA</span>\n            </button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button block color="danger">\n              <i class="fa fa-telegram fa-2x full-left"></i>\n              <span style="padding-left: 10px" text-uppercase>Bán</span>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngSwitchCase="\'edit\'">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button block outline class="btn-edit">\n              <i class="fa fa-trash fa-2x full-left"></i>\n              <span style="padding-left: 10px" text-uppercase>XÓA</span>\n            </button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button block color="mxv-gray">\n              <i class="fa fa-pencil-square-o fa-2x full-left"></i>\n              <span style="padding-left: 10px" text-uppercase>Sửa</span>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\N_MXV\MxvMobile\MobileV2\src\pages\order\order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=3.js.map