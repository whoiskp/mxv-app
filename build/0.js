webpackJsonp([0],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserPageModule = (function () {
    function UserPageModule() {
    }
    return UserPageModule;
}());
UserPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]),
        ],
    })
], UserPageModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
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


var UserPage = (function () {
    function UserPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.user = {
            Username: '002C000001',
            HoTen: 'Hà Nội 1',
            Email: 'hn1@gmail.com',
            NgaySinh: '04/02/2016',
            GioiTinh: 'Nam',
            QuocGia: 'Việt Nam',
            DiaChi: 'Hà Nội 1',
            DienThoai: '0916898689',
            ThanhVien: 'Thành Viên Hà Nội',
            NgayTao: '07/07/2017'
        };
    }
    UserPage.prototype.goMenuPage = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"E:\N_MXV\MxvMobile\MobileV2\src\pages\user\user.html"*/'<ion-header>\n  <ion-navbar color="mxv-blue">\n    <ion-buttons left>\n      <button ion-button *ngIf="!isSearchOn" (click)="goMenuPage()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!isSearchOn">Tài khoản</ion-title>\n    <ion-searchbar *ngIf="isSearchOn" placeholder="Tìm kiếm hợp đồng"></ion-searchbar>\n    <ion-buttons right>\n      <button (click)="toggleDetails()" ion-button>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid ion-fixed>\n    <ion-row padding-vertical class="mxv-header">\n      <ion-col col-4 padding-left>\n        <span>Tài khoản</span>\n      </ion-col>\n      <ion-col col-auto>\n        <strong>{{ user.Username }}</strong>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="mxv-tb-stripe text-dark" style="margin-top: 50px">\n    <ion-row>\n      <ion-col col-4 padding-left>Họ tên</ion-col>\n      <ion-col col-auto>\n        <strong>{{ user.HoTen }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 padding-left>Email</ion-col>\n      <ion-col col-auto>\n        <strong>{{ user.Email }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 padding-left>Ngày Sinh</ion-col>\n      <ion-col col-auto>\n        <strong>{{ user.NgaySinh }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 padding-left>Giới tính</ion-col>\n      <ion-col col-auto>\n        <strong>{{ user.GioiTinh }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 padding-left>Quốc gia</ion-col>\n      <ion-col col-auto>\n        <strong>{{ user.QuocGia }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 padding-left>Địa chỉ</ion-col>\n      <ion-col col-auto>\n        <strong>{{ user.DiaChi }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 padding-left>Điện thoại</ion-col>\n      <ion-col col-auto>\n        <strong>{{ user.DienThoai }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 padding-left>Thành viên</ion-col>\n      <ion-col col-auto>\n        <strong>{{ user.ThanhVien }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 padding-left>Ngày tạo</ion-col>\n      <ion-col col-auto>\n        <strong>{{ user.NgayTao }}</strong>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\N_MXV\MxvMobile\MobileV2\src\pages\user\user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ })

});
//# sourceMappingURL=0.js.map