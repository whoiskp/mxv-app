webpackJsonp([14],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContractPageModule", function() { return ListContractPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_contract__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListContractPageModule = (function () {
    function ListContractPageModule() {
    }
    return ListContractPageModule;
}());
ListContractPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__list_contract__["a" /* ListContractPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_contract__["a" /* ListContractPage */]),
        ],
    })
], ListContractPageModule);

//# sourceMappingURL=list-contract.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListContractPage; });
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


var ListContractPage = (function () {
    function ListContractPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.contracts = [
            { ContractName: 'CoffeeJan18', chosse: true },
            { ContractName: 'CoffeeJan18', chosse: true },
            { ContractName: 'CoffeeJan18', chosse: false },
            { ContractName: 'CoffeeJan18', chosse: false },
            { ContractName: 'CoffeeJan18', chosse: true },
            { ContractName: 'CoffeeJan18', chosse: true },
            { ContractName: 'CoffeeJan18', chosse: false },
            { ContractName: 'CoffeeJan18', chosse: true }
        ];
        this.isSearchOn = false;
    }
    ListContractPage.prototype.toggleDetails = function () {
        this.isSearchOn = !this.isSearchOn;
    };
    ListContractPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListContractPage');
    };
    ListContractPage.prototype.showConfirm = function (contractCode) {
        var confirm = this.alertCtrl.create({
            title: 'Bạn có chắc muốn bỏ chọn?',
            buttons: [
                {
                    text: 'Hủy bỏ',
                    handler: function () {
                        console.log('Disagree clicked' + contractCode);
                    }
                },
                {
                    text: 'Đồng ý',
                    handler: function () {
                        console.log('Agree clicked' + contractCode);
                    }
                }
            ]
        });
        confirm.present();
    };
    return ListContractPage;
}());
ListContractPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-contract',template:/*ion-inline-start:"E:\N_MXV\MxvMobile\MobileV2\src\pages\home\list-contract\list-contract.html"*/'<ion-header>\n  <ion-navbar color="mxv-blue">\n    <ion-title *ngIf="!isSearchOn">MXV</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid ion-fixed>\n    <ion-row text-center padding class="mxv-header">\n      <strong text-uppercase>Tất cả các hợp đồng</strong>\n    </ion-row>\n    <ion-row padding-vertical class="mxv-tb-head">\n      <ion-col offset-1 col-5 text-center>Hợp đồng</ion-col>\n      <ion-col col-6 text-center>Thêm / Bỏ</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="mxv-tb-stripe" style="margin-top: 100px">\n    <ion-row *ngFor="let contract of contracts" padding-vertical>\n      <ion-col offset-1 col-5 padding-left class="up" [style.color]="contract.chosse ? \'#dddddd\' : \'rgba(88, 89, 91, 255)\'">\n        <span>{{ contract.ContractName }}</span>\n      </ion-col>\n      <ion-col col-6 text-center>\n        <ion-icon *ngIf="contract.chosse" name="add-circle" color="primary" (click)="showConfirm(contract.ContractName)"></ion-icon>\n        <ion-icon *ngIf="!contract.chosse" name="remove-circle" color="danger" (click)="showConfirm(contract.ContractName)"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\N_MXV\MxvMobile\MobileV2\src\pages\home\list-contract\list-contract.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ListContractPage);

//# sourceMappingURL=list-contract.js.map

/***/ })

});
//# sourceMappingURL=14.js.map