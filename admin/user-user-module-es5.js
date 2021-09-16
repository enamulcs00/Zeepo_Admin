(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
    /***/
    "./src/app/pages/user/user-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/user/user-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: UserRoutingModule */

    /***/
    function srcAppPagesUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
        return UserRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user.component */
      "./src/app/pages/user/user.component.ts");
      /* harmony import */


      var _useredit_useredit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./useredit/useredit.component */
      "./src/app/pages/user/useredit/useredit.component.ts");
      /* harmony import */


      var _userhistory_userhistory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./userhistory/userhistory.component */
      "./src/app/pages/user/userhistory/userhistory.component.ts");
      /* harmony import */


      var _users_detail_users_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./users-detail/users-detail.component */
      "./src/app/pages/user/users-detail/users-detail.component.ts");
      /* harmony import */


      var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./users/users.component */
      "./src/app/pages/user/users/users.component.ts");

      var routes = [{
        path: "",
        component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [{
          path: '',
          component: _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
          data: {
            title: 'Users',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Users'
            }]
          }
        }, {
          path: 'useredit',
          component: _useredit_useredit_component__WEBPACK_IMPORTED_MODULE_3__["UsereditComponent"],
          data: {
            title: 'Edit User',
            urls: [{
              title: 'Dashboard',
              url: '/useredit'
            }, {
              title: 'Edit User'
            }]
          }
        }, {
          path: 'users_detail',
          component: _users_detail_users_detail_component__WEBPACK_IMPORTED_MODULE_5__["UsersDetailComponent"],
          data: {
            title: 'User Detail',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Users Detail'
            }]
          }
        }, {
          path: 'usershistory',
          component: _userhistory_userhistory_component__WEBPACK_IMPORTED_MODULE_4__["UserhistoryComponent"],
          data: {
            title: 'User History',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'User History'
            }]
          }
        }]
      }];

      var UserRoutingModule = function UserRoutingModule() {
        _classCallCheck(this, UserRoutingModule);
      };

      UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UserRoutingModule
      });
      UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UserRoutingModule_Factory(t) {
          return new (t || UserRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/user/user.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/pages/user/user.component.ts ***!
      \**********************************************/

    /*! exports provided: UserComponent */

    /***/
    function srcAppPagesUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
        return UserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var UserComponent = /*#__PURE__*/function () {
        function UserComponent() {
          _classCallCheck(this, UserComponent);
        }

        _createClass(UserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserComponent;
      }();

      UserComponent.ɵfac = function UserComponent_Factory(t) {
        return new (t || UserComponent)();
      };

      UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserComponent,
        selectors: [["app-user"]],
        decls: 1,
        vars: 0,
        template: function UserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/user/user.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/user/user.module.ts ***!
      \*******************************************/

    /*! exports provided: UserModule */

    /***/
    function srcAppPagesUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModule", function () {
        return UserModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-routing.module */
      "./src/app/pages/user/user-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-quill */
      "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-chartist */
      "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _users_detail_users_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./users-detail/users-detail.component */
      "./src/app/pages/user/users-detail/users-detail.component.ts");
      /* harmony import */


      var _userhistory_userhistory_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./userhistory/userhistory.component */
      "./src/app/pages/user/userhistory/userhistory.component.ts");
      /* harmony import */


      var _useredit_useredit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./useredit/useredit.component */
      "./src/app/pages/user/useredit/useredit.component.ts");
      /* harmony import */


      var _users_users_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./users/users.component */
      "./src/app/pages/user/users/users.component.ts");
      /* harmony import */


      var _user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./user.component */
      "./src/app/pages/user/user.component.ts");

      var UserModule = function UserModule() {
        _classCallCheck(this, UserModule);
      };

      UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UserModule
      });
      UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UserModule_Factory(t) {
          return new (t || UserModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_9__["ChartistModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
          declarations: [_users_detail_users_detail_component__WEBPACK_IMPORTED_MODULE_21__["UsersDetailComponent"], _userhistory_userhistory_component__WEBPACK_IMPORTED_MODULE_22__["UserhistoryComponent"], _useredit_useredit_component__WEBPACK_IMPORTED_MODULE_23__["UsereditComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_24__["UsersComponent"], _user_component__WEBPACK_IMPORTED_MODULE_25__["UserComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_9__["ChartistModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_users_detail_users_detail_component__WEBPACK_IMPORTED_MODULE_21__["UsersDetailComponent"], _userhistory_userhistory_component__WEBPACK_IMPORTED_MODULE_22__["UserhistoryComponent"], _useredit_useredit_component__WEBPACK_IMPORTED_MODULE_23__["UsereditComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_24__["UsersComponent"], _user_component__WEBPACK_IMPORTED_MODULE_25__["UserComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_9__["ChartistModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/user/useredit/useredit.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/user/useredit/useredit.component.ts ***!
      \***********************************************************/

    /*! exports provided: UsereditComponent */

    /***/
    function srcAppPagesUserUsereditUsereditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsereditComponent", function () {
        return UsereditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var UsereditComponent = /*#__PURE__*/function () {
        function UsereditComponent() {
          _classCallCheck(this, UsereditComponent);
        }

        _createClass(UsereditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UsereditComponent;
      }();

      UsereditComponent.ɵfac = function UsereditComponent_Factory(t) {
        return new (t || UsereditComponent)();
      };

      UsereditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UsereditComponent,
        selectors: [["app-useredit"]],
        decls: 39,
        vars: 0,
        consts: [[1, "card"], ["action", "#"], [1, "form-body"], [1, "card-body"], [1, "row"], [1, "col-md-12", "text-right"], ["routerLink", "/pages/users", 1, "btn", "btn-primary"], [1, "row", "p-t-20"], [1, "col-md-6"], [1, "form-group"], [1, "control-label"], ["type", "text", "id", "firstName", "placeholder", "John doe", 1, "form-control"], ["type", "email", "id", "firstName", "placeholder", "example@gmail.com", 1, "form-control"], ["type", "number", "id", "firstName", "placeholder", "554-568-524", 1, "form-control"], [1, "form-group", "has-danger"], ["type", "text", "id", "email", "placeholder", "www.familyfirstlife.com", 1, "form-control", "form-control-danger"], [1, "col-md-12"], ["name", "", "id", "", "cols", "30", "rows", "5", "placeholder", "#433 New garden Complex", 1, "form-control"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", "mr-3"]],
        template: function UsereditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Company Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlcmVkaXQvdXNlcmVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsereditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-useredit',
            templateUrl: './useredit.component.html',
            styleUrls: ['./useredit.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/user/userhistory/userhistory.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/user/userhistory/userhistory.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UserhistoryComponent */

    /***/
    function srcAppPagesUserUserhistoryUserhistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserhistoryComponent", function () {
        return UserhistoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function UserhistoryComponent_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User History Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bike Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bike No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Vendor Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rent Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rent Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Pulsar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "HR-05-V-5343");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Andy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "10-12-2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "10:30 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "$10/Hrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Honda ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "HR-05-V-7343");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Andy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "10-12-2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "10:30 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "$10/Hrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "TVS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "HR-05-V-1343");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Andy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "10-12-2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "10:30 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$5/Hrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "TVS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "HR-05-V-0343");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Andy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "10-12-2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "10:30 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "$12/Hrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "TVS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "HR-05-V-7383");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Andy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "10-12-2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "10:30 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "$10/Hrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var UserhistoryComponent = /*#__PURE__*/function () {
        function UserhistoryComponent(modalService) {
          _classCallCheck(this, UserhistoryComponent);

          this.modalService = modalService;
        }

        _createClass(UserhistoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "userHistoryModal",
          value: function userHistoryModal(userHistory) {
            this.modalService.open(userHistory, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }]);

        return UserhistoryComponent;
      }();

      UserhistoryComponent.ɵfac = function UserhistoryComponent_Factory(t) {
        return new (t || UserhistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      UserhistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserhistoryComponent,
        selectors: [["app-userhistory"]],
        decls: 45,
        vars: 0,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "col-md-4"], [1, "mb-2"], ["type", "text", "id", "prenametext", "placeholder", "Search", 1, "form-control"], [1, "col-md-8", "text-right"], ["routerLink", "/pages/users", 1, "btn", "btn-primary", "text-white", "mb-3"], [1, "table-responsive"], ["id", "zero_config", 1, "table", "v-middle", "product-overview"], [1, "btn", "btn-primary", 3, "click"], ["userHistory", ""], [1, "modal-body"]],
        template: function UserhistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vendor Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "User Total Bike");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sandy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Andy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "13-12-2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "$10/Hrs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserhistoryComponent_Template_button_click_41_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

              return ctx.userHistoryModal(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "View detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UserhistoryComponent_ng_template_43_Template, 85, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlcmhpc3RvcnkvdXNlcmhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserhistoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-userhistory',
            templateUrl: './userhistory.component.html',
            styleUrls: ['./userhistory.component.css']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/user/users-detail/users-detail.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/user/users-detail/users-detail.component.ts ***!
      \*******************************************************************/

    /*! exports provided: UsersDetailComponent */

    /***/
    function srcAppPagesUserUsersDetailUsersDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersDetailComponent", function () {
        return UsersDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

      function UsersDetailComponent_ng_template_275_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Coupons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersDetailComponent_ng_template_275_Template_button_click_3_listener() {
            var modal_r3 = ctx.$implicit;
            return modal_r3.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Get 20% OFF On Food Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Food20 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Get 60% OFF On Food Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Food60 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Get 60% OFF On Food Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Food60 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Get 60% OFF On Food Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Food60 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25, 100];
      };

      var UsersDetailComponent = /*#__PURE__*/function () {
        function UsersDetailComponent(modalService) {
          _classCallCheck(this, UsersDetailComponent);

          this.modalService = modalService; //table: any
          // displayedColumns: string[] = [ 'hotelName' ,'id', 'orderdate','deliverydate','delivery_man','price','coupon','status'];

          this.displayedColumns = ['serial_no', 'name', 'ordered_item', 'address', 'price'];
          this.displayedColumns2 = ['serial_no', 'name', 'ordered_item', 'address', 'price'];
          this.table = [{
            serial_no: "1",
            // audio:"assets/media/example.mp3",
            ordered_item: "Banana : 10",
            name: 'Big Bazar',
            id: 'Merchant1@gmail.com',
            // contact: '+91 9874563210',
            address: "#454 1st Block, Rammurthy, Bangalore-560016",
            price: "$ 200"
          }, {
            serial_no: "2",
            // audio:"assets/media/example.mp3",
            ordered_item: "Apple : 10",
            name: 'Big Bazar',
            id: 'Merchant1@gmail.com',
            // contact: '+91 9874563210',
            address: "#454 1st Block, Rammurthy, Bangalore-560016",
            price: "$ 250"
          }, {
            serial_no: "3",
            // audio:"assets/media/example.mp3",
            ordered_item: "Apple : 3",
            name: 'Big Bazar',
            id: 'Merchant1@gmail.com',
            // contact: '+91 9874563210',
            address: "#454 1st Block, Rammurthy, Bangalore-560016",
            price: "$ 150"
          }];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.table);
        }

        _createClass(UsersDetailComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        }, {
          key: "discountModal",
          value: function discountModal(discount) {
            this.modalService.open(discount, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();

            if (this.dataSource.paginator) {
              this.dataSource.paginator.firstPage();
            }
          }
        }]);

        return UsersDetailComponent;
      }();

      UsersDetailComponent.ɵfac = function UsersDetailComponent_Factory(t) {
        return new (t || UsersDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      UsersDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UsersDetailComponent,
        selectors: [["app-users-detail"]],
        viewQuery: function UsersDetailComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 277,
        vars: 4,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "d-flex", "mb-2"], ["routerLink", "/pages/useredit", 1, "btn", "btn-primary"], [1, "btn", "btn-primary", "ml-auto", "mr-2"], [1, "sl-icon-cloud-download"], ["routerLink", "/pages/users", 1, "btn", "btn-primary"], [1, "card", "p-3"], [1, "col-md-4"], [1, "card-body", "p-3", "bg-light", "border"], [1, "mb-3"], ["src", "assets/images/users/1.jpg", "width", "150", 1, "rounded-circle"], [1, "col-md-12"], [1, "list-block", "pl-0"], [1, "list-block-listing", "pr-2", "pb-2"], [1, "font-weight-600", "d-block"], ["href", "tel:+919564345452"], ["href", "mailto:hanna@example.com"], ["href", "javascript:void()"], [1, "map-box", "mt-2"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508", "width", "100%", "height", "150", "frameborder", "0", "allowfullscreen", "", 2, "border", "0"], [1, "col-md-8"], [1, "col-md-12", "row"], [1, "col-md-6"], [1, "card"], [1, "card-body", "card-box"], [1, "d-flex", "align-items-center"], [1, "m-r-10"], [1, "btn", "btn-circle", "btn-sm", "btn-info", "p-1"], [1, "mdi", "mdi-clock", "text-white", "font-16"], [1, "mb-0"], [1, "btn", "btn-circle", "btn-sm", "bg-success", "p-1"], [1, "mdi", "mdi-cellphone", "text-white", "font-16"], [1, "m-b-0"], [1, "btn", "btn-circle", "btn-sm", "bg-danger", "p-1"], [1, "form-group"], ["name", "", "id", "", 1, "form-control", "mb-0"], [1, "col-12"], [1, "src_hstry"], ["type", "1"], [1, "pt-2"], [1, "col-lg-12", "mt-3"], [1, "card-body"], [1, "mb-2"], ["type", "text", "id", "prenametext", "placeholder", "Search", 1, "form-control"], [1, "col-md-8", "text-right"], [1, "d-block"], ["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "mr-2", "d-inline-block"], [1, "btn", "btn-primary"], ["ngbDropdown", "", 1, "d-inline-block", "mb-2", "mr-2"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], [1, "table-responsive"], ["id", "zero_config", 1, "table", "v-middle", "product-overview"], [1, "text-nowrap"], [1, "col-md-12", "text-right"], [3, "pageSizeOptions"], ["discount", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close-icon", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "table-reponsive"], [1, "table", "table-sm"], [1, "align-middle"], [1, "food-code", "btn", "btn-success"]],
        template: function UsersDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Export CSV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Person Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone No. :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "+91-9564345452");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "hanna@@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Address:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "#454 1st Block, Rammurthy, Bangalore-560016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "iframe", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Time on the app ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "240 hrs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "App Opens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "50 Times");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Time on certain features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "select", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Feature 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Feature 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Feature 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "30 hrs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Search History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ul", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Filter 1 :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Option2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Filter 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Option2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Filter 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Option2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Filter 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Option2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Filter 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Option2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Filter 6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Option2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Filter 1 :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Option2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Filter 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Option2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Filter 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Option2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Filter 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Option2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Filter 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Option2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Filter 6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Option2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Leads");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "mat-form-field", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Filter by date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "mat-date-range-input", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "mat-datepicker-toggle", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "mat-date-range-picker", null, 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Download CSV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Filter by order status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Accepted");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Rejected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "table", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "th", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "th", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "th", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "th", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "th", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Zip Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "th", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Lead Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "th", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "th", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Last Conversation Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Wick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Johnwick@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "143 Streat 4, New York,USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "100013");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Type 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Tag1, Tag2, Tag3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "10:30 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Wick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Johnwick@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "143 Streat 4, New York,USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "100013");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Type 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Tag1, Tag2, Tag3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "10:30 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Wick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Johnwick@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "143 Streat 4, New York,USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "100013");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Type 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Tag1, Tag2, Tag3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "10:30 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Wick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Johnwick@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "143 Streat 4, New York,USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "100013");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Type 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Tag1, Tag2, Tag3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "10:30 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "mat-paginator", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](275, UsersDetailComponent_ng_template_275_Template, 34, 0, "ng-template", null, 64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](172);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](167);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangePicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlcnMtZGV0YWlsL3VzZXJzLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-users-detail',
            templateUrl: './users-detail.component.html',
            styleUrls: ['./users-detail.component.css']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/user/users/users.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/user/users/users.component.ts ***!
      \*****************************************************/

    /*! exports provided: UsersComponent */

    /***/
    function srcAppPagesUserUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
        return UsersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function UsersComponent_th_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_td_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r27.serial_no, " ");
        }
      }

      function UsersComponent_th_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_td_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r28.name, " ");
        }
      }

      function UsersComponent_th_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_td_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r29.contact, "");
        }
      }

      function UsersComponent_th_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_td_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r30.email, "");
        }
      }

      function UsersComponent_th_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_td_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r31.address, " ");
        }
      }

      function UsersComponent_th_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Company Website ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_td_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", row_r32.web, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r32.web);
        }
      }

      function UsersComponent_th_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_td_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-slide-toggle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r33.status, " ");
        }
      }

      function UsersComponent_th_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_td_48_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Accept ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_td_48_div_4_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

            return ctx_r37.userDeleteModal(_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Reject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_td_48_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " View ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_td_48_div_5_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

            return ctx_r39.userDeleteModal(_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_td_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersComponent_td_48_div_4_Template, 7, 0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UsersComponent_td_48_div_5_Template, 10, 0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r34.action == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r34.action == 1);
        }
      }

      function UsersComponent_tr_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
        }
      }

      function UsersComponent_tr_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 53);
        }
      }

      function UsersComponent_tr_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r18.input.value, "\"");
        }
      }

      function UsersComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Driving Licence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_53_Template_button_click_3_listener() {
            var modal_r42 = ctx.$implicit;
            return modal_r42.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figure", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure want to delete this user?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_55_Template_button_click_4_listener() {
            var modal_r44 = ctx.$implicit;
            return modal_r44.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_55_Template_button_click_6_listener() {
            var modal_r44 = ctx.$implicit;
            return modal_r44.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_ng_template_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upload User Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "User ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Total Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cancelled Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Completed Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Total Sales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "textarea", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_57_Template_button_click_63_listener() {
            var modal_r47 = ctx.$implicit;
            return modal_r47.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_57_Template_button_click_66_listener() {
            var modal_r47 = ctx.$implicit;
            return modal_r47.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upload User Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Bike Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Bike No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "User Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_59_Template_button_click_71_listener() {
            var modal_r50 = ctx.$implicit;
            return modal_r50.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_59_Template_button_click_74_listener() {
            var modal_r50 = ctx.$implicit;
            return modal_r50.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25, 100];
      };

      var UsersComponent = /*#__PURE__*/function () {
        function UsersComponent(modalService) {
          _classCallCheck(this, UsersComponent);

          this.modalService = modalService; //table: any

          this.displayedColumns = ['serial_no', 'name', 'email', 'contact', 'address', 'web', 'status', 'action'];
          this.table = [{
            serial_no: '1',
            name: 'Sandy',
            lastname: 'Doe',
            // id: "#sand334553",
            gender: "Male",
            age: "20",
            contact: "+91-33434343",
            email: "sand@example.com",
            address: "#454 1st Block, Rammurthy, Bangalore-560016",
            web: "https://www.google.com/",
            status: "",
            action: "1"
          }, {
            serial_no: '2',
            name: 'Rohan',
            lastname: 'Arya',
            // id: "#rohan334553",
            gender: "Female",
            age: "20",
            contact: "+91-33434343",
            email: "sand@example.com",
            address: "#454 1st Block, Rammurthy, Bangalore-560016",
            web: "https://www.google.com/",
            status: "",
            action: "1"
          }, {
            serial_no: '3',
            name: 'John',
            lastname: 'Root',
            // id: "#rohan334553",
            gender: "Male",
            age: "20",
            contact: "+91-33434343",
            email: "sand@example.com",
            address: "#454 1st Block, Rammurthy, Bangalore-560016",
            web: "https://www.google.com/",
            status: "",
            action: "1"
          }];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.table);
        }

        _createClass(UsersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        }, {
          key: "discountModal",
          value: function discountModal(discount) {
            this.modalService.open(discount, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();

            if (this.dataSource.paginator) {
              this.dataSource.paginator.firstPage();
            }
          } // This is for the first modal

        }, {
          key: "open1",
          value: function open1(content1) {
            var _this = this;

            this.modalService.open(content1, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this.closeResult = "Dismissed ".concat(_this.getDismissReason(reason));
            });
          }
        }, {
          key: "openWindowCustomClass",
          value: function openWindowCustomClass(content3) {
            this.modalService.open(content3, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }, {
          key: "userprofileModal",
          value: function userprofileModal(userDelete) {
            this.modalService.open(userDelete, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }, {
          key: "userDeleteModal",
          value: function userDeleteModal(userDelete) {
            this.modalService.open(userDelete, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'sm'
            });
          }
        }, {
          key: "userDetailModal",
          value: function userDetailModal(userDetail) {
            this.modalService.open(userDetail, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }, {
          key: "addUserModal",
          value: function addUserModal(addUser) {
            this.modalService.open(addUser, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }]);

        return UsersComponent;
      }();

      UsersComponent.ɵfac = function UsersComponent_Factory(t) {
        return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UsersComponent,
        selectors: [["app-users"]],
        viewQuery: function UsersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 61,
        vars: 5,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "col-md-4"], [1, "mb-2"], ["type", "text", "id", "prenametext", "placeholder", "Search", 1, "form-control"], [1, "col-md-8", "d-flex", "justify-content-end"], ["ngbDropdown", "", 1, "d-inline-block", "mb-2", "mr-2"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], [1, "btn", "btn-primary", "mb-2", "mr-2"], [1, "sl-icon-cloud-download"], [1, "table-responsive"], ["mat-table", "", "matSort", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "serial_no"], ["mat-header-cell", "", "mat-sort-header", "", "class", "text-nowrap", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "contact"], ["mat-cell", "", "class", "text-nowrap", 4, "matCellDef"], ["matColumnDef", "email"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "address"], ["matColumnDef", "web"], ["matColumnDef", "status"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], ["content3", ""], ["userDelete", ""], ["userDetail", ""], ["addUser", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap"], ["mat-cell", ""], ["mat-cell", "", 1, "text-nowrap"], ["href", "tel:765453232"], ["mat-header-cell", "", "mat-sort-header", ""], ["href", "mailto:example@site.com"], [3, "href"], ["ngbDropdown", "", "placement", "bottom", "container", "body", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "btn-sm"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 4, "ngIf"], ["routerLink", "/pages/users/users_detail", 1, "dropdown-item"], [1, "ti-eye"], [1, "dropdown-item", 3, "click"], [1, "ti-trash"], ["routerLink", "/pages/users/useredit", 1, "dropdown-item"], [1, "ti-marker-alt"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], [1, "modal-header", "p-2"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-6"], [1, ""], ["src", "assets/images/gallery/driving-licence.jpg", 1, "img-fluid"], [1, "btn-group"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-primary", "mr-2", 3, "click"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-seconadary", 3, "click"], ["action", "#"], [1, "form-body"], [1, "row", "p-t-20"], [1, "form-group"], [1, "control-label"], ["type", "text", "id", "firstName", "placeholder", "John doe", 1, "form-control"], [1, "form-group", "has-success"], [1, "custom-file"], ["id", "inputGroupFile01", "type", "file", "disabled", "", 1, "custom-file-input"], ["for", "inputGroupFile01", 1, "custom-file-label"], ["type", "number", "id", "firstName", "placeholder", "No.", 1, "form-control"], ["type", "email", "id", "firstName", "placeholder", "example@gmail.com", 1, "form-control"], [1, "form-group", "has-danger"], ["type", "text", "id", "email", "placeholder", "#46543343", 1, "form-control", "form-control-danger"], ["type", "text", "id", "email", "placeholder", "40", 1, "form-control", "form-control-danger"], ["type", "text", "id", "email", "placeholder", "00", 1, "form-control", "form-control-danger"], [1, "col-md-12"], ["type", "text", "id", "city", "placeholder", "\u20AC 445", 1, "form-control", "form-control-danger"], ["name", "", "id", "", "cols", "30", "rows", "5", "placeholder", "#433 New garden Complex", 1, "form-control"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", "mr-3", 3, "click"], [1, "fa", "fa-check"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["id", "inputGroupFile01", "type", "file", 1, "custom-file-input"], ["type", "email", "id", "email", "placeholder", "example@gmail.com", 1, "form-control", "form-control-danger"], ["type", "text", "id", "Address", "placeholder", "Address", 1, "form-control", "form-control-danger"], ["data-placeholder", "Choose a Category", "tabindex", "1", 1, "form-control", "custom-select"], ["value", "Category 1"], ["value", "Category 2"], ["type", "text", "id", "bike_name", "name", "bike_name", "placeholder", "Bike name", 1, "form-control"], ["type", "text", "id", "bike_no", "name", "bike_no", "placeholder", "Bike No", 1, "form-control"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "customRadio1", "name", "customRadio", 1, "custom-control-input"], ["for", "customRadio1", 1, "custom-control-label"], ["type", "radio", "id", "customRadio2", "name", "customRadio", 1, "custom-control-input"], ["for", "customRadio2", 1, "custom-control-label"], ["type", "submit", 1, "btn", "btn-success", "mr-3", 3, "click"]],
        template: function UsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Filter by users status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Export CSV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UsersComponent_th_26_Template, 2, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UsersComponent_td_27_Template, 2, 1, "td", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UsersComponent_th_29_Template, 2, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UsersComponent_td_30_Template, 2, 1, "td", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UsersComponent_th_32_Template, 2, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UsersComponent_td_33_Template, 3, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UsersComponent_th_35_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UsersComponent_td_36_Template, 3, 1, "td", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UsersComponent_th_38_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, UsersComponent_td_39_Template, 2, 1, "td", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, UsersComponent_th_41_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, UsersComponent_td_42_Template, 3, 2, "td", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, UsersComponent_th_44_Template, 2, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UsersComponent_td_45_Template, 3, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, UsersComponent_th_47_Template, 2, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, UsersComponent_td_48_Template, 6, 2, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, UsersComponent_tr_49_Template, 1, 0, "tr", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, UsersComponent_tr_50_Template, 1, 0, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, UsersComponent_tr_51_Template, 3, 1, "tr", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "mat-paginator", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, UsersComponent_ng_template_53_Template, 14, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, UsersComponent_ng_template_55_Template, 8, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, UsersComponent_ng_template_57_Template, 68, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, UsersComponent_ng_template_59_Template, 76, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n.list-block-listing[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n.user_history[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n}\n.user_history_list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 15px 0px;\n  display: flex;\n  padding-left: 45px;\n  position: relative;\n  align-items: center;\n}\n.user_history_list_icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: #f8f9fa;\n  position: absolute;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  border: 1px solid #ced4da;\n  left: 0;\n  font-size: 18px;\n}\n.user_history_list_icon[_ngcontent-%COMP%]:before {\n  content: '';\n  position: absolute;\n  height: 18px;\n  width: 4px;\n  background-color: #ced4da;\n  bottom: -17px;\n}\n.user_history_list_icon.active[_ngcontent-%COMP%] {\n  background: #4f5467;\n  color: #fff;\n}\n.user_history_list_icon.active[_ngcontent-%COMP%]:before {\n  background-color: #4f5467;\n}\n.user_history_list[_ngcontent-%COMP%]:last-child_icon:before {\n  display: none;\n}\n.user_history_list[_ngcontent-%COMP%]   .skip[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSxrRkFBWTtBQU5aLGdDQUFBO0FBSUEsZ0NBQUE7QUFJQSxlQUFBO0FBZ0JBLGdCQUFBO0FBU0EsaUJBQUE7QUFlQSxxQkFBQTtBQUlBLFNBQUE7QUFPQSxnQkFBQTtBQUlBLHdCQUFBO0FBc0JBLGtDQUFBO0FBSUEsa0NBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O21CQ2pFbUI7QUF6Qm5COztrQkE0QmtCO0FBdkJsQjtFQUNJLGlCQUFpQjtBQXlCckI7QUF0QkE7RUFDSSxnQkFBZ0I7QUF5QnBCO0FBdEJBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUF5QnZCO0FBeEJJO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixtQkRzRlU7RUNyRlYsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJEa0ZVO0VDakZWLE9BQU87RUFDUCxlQUFlO0FBMkJ2QjtBQXZDSztFQWNPLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVix5QkQwRU07RUN6RU4sYUFBYTtBQTZCekI7QUFoREs7RUFzQk8sbUJEeUVNO0VDeEVOLFdEaUVBO0FDbkNaO0FBckRLO0VBeUJXLHlCRHNFRTtBQ3RDbEI7QUFoRUE7RUF1Q2dCLGFBQWE7QUE2QjdCO0FBcEVBO0VBNENRLGNEcURVO0FDekJsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gQ3VzdG9tIFZhcmlhYmxlc1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDAnKTtcblxuLypUaGVtZSBDb2xvcnMqL1xuXG4kdGhlbWVjb2xvcjogIzAwOEVCMDtcbiR0aGVtZWNvbG9yLWRhcms6ICMwMjhlZTE7XG4kdGhlbWVjb2xvci1hbHQ6ICMyNmM2ZGE7XG4kdGhlbWUtbGlnaHQ6ICNmZmY7XG4kdGhlbWUtZGFyazogIzIxMjUyOTtcbiRsaW5rLWNvbG9yOiAjMDI4ZWUxO1xuJHNraW4xOiAjMzU4N2Q4O1xuJHNraW4yOiAjZDgzOTM5O1xuJHNraW4zOiAjMTdhOTkxO1xuJHNraW40OiAjNjY1OWY3O1xuJHNraW41IDojZmZmO1xuO1xuJHNraW42OiAjMDA4RUIwO1xuXG4vKlRvcGJhciBDb2xvcnMqL1xuXG4kdG9wYmFyOiAkdGhlbWUtbGlnaHQ7XG4kdG9wYmFyLWhlaWdodDogNjRweDtcbiR0b3BiYXItbmF2bGluay1wYWRkaW5nOiAwcHggMTVweDtcbiR0b3BiYXItbmF2bGluay1mb250LXNpemU6IDAuODc1cmVtO1xuJHRvcGJhci1uYXZsaW5rLWhlaWdodDogNjRweDtcbiR0b3BiYXItbmF2YnJhbmQtcGFkZGluZzogMCAxNXB4IDAgMTVweDtcblxuLypTaWRlYmFyIENvbG9ycyovXG5cbiRzaWRlYmFyOiAkdGhlbWUtZGFyaztcbiRzaWRlYmFyLWFsdDogI2U4ZWZmMDtcbiRzaWRlYmFyLXRleHQ6ICMzMzM7XG4kc2lkZWJhci1pY29uczogcmdiKDAsXG4wLFxuMCk7XG4kc2lkZWJhci10ZXh0LWRhcms6ICMyMTI1Mjk7XG4kc2lkZWJhci10ZXh0LWRhcms6ICMyMTI1Mjk7XG4kc2lkZWJhci1pY29ucy1kYXJrOiAjNGY1NDY3O1xuJHNpZGViYXItd2lkdGgtZnVsbDogMjUwcHg7XG4kc2lkZWJhci13aWR0aC1pY29uYmFyOiAxODBweDtcbiRzaWRlYmFyLXdpZHRoLW1pbmk6IDcwcHg7XG5cbi8qQm94ZWQgbGF5b3V0IHdpZHRoKi9cblxuJGJveGVkLXdpZHRoOiAxMjAwcHg7XG5cbi8qU2hhZG93Ki9cblxuJHNoYWRvdzogMXB4IDBweCAyMHB4IHJnYmEoMCxcbjAsXG4wLFxuMC4wOCk7XG5cbi8qIHRyYW5zaXRpb25zICovXG5cbiR0cmFuc2l0aW9uczogMC4ycyBlYXNlLWluO1xuXG4vKiBEYXJrIHRyYW5zcGFyZW50IGJnICovXG5cbiR0cmFuc3BhcmVudC1kYXJrLWJnOiByZ2JhKDAsXG4wLFxuMCxcbjAuMDUpO1xuJGxmdDogbGVmdDtcbiRyZ3Q6IHJpZ2h0O1xuJGNhcmQtYWx0OiAjZTRlOWVmO1xuJXNxdWFyZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4lcm90YXRlNDUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4vLyBCb290c3RyYXAgb3ZlcnJpZGVzXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblxuLyogKlxuICogVGFibGUgT2YgQ29udGVudFxuICpcbiAqICAxLiBDb2xvciBzeXN0ZW1cbiAqICAyLiBPcHRpb25zXG4gKiAgMy4gQm9keVxuICogIDQuIFR5cG9ncmFwaHlcbiAqICA1LiBCcmVhZGNydW1ic1xuICogIDYuIENhcmRzXG4gKiAgNy4gRHJvcGRvd25zXG4gKiAgOC4gQnV0dG9uc1xuICogIDkuIFR5cG9ncmFwaHlcbiAqICAxMC4gUHJvZ3Jlc3MgYmFyc1xuICogIDExLiBUYWJsZXNcbiAqICAxMi4gRm9ybXNcbiAqICAxNC4gQ29tcG9uZW50ICovXG5cbi8vQ29sb3Igc3lzdGVtXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhMWFhYjIgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0ZjU0NjcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4kYmx1ZTogI2ZiYjAzYiAhZGVmYXVsdDtcbiRpbmRpZ286ICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAjNzQ2MGVlICFkZWZhdWx0O1xuJHBpbms6ICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAjZWY2ZTZlICFkZWZhdWx0O1xuJGxpZ2h0LWluZm86ICNlNmYyZmEgIWRlZmF1bHQ7XG4kbGlnaHQtZGFuZ2VyOiAjZmFlNmU2ICFkZWZhdWx0O1xuJGxpZ2h0LXN1Y2Nlc3M6ICNlOWY5ZjcgIWRlZmF1bHQ7XG4kbGlnaHQtd2FybmluZzogI2Y4ZWZkNyAhZGVmYXVsdDtcbiRvcmFuZ2U6ICNmYjhjMDAgIWRlZmF1bHQ7XG4keWVsbG93OiAjZmZiYzM0ICFkZWZhdWx0O1xuJGdyZWVuOiAjMjJjNmFiICFkZWZhdWx0O1xuJGdyZWVuMTogIzVhZTUwZSAhZGVmYXVsdDtcbiR0ZWFsOiAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICMwMWMwYzggIWRlZmF1bHQ7XG4kcHJpbWFyeTojMDA4RUIwICFkZWZhdWx0O1xuJHRleHQtbXV0ZWQ6ICRncmF5LTUwMCAhZGVmYXVsdDtcbiRZZWxsb3ctR3JlZW46I2NlZGY2YTtcbiRjb2xvcnM6ICggYmx1ZTogJGJsdWUsXG5pbmRpZ286ICRpbmRpZ28sXG5wdXJwbGU6ICRwdXJwbGUsXG5waW5rOiAkcGluayxcbnJlZDogJHJlZCxcbm9yYW5nZTogJG9yYW5nZSxcbnllbGxvdzogJHllbGxvdyxcbmdyZWVuOiAkZ3JlZW4sXG50ZWFsOiAkdGVhbCxcbmN5YW46ICRjeWFuLFxud2hpdGU6ICR3aGl0ZSxcbmdyYXk6ICRncmF5LTYwMCxcbmdyYXktZGFyazogJGdyYXktODAwLFxubGlnaHQtaW5mbzogJGxpZ2h0LWluZm8sXG5saWdodC1kYW5nZXI6ICRsaWdodC1kYW5nZXIsXG5saWdodC1zdWNjZXNzOiAkbGlnaHQtc3VjY2VzcyxcbmxpZ2h0LXdhcm5pbmc6ICRsaWdodC13YXJuaW5nKTtcbiRwcmltYXJ5OiAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogJGJsdWUgIWRlZmF1bHQ7XG4kd2FybmluZzogJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kY3lhbjogJGN5YW4gIWRlZmF1bHQ7XG4kb3JhbmdlOiAkb3JhbmdlICFkZWZhdWx0O1xuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoICggJ3ByaW1hcnknOiAkcHJpbWFyeSwgJ3NlY29uZGFyeSc6ICRzZWNvbmRhcnksICdzdWNjZXNzJzogJHN1Y2Nlc3MsICdpbmZvJzogJGluZm8sICd3YXJuaW5nJzogJHdhcm5pbmcsICdkYW5nZXInOiAkZGFuZ2VyLCAnbGlnaHQnOiAkbGlnaHQsICdkYXJrJzogJGRhcmssICdjeWFuJzogJGN5YW4sICdvcmFuZ2UnOiAkb3JhbmdlLCAncHVycGxlJzogJHB1cnBsZSwgJ2xpZ2h0LWluZm8nOiAkbGlnaHQtaW5mbywgJ2xpZ2h0LWRhbmdlcic6ICRsaWdodC1kYW5nZXIsICdsaWdodC1zdWNjZXNzJzogJGxpZ2h0LXN1Y2Nlc3MsICdsaWdodC13YXJuaW5nJzogJGxpZ2h0LXdhcm5pbmcpLFxuJHRoZW1lLWNvbG9ycyk7XG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG4kZW5hYmxlLWNhcmV0OiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6IHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5OiBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6IHRydWUgIWRlZmF1bHQ7XG4vLyBCb2R5XG4vLyBTZXR0aW5ncyBmb3IgdGhlICBlbGVtZW50LlxuJG1haW4tYm9keS1iZzogI2ZmZiAhZGVmYXVsdDtcbiRib2R5LWJnOiAjZmZmO1xuJGJvZHktY29sb3I6ICMzZTU1NjkgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDIwcHggIWRlZmF1bHQ7XG4vLyBUeXBvZ3JhcGh5XG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cbiRmb250LXNpemUtYmFzZTogMC44NzVyZW07XG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1BvcHBpbnMnLFxuc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1saWdodDogMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMCAhZGVmYXVsdDtcbiRoMS1mb250LXNpemU6IDM2cHggIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAzMHB4ICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogMjJweCAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6IDE4cHggIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAxNnB4ICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogMTRweCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAoMXJlbSAvIDIpICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6IGluaGVyaXQgIWRlZmF1bHQ7XG4vLyBCcmVhZGNydW1ic1xuJGJyZWFkY3J1bWItYmc6ICRib2R5LWJnO1xuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuLy8gQ2FyZHNcbiRjYXJkLWJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAwcHggIWRlZmF1bHQ7XG4vLyBEcm9wZG93bnNcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC42NXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICRncmF5LTIwMDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkZ3JheS0xMDA7XG4vLyBCdXR0b25zXG4kYnRuLXNlY29uZGFyeS1ib3JkZXI6ICRncmF5LTMwMDtcbi8vIFByb2dyZXNzIGJhcnNcbiRwcm9ncmVzcy1iZzogJGdyYXktMTAwO1xuLy8gVGFibGVzXG4kdGFibGUtYmctYWNjZW50OiAkZ3JheS0xMDA7XG4kdGFibGUtYmctaG92ZXI6ICRncmF5LTEwMDtcbiR0YWJsZS1ob3Zlci1iZzogJGdyYXktMTAwICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZzogMXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1iZy1sZXZlbDogLTEwICFkZWZhdWx0O1xuJHRhYmxlLWJnLWxldmVsMjogMSAhZGVmYXVsdDtcbiR0YWJsZS1iZy1sZXZlbDM6IC01ICFkZWZhdWx0O1xuLy8gQ29tcG9uZW50c1xuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAkdGhlbWVjb2xvciAhZGVmYXVsdDtcbiRiYWRnZS1waWxsLXBhZGRpbmcteDogMC4yZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXk6IDFlbSAhZGVmYXVsdDtcbi8vIEZvcm1zXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICRncmF5LTEwMDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LTIwMDtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRncmF5LTIwMDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEoMCxcbjAsXG4wLFxuMC4yNSkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiByZ2JhKDAsXG4wLFxuMCxcbjAuMjUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6IHJnYmEoMCxcbjAsXG4wLFxuMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvY3VzdG9tLXNlbGVjdC5wbmcpICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiBzdHItcmVwbGFjZSh1cmwoJycpLFxuJyUyMycpICFkZWZhdWx0O1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuJGJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogJGdyYXktMjAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXM6IDJweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAycHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogMXB4ICFkZWZhdWx0O1xuLy8gUHJvZ3Jlc3MgYmFyc1xuJHByb2dyZXNzLWhlaWdodDogNXB4ICFkZWZhdWx0O1xuLy8gVGFic1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cbiRncmlkLWJyZWFrcG9pbnRzOiAoIHhzOiAwLFxuc206IDU3NnB4LFxubWQ6IDc2OHB4LFxubGc6IDk5MnB4LFxueGw6IDE2MDBweCkgIWRlZmF1bHQ7XG4vLyBOYXZiYXJcbiRuYXZiYXItZGFyay1jb2xvcjogcmdiYSgkd2hpdGUsXG4wLjgpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiByZ2JhKCR3aGl0ZSxcbjEpICFkZWZhdWx0OyIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlLnNjc3MnO1xuXG4vKioqKioqKioqKioqKioqKioqKlxuVGltZWxpbmUgcGFnZVxuKioqKioqKioqKioqKioqKioqL1xuXG4vLyB1c2VyLWNvbXBvbmVudHMgc2Nzc1xuLmxpc3QtYmxvY2stbGlzdGluZyB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi51c2VyX2hpc3Rvcnkge1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG59XG5cbi51c2VyX2hpc3RvcnlfbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctbGVmdDogNDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmX2ljb24ge1xuICAgICAgICB3aWR0aDogMzhweDtcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS0xMDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheS00MDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktNDAwO1xuICAgICAgICAgICAgYm90dG9tOiAtMTdweDtcbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS03MDA7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAmX2ljb24ge1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNraXAge1xuICAgICAgICBjb2xvcjogJGdyYXktMjAwO1xuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=user-user-module-es5.js.map