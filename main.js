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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-login/form-login.component */ "./src/app/form-login/form-login.component.ts");
/* harmony import */ var _form_aliment_form_aliment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-aliment/form-aliment.component */ "./src/app/form-aliment/form-aliment.component.ts");
/* harmony import */ var _formulaire_formulaire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulaire/formulaire.component */ "./src/app/formulaire/formulaire.component.ts");
/* harmony import */ var _reporting_data_reporting_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporting-data/reporting-data.component */ "./src/app/reporting-data/reporting-data.component.ts");
/* harmony import */ var _redirect_reporting_redirect_reporting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redirect-reporting/redirect-reporting.component */ "./src/app/redirect-reporting/redirect-reporting.component.ts");
/* harmony import */ var _menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-lateral/menu-lateral.component */ "./src/app/menu-lateral/menu-lateral.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'formlaireLogin', component: _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_2__["FormLoginComponent"] },
    { path: '', redirectTo: '/formlaireLogin', pathMatch: 'full' },
    { path: 'AfficheSaisi', component: _form_aliment_form_aliment_component__WEBPACK_IMPORTED_MODULE_3__["FormAlimentComponent"] },
    { path: 'formSaisiInfo', component: _formulaire_formulaire_component__WEBPACK_IMPORTED_MODULE_4__["FormulaireComponent"] },
    { path: 'reportingData', component: _reporting_data_reporting_data_component__WEBPACK_IMPORTED_MODULE_5__["ReportingDataComponent"] },
    /* {path:'redirectionReportage', component.red} */
    { path: 'redirectReporting', component: _redirect_reporting_redirect_reporting_component__WEBPACK_IMPORTED_MODULE_6__["RedirectReportingComponent"] },
    { path: "sidebarAvison", component: _menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_7__["MenuLateralComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "\n\n <router-outlet></router-outlet> \n<!-- Footer -->\n<div class=\"card text-center\">\n    <div class=\"card-footer  text-muted\">© 2018 Copyright\n        <a href=\"/\"> <strong>Avision</strong> </a>\n    </div>\n</div>\n<!-- <app-menu-lateral></app-menu-lateral> -->\n\n\n\n\n<!-- <nav>\n    <a routerLink=\"/formlaireLogin\"></a>\n</nav>\n<nav>\n    <a routerLink=\"/formSaisiInfo\"></a>\n</nav>\n<nav>\n    <a routerLink=\"/AfficheSaisi\"></a>\n</nav>\n<hr> -->\n<!-- <app-formulaire></app-formulaire>\n<app-form-aliment></app-form-aliment> \n<app-form-login></app-form-login>  -->\n<!-- <app-reporting-data></app-reporting-data> -->\n\n\n\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _formulaire_formulaire_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulaire/formulaire.component */ "./src/app/formulaire/formulaire.component.ts");
/* harmony import */ var _form_aliment_form_aliment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-aliment/form-aliment.component */ "./src/app/form-aliment/form-aliment.component.ts");
/* harmony import */ var _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-login/form-login.component */ "./src/app/form-login/form-login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _reporting_data_reporting_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reporting-data/reporting-data.component */ "./src/app/reporting-data/reporting-data.component.ts");
/* harmony import */ var _redirect_reporting_redirect_reporting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./redirect-reporting/redirect-reporting.component */ "./src/app/redirect-reporting/redirect-reporting.component.ts");
/* harmony import */ var _menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-lateral/menu-lateral.component */ "./src/app/menu-lateral/menu-lateral.component.ts");
/* harmony import */ var _entete_menu_entete_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entete-menu/entete-menu.component */ "./src/app/entete-menu/entete-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_4__["HeroesComponent"],
                _formulaire_formulaire_component__WEBPACK_IMPORTED_MODULE_5__["FormulaireComponent"],
                _form_aliment_form_aliment_component__WEBPACK_IMPORTED_MODULE_6__["FormAlimentComponent"],
                _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_7__["FormLoginComponent"],
                _reporting_data_reporting_data_component__WEBPACK_IMPORTED_MODULE_9__["ReportingDataComponent"],
                _redirect_reporting_redirect_reporting_component__WEBPACK_IMPORTED_MODULE_10__["RedirectReportingComponent"],
                _menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_11__["MenuLateralComponent"],
                _entete_menu_entete_menu_component__WEBPACK_IMPORTED_MODULE_12__["EnteteMenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/entete-menu/entete-menu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/entete-menu/entete-menu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/entete-menu/entete-menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/entete-menu/entete-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-2\">\n      <div class=\"row\" style=\"margin-left:20px;\">\n        <div class=\"p-1\" >\n        <p style=\"font-size:12px;\">Batiments|</p>\n      </div>\n        <div class=\"p-1\">\n        <p style=\"  font-size:12px; color:#0080ff; text-decoration:underline;\"> <strong>Batiment Chaire A</strong></p>\n      </div>\n      </div>  \n    </div>\n    \n    <div class=\"col-md-10 \">\n      \n        <div class=\"offset-9\">\n            <div class=\"row\">\n              <div class=\"p-1\" style=\"color: rgba(224, 143, 21, 0.877);\">\n                  <p><i class=\"fa fa-bell-o\"  ></i> Rappels</p>\n              </div>\n        <div class=\"dropdown p-1\" style=\"color:limegreen;\">\n            <p class=\"dropdown-toggle\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fa fa-user-o\" style=\"color:limegreen;\"></i> User \n            </p>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\n              <button class=\"dropdown-item\" type=\"button\">\n                <i class=\"fa fa-area-chart\" style=\"font-size:12px\"></i> Reporting Data</button>\n              <button class=\"dropdown-item\" type=\"button\">\n                <i class=\"fa fa-line-chart\"></i> Graphes</button>\n              <button class=\"dropdown-item\" type=\"button\">\n                <i class=\"fa fa-building\" style=\"font-size:14px\"></i> All Batiments</button>\n              <button class=\"dropdown-item\" type=\"button\">\n                <i class=\"fa fa-sign-out\" style=\"font-size:17px\"></i> Deconnexion</button>\n            </div>\n          </div>\n    </div>\n  </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/entete-menu/entete-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/entete-menu/entete-menu.component.ts ***!
  \******************************************************/
/*! exports provided: EnteteMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnteteMenuComponent", function() { return EnteteMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnteteMenuComponent = /** @class */ (function () {
    function EnteteMenuComponent() {
    }
    EnteteMenuComponent.prototype.ngOnInit = function () {
    };
    EnteteMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entete-menu',
            template: __webpack_require__(/*! ./entete-menu.component.html */ "./src/app/entete-menu/entete-menu.component.html"),
            styles: [__webpack_require__(/*! ./entete-menu.component.css */ "./src/app/entete-menu/entete-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnteteMenuComponent);
    return EnteteMenuComponent;
}());



/***/ }),

/***/ "./src/app/form-aliment/form-aliment.component.css":
/*!*********************************************************!*\
  !*** ./src/app/form-aliment/form-aliment.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    display: flex;\r\n    width: 100%;\r\n    margin-left: 20px;\r\n}\r\n.mtt2{\r\n    margin-left: 23px;\r\n}"

/***/ }),

/***/ "./src/app/form-aliment/form-aliment.component.html":
/*!**********************************************************!*\
  !*** ./src/app/form-aliment/form-aliment.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-top: -50px;\">\r\n        <div class=\"container\">\r\n                <p style=\"color:#0080ff; margin-top: 15px; margin-left:100px;\">\r\n                  <i class=\"fa fa-building\"> Mes Batiments</i>\r\n                </p>\r\n                <p style=\"font-weight:bold; font-size: 25; margin-left:100px;\">Batiment Chaire A</p>\r\n              </div>\r\n        <div class=\"offset-9\">\r\n          <div class=\"col\" style=\"color:rgba(224, 143, 21, 0.877);\">\r\n            <i class=\"fa fa-bell-o\"></i>\r\n            <b> Rappels</b>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <!--   -->\r\n          <div class=\"dropdown\" style=\"color:limegreen;\">\r\n            <p class=\"dropdown-toggle\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <i class=\"fa fa-user-o\"></i>\r\n              <b> User </b>\r\n            </p>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n              <button class=\"dropdown-item\" type=\"button\">\r\n                <i class=\"fa fa-area-chart\" style=\"font-size:12px\"></i> Reporting Data</button>\r\n              <button class=\"dropdown-item\" type=\"button\">\r\n                <i class=\"fa fa-line-chart\"></i> Graphes</button>\r\n              <button class=\"dropdown-item\" type=\"button\">\r\n                <i class=\"fa fa-building\" style=\"font-size:14px\"></i> All Batiments</button>\r\n              <button class=\"dropdown-item\" type=\"button\">\r\n                <i class=\"fa fa-sign-out\" style=\"font-size:17px\"></i> Deconnexion</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n</div>\r\n      <hr>\r\n    \r\n     \r\n        <div class=\"col-md-10 panneaux\">\r\n                <div class=\"text-center title_offset\" style=\"margin-top: 20px;\r\n                color: #0080ff; font-size: 25px; text-decoration: underline;\">\r\n                DONNEES SAISIES\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header bg-primary text-center\" style=\"color: #ffffff;\">\r\n                             <b>Informations de cumules</b>\r\n                            </div>\r\n                            \r\n                            <div class=\"card-body row col-md-12 text-right\">\r\n                                    <div class=\"col-md-4 text-right\">\r\n                                            <div>\r\n                                                    <label class=\"text-right\" for=\"age\">Ages de animaux</label>\r\n                                                </div>\r\n                                               \r\n                                                <div>\r\n                                                    <label for=\"ndAnimaux_Lot\">Nombre d'animaux au depart du lot</label>\r\n                                                </div>\r\n                                               \r\n                                                <div>\r\n                                                    <label for=\"ndAnimaux_Pres\">Nombre d'animaux présent</label>\r\n                                                </div>\r\n                                                \r\n                                                <div>\r\n                                                    <label for=\"mortalite\">La mortalité</label>\r\n                                                </div>\r\n                                                \r\n                                                <div>\r\n                                                    <label for=\"taux_mortalite\">Le taux de mortalité</label>\r\n                                                </div>\r\n                                                \r\n                                                <div>\r\n                                                    <label for=\"temps_lot\">Temps passé sur lot</label>\r\n                                                </div>\r\n                                                \r\n                                                <div>\r\n                                                    <label for=\"mortalite\">La mortalité</label>\r\n                                                </div>\r\n                                                \r\n                                </div>\r\n                             \r\n                                <div class=\"col-md-6 text-right\">\r\n                                        <div>\r\n                                                <label for=\"cumul_aliment\">Cumule de consommation d'aliments</label>\r\n                                            </div>\r\n                                            \r\n                                            <div>\r\n                                                <label for=\"cumule_poule\">Cumule d'aliment par poule</label>\r\n                                            </div>\r\n                                            \r\n                                            <div>\r\n                                                <label for=\"cumil_eau\">Cumule de consommation d'eau</label>\r\n                                            </div>\r\n                                            \r\n                                            <div>\r\n                                                <label for=\"mortalite\">La mortalité</label>\r\n                                            </div>\r\n                                            \r\n                                            <div>\r\n                                                <label for=\"taux_mortalite\">Le taux de mortalité</label>\r\n                                            </div>\r\n                                            <div>\r\n                                                <label for=\"temps_lot\">Temps passé sur lot</label>\r\n                                            </div>\r\n                                            \r\n                                            <div>\r\n                                                <label for=\"mortalite\">La mortalité</label>\r\n                                            </div>\r\n                                            \r\n                                        </div>\r\n                                <!-- <div class=\"row offset-5\">\r\n                                        <div class=\"btn btn-primary col-md-3 btn-sm\">\r\n                                            <i class=\"fa fa-edit\"></i> Editer\r\n                \r\n                                        </div>\r\n                                    </div> -->\r\n                                   \r\n                            </div>\r\n                        </div>\r\n                   \r\n                    </div>\r\n                </div>\r\n               <hr>\r\n                <div class=\"col-md-10 panneaux\" style=\"margin-top: 20px;\">\r\n                        <div class=\"col-md-12\">\r\n                                <div class=\"card\">\r\n                                    <div class=\"card-header bg-primary text-center\" style=\"color: #ffffff;\">\r\n                                     <b>Dernière données saisies</b>\r\n                                    </div>\r\n                                    <div class=\"card-body row col-md-12 text-right\">\r\n                                            <div class=\"col-md-4 text-right\">\r\n                                                    <div>\r\n                                                            <label for=\"date\">Date</label>\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <label for=\"ndAnimaux_Lot\">Mortalité</label>\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <label for=\"ndAnimaux_Pres\">Evenement</label>\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <label for=\"mortalite\">Température du batiment</label>\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <label for=\"taux_mortalite\">Lumière de</label>\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <label for=\"temps_lot\">à:</label>\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <label for=\"mortalite\">Soit une durée de</label>\r\n                                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 text-right\">\r\n                                                <div>\r\n                                                        <label for=\"qte_ali_indiv\">Quantite d'aliment distribuée par individu</label>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <label for=\"type_ali\" class=\"text-right\">Type d'aliment</label>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <label for=\"prov_silo_ali\">Provenance Silo Aliment</label>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <label for=\"qte_indiv\">Quantite distribuée par individu</label>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <label for=\"prov_sil_eau\">Provenance Silo eau</label>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <label for=\"r_eau_ali\">Ratio eau/aliment</label>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <label for=\"Note\">La Note</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                        <!-- <div class=\"row offset-5\">\r\n                                                <div class=\"btn btn-primary col-md-3 btn-sm\">\r\n                                                    <i class=\"fa fa-edit\"></i> Editer\r\n                        \r\n                                                </div>\r\n                                            </div> -->\r\n                                           \r\n                                    </div>\r\n                                </div>\r\n                           \r\n                            </div>\r\n                            \r\n                        </div>\r\n                        <hr>\r\n\r\n                        \r\n\r\n\r\n\r\n\r\n\r\n\r\n <!-- <div class=\"row offset-5\">\r\n                                    <div class=\"btn btn-primary col-md-3 btn-sm\">\r\n                                        <i class=\"fa fa-edit\"></i> Editer\r\n            \r\n                                    </div>\r\n                            </div> -->"

/***/ }),

/***/ "./src/app/form-aliment/form-aliment.component.ts":
/*!********************************************************!*\
  !*** ./src/app/form-aliment/form-aliment.component.ts ***!
  \********************************************************/
/*! exports provided: FormAlimentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAlimentComponent", function() { return FormAlimentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormAlimentComponent = /** @class */ (function () {
    function FormAlimentComponent() {
    }
    FormAlimentComponent.prototype.ngOnInit = function () {
    };
    FormAlimentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-aliment',
            template: __webpack_require__(/*! ./form-aliment.component.html */ "./src/app/form-aliment/form-aliment.component.html"),
            styles: [__webpack_require__(/*! ./form-aliment.component.css */ "./src/app/form-aliment/form-aliment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormAlimentComponent);
    return FormAlimentComponent;
}());



/***/ }),

/***/ "./src/app/form-login/form-login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/form-login/form-login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formLogin{\r\n    margin-left: 500px;\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/form-login/form-login.component.html":
/*!******************************************************!*\
  !*** ./src/app/form-login/form-login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center container\">\n    <strong style=\"font-size: 30px; color: dodgerblue; text-decoration: underline;\">\n      Connexion</strong>\n\n</div>\n<div class=\"d-flex justify-content-center\">\n    <strong style=\"font-size: 15px;\">\n        Connectez-vous à l'application AVISION</strong>\n      </div>\n<div class=\"d-flex justify-content-center align-items-center container panneauxForm\">\n\n    <div class=\"panneauForm1\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-center\" style=\"color:#ffffff;\">\n          CONNEXION\n       </div>\n      <div class=\"card-body\">\n\n    <form>\n      <h4 class=\"form-header\" style=\"color:#0080ff; text-align: center;\">\n          <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i> Login AVISION \n      </h4>\n      <div>\n        <label for=\"text\">Nom d'utilisateur</label>\n        <input class=\"form-control\" name=\"email\" id=\"email\" email=\"true\" required type=\"email\">\n      </div>\n      <div class=\"form-error\" >\n              \n        </div>\n      <div>\n        <label for=\"password\">Mot de passe</label>\n        <input class=\"form-control\" name=\"password\" autocomplete=\"new-password\" id=\"password\" required type=\"password\">\n      </div>\n      \n      <div class=\"d-flex justify-content-center\" style=\"margin-top:20px;\">\n          <button routerLink=\"/reportingData\" type=\"submit\"\n          class=\"btn btn-primary\"><i class=\"fa fa-angle-right\" ></i> Connexion</button>\n      </div>\n    </form>\n  </div>\n</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/form-login/form-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/form-login/form-login.component.ts ***!
  \****************************************************/
/*! exports provided: FormLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginComponent", function() { return FormLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormLoginComponent = /** @class */ (function () {
    function FormLoginComponent() {
    }
    FormLoginComponent.prototype.ngOnInit = function () {
    };
    FormLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-login',
            template: __webpack_require__(/*! ./form-login.component.html */ "./src/app/form-login/form-login.component.html"),
            styles: [__webpack_require__(/*! ./form-login.component.css */ "./src/app/form-login/form-login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormLoginComponent);
    return FormLoginComponent;
}());



/***/ }),

/***/ "./src/app/formulaire/formulaire.component.css":
/*!*****************************************************!*\
  !*** ./src/app/formulaire/formulaire.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu_user{\r\n    margin-top: 50px;\r\n}"

/***/ }),

/***/ "./src/app/formulaire/formulaire.component.html":
/*!******************************************************!*\
  !*** ./src/app/formulaire/formulaire.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-entete-menu></app-entete-menu>\n      \n\n<div class=\"row\">\n<div class=\"col-md-2 p-1\" style=\"margin-top: 30px;\">\n  <app-menu-lateral ></app-menu-lateral>\n</div>\n  <div class=\"col-md-10\">\n\n    <!--Commit ou annulation des données saisies-->\n    \n    <div class=\"row offset-8\">\n     \n      <div class=\"col mb-2\">\n        <button routerLink=\"/reportingData\" class=\"btn btn-primary\">\n          <i class=\"fa fa-save\"> Enregistrer</i>\n        </button>\n      </div>\n      <div class=\"col mb-2\">\n        <button routerLink=\"/formSaisiInfo\" class=\"btn btn-danger\">\n          <i class=\"fa fa-times\"> Annuler</i>\n        </button>\n      </div>\n    </div>\n\n    <!--.........................................................................................................-->\n\n\n    <!--Menu saisi des 3 section d'informations de saisi-->\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">\n          <b>Alimentation</b>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#profile\">\n          <b>Santé</b>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#technique\">\n          <b>Technique</b>\n        </a>\n      </li>\n    </ul>\n    <!--.............................................................................................................-->\n\n    <!--Nous sommes dans le menu-->\n    <div id=\"myTabContent\" class=\"tab-content\">\n\n      <!--Saisi d'information sur l'alimentation des animaux-->\n\n      <div class=\"tab-pane fade show active\" id=\"home\">\n        <div class=\"row container offset-3\">\n          <div class=\"col-md-6\">\n            <form>\n              <div class=\"form-group\">\n                <label for=\"dateSystem\">Date</label>\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Nouvelle date\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"dateSystem\">Quantite d'aliment distribuée</label>\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"quantité distribuée\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"exampleSelect1\">Type d'aliment</label>\n                <select class=\"form-control form-control-sm\" id=\"type_ali\">\n                  <option>type1</option>\n                  <option>type2</option>\n                  <option>type3</option>\n                  <option>type4</option>\n                  <option>type5</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"preponderance_silo_ali\">Prépondérance Silo aliment</label>\n                <select class=\"form-control form-control-sm\" id=\"type_ali\">\n                  <option>preponderance_silo_ali1</option>\n                  <option>préponderance_silo_ali2</option>\n                  <option>prépondérance_silo_ali3</option>\n                  <option>préponderance_silo_ali4</option>\n                  <option>préponderance_silo_ali5</option>\n                </select>\n              </div>\n\n            </form>\n\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"dateSystem\">Quantite d'eau distribuée</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"quantité distribuée\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"preponderance_silo_ali\">Prépondérance Silo eau</label>\n                  <select class=\"form-control form-control-sm\"  id=\"type_ali\">\n                    <option>preponderance_silo_eau1</option>\n                    <option>préponderance_silo_eau2</option>\n                    <option>prépondérance_silo_eau3</option>\n                    <option>préponderance_silo_eau4</option>\n                    <option>préponderance_silo_eau5</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--.............................................................................................................-->\n\n\n      <!--Saisi des informations sur la santé des animaux-->\n\n\n      <div class=\"tab-pane fade\" id=\"profile\">\n        <div class=\"d-flex justify-content-center\">\n          <div class=\"col-md-6  spacer3\">\n            <div class=\"card\" >\n              <div class=\"card-header bg-primary text-center\" style=\"color: #ffffff;\">\n                <span>Informations</span>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-group\">\n                  <label for=\"typemaladie\">Maladie</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"type de maladie\">\n                </div>\n               \n                <div class=\"form-group\">\n                  <label for=\"tri\">Tri</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"tri\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"nuisible\">Nuisible</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Nuisible\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"poid_moyen\">Poids moyen des animaux</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"poids moyen\">\n                </div>    \n                \n              </div>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n\n      <!--.............................................................................................................-->\n\n      <!--Saisi des informations techniques -->\n\n      <div class=\"tab-pane fade\" id=\"technique\">\n        <div class=\"d-flex justify-content-center\" style=\"margin-bottom: 100px;\" >\n         \n\n            <form>\n          <div class=\"row mb-2\" style=\"margin-bottom: 100px;\">\n              <div class=\"form-group\">\n                <label for=\"mini\">Min</label>\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"min\">\n              </div>\n              <div class=\"form-group\" style=\"margin-left: 80px;\">\n                <label for=\"mini\">Max</label>\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"min\">\n              </div>\n            </div>\n              <div class=\"form-group\">\n                <label for=\"mini\">Temperature</label>\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"temperature\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"mini\">Temps passé/Lot</label>\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"temps_passe\">\n              </div>\n            </form>\n\n        \n          \n        </div>\n      </div>\n      <hr>\n  \n      <!--.............................................................................................................-->\n\n    </div>\n  </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <div class=\"navbar navbar-expand-lg fixed-top navbar-light bg-light\">\n    <div class=\"container\">\n      <a href=\"../\" class=\"navbar-brand\">APPLI Avision</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"nav navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" target=\"_blank\">Ajouter</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" target=\"_blank\">Exporter</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\" target=\"_blank\">Archiver</a>\n            </li>\n        </ul>\n      </div>\n      <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n          <button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\">Chercher</button>\n        </form>\n    </div>\n    <div class=\"page-header\" id=\"banner\"></div>\n  </div> -->\n<!-- <nav>\n    <ul>\n        <li class=\"col align-self-center\"> <i class=\"fa fa-bell-o\"></i>  Rappels </li> \n        <li>\n  <a aria-expanded=\"false\" href=\"#pageSubmenu1\" data-toggle=\"collapse\" class=\"col align-self-end dropdown-toggle\"><i class=\"fa fa-user-o\"></i> AL Hassane CAMARA</a>\n      <ul id=\"pageSubmenu1\">\n        <li>\n            <a href=\"#\">Déconnexion</a>\n        </li>\n        <li>\n            <a href=\"#\">Item1</a>\n        </li>\n        <li>\n            <a href=\"#\">item2</a>\n        </li>\n        </ul>\n      </li>\n      </ul>\n  </nav> -->\n\n\n\n\n<!-- <div class=\"row\">\n    <div class=\"col-md-8\"></div>\n<div class=\"col-md-4 \"> \n  <div class=\"row\">\n    <div class=\"col-md-2\">\n    <p>\n        <i class=\"fa fa-bell-o\"></i> Rappels\n    </p>\n  </div>\n    <div class=\"col-md-4\">\n      <p style=\"margin-left: 40px;\" class=\"dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n       <i class=\"fa fa-user-o\"></i> Al Hassane CAMARA\n      </p>\n   \n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\"> <i class=\"fa fa-logout\"></i> Deconnexion</a>\n        <a class=\"dropdown-item\">Mes Batiment</a>\n        <a class=\"dropdown-item\">Mes Silos</a>\n      </div>\n    </div>\n  </div>\n  </div>\n\n</div>\n<hr>\n   -->\n<!-- \n<div class=\"container\">\n    <div class=\"row justify-content-end \">\n    <div class=\"col-md-2\">\n        <p>\n            <i class=\"fa fa-bell-o\"></i> Rappels\n        </p>\n      </div>\n      <div class=\"col-md-2\">\n          <p style=\"margin-left: 40px;\" class=\"dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fa fa-user-o\"></i> Al Hassane CAMARA\n             </p>\n          \n             <div class=\"dropdown-menu\">\n               <a class=\"dropdown-item\"> <span class=\"fa fa-log-out\"></span> Deconnexion</a>\n               <a class=\"dropdown-item\">Mes Batiment</a>\n               <a class=\"dropdown-item\">Mes Silos</a>\n            </div>\n  </div>\n</div>\n</div>\n  <br> -->\n\n\n\n\n  <!-- <div class=\"col-md-6\">\n\n            <form>\n\n              <div class=\"form-group\">\n                <label for=\"mini\">Lumiere de</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"lumiere\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"mini\">à</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"min\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"mini\">Lumiere de</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"lumiere\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"mini\">à</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"min\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"mini\">Lumiere de</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"lumiere\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"mini\">à</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"min\">\n              </div>\n            </form>\n\n          </div> -->\n        \n\n\n\n          <!-- <div class=\"form-group\">\n              <label for=\"autre\">Enlevement</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"enlevement\">\n            </div> -->\n            <!-- <div class=\"form-group\">\n              <label for=\"poid_moyen\">Poids moyen des animaux</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"poids moyen\">\n            </div> -->\n\n            <!-- <div class=\"form-group\">\n              <label for=\"uniformite\">Uniformité du poids</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Uniformité poids\">\n            </div> -->\n            <!-- <div class=\"form-group\">\n              <label for=\"noter\">Noter</label>\n              <input type=\"textArrea\" class=\"form-control\" placeholder=\"Noter des infos\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"uniformite\">Traitement éventuel</label>\n              <input type=\"textArrea\" class=\"form-control\" placeholder=\"Décrir le traitement éventuel\">\n            </div> -->\n\n\n            <!-- <div class=\"form-group\">\n                  <label for=\"autre\">Autre</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Autre\">\n                </div> -->\n\n\n\n                 <!-- <div class=\"form-group\">\n                  <label for=\"materiel\">Materiel</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"materiel\">\n                </div> -->\n\n\n                <!-- <div class=\"text1\">\n              <span class=\"text2\">Tour de chaine</span>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group mx-sm-2 mb-2\">\n                <input type=\"text\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Tour de chiane1\">\n              </div>\n              <div class=\"form-group mx-sm-2 mb-2\">\n\n                <input type=\"text\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Tour de chiane2\">\n              </div>\n              <div class=\"form-group mx-sm-2 mb-2\">\n\n                <input type=\"text\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Tour de chiane3\">\n              </div>\n            </div> -->\n            <!-- <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-primary\">Toutes chaines supplementaires</button>\n              <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span class=\"caret\"></span>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <ul class=\"dropdown-menu\">\n                <li>\n                  <a href=\"#\">Autre Chaine1</a>\n                </li>\n                <li>\n                  <a href=\"#\">Autre chaine2</a>\n                </li>\n                <li>\n                  <a href=\"#\">Autre chaine2</a>\n                </li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li>\n                  <a href=\"#\">Separated link</a>\n                </li>\n              </ul>\n            </div> -->\n\n\n             <!-- <div class=\"col mb-2\">\n        <button routerLink=\"/AfficheSaisi\" class=\"btn btn-primary\">\n          <i class=\"fa fa-save\"> Enregistrez/Quitter</i>\n        </button>\n      </div> -->"

/***/ }),

/***/ "./src/app/formulaire/formulaire.component.ts":
/*!****************************************************!*\
  !*** ./src/app/formulaire/formulaire.component.ts ***!
  \****************************************************/
/*! exports provided: FormulaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaireComponent", function() { return FormulaireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormulaireComponent = /** @class */ (function () {
    function FormulaireComponent() {
    }
    FormulaireComponent.prototype.ngOnInit = function () {
    };
    FormulaireComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formulaire',
            template: __webpack_require__(/*! ./formulaire.component.html */ "./src/app/formulaire/formulaire.component.html"),
            styles: [__webpack_require__(/*! ./formulaire.component.css */ "./src/app/formulaire/formulaire.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormulaireComponent);
    return FormulaireComponent;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.component.css":
/*!*********************************************!*\
  !*** ./src/app/heroes/heroes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/*!**********************************************!*\
  !*** ./src/app/heroes/heroes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>My Heroes</h2>\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\"\n    [class.selected]=\"hero === selectedHero\"\n    (click)=\"onSelect(hero)\">\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n  </li>\n</ul>\n\n<div *ngIf=\"selectedHero\">\n\n  <h2>{{ selectedHero.name | uppercase }} Details</h2>\n  <div><span>id:{{selectedHero.id}}</span></div>\n  <div class=\"form-control\">\n    <label>name:\n      <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\">\n    </label>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_heroes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-heroes */ "./src/app/mock-heroes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesComponent = /** @class */ (function () {
    function HeroesComponent() {
        this.heroes = _mock_heroes__WEBPACK_IMPORTED_MODULE_1__["HEROES"];
    }
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/menu-lateral/menu-lateral.component.css":
/*!*********************************************************!*\
  !*** ./src/app/menu-lateral/menu-lateral.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu-lateral/menu-lateral.component.html":
/*!**********************************************************!*\
  !*** ./src/app/menu-lateral/menu-lateral.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<!-- <div class=\"sidebar float-left\" id=\"menuLateral\">\n  <ul id=\"batiment\" class=\" text-left list-group flex-column\">\n    <li class=\"list-group-item\">\n    <i class=\"fa fa-home \"></i>  Batiment\n    </li>\n    <li class=\"list-group-item\">\n      BatimentA\n    </li>\n    <li class=\"list-group-item\">\n      BatimentB\n    </li>\n    <li class=\"list-group-item\">\n      BatimentC\n    </li>\n\n    <li class=\"list-group-item\">\n        <i class=\"fa fa-desktop\"></i> Lots\n      </li>\n      <li class=\"list-group-item\">\n        LotA\n      </li>\n      <li class=\"list-group-item\">\n        LotB\n      </li>\n      <li class=\"list-group-item\">\n        LotC\n      </li>\n\n      <li class=\"list-group-item\">\n          <i class=\"fa fa-calendar\"></i>   Siots\n        </li>\n        <li class=\"list-group-item\">\n          SiotA\n        </li>\n        <li class=\"list-group-item\">\n          SiotB\n        </li>\n        <li class=\"list-group-item\">\n          SiotC\n        </li>\n  </ul>\n</div> -->\n\n  <!-- <div class=\"col-md-2 float-left width\" id=\"menuLateral\">\n    <div class=\"list-group card text-center \" >\n      <a href=\"batiment\" class=\"list-group-item d-inline-block\" data-parent=\"#menuLateral\">\n         <i class=\"fa fa-dashboard\"></i> <span class=\"d-none d-md-inline\">Batiment</span> </a>\n         \n         <div class=\"collapse\" id=\"menu1\">\n           <a href=\"batiment1\" class=\"list-group-item\" data-toggle=\"collapse\" aria-expanded=\"false\">Batiment1</a>\n         </div>\n    </div>\n  </div> -->\n  <div class=\"card menu_lateral2\" style=\"margin-top: 45px;\">\n<div class=\"card\">\n    <div class=\"card-heading bg-primary\">\n      <h4 class=\"card-title\">\n        <a data-toggle=\"collapse\" href=\"#collapse1\"> <i class=\"fa fa-home\"></i> Mes Batiments</a>\n      </h4>\n    </div>\n    <div id=\"collapse1\" class=\"panel-collapse collapse\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"><i class=\"fa fa-lightbulb-o\"></i> Batiment Chair A</li>\n        <li class=\"list-group-item\"><i class=\"fa fa-lightbulb-o\"></i> Batiment Chair B</li>\n        <li class=\"list-group-item\"><i class=\"fa fa-lightbulb-o\"></i> Batiment Chair C</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card\">\n      <div class=\"card-heading bg-primary\">\n        <h4 class=\"card-title\">\n          <a data-toggle=\"collapse\" href=\"#collapse2\"> <i class=\"fa fa-gears\" ></i> Mes Lots</a>\n        </h4>\n      </div>\n      <div id=\"collapse2\" class=\"panel-collapse collapse\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\"> <i class=\"fa fa-cog\"></i> LotsA</li>\n          <li class=\"list-group-item\"><i class=\"fa fa-cog\"></i> LotsB</li>\n          <li class=\"list-group-item\"><i class=\"fa fa-cog\"></i> LotsC</li>\n        </ul>\n        \n      </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-heading bg-primary\">\n          <h4 class=\"card-title\">\n            <a data-toggle=\"collapse\" href=\"#collapse3\"><i class=\"fa fa-cube\"\n              ></i> Mes Silots</a>\n          </h4>\n        </div>\n        <div id=\"collapse3\" class=\"panel-collapse collapse\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\"> <i class=\"fa fa-life-ring\"></i> Silot A</li>\n            <li class=\"list-group-item\"><i class=\"fa fa-life-ring\"></i> Silot B</li>\n            <li class=\"list-group-item\"><i class=\"fa fa-life-ring\"></i> Silot C</li>\n          </ul>\n         \n        </div>\n      </div>\n    </div>\n  \n"

/***/ }),

/***/ "./src/app/menu-lateral/menu-lateral.component.ts":
/*!********************************************************!*\
  !*** ./src/app/menu-lateral/menu-lateral.component.ts ***!
  \********************************************************/
/*! exports provided: MenuLateralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLateralComponent", function() { return MenuLateralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuLateralComponent = /** @class */ (function () {
    function MenuLateralComponent() {
    }
    MenuLateralComponent.prototype.ngOnInit = function () {
    };
    MenuLateralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-lateral',
            template: __webpack_require__(/*! ./menu-lateral.component.html */ "./src/app/menu-lateral/menu-lateral.component.html"),
            styles: [__webpack_require__(/*! ./menu-lateral.component.css */ "./src/app/menu-lateral/menu-lateral.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuLateralComponent);
    return MenuLateralComponent;
}());



/***/ }),

/***/ "./src/app/mock-heroes.ts":
/*!********************************!*\
  !*** ./src/app/mock-heroes.ts ***!
  \********************************/
/*! exports provided: HEROES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEROES", function() { return HEROES; });
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


/***/ }),

/***/ "./src/app/redirect-reporting/redirect-reporting.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/redirect-reporting/redirect-reporting.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/redirect-reporting/redirect-reporting.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/redirect-reporting/redirect-reporting.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-top: 16px;\">\n    <div class=\"offset-9\">\n      <div class=\"col\" style=\"color:rgba(224, 143, 21, 0.877);\">\n        <i class=\"fa fa-bell-o\"></i>\n        <b> Rappels</b>\n      </div>\n    </div>\n    <div class=\"col\">\n      <!--   -->\n      <div class=\"dropdown\" style=\"color:limegreen;\">\n        <p class=\"dropdown-toggle\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"fa fa-user-o\"></i>\n          <b> User </b>\n        </p>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\n          <button class=\"dropdown-item\" type=\"button\">\n            <i class=\"fa fa-area-chart\" style=\"font-size:12px\"></i> Reporting Data</button>\n          <button class=\"dropdown-item\" type=\"button\">\n            <i class=\"fa fa-line-chart\"></i> Graphes</button>\n          <button class=\"dropdown-item\" type=\"button\">\n            <i class=\"fa fa-building\" style=\"font-size:14px\"></i> All Batiments</button>\n          <button class=\"dropdown-item\" type=\"button\">\n            <i class=\"fa fa-sign-out\" style=\"font-size:17px\"></i> Deconnexion</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr>\n\n\n<div  style=\"margin-top: 20px; font-family: Exo; text-align: center; color:#0080ff; font-size:30px;\ntext-decoration: underline;\">\n   Redirection Reporting des Données\n    \n    </div>\n\n<div class=\"container\"  style=\"margin-top: 20px; font-family: Exo;\">\n  Vous pouvez aux informations de reportage des données saisis recemment ou en archives.\n  Afficher les graphes de reportage sur ces données. \n  Ces graphes montre l'evolution des activité de la ferme tel que:La consommation en eau, la consommation en aliment,\n  la santé des animaux,le facteur performance c'est à dire la productivité en paralléle avec l'optimisation des ressources \n  de la ferme...\n    \n    </div>\n\n\n<div class=\"col-md-3 offset-md-5\" style=\"margin-top: 30px;\">\n  \n    <button class=\"btn btn-success\" routerLink=\"/reportingData\">REPORTING DATA</button>\n  </div>"

/***/ }),

/***/ "./src/app/redirect-reporting/redirect-reporting.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/redirect-reporting/redirect-reporting.component.ts ***!
  \********************************************************************/
/*! exports provided: RedirectReportingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectReportingComponent", function() { return RedirectReportingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RedirectReportingComponent = /** @class */ (function () {
    function RedirectReportingComponent() {
    }
    RedirectReportingComponent.prototype.ngOnInit = function () {
    };
    RedirectReportingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redirect-reporting',
            template: __webpack_require__(/*! ./redirect-reporting.component.html */ "./src/app/redirect-reporting/redirect-reporting.component.html"),
            styles: [__webpack_require__(/*! ./redirect-reporting.component.css */ "./src/app/redirect-reporting/redirect-reporting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RedirectReportingComponent);
    return RedirectReportingComponent;
}());



/***/ }),

/***/ "./src/app/reporting-data/reporting-data.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reporting-data/reporting-data.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reporting-data/reporting-data.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reporting-data/reporting-data.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-entete-menu></app-entete-menu>\n<div class=\"container row offset-2 mainMenu\" style=\"margin-top:-20px;\">\n    \n  <ul class=\"nav nav-tabs mainMenu\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#perf_sante\" >\n        <i class=\"fa fa-rocket\" style=\"font-size:14px;\" ></i>\n        <b> Performance Santé</b>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#agenda\">\n        <i class=\"fa fa-calendar\" style=\"font-size:14px;\"></i>\n        <b> Agenda</b>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#traitement\">\n        <i class=\"fa fa-tasks\" style=\"font-size:14px;\"></i>\n        <b> Traitement</b>\n      </a>\n    </li>\n  </ul>\n  \n</div>\n\n<div style=\"margin-top: 0px;\">\n  <div class=\" row offset-6\">\n    <div class=\"col\">\n      <i class=\"fa fa-cogs\" style=\"color:rgb(42, 180, 42); font-size:17px;\"> Ajouter</i>\n      <div class=\"d-flex flex-row\">\n        <div class=\"p-1\" style=\"margin-top: -10px;\">\n          <a class=\"link\" routerLink=\"/formSaisiInfo\"> Données |</a>\n        </div>\n        <div class=\"p-1\" style=\"margin-top: -10px;\">\n          <a class=\"link\" routerLink=\"/\"> Importer</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <i class=\"fa fa-file\" style=\"color: rgba(224, 143, 21, 0.877); font-size:14px;\"> Exporter</i>\n      <div class=\"d-flex flex-row\">\n        <div class=\"p-1\" style=\"margin-top: -10px;\">\n          <a class=\"link\" routerLink=\"/\"> Graphes |</a>\n        </div>\n        <div class=\"p-1\" style=\"margin-top: -10px;\">\n          <a class=\"link\" routerLink=\"/\">Docs publics</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <i class=\"fa fa-folder-open-o\" style=\"color: mediumorchid; font-size:17px;\"> Archiver</i>\n      <div class=\"d-flex flex-row\">\n        <div class=\"p-1\" style=\"margin-top: -10px;\">\n          <a class=\"link\" routerLink=\"/\">Mes Lots</a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-2\">\n\n      <app-menu-lateral></app-menu-lateral>\n  </div>\n  <div class=\"col-md-10\">\n<div class=\" row offset-3\" style=\"margin-top:0px\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#informations\" style=\"color:rgb(42, 180, 42);\">\n        <b>\n          <i class=\"fa fa-info-circle\" style=\"color:rgb(42, 180, 42); font-size:20px;\"></i> Informations</b>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#graphique\" style=\"color:rgba(224, 143, 21, 0.877);\">\n        <b>\n          <i class=\"fa fa-line-chart\" style=\"color:rgba(224, 143, 21, 0.877); font-size:20px;\"></i> Graphiques</b>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#donnesquot\" style=\"color:#3d82c7;\">\n        <b>\n          <i class=\"fa fa-window-maximize\" style=\"color:#3d82c7; font-size:20px;\"></i> Données quotidiennes</b>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#donneesHebdo\" style=\"color:rgba(165, 86, 148, 0.733)\">\n        <b>\n          <i class=\"fa fa-window-restore\" style=\"font-size:20px;\"></i> Données Hebdomadaire</b>\n      </a>\n    </li>\n  </ul>\n</div>\n<div class=\"tab-pane fade show active\" id=\"informations\" style=\"margin-top:px;margin-bottom:5px;\">\n  <div class=\"row \">\n    <div class=\"col-md-12\">\n      <div class=\"card panneaux\">\n        <div class=\"card-header bg-primary text-center\" style=\"color: #ffffff;\">\n          <b>Informations de cumules</b>\n        </div>\n\n        <div class=\"card-body row col-md-12 text-right\">\n          <div class=\"col-md-4 text-right\">\n            <div>\n              <label class=\"text-right\" for=\"age\">Ages de animaux</label>\n            </div>\n\n            <div>\n              <label for=\"ndAnimaux_Lot\">Nombre d'animaux au depart du lot</label>\n            </div>\n\n            <div>\n              <label for=\"ndAnimaux_Pres\">Nombre d'animaux présent</label>\n            </div>\n\n            <div>\n              <label for=\"mortalite\">La mortalité</label>\n            </div>\n\n            <div>\n              <label for=\"taux_mortalite\">Le taux de mortalité</label>\n            </div>\n\n            <div>\n              <label for=\"temps_lot\">Temps passé sur lot</label>\n            </div>\n\n            <div>\n              <label for=\"mortalite\">La mortalité</label>\n            </div>\n\n          </div>\n\n          <div class=\"col-md-6 text-right\">\n            <div>\n              <label for=\"cumul_aliment\">Cumule de consommation d'aliments</label>\n            </div>\n\n            <div>\n              <label for=\"cumule_poule\">Cumule d'aliment par poule</label>\n            </div>\n\n            <div>\n              <label for=\"cumil_eau\">Cumule de consommation d'eau</label>\n            </div>\n\n            <div>\n              <label for=\"mortalite\">La mortalité</label>\n            </div>\n\n            <div>\n              <label for=\"taux_mortalite\">Le taux de mortalité</label>\n            </div>\n            <div>\n              <label for=\"temps_lot\">Temps passé sur lot</label>\n            </div>\n\n            <div>\n              <label for=\"mortalite\">La mortalité</label>\n            </div>\n\n          </div>\n          <!-- <div class=\"row offset-5\">\n                            <div class=\"btn btn-primary col-md-3 btn-sm\">\n                                <i class=\"fa fa-edit\"></i> Editer\n    \n                            </div>\n                        </div> -->\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<hr>\n<div class=\"row panneaux\" style=\"margin-top: -10px;\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header bg-primary text-center\" style=\"color: #ffffff;\">\n        <b>Dernière données saisies</b>\n      </div>\n      <div class=\"card-body row col-md-12 text-right\">\n        <div class=\"col-md-4 text-right\">\n          <div>\n            <label for=\"date\">Date</label>\n          </div>\n          <div>\n            <label for=\"ndAnimaux_Lot\">Mortalité</label>\n          </div>\n          <div>\n            <label for=\"mortalite\">Température du batiment</label>\n          </div>\n          \n         \n        </div>\n        <div class=\"col-md-6 text-right\">\n          <div>\n            <label for=\"qte_ali_indiv\">Quantite d'aliment distribuée par individu</label>\n          </div>\n          <div>\n            <label for=\"type_ali\" class=\"text-right\">Type d'aliment</label>\n          </div>\n         \n          <div>\n            <label for=\"qte_indiv\">Quantite distribuée par individu</label>\n          </div>\n         \n          \n        \n        </div>\n        <!-- <div class=\"row offset-5\">\n                                                <div class=\"btn btn-primary col-md-3 btn-sm\">\n                                                    <i class=\"fa fa-edit\"></i> Editer\n                        \n                                                </div>\n                                            </div> -->\n\n      </div>\n    </div>\n\n  </div>\n\n</div>\n</div>\n</div>\n<hr>\n\n"

/***/ }),

/***/ "./src/app/reporting-data/reporting-data.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reporting-data/reporting-data.component.ts ***!
  \************************************************************/
/*! exports provided: ReportingDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingDataComponent", function() { return ReportingDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportingDataComponent = /** @class */ (function () {
    function ReportingDataComponent() {
    }
    ReportingDataComponent.prototype.ngOnInit = function () {
    };
    ReportingDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporting-data',
            template: __webpack_require__(/*! ./reporting-data.component.html */ "./src/app/reporting-data/reporting-data.component.html"),
            styles: [__webpack_require__(/*! ./reporting-data.component.css */ "./src/app/reporting-data/reporting-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportingDataComponent);
    return ReportingDataComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alhassanecamara\testApp2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map