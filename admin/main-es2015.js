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

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





class AuthGuard {
    constructor(myRoute) {
        this.myRoute = myRoute;
    }
    canActivate(next, state) {
        let userInfo = sessionStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].TokenValue);
        if ((userInfo != null)) {
            return true;
        }
        else {
            this.myRoute.navigate(['/login']);
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_jwt/error.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/_jwt/error.interceptor.ts ***!
  \*******************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common/common.service */ "./src/app/services/common/common.service.ts");









class ErrorInterceptor {
    constructor(router, commonService) {
        this.router = router;
        this.commonService = commonService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            console.log("Err cal", data);
            if (data.body && data.body.code == 400) {
                this.commonService.openDialog('error', data.body.message);
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(data.body.message);
            }
            else {
                return data.body;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            var _a, _b, _c, _d, _e, _f;
            if (((_a = err.error) === null || _a === void 0 ? void 0 : _a.data) != null && ((_b = err.error) === null || _b === void 0 ? void 0 : _b.data) != undefined) {
                if (typeof err.error.data == 'object') {
                    var errr = '';
                    Object.keys(err.error.data).forEach(key => {
                        if (typeof err.error.data[key] == 'object') {
                            Object.keys(err.error.data[key]).forEach(key2 => {
                                errr = err.error.data[key][key2];
                            });
                        }
                    });
                    if (errr != '') {
                        this.commonService.openDialog('error', errr);
                    }
                }
            }
            else {
                var error = ((_c = err.error) === null || _c === void 0 ? void 0 : _c.error_description) || ((_d = err.error) === null || _d === void 0 ? void 0 : _d.message) || err.statusText || (err === null || err === void 0 ? void 0 : err.message);
                this.commonService.openDialog('error', error);
            }
            if (err.status === 401) {
                this.commonService.openDialog('error', 'Not authorized');
                sessionStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TokenValue);
                this.router.navigate(['/login']);
            }
            var error = ((_e = err.error) === null || _e === void 0 ? void 0 : _e.error_description) || ((_f = err.error) === null || _f === void 0 ? void 0 : _f.message) || err.statusText || (err === null || err === void 0 ? void 0 : err.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_jwt/jwt.interceptor.ts":
/*!*****************************************!*\
  !*** ./src/app/_jwt/jwt.interceptor.ts ***!
  \*****************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






class JwtInterceptor {
    constructor(spinner) {
        this.spinner = spinner;
    }
    intercept(request, next) {
        let currentUser = JSON.parse(sessionStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TokenValue));
        this.spinner.show();
        if (currentUser && currentUser.token) {
            request = request.clone({ setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                } });
            this.spinner.show();
            return next
                .handle(request)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.spinner.hide()));
        }
        else {
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.spinner.hide()));
        }
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: Approutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approutes", function() { return Approutes; });
/* harmony import */ var src_app_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");



const Approutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_1__["FullComponent"],
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            {
                path: 'dashboard', canActivate: [src_app_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
                loadChildren: () => Promise.all(/*! import() | dashboards-dashboard-module */[__webpack_require__.e("default~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("dashboards-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboards/dashboard.module */ "./src/app/dashboards/dashboard.module.ts")).then(m => m.DashboardModule)
            },
            // {
            //   path: 'starter',
            //   loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
            // },
            // {
            //   path: 'component',
            //   loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
            // },
            // { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
            // { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
            // { path: 'forms', loadChildren: () => import('./form/forms.module').then(m => m.FormModule) },
            // { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
            // { path: 'tables', loadChildren: () => import('./table/tables.module').then(m => m.TablesModule) },
            // { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartModule) },
            // {
            //   path: 'widgets',
            //   loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
            // },
            // { path: 'ecom', loadChildren: () => import('./ecommerce/ecom.module').then(m => m.EcomModule) },
            // {
            //   path: 'timeline',
            //   loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
            // },
            // {
            //   path: 'extra-component',
            //   loadChildren:
            //     () => import('./extra-component/extra-component.module').then(m => m.ExtraComponentModule)
            // },
            // { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
            // {
            //   path: 'apps/email',
            //   loadChildren: () => import('./apps/email/mail.module').then(m => m.MailModule)
            // },
            // { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
            {
                path: 'pages',
                loadChildren: () => Promise.all(/*! import() | pages-pages-module */[__webpack_require__.e("default~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/pages/pages.module.ts")).then(m => m.PagesModule)
            },
        ]
    },
    {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"],
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | authentication-authentication-module */[__webpack_require__.e("common"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts")).then(m => m.AuthenticationModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");





class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "default", "color", "#008EB0", "type", "ball-clip-rotate", 3, "fullScreen"], [2, "color", "#008EB0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/header-navigation/navigation.component */ "./src/app/shared/header-navigation/navigation.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _services_http_api_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/http/api.list */ "./src/app/services/http/api.list.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_jwt_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/_jwt/jwt.interceptor */ "./src/app/_jwt/jwt.interceptor.ts");
/* harmony import */ var src_app_jwt_error_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/_jwt/error.interceptor */ "./src/app/_jwt/error.interceptor.ts");






// import { InterceptorService } from 'src/app/services/interceptor/interceptor.service'



























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
        },
        // { 
        //     provide: HTTP_INTERCEPTORS, 
        //     useClass: InterceptorService, 
        //     multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: src_app_jwt_error_interceptor__WEBPACK_IMPORTED_MODULE_26__["ErrorInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: src_app_jwt_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__["JwtInterceptor"], multi: true },
        _services_http_api_list__WEBPACK_IMPORTED_MODULE_23__["apilist"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_18__["Approutes"], { useHash: false }),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"].forRoot(),
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0' }),
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__["SpinnerComponent"],
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__["FullComponent"],
        _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__["BlankComponent"],
        _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__["NavigationComponent"],
        _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbComponent"],
        _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                    _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__["SpinnerComponent"],
                    _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__["FullComponent"],
                    _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__["BlankComponent"],
                    _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__["NavigationComponent"],
                    _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbComponent"],
                    _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_18__["Approutes"], { useHash: false }),
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"].forRoot(),
                    _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0' }),
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    },
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
                        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
                    },
                    // { 
                    //     provide: HTTP_INTERCEPTORS, 
                    //     useClass: InterceptorService, 
                    //     multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: src_app_jwt_error_interceptor__WEBPACK_IMPORTED_MODULE_26__["ErrorInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: src_app_jwt_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__["JwtInterceptor"], multi: true },
                    _services_http_api_list__WEBPACK_IMPORTED_MODULE_23__["apilist"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layouts/blank/blank.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class BlankComponent {
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(); };
BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["app-blank-layout"]], decls: 1, vars: 0, template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank-layout',
                templateUrl: './blank.component.html',
                styleUrls: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/header-navigation/navigation.component */ "./src/app/shared/header-navigation/navigation.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












function FullComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
} }
function FullComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Layout Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.options.theme = ctx_r2.options.theme == "light" ? "dark" : "light"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dark Theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.options.sidebarpos = ctx_r4.options.sidebarpos == "fixed" ? "absolute" : "fixed"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fixed Sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.options.headerpos = ctx_r5.options.headerpos == "fixed" ? "absolute" : "fixed"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fixed Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.options.boxed = ctx_r6.options.boxed == "full" ? "boxed" : "full"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Boxed Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.options.dir = ctx_r7.options.dir == "rtl" ? "ltr" : "rtl"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "RTL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sidebar Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_31_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.options.sidebartype = $event; })("change", function FullComponent_ng_template_31_Template_input_change_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.options.sidebartype = "mini-sidebar"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mini Sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_31_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.options.sidebartype = $event; })("change", function FullComponent_ng_template_31_Template_input_change_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.options.sidebartype = "iconbar"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Icon Sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_31_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.options.sidebartype = $event; })("change", function FullComponent_ng_template_31_Template_input_change_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.options.sidebartype = "overlay"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Overlay Sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_31_Template_input_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.options.sidebartype = $event; })("change", function FullComponent_ng_template_31_Template_input_change_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.options.sidebartype = "full"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Full Sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Logo Backgrounds");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.options.logobg = "skin1"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.options.logobg = "skin2"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.options.logobg = "skin3"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.options.logobg = "skin4"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.options.logobg = "skin5"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.options.logobg = "skin6"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Navbar Backgrounds");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.options.navbarbg = "skin1"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.options.navbarbg = "skin2"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.options.navbarbg = "skin3"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.options.navbarbg = "skin4"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.options.navbarbg = "skin5"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.options.navbarbg = "skin6"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sidebar Backgrounds");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.options.sidebarbg = "skin1"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_81_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.options.sidebarbg = "skin2"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.options.sidebarbg = "skin3"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.options.sidebarbg = "skin4"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_87_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.options.sidebarbg = "skin5"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.options.sidebarbg = "skin6"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.theme == "dark" ? "checked" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.sidebarpos == "fixed" ? "checked" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.headerpos == "fixed" ? "checked" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.boxed == "boxed" ? "checked" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.dir == "rtl" ? "checked" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);
} }
const _c0 = function (a0) { return { "show-sidebar": a0 }; };
const _c1 = function (a0) { return { "show-service-panel": a0 }; };
class FullComponent {
    constructor(router) {
        this.router = router;
        this.config = {};
        this.tabStatus = 'justified';
        this.isCollapsed = false;
        this.showSettings = false;
        this.showMobileMenu = false;
        this.expandLogo = false;
        this.options = {
            theme: 'light',
            dir: 'ltr',
            layout: 'vertical',
            sidebartype: 'full',
            sidebarpos: 'fixed',
            headerpos: 'fixed',
            boxed: 'full',
            navbarbg: 'skin6',
            sidebarbg: 'skin5',
            logobg: 'skin5' // six possible values: skin(1/2/3/4/5/6)
        };
    }
    Logo() {
        this.expandLogo = !this.expandLogo;
    }
    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
        this.defaultSidebar = this.options.sidebartype;
        this.handleSidebar();
    }
    onResize(event) {
        this.handleSidebar();
    }
    handleSidebar() {
        this.innerWidth = window.innerWidth;
        switch (this.defaultSidebar) {
            case 'full':
            case 'iconbar':
                if (this.innerWidth < 1170) {
                    this.options.sidebartype = 'mini-sidebar';
                }
                else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            case 'overlay':
                if (this.innerWidth < 767) {
                    this.options.sidebartype = 'mini-sidebar';
                }
                else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            default:
        }
    }
    toggleSidebarType() {
        switch (this.options.sidebartype) {
            case 'full':
            case 'iconbar':
                this.options.sidebartype = 'mini-sidebar';
                break;
            case 'overlay':
                this.showMobileMenu = !this.showMobileMenu;
                break;
            case 'mini-sidebar':
                if (this.defaultSidebar === 'mini-sidebar') {
                    this.options.sidebartype = 'full';
                }
                else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            default:
        }
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], hostBindings: function FullComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function FullComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 33, vars: 25, consts: [["id", "main-wrapper", "data-layout", "vertical", "data-sidebartype", "full", 3, "ngClass", "dir"], [1, "topbar"], [1, "d-flex", "top-navbar", "navbar-expand-md", 3, "ngClass"], [1, "navbar-header", 3, "ngClass"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-md-none", 3, "click"], [3, "ngClass"], ["routerLink", "javascript:void()", 1, "navbar-brand"], [1, "logo-icon"], ["src", "assets/images/logo-icon.svg", "alt", "homepage", 1, "light-logo", "logo-sidebar"], [1, "logo-text", "pl-1"], ["src", "assets/images/logo-content.svg", "alt", "homepage", 1, "logo-content"], ["href", "javascript:void(0)", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", 1, "topbartoggler", "d-block", "d-md-none", "waves-effect", "waves-light", 3, "click"], [1, "ti-more"], ["id", "navbarSupportedContent", 1, "navbar-collapse", "collapse", 3, "ngbCollapse"], [1, "w-100", 3, "toggleSidebar"], [1, "left-sidebar", "sidebar-bg", 3, "mouseover", "mouseout"], [1, "scroll-sidebar", 3, "perfectScrollbar"], [1, "page-wrapper"], [1, "container-fluid"], [1, "footer", "text-center"], [1, "customizer", "d-none", 3, "ngClass"], ["href", "javascript:void(0)", 1, "service-panel-toggle", 3, "click"], [1, "fa", "fa-spin", "fa-cog"], [1, "customizer-body", "custom-pills", 3, "perfectScrollbar"], ["type", "pills", 3, "justify"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [1, "chat-windows"], [1, "mdi", "mdi-wrench", "font-20"], [1, "p-15", "border-bottom"], [1, "font-medium", "m-b-20", "m-t-10"], [1, "custom-control", "custom-checkbox", "m-t-10"], ["type", "checkbox", "name", "theme-view", "id", "theme-view", 1, "custom-control-input", 3, "change"], ["for", "theme-view", 1, "custom-control-label"], ["type", "checkbox", "name", "sidebar-position", "id", "sidebar-position", 1, "custom-control-input", 3, "change"], ["for", "sidebar-position", 1, "custom-control-label"], ["type", "checkbox", "name", "header-position", "id", "header-position", 1, "custom-control-input", 3, "change"], ["for", "header-position", 1, "custom-control-label"], ["type", "checkbox", "name", "boxed-layout", "id", "boxed-layout", 1, "custom-control-input", 3, "change"], ["for", "boxed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "rtl-layout", "id", "rtl-layout", 1, "custom-control-input", 3, "change"], ["for", "rtl-layout", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "m-t-10"], ["type", "radio", "name", "sidebar", "value", "mini-sidebar", "id", "minisidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "minisidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "iconbar", "id", "iconsidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "iconsidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "overlay", "id", "overlaysidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "overlaysidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "full", "id", "fullsidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "fullsidebar", 1, "custom-control-label"], [1, "theme-color"], [1, "theme-item"], ["href", "javascript:void(0)", "data-logobg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin6", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin6", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin6", 1, "theme-link", 3, "click"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_4_listener() { return ctx.showMobileMenu = !ctx.showMobileMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_11_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-navigation", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSidebar", function FullComponent_Template_app_navigation_toggleSidebar_14_listener() { return ctx.toggleSidebarType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "aside", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function FullComponent_Template_aside_mouseover_15_listener() { return ctx.Logo(); })("mouseout", function FullComponent_Template_aside_mouseout_15_listener() { return ctx.Logo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00A9 - 2021 All Rights Reserved by Zeepo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "aside", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_25_listener() { return ctx.showSettings = !ctx.showSettings; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ngb-tabset", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FullComponent_ng_template_30_Template, 1, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FullComponent_ng_template_31_Template, 90, 9, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.showMobileMenu))("dir", ctx.options.dir);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-theme", ctx.options.theme)("data-layout", ctx.options.layout)("data-sidebartype", ctx.options.sidebartype)("data-sidebar-position", ctx.options.sidebarpos)("data-header-position", ctx.options.headerpos)("data-boxed-layout", ctx.options.boxed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-navbarbg", ctx.options.navbarbg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.options.navbarbg == "skin6" ? "navbar-light" : "navbar-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.expandLogo ? "expand-logo" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-logobg", ctx.options.logobg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showMobileMenu ? "ti-close" : "ti-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-navbarbg", ctx.options.navbarbg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-sidebarbg", ctx.options.sidebarbg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.showSettings));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("justify", ctx.tabStatus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Dir"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]], styles: [".logo-svg[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-right: 5px;\n}\n\n.logo-sidebar[_ngcontent-%COMP%] {\n  width: 45px;\n}\n\n.logo-content[_ngcontent-%COMP%] {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUN6Qjs7QUFJSTtFQUNJLFdBQVc7QUFEbkI7O0FBSUk7RUFDSSxZQUFZO0FBRHBCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmxvZ28tc3ZnIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIC8vICAgICAuc3Qwe2ZpbGw6I0ZCQjAzQjtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBcbiAgICAubG9nby1zaWRlYmFyIHtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgfVxuICAgIFxuICAgIC5sb2dvLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full-layout',
                templateUrl: './full.component.html',
                styleUrls: ['./full.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/services/common/common.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/common/common.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);



class CommonService {
    presentsToast(type, position, message) {
        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
            toast: true,
            position: position,
            timerProgressBar: true,
            showCancelButton: false,
            showCloseButton: true,
            showConfirmButton: false,
            timer: 3000
        });
        Toast.fire({
            title: message,
            icon: type
        });
    }
    confirmToast() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    }
    openDialog(type, message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Error!',
            text: message,
            icon: type,
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Close'
        });
    }
    MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    checkType(file_type) {
        let split = file_type.split("/");
        return split[0];
    }
    noSpace(event) {
        if (event.which === 32 && !event.target.value.length)
            event.preventDefault();
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/http/api.list.ts":
/*!*******************************************!*\
  !*** ./src/app/services/http/api.list.ts ***!
  \*******************************************/
/*! exports provided: apilist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apilist", function() { return apilist; });
class apilist {
    constructor() {
        this.login = 'auth/admin/login/';
    }
}


/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







class BreadcrumbComponent {
    constructor(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.activatedRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(route => route.outlet === 'primary'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(route => route.data))
            .subscribe(event => {
            this.titleService.setTitle(event['title']);
            this.pageInfo = event;
        });
    }
    ngOnInit() { }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { layout: "layout" }, decls: 6, vars: 1, consts: [[1, "page-breadcrumb"], [1, "row"], [1, "col-5", "align-self-center"], [1, "page-title"], [1, "d-flex", "align-items-center"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageInfo == null ? null : ctx.pageInfo.title);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, { layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/header-navigation/navigation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function NavigationComponent_ng_template_6_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bike Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bike ID : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " #4626462 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " is booked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 10:30 AM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-circle ", notification_r6.btn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r6.icon);
} }
function NavigationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_6_Template_button_click_0_listener() { const modal_r4 = ctx.$implicit; return modal_r4.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationComponent_ng_template_6_a_8_Template, 13, 6, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx_r1.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.notifications);
} }
function NavigationComponent_a_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bike Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bike ID : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " #4626462 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " is booked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 10:30 AM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-circle ", notification_r8.btn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r8.icon);
} }
function NavigationComponent_a_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bike Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bike ID : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " #4626462 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " is booked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 10:30 AM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-circle ", notification_r9.btn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r9.icon);
} }
class NavigationComponent {
    constructor(modalService, router) {
        this.modalService = modalService;
        this.router = router;
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = {};
        this.showSearch = false;
        // This is for Notifications
        this.notifications = [
            {
                btn: 'btn-danger',
                icon: 'ti-link',
                title: 'Luanch Admin',
                subject: 'Just see the my new admin!',
                time: '9:30 AM'
            },
            {
                btn: 'btn-success',
                icon: 'ti-calendar',
                title: 'Event today',
                subject: 'Just a reminder that you have event',
                time: '9:10 AM'
            },
            {
                btn: 'btn-info',
                icon: 'ti-settings',
                title: 'Settings',
                subject: 'You can customize this template as you want',
                time: '9:08 AM'
            },
            {
                btn: 'btn-primary',
                icon: 'ti-user',
                title: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
        // This is for Mymessages
        this.mymessages = [
            {
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:30 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'I have sung a song! See you at',
                time: '9:10 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'I am a singer!',
                time: '9:08 AM'
            },
            {
                useravatar: 'assets/images/users/4.jpg',
                status: 'offline',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
    }
    addBikeModal(addBike) {
        this.modalService.open(addBike, { backdropClass: 'light-blue-backdrop', centered: true, size: 'lg', backdrop: "static" });
    }
    logout() {
        sessionStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TokenValue);
        this.router.navigate(['/login']);
        var rememberMe = localStorage.getItem('rememberMe');
        var remembermeDetails = localStorage.getItem('userEmail_pass');
        localStorage.clear();
        // this.router.navigate(['/authentication/login']);
        if (!(rememberMe == null || rememberMe == undefined || rememberMe == '')) {
            localStorage.setItem('rememberMe', rememberMe);
        }
        if (!(remembermeDetails == null || remembermeDetails == undefined || remembermeDetails == '')) {
            localStorage.setItem('userEmail_pass', remembermeDetails);
        }
        this.router.navigateByUrl('/login');
    }
    ngAfterViewInit() { }
    openBox() {
        let element = document.getElementById("notification");
        element.classList.toggle("sidebar_slide");
    }
    closeBox() {
        let element1 = document.getElementById("arrow-close").parentElement;
        element1.classList.remove("sidebar_slide");
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], outputs: { toggleSidebar: "toggleSidebar" }, decls: 56, vars: 3, consts: [[1, "navbar-nav", "float-left", "mr-auto"], [1, "nav-item", "d-none", "d-md-block"], ["href", "javascript:void(0)", "data-sidebartype", "mini-sidebar", 1, "nav-link", "sidebartoggler", "waves-effect", "waves-light", 3, "click"], [1, "sl-icon-menu", "font-20"], [1, "notify"], ["addBike", ""], [1, "navbar-nav", "float-right"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "id", "navbarDropdown2", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], [1, "flag-icon", "flag-icon-us", "font-18"], ["aria-labelledby", "navbarDropdown2", "ngbDropdownMenu", "", 1, "dropdown-menu-right"], ["href", "#", 1, "dropdown-item"], [1, "flag-icon", "flag-icon-us"], [1, "flag-icon", "flag-icon-fr"], [1, "flag-icon", "flag-icon-es"], [1, "flag-icon", "flag-icon-de"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "text-muted", "waves-effect", "waves-dark", "pro-pic"], ["src", "assets/images/users/1.jpg", "alt", "user", "width", "31", 1, "rounded-circle"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right", "user-dd"], [1, "with-arrow"], [1, "bg-primary"], [1, "d-flex", "no-block", "align-items-center", "p-15", "bg-primary", "text-white", "m-b-10"], [1, ""], ["src", "assets/images/users/1.jpg", "alt", "user", "width", "60", 1, "img-circle"], [1, "m-l-10"], [1, "m-b-0"], ["routerLink", "pages/profile", 1, "dropdown-item"], [1, "ti-user", "m-r-5", "m-l-5"], ["routerLink", "/changepassword", 1, "dropdown-item"], [1, "fas", "fa-lock", "m-r-5", "m-l-5"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-power-off", "m-r-5", "m-l-5"], ["id", "notification", 1, "aside-box", "mailbox", "shadow"], ["href", "javascript:void(0)", "id", "arrow-close", 3, "click"], [1, "mdi", "mdi-close", "font-20"], [1, "list-style-none"], [1, "message-center", "notifications", "pb-5", 3, "perfectScrollbar"], ["href", "javascript:void(0)", "class", "message-item", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "drop-title", "bg-primary", "text-white"], [1, "font-light"], [1, "message-center", "notifications", 3, "perfectScrollbar"], ["href", "javascript:void(0)", 1, "message-item"], [1, "mail-contnet"], [1, "message-title"], [1, "mail-desc"], [1, "time"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_2_listener() { return ctx.toggleSidebar.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationComponent_ng_template_6_Template, 9, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " French");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Spanish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " German");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Steave Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "varun@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_45_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "aside", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_49_listener() { return ctx.closeBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, NavigationComponent_a_54_Template, 13, 6, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, NavigationComponent_a_55_Template, 13, 6, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\");\n\n\n\n\n\n\n\n\n\n\n\n\n.aside-box[_ngcontent-%COMP%] {\n  width: 275px;\n  height: 100vh;\n  position: absolute;\n  background-color: #fff;\n  z-index: 999;\n  right: 0;\n  padding: 10px;\n  transform: translateX(285px);\n  transition: 0.3s ease-in-out;\n}\n.aside-box.sidebar_slide[_ngcontent-%COMP%] {\n  transform: translateX(0px);\n}\n.aside-box[_ngcontent-%COMP%]   .message-center[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyLW5hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsa0ZBQVk7QUFOWixnQ0FBQTtBQUlBLGdDQUFBO0FBSUEsZUFBQTtBQWdCQSxnQkFBQTtBQVNBLGlCQUFBO0FBZUEscUJBQUE7QUFJQSxTQUFBO0FBT0EsZ0JBQUE7QUFJQSx3QkFBQTtBQXNCQSxrQ0FBQTtBQUlBLGtDQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OzttQkNqRW1CO0FBMUJuQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCRHlHUTtFQ3hHUixZQUFXO0VBQ2IsUUFBUTtFQUNOLGFBQWE7RUFDYiw0QkFBNkI7RUFDN0IsNEJBQTRCO0FBNEJoQztBQXJDQTtFQVdRLDBCQUEyQjtBQThCbkM7QUF6Q0E7RUFjWSxhQUFhO0FBK0J6QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXItbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEN1c3RvbSBWYXJpYWJsZXNcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwJyk7XG5cbi8qVGhlbWUgQ29sb3JzKi9cblxuJHRoZW1lY29sb3I6ICMwMDhFQjA7XG4kdGhlbWVjb2xvci1kYXJrOiAjMDI4ZWUxO1xuJHRoZW1lY29sb3ItYWx0OiAjMjZjNmRhO1xuJHRoZW1lLWxpZ2h0OiAjZmZmO1xuJHRoZW1lLWRhcms6ICMyMTI1Mjk7XG4kbGluay1jb2xvcjogIzAyOGVlMTtcbiRza2luMTogIzM1ODdkODtcbiRza2luMjogI2Q4MzkzOTtcbiRza2luMzogIzE3YTk5MTtcbiRza2luNDogIzY2NTlmNztcbiRza2luNSA6I2ZmZjtcbjtcbiRza2luNjogIzAwOEVCMDtcblxuLypUb3BiYXIgQ29sb3JzKi9cblxuJHRvcGJhcjogJHRoZW1lLWxpZ2h0O1xuJHRvcGJhci1oZWlnaHQ6IDY0cHg7XG4kdG9wYmFyLW5hdmxpbmstcGFkZGluZzogMHB4IDE1cHg7XG4kdG9wYmFyLW5hdmxpbmstZm9udC1zaXplOiAwLjg3NXJlbTtcbiR0b3BiYXItbmF2bGluay1oZWlnaHQ6IDY0cHg7XG4kdG9wYmFyLW5hdmJyYW5kLXBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XG5cbi8qU2lkZWJhciBDb2xvcnMqL1xuXG4kc2lkZWJhcjogJHRoZW1lLWRhcms7XG4kc2lkZWJhci1hbHQ6ICNlOGVmZjA7XG4kc2lkZWJhci10ZXh0OiAjMzMzO1xuJHNpZGViYXItaWNvbnM6IHJnYigwLFxuMCxcbjApO1xuJHNpZGViYXItdGV4dC1kYXJrOiAjMjEyNTI5O1xuJHNpZGViYXItdGV4dC1kYXJrOiAjMjEyNTI5O1xuJHNpZGViYXItaWNvbnMtZGFyazogIzRmNTQ2NztcbiRzaWRlYmFyLXdpZHRoLWZ1bGw6IDI1MHB4O1xuJHNpZGViYXItd2lkdGgtaWNvbmJhcjogMTgwcHg7XG4kc2lkZWJhci13aWR0aC1taW5pOiA3MHB4O1xuXG4vKkJveGVkIGxheW91dCB3aWR0aCovXG5cbiRib3hlZC13aWR0aDogMTIwMHB4O1xuXG4vKlNoYWRvdyovXG5cbiRzaGFkb3c6IDFweCAwcHggMjBweCByZ2JhKDAsXG4wLFxuMCxcbjAuMDgpO1xuXG4vKiB0cmFuc2l0aW9ucyAqL1xuXG4kdHJhbnNpdGlvbnM6IDAuMnMgZWFzZS1pbjtcblxuLyogRGFyayB0cmFuc3BhcmVudCBiZyAqL1xuXG4kdHJhbnNwYXJlbnQtZGFyay1iZzogcmdiYSgwLFxuMCxcbjAsXG4wLjA1KTtcbiRsZnQ6IGxlZnQ7XG4kcmd0OiByaWdodDtcbiRjYXJkLWFsdDogI2U0ZTllZjtcbiVzcXVhcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuJXJvdGF0ZTQ1IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLy8gQm9vdHN0cmFwIG92ZXJyaWRlc1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cbi8qICpcbiAqIFRhYmxlIE9mIENvbnRlbnRcbiAqXG4gKiAgMS4gQ29sb3Igc3lzdGVtXG4gKiAgMi4gT3B0aW9uc1xuICogIDMuIEJvZHlcbiAqICA0LiBUeXBvZ3JhcGh5XG4gKiAgNS4gQnJlYWRjcnVtYnNcbiAqICA2LiBDYXJkc1xuICogIDcuIERyb3Bkb3duc1xuICogIDguIEJ1dHRvbnNcbiAqICA5LiBUeXBvZ3JhcGh5XG4gKiAgMTAuIFByb2dyZXNzIGJhcnNcbiAqICAxMS4gVGFibGVzXG4gKiAgMTIuIEZvcm1zXG4gKiAgMTQuIENvbXBvbmVudCAqL1xuXG4vL0NvbG9yIHN5c3RlbVxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYTFhYWIyICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNGY1NDY3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuJGJsdWU6ICNmYmIwM2IgIWRlZmF1bHQ7XG4kaW5kaWdvOiAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogIzc0NjBlZSAhZGVmYXVsdDtcbiRwaW5rOiAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogI2VmNmU2ZSAhZGVmYXVsdDtcbiRsaWdodC1pbmZvOiAjZTZmMmZhICFkZWZhdWx0O1xuJGxpZ2h0LWRhbmdlcjogI2ZhZTZlNiAhZGVmYXVsdDtcbiRsaWdodC1zdWNjZXNzOiAjZTlmOWY3ICFkZWZhdWx0O1xuJGxpZ2h0LXdhcm5pbmc6ICNmOGVmZDcgIWRlZmF1bHQ7XG4kb3JhbmdlOiAjZmI4YzAwICFkZWZhdWx0O1xuJHllbGxvdzogI2ZmYmMzNCAhZGVmYXVsdDtcbiRncmVlbjogIzIyYzZhYiAhZGVmYXVsdDtcbiRncmVlbjE6ICM1YWU1MGUgIWRlZmF1bHQ7XG4kdGVhbDogIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAjMDFjMGM4ICFkZWZhdWx0O1xuJHByaW1hcnk6IzAwOEVCMCAhZGVmYXVsdDtcbiR0ZXh0LW11dGVkOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kWWVsbG93LUdyZWVuOiNjZWRmNmE7XG4kY29sb3JzOiAoIGJsdWU6ICRibHVlLFxuaW5kaWdvOiAkaW5kaWdvLFxucHVycGxlOiAkcHVycGxlLFxucGluazogJHBpbmssXG5yZWQ6ICRyZWQsXG5vcmFuZ2U6ICRvcmFuZ2UsXG55ZWxsb3c6ICR5ZWxsb3csXG5ncmVlbjogJGdyZWVuLFxudGVhbDogJHRlYWwsXG5jeWFuOiAkY3lhbixcbndoaXRlOiAkd2hpdGUsXG5ncmF5OiAkZ3JheS02MDAsXG5ncmF5LWRhcms6ICRncmF5LTgwMCxcbmxpZ2h0LWluZm86ICRsaWdodC1pbmZvLFxubGlnaHQtZGFuZ2VyOiAkbGlnaHQtZGFuZ2VyLFxubGlnaHQtc3VjY2VzczogJGxpZ2h0LXN1Y2Nlc3MsXG5saWdodC13YXJuaW5nOiAkbGlnaHQtd2FybmluZyk7XG4kcHJpbWFyeTogJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICRibHVlICFkZWZhdWx0O1xuJHdhcm5pbmc6ICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogJGdyYXktODAwICFkZWZhdWx0O1xuJGN5YW46ICRjeWFuICFkZWZhdWx0O1xuJG9yYW5nZTogJG9yYW5nZSAhZGVmYXVsdDtcbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKCAoICdwcmltYXJ5JzogJHByaW1hcnksICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LCAnc3VjY2Vzcyc6ICRzdWNjZXNzLCAnaW5mbyc6ICRpbmZvLCAnd2FybmluZyc6ICR3YXJuaW5nLCAnZGFuZ2VyJzogJGRhbmdlciwgJ2xpZ2h0JzogJGxpZ2h0LCAnZGFyayc6ICRkYXJrLCAnY3lhbic6ICRjeWFuLCAnb3JhbmdlJzogJG9yYW5nZSwgJ3B1cnBsZSc6ICRwdXJwbGUsICdsaWdodC1pbmZvJzogJGxpZ2h0LWluZm8sICdsaWdodC1kYW5nZXInOiAkbGlnaHQtZGFuZ2VyLCAnbGlnaHQtc3VjY2Vzcyc6ICRsaWdodC1zdWNjZXNzLCAnbGlnaHQtd2FybmluZyc6ICRsaWdodC13YXJuaW5nKSxcbiR0aGVtZS1jb2xvcnMpO1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuJGVuYWJsZS1jYXJldDogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyaWQtY2xhc3NlczogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJpbnQtc3R5bGVzOiB0cnVlICFkZWZhdWx0O1xuLy8gQm9keVxuLy8gU2V0dGluZ3MgZm9yIHRoZSAgZWxlbWVudC5cbiRtYWluLWJvZHktYmc6ICNmZmYgIWRlZmF1bHQ7XG4kYm9keS1iZzogI2ZmZjtcbiRib2R5LWNvbG9yOiAjM2U1NTY5ICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAyMHB4ICFkZWZhdWx0O1xuLy8gVHlwb2dyYXBoeVxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG4kZm9udC1zaXplLWJhc2U6IDAuODc1cmVtO1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdQb3BwaW5zJyxcbnNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6IDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiA2MDAgIWRlZmF1bHQ7XG4kaDEtZm9udC1zaXplOiAzNnB4ICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogMzBweCAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAxOHB4ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6IDE0cHggIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogKDFyZW0gLyAyKSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xuLy8gQnJlYWRjcnVtYnNcbiRicmVhZGNydW1iLWJnOiAkYm9keS1iZztcbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206IDEuNXJlbTtcbi8vIENhcmRzXG4kY2FyZC1ib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogJGdyYXktMjAwICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogMHB4ICFkZWZhdWx0O1xuLy8gRHJvcGRvd25zXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuNjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDA7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGdyYXktMTAwO1xuLy8gQnV0dG9uc1xuJGJ0bi1zZWNvbmRhcnktYm9yZGVyOiAkZ3JheS0zMDA7XG4vLyBQcm9ncmVzcyBiYXJzXG4kcHJvZ3Jlc3MtYmc6ICRncmF5LTEwMDtcbi8vIFRhYmxlc1xuJHRhYmxlLWJnLWFjY2VudDogJGdyYXktMTAwO1xuJHRhYmxlLWJnLWhvdmVyOiAkZ3JheS0xMDA7XG4kdGFibGUtaG92ZXItYmc6ICRncmF5LTEwMCAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmc6IDFyZW0gIWRlZmF1bHQ7XG4kdGFibGUtYmctbGV2ZWw6IC0xMCAhZGVmYXVsdDtcbiR0YWJsZS1iZy1sZXZlbDI6IDEgIWRlZmF1bHQ7XG4kdGFibGUtYmctbGV2ZWwzOiAtNSAhZGVmYXVsdDtcbi8vIENvbXBvbmVudHNcbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG4kY29tcG9uZW50LWFjdGl2ZS1iZzogJHRoZW1lY29sb3IgIWRlZmF1bHQ7XG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6IDAuMmVtICFkZWZhdWx0O1xuJGJhZGdlLXBpbGwtcGFkZGluZy15OiAxZW0gIWRlZmF1bHQ7XG4vLyBGb3Jtc1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAkZ3JheS0xMDA7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDA7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDA7XG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiByZ2JhKDAsXG4wLFxuMCxcbjAuMjUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogcmdiYSgwLFxuMCxcbjAsXG4wLjI1KSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiByZ2JhKDAsXG4wLFxuMCxcbjM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2N1c3RvbS1zZWxlY3QucG5nKSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogc3RyLXJlcGxhY2UodXJsKCcnKSxcbiclMjMnKSAhZGVmYXVsdDtcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cbiRib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICRncmF5LTIwMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzOiAycHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogMnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206IDFweCAhZGVmYXVsdDtcbi8vIFByb2dyZXNzIGJhcnNcbiRwcm9ncmVzcy1oZWlnaHQ6IDVweCAhZGVmYXVsdDtcbi8vIFRhYnNcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogJHdoaXRlICFkZWZhdWx0O1xuLy8gR3JpZCBicmVha3BvaW50c1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG4kZ3JpZC1icmVha3BvaW50czogKCB4czogMCxcbnNtOiA1NzZweCxcbm1kOiA3NjhweCxcbmxnOiA5OTJweCxcbnhsOiAxNjAwcHgpICFkZWZhdWx0O1xuLy8gTmF2YmFyXG4kbmF2YmFyLWRhcmstY29sb3I6IHJnYmEoJHdoaXRlLFxuMC44KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogcmdiYSgkd2hpdGUsXG4xKSAhZGVmYXVsdDsiLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzJztcbi5hc2lkZS1ib3h7XG4gICAgd2lkdGg6IDI3NXB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICB6LWluZGV4Ojk5OTtcbiAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoIDI4NXB4KTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICYuc2lkZWJhcl9zbGlkZXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCAwcHgpO1xuICAgIH1cbiAgICAgLm1lc3NhZ2UtY2VudGVye1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { toggleSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/sidebar/menu-items.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/sidebar/menu-items.ts ***!
  \**********************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    // {
    //     path: '',
    //     title: 'Personal',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    {
        path: '',
        title: 'Dashboard',
        icon: 'mdi mdi-view-dashboard',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: 'apps/chat',
    //     title: 'Inbox',
    //     icon: 'fab fa-rocketchat',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'List',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    {
        path: '/pages/users',
        title: 'Users',
        icon: 'fa fa-user',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/pages/Leads',
        title: 'Leads',
        // icon: 'sl-icon-user',
        icon: 'mdi mdi-backburger',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/pages/filters',
        title: 'Filters',
        icon: 'fa fa-filter',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: '',
    //     title: 'Vendors',
    //     icon: 'icon-Car-Wheel',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/pages/vendors/vendorsrequest',
    //             title: 'Vendors Request',
    //             icon: 'sl-icon-user',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/pages/vendors',
    //             title: 'Manage Vendors',
    //             icon: 'sl-icon-user',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //     ]
    // },
    // {
    //     path: '/pages/speech',
    //     title: 'Speech Recognition',
    //     icon: 'mdi mdi-account-star-variant',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/drivers',
    //     title: 'Drivers',
    //     icon: 'mdi mdi-truck',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/franchise',
    //     title: 'Franchise',
    //     icon: 'fas fa-shopping-basket',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Requests',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/pages/driversrequest',
    //     title: 'Drivers Request',
    //     icon: 'mdi mdi-truck',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/franchiserequest',
    //     title: 'Franchise Request',
    //     icon: 'fas fa-shopping-basket',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'eSupply',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/pages/order',
    //     title: 'Orders',
    //     icon: ' far fa-list-alt',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/timeslot',
    //     title: 'Timeslots',
    //     icon: ' fas fa-clock',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Inventory',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/pages/foodcategories',
    //     title: 'Categories',
    //     icon: 'sl-icon-grid',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //   path: '/pages/fooditem',
    //   title: 'Product',
    //   icon: 'mdi mdi-bowl',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    // },
    // {
    //     path: '/pages/Inventory',
    //     title: 'Inventory',
    //     icon: 'mdi mdi-calendar-text',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Marketing',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/pages/banner',
    //     title: 'Banner',
    //     icon: 'far fa-images',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/rewards',
    //     title: 'Coupons ',
    //     icon: 'ti-gift',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Notifications',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/pages/notification',
    //     title: 'Broadcast Notification',
    //     icon: 'sl-icon-bell',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Reporting',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    //  {
    //     path: '',
    //     title: 'Reporting',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/pages/revenue',
    //     title: 'Revenue',
    //     icon: 'mdi mdi-chart-areaspline',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/reviews',
    //     title: 'Reviews',
    //     icon: 'mdi mdi-account-star-variant',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/sos',
    //     title: 'SOS',
    //     icon: 'mdi mdi-bell-ring',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/membership',
    //     title: 'Membership Plans',
    //     icon: 'mdi mdi-account-star-variant',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    {
        path: '/pages/analytics',
        title: 'Analytics',
        icon: 'icon-Monitor-Analytics',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: '/pages/geofence',
    //     title: 'Geofence',
    //     icon: 'icon-Monitor-Analytics',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/couponsrequest',
    //     title: 'Coupons Detail',
    //     icon: 'icon-Monitor-Analytics',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    {
        path: '/pages/manage_admin',
        title: 'Sub-Admin',
        icon: 'mdi mdi-chart-arc',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: '',
    //     title: 'CMS Pages',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    {
        path: '/pages/support',
        title: 'Customer Support',
        // icon: 'mdi mdi-account-star-variant',
        icon: 'mdi mdi-headset ',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'CMS Pages',
        icon: 'icon-Car-Wheel',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/pages/about',
                title: 'Terms & Conditions',
                icon: 'far fa-file-alt',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/pages/contact',
                title: 'Contact Us',
                icon: 'fas fa-phone-volume',
                class: '',
                extralink: false,
                submenu: []
            },
            //     {
            //         path: '/pages/faq',
            //         title: 'Faq',
            //         icon: 'fas fa-comment-alt',
            //         class: '',
            //         extralink: false,
            //         submenu: []
            // },
            {
                path: '/pages/aboutapp',
                title: 'About App',
                icon: 'mdi mdi-cellphone',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/pages/privacy',
                title: 'Privacy & Policy',
                icon: 'fas fa-lock',
                class: '',
                extralink: false,
                submenu: []
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items */ "./src/app/shared/sidebar/menu-items.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sidebarnavItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
} }
function SidebarComponent_li_13_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_13_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addExpandClass(sidebarnavItem_r1.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, sidebarnavItem_r1.class))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, sidebarnavItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
} }
function SidebarComponent_li_13_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_13_ul_3_li_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.addActiveClass(sidebarnavSubItem_r11.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavSubItem_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, sidebarnavSubItem_r11.path))("routerLinkActive", sidebarnavSubItem_r11.submenu.length > 0 ? "" : "router-link-active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, sidebarnavSubItem_r11.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, sidebarnavSubItem_r11.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavSubItem_r11.title);
} }
function SidebarComponent_li_13_ul_3_li_1_ul_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, sidebarnavSubsubItem_r19.path))("routerLinkActive", sidebarnavSubsubItem_r19.submenu.length > 0 ? "" : "router-link-active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, sidebarnavSubsubItem_r19.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavSubsubItem_r19.title);
} }
function SidebarComponent_li_13_ul_3_li_1_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_ul_2_li_1_a_1_Template, 4, 8, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubsubItem_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sidebarnavSubsubItem_r19.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubsubItem_r19.extralink);
} }
const _c1 = function (a0) { return { "in": a0 }; };
function SidebarComponent_li_13_ul_3_li_1_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_ul_2_li_1_Template, 2, 4, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r13.showSubMenu === sidebarnavSubItem_r11.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavSubItem_r11.submenu);
} }
function SidebarComponent_li_13_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_a_1_Template, 4, 11, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_13_ul_3_li_1_ul_2_Template, 2, 4, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubItem_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r10.showSubMenu === sidebarnavSubItem_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavSubItem_r11.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubItem_r11.extralink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavSubItem_r11.submenu.length > 0);
} }
function SidebarComponent_li_13_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_Template, 3, 5, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r4.showMenu === sidebarnavItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavItem_r1.submenu);
} }
function SidebarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_13_div_1_Template, 4, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_13_a_2_Template, 4, 11, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_13_ul_3_Template, 2, 4, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.showMenu === sidebarnavItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.extralink === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavItem_r1.extralink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.submenu.length > 0);
} }
class SidebarComponent {
    constructor(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.showMenu = '';
        this.showSubMenu = '';
    }
    // this is for the open close
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    addActiveClass(element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    }
    // End open close
    ngOnInit() {
        this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(sidebarnavItem => sidebarnavItem);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 14, vars: 1, consts: [[1, "sidebar-nav", "pt-3"], ["id", "sidebarnav"], ["ngbDropdown", "", 1, "user-profile", "m-t-20", "d-none"], [1, "user-content", "hide-menu", "m-t-10"], ["aria-labelledby", "Userdd", "ngbDropdownMenu", "", 1, "animated", "flipInY"], ["routerLink", "pages/profile", 1, "dropdown-item"], [1, "ti-user", "m-r-5", "m-l-5"], [1, "dropdown-divider"], ["routerLink", "/login", 1, "dropdown-item"], [1, "fa", "fa-power-off", "m-r-5", "m-l-5"], ["class", "sidebar-item", 3, "selected", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "routerLinkActive"], ["class", "nav-small-cap", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse first-level", 3, "ngClass", 4, "ngIf"], [1, "nav-small-cap"], [3, "ngClass"], [1, "hide-menu"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click"], ["aria-expanded", "false", 1, "collapse", "first-level", 3, "ngClass"], ["class", "sidebar-item", 3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], ["class", "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "click", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse second-level", 3, "ngClass", 4, "ngIf"], [1, "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "click"], ["aria-expanded", "false", 1, "collapse", "second-level", 3, "ngClass"], ["class", "sidebar-item", "routerLinkActive", "active", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "sidebar-item", 3, "ngClass"], ["class", "sidebar-link", 3, "routerLink", "routerLinkActive", 4, "ngIf"], [1, "sidebar-link", 3, "routerLink", "routerLinkActive"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SidebarComponent_li_13_Template, 4, 6, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
const environment = {
    production: false,
    baseUrl: 'http://182.72.246.251:1202/api/',
    TokenValue: "ZeepToken",
    googleMapKey: 'AIzaSyC7Ju90BCi9a01akYUWBvrEOFzwl8yxWZ8'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/apptunix/Desktop/Enamul/Zeepo_admin/zeepo_admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map