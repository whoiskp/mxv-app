webpackJsonp([16],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, peopleService) {
        this.navCtrl = navCtrl;
        this.peopleService = peopleService;
        this.isSearchOn = false;
        this.contracts = [
            { ContractName: 'CoffeeJan18', Price: '18.9', TDoi: 0, TDoipt: '0%', Vol: 1000, Change: 'up' },
            { ContractName: 'CoffeeFeb17', Price: '18.9', TDoi: 0, TDoipt: '0%', Vol: 1000, Change: 'down' },
            { ContractName: 'RubberMar18', Price: '18.9', TDoi: 0, TDoipt: '0%', Vol: 1000, Change: 'down' },
            { ContractName: 'RubberApr18', Price: '18.9', TDoi: 0, TDoipt: '0%', Vol: 1000, Change: 'down' },
            { ContractName: 'CoffeeJan19', Price: '18.9', TDoi: 0, TDoipt: '0%', Vol: 1000, Change: 'down' },
            { ContractName: 'CoffeeFeb17', Price: '18.9', TDoi: 0, TDoipt: '0%', Vol: 1000, Change: 'down' },
            { ContractName: 'CoffeeJan19', Price: '18.9', TDoi: 0, TDoipt: '0%', Vol: 1000, Change: 'down' },
            { ContractName: 'CoffeeJan19', Price: '18.9', TDoi: 0, TDoipt: '0%', Vol: 1000, Change: 'down' },
            { ContractName: 'CoffeeJan19', Price: '18.9', TDoi: 0, TDoipt: '0%', Vol: 1000, Change: 'down' }
        ];
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.loadPeople();
    }
    HomePage.prototype.loadPeople = function () {
        var _this = this;
        this.peopleService.load()
            .then(function (data) {
            _this.people = data;
        })
            .catch(function (err) { return console.error("Error: " + err); });
    };
    HomePage.prototype.logout = function () {
        window.localStorage.removeItem('user');
        this.navCtrl.setRoot('LoginPage');
        this.navCtrl.popToRoot();
    };
    HomePage.prototype.openLoginPage = function () {
        this.navCtrl.push('LoginPage');
    };
    HomePage.prototype.openListContract = function () {
        this.navCtrl.push('ListContractPage');
    };
    HomePage.prototype.goMenuPage = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    HomePage.prototype.itemSelected = function (item) {
        this.navCtrl.push('ListBuySellPage');
    };
    HomePage.prototype.toggleDetails = function () {
        this.isSearchOn = !this.isSearchOn;
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\N_MXV\MxvMobile\MobileV2\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="mxv-blue" hideBackButton>\n    <ion-buttons left>\n      <button ion-button *ngIf="!isSearchOn" (click)="goMenuPage()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!isSearchOn">MXV</ion-title>\n    <ion-searchbar *ngIf="isSearchOn" placeholder="Tìm kiếm hợp đồng"></ion-searchbar>\n    <ion-buttons right>\n      <button (click)="toggleDetails()" ion-button>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid ion-fixed>\n    <ion-row class="mxv-header" padding-vertical>\n      <ion-col col-6 text-left text-uppercase padding-left>KLGT:\n        <strong>30</strong>\n      </ion-col>\n      <ion-col col-6 text-right text-uppercase padding-right>GTGD:\n        <strong>60,0000</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding-vertical class="mxv-tb-head">\n      <ion-col col-4 text-left>Hợp đồng</ion-col>\n      <ion-col col-2 text-right>Giá</ion-col>\n      <ion-col col-2 text-right>T.Đổi</ion-col>\n      <ion-col col-2 text-right>(%)</ion-col>\n      <ion-col col-2 text-right>KL</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="mxv-tb-stripe" style="margin-top: 100px">\n    <ion-row *ngFor="let contract of contracts" (click)="itemSelected(contract)" padding-vertical>\n      <ion-col col-4 class="text-danger" text-left>\n        <span>{{ contract.ContractName }}</span>\n      </ion-col>\n      <ion-col col-2 class="text-secondary" text-right>\n        <span>{{ contract.Price }}</span>\n      </ion-col>\n      <ion-col col-2 class="text-mxv-blue" text-right>\n        <span>{{ contract.TDoi }}</span>\n      </ion-col>\n      <ion-col col-2 class="text-mxv-normal" text-right>\n        <span>{{ contract.TDoipt }}</span>\n      </ion-col>\n      <ion-col col-2 class="text-mxv-ceil" text-right>\n        <span>{{ contract.Vol }}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab right bottom>\n    <button ion-fab mini (click)="openListContract()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n  <!-- <button ion-button full color="ceil" (click)="openLoginPage()">Đăng nhập</button>\n  <button ion-button full color="primary" style="margin-top: 20px;" (click)="logout()">Logout</button>\n  <ion-list>\n    <ion-item *ngFor="let person of people">\n      <ion-avatar item-left>\n        <img src="{{person.picture.thumbnail}}">\n      </ion-avatar>\n      <h2>{{person.name.first}} {{person.name.last}}</h2>\n      <p>{{person.email}}</p>\n    </ion-item>\n  </ion-list> -->\n</ion-content>\n'/*ion-inline-end:"E:\N_MXV\MxvMobile\MobileV2\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=16.js.map