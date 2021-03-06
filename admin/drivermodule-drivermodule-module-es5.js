(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drivermodule-drivermodule-module"], {
    /***/
    "./src/app/pages/drivermodule/adddriver/adddriver.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/drivermodule/adddriver/adddriver.component.ts ***!
      \*********************************************************************/

    /*! exports provided: AdddriverComponent */

    /***/
    function srcAppPagesDrivermoduleAdddriverAdddriverComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdddriverComponent", function () {
        return AdddriverComponent;
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

      var AdddriverComponent = /*#__PURE__*/function () {
        function AdddriverComponent() {
          _classCallCheck(this, AdddriverComponent);
        }

        _createClass(AdddriverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdddriverComponent;
      }();

      AdddriverComponent.??fac = function AdddriverComponent_Factory(t) {
        return new (t || AdddriverComponent)();
      };

      AdddriverComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AdddriverComponent,
        selectors: [["app-adddriver"]],
        decls: 95,
        vars: 0,
        consts: [[1, "card"], ["action", "#"], [1, "form-body"], [1, "card-body"], [1, "row"], [1, "col-md-12", "p-b-20", "text-right"], ["routerLink", "/pages/drivers", 1, "btn", "btn-primary"], [1, "col-md-6"], [1, "form-group"], [1, "control-label"], ["type", "text", "id", "firstName", "placeholder", "John ", 1, "form-control"], ["type", "text", "id", "firstName", "placeholder", "Doe", 1, "form-control"], ["type", "date", "id", "dob", "placeholder", "Doe", 1, "form-control"], ["type", "text", "id", "no", "placeholder", "5245278554", 1, "form-control"], [1, "form-group", "has-danger"], ["type", "email", "id", "email", "placeholder", "example@gmail.com", 1, "form-control", "form-control-danger"], ["type", "text", "id", "driver_id", "placeholder", "#33434", 1, "form-control", "form-control-danger"], [1, "form-control"], ["value", ""], [1, "custom-file"], ["id", "inputGroupFile01", "type", "file", 1, "custom-file-input"], ["for", "inputGroupFile01", 1, "custom-file-label"], ["type", "number", "placeholder", "Add Commission", "value", "", 1, "form-control"], ["type", "text", "placeholder", "City name", "value", "", 1, "form-control"], ["type", "text", "placeholder", "eg:EX433434", "value", "", 1, "form-control"], [1, "col-md-12"], ["type", "text", "id", "city", "placeholder", "\u20AC 445", 1, "form-control", "form-control-danger"], ["name", "", "id", "", "cols", "30", "rows", "5", "placeholder", "#433 New garden Complex", 1, "form-control"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", "mr-3"]],
        template: function AdddriverComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Date Of Birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Driver ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Vehicle Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Bike");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Scooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "E-bike");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Upload Identity card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Choose file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Commission");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "I am one of Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Student");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Independent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Driver City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "VAT Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Total Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "textarea", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlcm1vZHVsZS9hZGRkcml2ZXIvYWRkZHJpdmVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdddriverComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-adddriver',
            templateUrl: './adddriver.component.html',
            styleUrls: ['./adddriver.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/drivermodule/driver-request/driver-request.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/drivermodule/driver-request/driver-request.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: DriverRequestComponent */

    /***/
    function srcAppPagesDrivermoduleDriverRequestDriverRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverRequestComponent", function () {
        return DriverRequestComponent;
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


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function DriverRequestComponent_th_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " # ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r50.serial_no, " ");
        }
      }

      function DriverRequestComponent_th_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " First Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r51.name, " ");
        }
      }

      function DriverRequestComponent_th_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r52.lastName, " ");
        }
      }

      function DriverRequestComponent_th_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Date Of Birth ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r53.dob, " ");
        }
      }

      function DriverRequestComponent_th_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Driver ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r54.id, " ");
        }
      }

      function DriverRequestComponent_th_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Phone Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r55.contact, " ");
        }
      }

      function DriverRequestComponent_th_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r56.email, "");
        }
      }

      function DriverRequestComponent_th_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Driver Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r57.drivertype, " ");
        }
      }

      function DriverRequestComponent_th_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Drive City ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r58.drivercity, " ");
        }
      }

      function DriverRequestComponent_th_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Documents ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_63_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_td_63_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](95);

            return ctx_r60.documentModal(_r44);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", row_r59.document, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function DriverRequestComponent_th_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Meassge ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](row_r62.message);
        }
      }

      function DriverRequestComponent_th_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Vehicle Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r63.vehicletype, " ");
        }
      }

      function DriverRequestComponent_th_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", row_r64.status, " ");
        }
      }

      function DriverRequestComponent_th_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_75_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_td_75_div_4_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r69);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](91);

            return ctx_r68.vendorConfirmModal(_r40);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Accept ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_td_75_div_4_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r69);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](99);

            return ctx_r70.vendorUnconfirmModal(_r48);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Deny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_75_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_td_75_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](93);

            return ctx_r71.edituserModal(_r42);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " View ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_td_75_div_5_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r72);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](85);

            return ctx_r73.userDeleteModal(_r34);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_td_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Pending ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DriverRequestComponent_td_75_div_4_Template, 5, 0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DriverRequestComponent_td_75_div_5_Template, 10, 0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r65 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", row_r65.action == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", row_r65.action == 1);
        }
      }

      function DriverRequestComponent_tr_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 65);
        }
      }

      function DriverRequestComponent_tr_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 66);
        }
      }

      function DriverRequestComponent_ng_template_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Driving Licence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_80_Template_button_click_3_listener() {
            var modal_r75 = ctx.$implicit;
            return modal_r75.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "figure", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "figure", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_ng_template_82_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Vendor Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_ng_template_82_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Ronny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "ronny@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Gender: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Phone No: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "+91-7858485474");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "3750 Grove Avenue, Clinton");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "ul", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Total Stock: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Availble Stock: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Booked Stock: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Total Revenue: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "$ 410");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "User Request: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "8:40 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Delivery Time: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "9:00 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_ng_template_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_82_Template_button_click_1_listener() {
            var modal_r77 = ctx.$implicit;
            return modal_r77.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Ronny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ngb-tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "ngb-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, DriverRequestComponent_ng_template_82_ng_template_16_Template, 2, 0, "ng-template", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, DriverRequestComponent_ng_template_82_ng_template_17_Template, 50, 0, "ng-template", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_ng_template_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Are You Sure want to delete?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_84_Template_button_click_4_listener() {
            var modal_r81 = ctx.$implicit;
            return modal_r81.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_84_Template_button_click_6_listener() {
            var modal_r81 = ctx.$implicit;
            return modal_r81.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_ng_template_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Upload Diriver Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "select", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "option", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_86_Template_button_click_53_listener() {
            var modal_r84 = ctx.$implicit;
            return modal_r84.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "i", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "button", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_86_Template_button_click_56_listener() {
            var modal_r84 = ctx.$implicit;
            return modal_r84.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_ng_template_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Driver ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Vehicle Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "select", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Bike");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Scooter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "E-bike");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Upload Identity card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "input", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Commission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "input", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "I am one of Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "select", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Stident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Idependent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "VAT Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "input", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "textarea", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_88_Template_button_click_83_listener() {
            var modal_r87 = ctx.$implicit;
            return modal_r87.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "i", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "button", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_88_Template_button_click_86_listener() {
            var modal_r87 = ctx.$implicit;
            return modal_r87.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_ng_template_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Driver Income");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Income Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "select", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Salaried");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Salaried + Commission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Commission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_90_Template_button_click_24_listener() {
            var modal_r90 = ctx.$implicit;
            return modal_r90.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_ng_template_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Driver ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Vehicle Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "select", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Bike");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Scooter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "E-bike");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Upload Identity card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "input", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Commission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "input", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "I am one of Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "select", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Idependent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "VAT Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "input", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "input", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "textarea", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "button", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_92_Template_button_click_84_listener() {
            var modal_r92 = ctx.$implicit;
            return modal_r92.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "i", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "button", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_92_Template_button_click_87_listener() {
            var modal_r92 = ctx.$implicit;
            return modal_r92.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_ng_template_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_94_Template_button_click_1_listener() {
            var modal_r95 = ctx.$implicit;
            return modal_r95.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_ng_template_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Commission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Commission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_96_Template_button_click_10_listener() {
            var modal_r97 = ctx.$implicit;
            return modal_r97.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverRequestComponent_ng_template_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "textarea", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverRequestComponent_ng_template_98_Template_button_click_6_listener() {
            var modal_r99 = ctx.$implicit;
            return modal_r99.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25, 100];
      };

      var DriverRequestComponent = /*#__PURE__*/function () {
        function DriverRequestComponent(modalService) {
          _classCallCheck(this, DriverRequestComponent);

          this.modalService = modalService;
          this.images = [944, 1011, 984].map(function (n) {
            return "https://picsum.photos/id/".concat(n, "/900/500");
          });
          this.displayedColumns = ['serial_no', 'name', 'lastName', 'DOB', 'id', 'contact', 'email', 'drivertype', 'drivercity', 'document', 'message', 'vehicletype', 'status', 'action'];
          this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
          this.table = [{
            serial_no: '1',
            name: 'Sandy',
            lastName: "Joe",
            dob: "01/01/1990",
            id: "#sand334553",
            contact: "+91-33434343",
            email: "sand@example.com",
            drivertype: "Independent",
            drivercity: "London",
            document: 'assets/images/gallery/driving-licence.jpg',
            // address:"#454 1st Block, Rammurthy, Bangalore-560016",
            message: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            vehicletype: "Bike",
            // cancelledOrders:"0",
            // pendingOrders:"0",
            // totalOrders:"50",
            // totalSales:"500",
            status: "Pending",
            action: "0"
          }, {
            serial_no: "2",
            name: 'Rohan',
            lastName: "Doe",
            dob: "01/01/1990",
            id: "#rohan334553",
            contact: "+91-33434343",
            email: "sand@example.com",
            drivertype: "Student",
            drivercity: "London",
            document: 'assets/images/gallery/driving-licence.jpg',
            // address:"#454 1st Block, Rammurthy, Bangalore-560016",
            message: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            // completedOrders:"10",
            // cancelledOrders:"0",
            // pendingOrders:"30",
            // totalOrders:"40",
            // totalSales:"500",
            vehicletype: "E-bike",
            status: "Pending",
            action: "0"
          }, {
            serial_no: "3",
            name: 'John',
            lastName: "Root",
            dob: "01/01/1990",
            id: "#rohan334553",
            contact: "+91-33434343",
            email: "sand@example.com",
            drivertype: "Independent",
            drivercity: "London",
            document: 'assets/images/gallery/driving-licence.jpg',
            // address:"#454 1st Block, Rammurthy, Bangalore-560016",
            message: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            vehicletype: "Scooter",
            // completedOrders:"20",
            // cancelledOrders:"10",
            // pendingOrders:"10",
            // totalOrders:"30",
            // totalSales:"400",
            status: "Pending",
            action: "0"
          }];
          this.time = {
            hour: 13,
            minute: 30
          };
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.table);
        }

        _createClass(DriverRequestComponent, [{
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
          } // toppings = new FormControl();
          // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
          // This is for the first modal

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
          key: "edituserModal",
          value: function edituserModal(edituser) {
            this.modalService.open(edituser, {
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
          key: "vendorConfirmModal",
          value: function vendorConfirmModal(vendorConfirm) {
            this.modalService.open(vendorConfirm, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }, {
          key: "documentModal",
          value: function documentModal(document) {
            this.modalService.open(document, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'md'
            });
          }
        }, {
          key: "vendorUnconfirmModal",
          value: function vendorUnconfirmModal(vendorUnconfirm) {
            this.modalService.open(vendorUnconfirm, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'sm'
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

        return DriverRequestComponent;
      }();

      DriverRequestComponent.??fac = function DriverRequestComponent_Factory(t) {
        return new (t || DriverRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      DriverRequestComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DriverRequestComponent,
        selectors: [["app-driver-request"]],
        viewQuery: function DriverRequestComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 100,
        vars: 5,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "col-md-4"], [1, "mb-2"], ["type", "text", "id", "prenametext", "placeholder", "Search", 1, "form-control"], [1, "col-md-8", "d-flex", "justify-content-end"], ["ngbDropdown", "", 1, "d-inline-block", "mb-2", "mr-2"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], ["ngbDropdown", "", 1, "d-inline-block", "mb-2", "mr-0"], [1, "table-responsive"], ["mat-table", "", "matSort", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "serial_no"], ["mat-header-cell", "", "mat-sort-header", "", "class", "text-nowrap", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "lastName"], ["matColumnDef", "DOB"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "contact"], ["mat-cell", "", "class", "text-nowrap", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "drivertype"], ["matColumnDef", "drivercity"], ["matColumnDef", "document"], ["matColumnDef", "message"], ["matColumnDef", "vehicletype"], ["matColumnDef", "status"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "col-md-12", "text-right"], [3, "pageSizeOptions"], ["content3", ""], ["userprofile", ""], ["userDelete", ""], ["userDetail", ""], ["addUser", ""], ["vendorConfirm", ""], ["edituser", ""], ["document", ""], ["vendorUnconfirm", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "text-nowrap"], ["href", "tel:565655643"], ["href", "mailto:example@site.com"], ["href", "javascript:void()", 3, "click"], ["alt", " ", "width", "60px", 3, "src"], [2, "width", "200px"], ["for", "", 1, "badge", "bg-warning"], ["ngbDropdown", "", "placement", "bottom", "container", "body", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "btn-sm"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 4, "ngIf"], ["href", "javascript:void()", 1, "dropdown-item", 3, "click"], [1, "dropdown-item", 3, "click"], ["_ngcontent-axh-c146", "", 1, "ti-marker-alt"], ["routerLink", "/pages/driversdetail", 1, "dropdown-item"], [1, "ti-eye"], [1, "ti-trash"], ["mat-header-row", ""], ["mat-row", ""], [1, "modal-header", "p-2"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-6"], [1, ""], ["src", "assets/images/gallery/driving-licence.jpg", 1, "img-fluid"], ["type", "button", "aria-label", "Close", 1, "close-icon", 3, "click"], [1, "mdi", "mdi-close"], [1, "col-lg-3", "col-xlg-3", "col-md-5"], [1, "m-t-30", "text-center"], ["src", "assets/images/users/2.jpg", "width", "120", 1, "rounded-circle"], [1, "card-title", "m-t-10"], [1, "col-lg-9", "col-xlg-9", "col-md-7"], [1, "card", "custom-tabs", "mb-0"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [1, "row", "pt-2"], [1, "list-block"], [1, "list-block-listing"], [1, "font-weight-600"], [1, "btn-group"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-primary", "mr-2", 3, "click"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-seconadary", 3, "click"], ["action", "#"], [1, "form-body"], [1, "row", "p-t-20"], [1, "form-group"], [1, "control-label"], ["type", "text", "id", "firstName", "placeholder", "John", 1, "form-control"], ["type", "text", "id", "firstName", "placeholder", " doe", 1, "form-control"], [1, "form-group", "has-success"], [1, "custom-file"], ["id", "inputGroupFile01", "type", "file", 1, "custom-file-input"], ["for", "inputGroupFile01", 1, "custom-file-label"], ["type", "number", "id", "firstName", "placeholder", "343-434-5423", 1, "form-control"], [1, "form-group", "has-danger"], ["type", "email", "id", "email", "placeholder", "example@gmail.com", 1, "form-control", "form-control-danger"], ["type", "text", "id", "Address", "placeholder", "Address", 1, "form-control", "form-control-danger"], ["data-placeholder", "Choose a Category", "tabindex", "1", 1, "form-control", "custom-select"], ["value", "Category 1"], ["value", "Category 2"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-success", "mr-3", 3, "click"], [1, "fa", "fa-check"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "text", "id", "firstName", "placeholder", "John ", 1, "form-control"], ["type", "text", "id", "firstName", "placeholder", "Doe", 1, "form-control"], ["type", "text", "id", "no", "placeholder", "5245278554", 1, "form-control"], ["type", "text", "id", "driver_id", "placeholder", "#33434", 1, "form-control", "form-control-danger"], [1, "form-control"], ["value", ""], ["type", "number", "placeholder", "Add Commission", "value", "", 1, "form-control"], ["type", "text", "placeholder", "eg:EX433434", "value", "", 1, "form-control"], [1, "col-md-12"], ["type", "text", "id", "city", "placeholder", "City", 1, "form-control", "form-control-danger"], ["name", "", "id", "", "cols", "30", "rows", "5", "placeholder", "#433 New garden Complex", 1, "form-control"], ["name", "", "id", "", 1, "form-control"], ["type", "text", "id", "Address", "placeholder", "Add Salary", 1, "form-control", "form-control-danger"], ["type", "text", "id", "Address", "placeholder", "Add Commission", 1, "form-control", "form-control-danger"], [1, "btn", "btn-primary", 3, "click"], [1, "col-md-12", "p-1"], ["src", "assets/images/gallery/driving-licence.jpg", "alt", "", 1, "img-fluid"], [1, "mb-3"], ["name", "", "id", "", "cols", "30", "rows", "5", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "mr-0", "btn-primary", "mt-2", 3, "click"]],
        template: function DriverRequestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Filter by type of vehicle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Bike");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Scooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "E-bike");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " All ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Pending ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Denied ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](34, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, DriverRequestComponent_th_35_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, DriverRequestComponent_td_36_Template, 2, 1, "td", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](37, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, DriverRequestComponent_th_38_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, DriverRequestComponent_td_39_Template, 2, 1, "td", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](40, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, DriverRequestComponent_th_41_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, DriverRequestComponent_td_42_Template, 2, 1, "td", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](43, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, DriverRequestComponent_th_44_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, DriverRequestComponent_td_45_Template, 2, 1, "td", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](46, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, DriverRequestComponent_th_47_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, DriverRequestComponent_td_48_Template, 2, 1, "td", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](49, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, DriverRequestComponent_th_50_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, DriverRequestComponent_td_51_Template, 3, 1, "td", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](52, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, DriverRequestComponent_th_53_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, DriverRequestComponent_td_54_Template, 3, 1, "td", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](55, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, DriverRequestComponent_th_56_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, DriverRequestComponent_td_57_Template, 2, 1, "td", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](58, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, DriverRequestComponent_th_59_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, DriverRequestComponent_td_60_Template, 2, 1, "td", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](61, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, DriverRequestComponent_th_62_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, DriverRequestComponent_td_63_Template, 3, 1, "td", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](64, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, DriverRequestComponent_th_65_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, DriverRequestComponent_td_66_Template, 3, 1, "td", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](67, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, DriverRequestComponent_th_68_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, DriverRequestComponent_td_69_Template, 2, 1, "td", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](70, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](71, DriverRequestComponent_th_71_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](72, DriverRequestComponent_td_72_Template, 3, 1, "td", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](73, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, DriverRequestComponent_th_74_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](75, DriverRequestComponent_td_75_Template, 6, 2, "td", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](76, DriverRequestComponent_tr_76_Template, 1, 0, "tr", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](77, DriverRequestComponent_tr_77_Template, 1, 0, "tr", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "mat-paginator", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, DriverRequestComponent_ng_template_80_Template, 14, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](82, DriverRequestComponent_ng_template_82_Template, 18, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](84, DriverRequestComponent_ng_template_84_Template, 8, 0, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](86, DriverRequestComponent_ng_template_86_Template, 58, 0, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](88, DriverRequestComponent_ng_template_88_Template, 88, 0, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](90, DriverRequestComponent_ng_template_90_Template, 26, 0, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](92, DriverRequestComponent_ng_template_92_Template, 89, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](94, DriverRequestComponent_ng_template_94_Template, 8, 0, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](96, DriverRequestComponent_ng_template_96_Template, 12, 0, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](98, DriverRequestComponent_ng_template_98_Template, 8, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlcm1vZHVsZS9kcml2ZXItcmVxdWVzdC9kcml2ZXItcmVxdWVzdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DriverRequestComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-driver-request',
            templateUrl: './driver-request.component.html',
            styleUrls: ['./driver-request.component.css']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/drivermodule/driver/driver.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/drivermodule/driver/driver.component.ts ***!
      \***************************************************************/

    /*! exports provided: DriverComponent */

    /***/
    function srcAppPagesDrivermoduleDriverDriverComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverComponent", function () {
        return DriverComponent;
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


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function DriverComponent_th_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "# ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r44.serial_no, " ");
        }
      }

      function DriverComponent_th_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " First Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r45.name, " ");
        }
      }

      function DriverComponent_th_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r46.lastName, " ");
        }
      }

      function DriverComponent_th_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Date Of Birth ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r47.dob, " ");
        }
      }

      function DriverComponent_th_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Driver ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](row_r48.id);
        }
      }

      function DriverComponent_th_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Phone Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](row_r49.contact);
        }
      }

      function DriverComponent_th_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r50.email, "");
        }
      }

      function DriverComponent_th_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Driver Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r51.drivertype, " ");
        }
      }

      function DriverComponent_th_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Drive City ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r52.drivercity, " ");
        }
      }

      function DriverComponent_th_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Documents ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_69_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverComponent_td_69_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](99);

            return ctx_r54.documentModal(_r42);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", row_r53.document, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function DriverComponent_th_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Meassge ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](row_r56.message);
        }
      }

      function DriverComponent_th_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Vehicle Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r57.vehicletype, " ");
        }
      }

      function DriverComponent_th_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "mat-slide-toggle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r58.status, " ");
        }
      }

      function DriverComponent_th_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_81_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " View ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverComponent_td_81_div_4_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](91);

            return ctx_r61.userDeleteModal(_r34);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_td_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DriverComponent_td_81_div_4_Template, 10, 0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", row_r59.action == 1);
        }
      }

      function DriverComponent_tr_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 66);
        }
      }

      function DriverComponent_tr_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 67);
        }
      }

      function DriverComponent_ng_template_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Driving Licence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverComponent_ng_template_86_Template_button_click_3_listener() {
            var modal_r64 = ctx.$implicit;
            return modal_r64.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "figure", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "figure", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_ng_template_88_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Vendor Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_ng_template_88_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Ronny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "ronny@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Gender: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Phone No: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "+91-7858485474");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "3750 Grove Avenue, Clinton");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "ul", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Total Stock: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Availble Stock: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Booked Stock: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Total Revenue: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "$ 410");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "User Request: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "8:40 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Delivery Time: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "9:00 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_ng_template_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverComponent_ng_template_88_Template_button_click_1_listener() {
            var modal_r66 = ctx.$implicit;
            return modal_r66.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Ronny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ngb-tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "ngb-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, DriverComponent_ng_template_88_ng_template_16_Template, 2, 0, "ng-template", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, DriverComponent_ng_template_88_ng_template_17_Template, 50, 0, "ng-template", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_ng_template_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Are you sure you want to delete this driver?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverComponent_ng_template_90_Template_button_click_4_listener() {
            var modal_r70 = ctx.$implicit;
            return modal_r70.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverComponent_ng_template_90_Template_button_click_6_listener() {
            var modal_r70 = ctx.$implicit;
            return modal_r70.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_ng_template_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Upload Diriver Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "select", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "option", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverComponent_ng_template_92_Template_button_click_53_listener() {
            var modal_r73 = ctx.$implicit;
            return modal_r73.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "button", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverComponent_ng_template_92_Template_button_click_56_listener() {
            var modal_r73 = ctx.$implicit;
            return modal_r73.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_ng_template_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Driver Income");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Income Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "select", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "option", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Salaried");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "option", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Salaried + Commission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Commission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverComponent_ng_template_94_Template_button_click_24_listener() {
            var modal_r76 = ctx.$implicit;
            return modal_r76.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_ng_template_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Date Of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Driver ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Vehicle Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "select", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "option", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Bike");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "option", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Scooter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "option", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "E-bike");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Upload Identity card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "label", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Commission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "input", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "I am one of Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "select", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "option", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Stident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "option", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Idependent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Driver City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "input", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "VAT Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "input", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "input", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "textarea", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "button", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverComponent_ng_template_96_Template_button_click_92_listener() {
            var modal_r78 = ctx.$implicit;
            return modal_r78.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "button", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverComponent_ng_template_96_Template_button_click_95_listener() {
            var modal_r78 = ctx.$implicit;
            return modal_r78.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverComponent_ng_template_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DriverComponent_ng_template_98_Template_button_click_1_listener() {
            var modal_r81 = ctx.$implicit;
            return modal_r81.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25, 100];
      };

      var DriverComponent = /*#__PURE__*/function () {
        function DriverComponent(modalService) {
          _classCallCheck(this, DriverComponent);

          this.modalService = modalService;
          this.images = [944, 1011, 984].map(function (n) {
            return "https://picsum.photos/id/".concat(n, "/900/500");
          });
          this.displayedColumns = ['serial_no', 'name', 'lastName', 'DOB', 'id', 'contact', 'email', 'drivertype', 'drivercity', 'document', 'message', 'vehicletype', 'status', 'action'];
          this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
          this.table = [{
            serial_no: "1",
            name: 'Sandy',
            lastName: "Joe",
            dob: "01/01/1990",
            id: "#sand334553",
            contact: "+91-33434343",
            email: "sand@example.com",
            drivertype: "Independent",
            drivercity: "London",
            document: 'assets/images/gallery/driving-licence.jpg',
            message: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            vehicletype: "Bike",
            // cancelledOrders:"0",
            // pendingOrders:"0",
            // totalOrders:"50",
            // totalSales:"500",
            status: "",
            action: "1"
          }, {
            serial_no: "2",
            name: 'Rohan',
            lastName: "Doe",
            dob: "01/02/1990",
            id: "#rohan334553",
            contact: "+91-33434343",
            email: "sand@example.com",
            drivertype: "Student",
            drivercity: "London",
            document: 'assets/images/gallery/driving-licence.jpg',
            message: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            // completedOrders:"10",
            // cancelledOrders:"0",
            // pendingOrders:"30",
            // totalOrders:"40",
            // totalSales:"500",
            vehicletype: "E-bike",
            status: "",
            action: "1"
          }, {
            serial_no: "3",
            name: 'John',
            lastName: "Root",
            dob: "01/03/1990",
            id: "#rohan334553",
            contact: "+91-33434343",
            email: "sand@example.com",
            drivertype: "Independent",
            drivercity: "London",
            document: 'assets/images/gallery/driving-licence.jpg',
            message: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            vehicletype: "Scooter",
            // completedOrders:"20",
            // cancelledOrders:"10",
            // pendingOrders:"10",
            // totalOrders:"30",
            // totalSales:"400",
            status: "",
            action: "1"
          }];
          this.time = {
            hour: 13,
            minute: 30
          };
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.table);
        }

        _createClass(DriverComponent, [{
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
          } // toppings = new FormControl();
          // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
          // This is for the first modal

        }, {
          key: "open1",
          value: function open1(content1) {
            var _this2 = this;

            this.modalService.open(content1, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this2.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this2.closeResult = "Dismissed ".concat(_this2.getDismissReason(reason));
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
          key: "edituserModal",
          value: function edituserModal(edituser) {
            this.modalService.open(edituser, {
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
          key: "vendorConfirmModal",
          value: function vendorConfirmModal(vendorConfirm) {
            this.modalService.open(vendorConfirm, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }, {
          key: "documentModal",
          value: function documentModal(document) {
            this.modalService.open(document, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'md'
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

        return DriverComponent;
      }();

      DriverComponent.??fac = function DriverComponent_Factory(t) {
        return new (t || DriverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      DriverComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DriverComponent,
        selectors: [["app-driver"]],
        viewQuery: function DriverComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 100,
        vars: 5,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "col-md-4"], [1, "mb-2"], ["type", "text", "id", "prenametext", "placeholder", "Search", 1, "form-control"], [1, "col-md-8", "d-flex", "justify-content-end"], ["ngbDropdown", "", 1, "d-inline-block", "mb-2", "mr-2"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], [1, "btn", "btn-primary", "mb-2", "mr-2"], [1, "sl-icon-cloud-download"], ["routerLink", "driveradd", 1, "btn", "btn-seconadary", "mb-2"], [1, "sl-icon-plus"], [1, "table-responsive"], ["mat-table", "", "matSort", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "serial_no"], ["mat-header-cell", "", "mat-sort-header", "", "class", "text-nowrap", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "lastName"], ["matColumnDef", "DOB"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "contact"], ["mat-cell", "", "class", "text-nowrap", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "drivertype"], ["matColumnDef", "drivercity"], ["matColumnDef", "document"], ["matColumnDef", "message"], ["matColumnDef", "vehicletype"], ["matColumnDef", "status"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "col-md-12", "text-right"], [3, "pageSizeOptions"], ["content3", ""], ["userprofile", ""], ["userDelete", ""], ["userDetail", ""], ["vendorConfirm", ""], ["edituser", ""], ["document", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["routerLink", "driversdetail"], ["mat-cell", "", 1, "text-nowrap"], ["href", "tel:4545454545"], ["href", "mailto:example@site.com"], ["href", "javascript:void()", 3, "click"], ["alt", " ", "width", "60px", 3, "src"], [2, "width", "200px"], ["ngbDropdown", "", "placement", "bottom", "container", "body", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "btn-sm"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 4, "ngIf"], ["routerLink", "driveredit", 1, "dropdown-item"], [1, "ti-marker-alt"], ["routerLink", "driversdetail", 1, "dropdown-item"], [1, "ti-eye"], [1, "dropdown-item", 3, "click"], [1, "ti-trash"], ["mat-header-row", ""], ["mat-row", ""], [1, "modal-header", "p-2"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-6"], [1, ""], ["src", "assets/images/gallery/driving-licence.jpg", 1, "img-fluid"], ["type", "button", "aria-label", "Close", 1, "close-icon", 3, "click"], [1, "mdi", "mdi-close"], [1, "col-lg-3", "col-xlg-3", "col-md-5"], [1, "m-t-30", "text-center"], ["src", "assets/images/users/2.jpg", "width", "120", 1, "rounded-circle"], [1, "card-title", "m-t-10"], [1, "col-lg-9", "col-xlg-9", "col-md-7"], [1, "card", "custom-tabs", "mb-0"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [1, "row", "pt-2"], [1, "list-block"], [1, "list-block-listing"], [1, "font-weight-600"], [1, "btn-group"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-primary", "mr-2", 3, "click"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-seconadary", 3, "click"], ["action", "#"], [1, "form-body"], [1, "row", "p-t-20"], [1, "form-group"], [1, "control-label"], ["type", "text", "id", "firstName", "placeholder", "John", 1, "form-control"], ["type", "text", "id", "firstName", "placeholder", " doe", 1, "form-control"], [1, "form-group", "has-success"], [1, "custom-file"], ["id", "inputGroupFile01", "type", "file", 1, "custom-file-input"], ["for", "inputGroupFile01", 1, "custom-file-label"], ["type", "number", "id", "firstName", "placeholder", "343-434-5423", 1, "form-control"], [1, "form-group", "has-danger"], ["type", "email", "id", "email", "placeholder", "example@gmail.com", 1, "form-control", "form-control-danger"], ["type", "text", "id", "Address", "placeholder", "Address", 1, "form-control", "form-control-danger"], ["data-placeholder", "Choose a Category", "tabindex", "1", 1, "form-control", "custom-select"], ["value", "Category 1"], ["value", "Category 2"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-success", "mr-3", 3, "click"], [1, "fa", "fa-check"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "col-md-12"], ["name", "", "id", "", 1, "form-control"], ["value", ""], ["type", "text", "id", "Address", "placeholder", "Add Salary", 1, "form-control", "form-control-danger"], ["type", "text", "id", "Address", "placeholder", "Add Commission", 1, "form-control", "form-control-danger"], [1, "btn", "btn-primary", 3, "click"], ["type", "text", "id", "firstName", "placeholder", "John ", 1, "form-control"], ["type", "text", "id", "firstName", "placeholder", "Doe", 1, "form-control"], ["type", "date", "id", "dob", "placeholder", "Doe", 1, "form-control"], ["type", "text", "id", "no", "placeholder", "5245278554", 1, "form-control"], ["type", "text", "id", "driver_id", "placeholder", "#33434", 1, "form-control", "form-control-danger"], [1, "form-control"], ["type", "number", "placeholder", "Add Commission", "value", "", 1, "form-control"], ["type", "text", "placeholder", "City name", "value", "", 1, "form-control"], ["type", "text", "placeholder", "eg:EX433434", "value", "", 1, "form-control"], ["type", "text", "id", "city", "placeholder", "City", 1, "form-control", "form-control-danger"], ["name", "", "id", "", "cols", "30", "rows", "5", "placeholder", "#433 New garden Complex", 1, "form-control"], [1, "col-md-12", "p-1"], ["src", "assets/images/gallery/driving-licence.jpg", "alt", "", 1, "img-fluid"]],
        template: function DriverComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Filter by type of vehicle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Bike");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Scooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "E-bike");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Filter by drivers status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Export CSV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Add Driver");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "table", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](40, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, DriverComponent_th_41_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, DriverComponent_td_42_Template, 2, 1, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](43, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, DriverComponent_th_44_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, DriverComponent_td_45_Template, 2, 1, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](46, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, DriverComponent_th_47_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, DriverComponent_td_48_Template, 2, 1, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](49, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, DriverComponent_th_50_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, DriverComponent_td_51_Template, 2, 1, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](52, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, DriverComponent_th_53_Template, 2, 0, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, DriverComponent_td_54_Template, 3, 1, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](55, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, DriverComponent_th_56_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, DriverComponent_td_57_Template, 3, 1, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](58, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, DriverComponent_th_59_Template, 2, 0, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, DriverComponent_td_60_Template, 3, 1, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](61, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, DriverComponent_th_62_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, DriverComponent_td_63_Template, 2, 1, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](64, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, DriverComponent_th_65_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, DriverComponent_td_66_Template, 2, 1, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](67, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, DriverComponent_th_68_Template, 2, 0, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, DriverComponent_td_69_Template, 3, 1, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](70, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](71, DriverComponent_th_71_Template, 2, 0, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](72, DriverComponent_td_72_Template, 3, 1, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](73, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, DriverComponent_th_74_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](75, DriverComponent_td_75_Template, 2, 1, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](76, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](77, DriverComponent_th_77_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](78, DriverComponent_td_78_Template, 3, 1, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](79, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, DriverComponent_th_80_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](81, DriverComponent_td_81_Template, 5, 1, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](82, DriverComponent_tr_82_Template, 1, 0, "tr", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](83, DriverComponent_tr_83_Template, 1, 0, "tr", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "mat-paginator", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](86, DriverComponent_ng_template_86_Template, 14, 0, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](88, DriverComponent_ng_template_88_Template, 18, 0, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](90, DriverComponent_ng_template_90_Template, 8, 0, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](92, DriverComponent_ng_template_92_Template, 58, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](94, DriverComponent_ng_template_94_Template, 26, 0, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](96, DriverComponent_ng_template_96_Template, 97, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](98, DriverComponent_ng_template_98_Template, 8, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlcm1vZHVsZS9kcml2ZXIvZHJpdmVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DriverComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-driver',
            templateUrl: './driver.component.html',
            styleUrls: ['./driver.component.css']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/drivermodule/driverdetail/driverdetail.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/drivermodule/driverdetail/driverdetail.component.ts ***!
      \***************************************************************************/

    /*! exports provided: DriverdetailComponent */

    /***/
    function srcAppPagesDrivermoduleDriverdetailDriverdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverdetailComponent", function () {
        return DriverdetailComponent;
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function DriverdetailComponent_th_203_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverdetailComponent_td_204_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r17.id, " ");
        }
      }

      function DriverdetailComponent_th_206_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Restaurant ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverdetailComponent_td_207_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r18.hotelName, " ");
        }
      }

      function DriverdetailComponent_th_209_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Order Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverdetailComponent_td_210_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("color", row_r19.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r19.orderdate, " ");
        }
      }

      function DriverdetailComponent_th_212_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Delivery Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverdetailComponent_td_213_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("color", row_r20.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r20.deliverydate, " ");
        }
      }

      function DriverdetailComponent_th_215_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Customer Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverdetailComponent_td_216_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("color", row_r21.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r21.delivery_man, " ");
        }
      }

      function DriverdetailComponent_th_218_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverdetailComponent_td_219_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("color", row_r22.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r22.price, " ");
        }
      }

      function DriverdetailComponent_th_221_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Order Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DriverdetailComponent_td_222_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("color", row_r23.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", row_r23.status == "Cancelled" ? "btn-outline-danger" : row_r23.status == "Pending" ? "btn-outline-info" : "btn-outline-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](row_r23.status);
        }
      }

      function DriverdetailComponent_tr_223_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 76);
        }
      }

      function DriverdetailComponent_tr_224_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 77);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25, 100];
      };

      var DriverdetailComponent = /*#__PURE__*/function () {
        function DriverdetailComponent(modalService) {
          _classCallCheck(this, DriverdetailComponent);

          // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
          this.modalService = modalService;
          this.time = {
            hour: 13,
            minute: 30,
            second: 30
          };
          this.time1 = {
            hour: 13,
            minute: 30,
            second: 30
          };
          this.time2 = {
            hour: 13,
            minute: 30,
            second: 30
          };
          this.time3 = {
            hour: 13,
            minute: 30,
            second: 30
          };
          this.time4 = {
            hour: 13,
            minute: 30,
            second: 30
          };
          this.time5 = {
            hour: 13,
            minute: 30,
            second: 30
          };
          this.time6 = {
            hour: 13,
            minute: 30,
            second: 30
          };
          this.meridian = false;
          this.seconds = true; //table: any

          this.displayedColumns = ['hotelName', 'id', 'orderdate', 'deliverydate', 'delivery_man', 'price', 'status'];
          this.table = [{
            hotelName: 'Leuven',
            id: "#454545",
            orderdate: "12-05-2021/12:00",
            deliverydate: "12-05-2021/13:00",
            delivery_man: "John",
            price: "50",
            status: "Completed"
          }, {
            hotelName: 'Mcdonalds',
            id: "#454545",
            orderdate: "12-05-2021/11:00",
            deliverydate: "12-05-2021/14:00",
            delivery_man: "John",
            price: "50",
            status: "Cancelled"
          }, {
            hotelName: 'Mcdonalds',
            id: "#454545",
            orderdate: "12-05-2021/11:00",
            deliverydate: "12-05-2021/14:00",
            delivery_man: "John",
            price: "50",
            status: "Pending"
          }]; // Assign the data to the data source for the table to render

          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.table);
        }

        _createClass(DriverdetailComponent, [{
          key: "toggleMeridian",
          value: function toggleMeridian() {
            this.meridian = !this.meridian;
          }
        }, {
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
          }
        }]);

        return DriverdetailComponent;
      }();

      DriverdetailComponent.??fac = function DriverdetailComponent_Factory(t) {
        return new (t || DriverdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      DriverdetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DriverdetailComponent,
        selectors: [["app-driverdetail"]],
        viewQuery: function DriverdetailComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 226,
        vars: 14,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "d-flex", "mb-3"], ["routerLink", "/pages/driveredit", 1, "btn", "btn-primary"], ["routerLink", "/pages/drivers", 1, "btn", "btn-primary", "ml-auto"], [1, "card", "p-3"], [1, "col-md-6"], [1, "card-body", "p-3", "bg-light", "border"], [1, "text-center"], ["src", "assets/images/users/1.jpg", "width", "150", 1, "rounded-circle"], [1, "list-block", "pl-0"], [1, "list-block-listing", "pr-2", "pb-2"], [1, "font-weight-600", "d-block"], ["href", "tel:+919564345452"], ["href", "mailto:hanna@example.com"], ["href", "javascript:void()"], [1, "map-box", "mt-2"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508", "width", "100%", "height", "150", "frameborder", "0", "allowfullscreen", "", 2, "border", "0"], [1, "col-md-12"], [1, "list-block", "pl-0", "list-style-none"], [1, "fas", "fa-euro-sign"], [1, "btn", "btn-primary", "btn-small"], [1, "font-weight-600", "pb-2", "mb-0"], ["src", "assets/images/gallery/driving-licence.jpg", "alt", "", 1, "img-fluid"], [1, "d-flex"], [1, "ml-auto"], ["routerLink", "/pages/edittimeslot", 1, "btn", "btn-primary"], [1, "col-md-2", "mb-2"], [1, "bg-light", "p-2"], [1, "mb-0", "p-3", "pb-0", "h4"], [3, "ngModel", "ngModelChange"], [1, "pt-2"], [1, "card"], [1, "card-body"], [1, "row", "pb-2"], [1, "col-md-4"], ["type", "text", "id", "prenametext", "placeholder", "Search", 1, "form-control"], [1, "col-md-8", "text-right"], [1, "d-block"], ["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], ["ngbDropdown", "", 1, "d-inline-block", "mr-2"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "mr-2"], [1, "table-responsive"], ["mat-table", "", "matSort", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-nowrap", 4, "matCellDef"], ["matColumnDef", "hotelName"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "orderdate"], ["mat-cell", "", "class", "text-nowrap", 3, "color", 4, "matCellDef"], ["matColumnDef", "deliverydate"], ["matColumnDef", "delivery_man"], ["mat-header-cell", "", "mat-sort-header", "", "class", "text-nowrap", 4, "matHeaderCellDef"], ["matColumnDef", "price"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "text-nowrap"], ["routerLink", "/pages/orderdetail"], [1, "sl-icon-info"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap"], [1, "btn", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function DriverdetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Phone No. :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "+91-9564345452");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "hanna@@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Address:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "#454 1st Block, Rammurthy, Bangalore-560016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "iframe", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Driver ID: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "elite2345");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Full Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Hanna Gover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Completed Orders: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "28");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Canceled Orders:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Pending Orders:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Cancelation Rate:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "10%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Payment Not Completed:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Total Orders:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Total earned:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "2000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Student loan::");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "200 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Sync with sealjobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h4", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Identity Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Set Weekly Timing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h3", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Sunday ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "ngb-timepicker", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DriverdetailComponent_Template_ngb_timepicker_ngModelChange_111_listener($event) {
              return ctx.time = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h3", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Monday ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "ngb-timepicker", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DriverdetailComponent_Template_ngb_timepicker_ngModelChange_116_listener($event) {
              return ctx.time1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h3", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Tuesday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "ngb-timepicker", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DriverdetailComponent_Template_ngb_timepicker_ngModelChange_121_listener($event) {
              return ctx.time2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "h3", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Wednesday ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "ngb-timepicker", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DriverdetailComponent_Template_ngb_timepicker_ngModelChange_126_listener($event) {
              return ctx.time3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "h3", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Thursday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "ngb-timepicker", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DriverdetailComponent_Template_ngb_timepicker_ngModelChange_131_listener($event) {
              return ctx.time4 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "h3", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Friday ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "ngb-timepicker", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DriverdetailComponent_Template_ngb_timepicker_ngModelChange_136_listener($event) {
              return ctx.time5 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "h3", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Saturday ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "ngb-timepicker", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DriverdetailComponent_Template_ngb_timepicker_ngModelChange_141_listener($event) {
              return ctx.time6 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "h2", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Order History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "mat-form-field", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " Filter by date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "mat-date-range-input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "mat-datepicker-toggle", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "mat-date-range-picker", null, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, " Filter by coupon ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "BLACK20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "APP30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "APP20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, " Filter by rider ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Methew");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Andrew");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, " Filter by restaurant ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Leuven");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Mcdonalds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, " Filter by orders status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "Completed Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Cancelled Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Pending Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "table", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](202, 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](203, DriverdetailComponent_th_203_Template, 2, 0, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](204, DriverdetailComponent_td_204_Template, 4, 1, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](205, 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](206, DriverdetailComponent_th_206_Template, 2, 0, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](207, DriverdetailComponent_td_207_Template, 2, 1, "td", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](208, 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](209, DriverdetailComponent_th_209_Template, 2, 0, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](210, DriverdetailComponent_td_210_Template, 2, 3, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](211, 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](212, DriverdetailComponent_th_212_Template, 2, 0, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](213, DriverdetailComponent_td_213_Template, 2, 3, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](214, 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](215, DriverdetailComponent_th_215_Template, 2, 0, "th", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](216, DriverdetailComponent_td_216_Template, 2, 3, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](217, 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](218, DriverdetailComponent_th_218_Template, 2, 0, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](219, DriverdetailComponent_td_219_Template, 3, 3, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](220, 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](221, DriverdetailComponent_th_221_Template, 2, 0, "th", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](222, DriverdetailComponent_td_222_Template, 3, 4, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](223, DriverdetailComponent_tr_223_Template, 1, 0, "tr", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](224, DriverdetailComponent_tr_224_Template, 1, 0, "tr", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](225, "mat-paginator", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](161);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rangePicker", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](13, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangePicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlcm1vZHVsZS9kcml2ZXJkZXRhaWwvZHJpdmVyZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DriverdetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-driverdetail',
            templateUrl: './driverdetail.component.html',
            styleUrls: ['./driverdetail.component.css']
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
    "./src/app/pages/drivermodule/drivermodule-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/drivermodule/drivermodule-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DrivermoduleRoutingModule */

    /***/
    function srcAppPagesDrivermoduleDrivermoduleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrivermoduleRoutingModule", function () {
        return DrivermoduleRoutingModule;
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


      var _drivermodule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./drivermodule.component */
      "./src/app/pages/drivermodule/drivermodule.component.ts");
      /* harmony import */


      var _driver_request_driver_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./driver-request/driver-request.component */
      "./src/app/pages/drivermodule/driver-request/driver-request.component.ts");
      /* harmony import */


      var _driverdetail_driverdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./driverdetail/driverdetail.component */
      "./src/app/pages/drivermodule/driverdetail/driverdetail.component.ts");
      /* harmony import */


      var _driver_driver_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./driver/driver.component */
      "./src/app/pages/drivermodule/driver/driver.component.ts");
      /* harmony import */


      var _adddriver_adddriver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./adddriver/adddriver.component */
      "./src/app/pages/drivermodule/adddriver/adddriver.component.ts");
      /* harmony import */


      var _editdriver_editdriver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./editdriver/editdriver.component */
      "./src/app/pages/drivermodule/editdriver/editdriver.component.ts");

      var routes = [{
        path: "",
        component: _drivermodule_component__WEBPACK_IMPORTED_MODULE_2__["DrivermoduleComponent"],
        children: [{
          path: '',
          component: _driver_driver_component__WEBPACK_IMPORTED_MODULE_5__["DriverComponent"],
          data: {
            title: 'Drivers',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Drivers'
            }]
          }
        }, {
          path: 'driveradd',
          component: _adddriver_adddriver_component__WEBPACK_IMPORTED_MODULE_6__["AdddriverComponent"],
          data: {
            title: 'Add Driver',
            urls: [{
              title: 'Dashboard',
              url: '/driveradd'
            }, {
              title: 'Add Driver'
            }]
          }
        }, {
          path: 'driversrequest',
          component: _driver_request_driver_request_component__WEBPACK_IMPORTED_MODULE_3__["DriverRequestComponent"],
          data: {
            title: 'Driver Request',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Driver Request'
            }]
          }
        }, {
          path: 'driversdetail',
          component: _driverdetail_driverdetail_component__WEBPACK_IMPORTED_MODULE_4__["DriverdetailComponent"],
          data: {
            title: 'Drivers Detail',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Drivers Detail'
            }]
          }
        }, {
          path: 'driveredit',
          component: _editdriver_editdriver_component__WEBPACK_IMPORTED_MODULE_7__["EditdriverComponent"],
          data: {
            title: 'Edit Driver',
            urls: [{
              title: 'Dashboard',
              url: '/driveredit'
            }, {
              title: 'Edit Driver'
            }]
          }
        }]
      }];

      var DrivermoduleRoutingModule = function DrivermoduleRoutingModule() {
        _classCallCheck(this, DrivermoduleRoutingModule);
      };

      DrivermoduleRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: DrivermoduleRoutingModule
      });
      DrivermoduleRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function DrivermoduleRoutingModule_Factory(t) {
          return new (t || DrivermoduleRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DrivermoduleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DrivermoduleRoutingModule, [{
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
    "./src/app/pages/drivermodule/drivermodule.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/drivermodule/drivermodule.component.ts ***!
      \**************************************************************/

    /*! exports provided: DrivermoduleComponent */

    /***/
    function srcAppPagesDrivermoduleDrivermoduleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrivermoduleComponent", function () {
        return DrivermoduleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var DrivermoduleComponent = /*#__PURE__*/function () {
        function DrivermoduleComponent() {
          _classCallCheck(this, DrivermoduleComponent);
        }

        _createClass(DrivermoduleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DrivermoduleComponent;
      }();

      DrivermoduleComponent.??fac = function DrivermoduleComponent_Factory(t) {
        return new (t || DrivermoduleComponent)();
      };

      DrivermoduleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DrivermoduleComponent,
        selectors: [["app-drivermodule"]],
        decls: 1,
        vars: 0,
        template: function DrivermoduleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlcm1vZHVsZS9kcml2ZXJtb2R1bGUuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DrivermoduleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-drivermodule',
            templateUrl: './drivermodule.component.html',
            styleUrls: ['./drivermodule.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/drivermodule/drivermodule.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/drivermodule/drivermodule.module.ts ***!
      \***********************************************************/

    /*! exports provided: DrivermoduleModule */

    /***/
    function srcAppPagesDrivermoduleDrivermoduleModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrivermoduleModule", function () {
        return DrivermoduleModule;
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


      var _drivermodule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./drivermodule-routing.module */
      "./src/app/pages/drivermodule/drivermodule-routing.module.ts");
      /* harmony import */


      var _drivermodule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./drivermodule.component */
      "./src/app/pages/drivermodule/drivermodule.component.ts");
      /* harmony import */


      var _driver_request_driver_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./driver-request/driver-request.component */
      "./src/app/pages/drivermodule/driver-request/driver-request.component.ts");
      /* harmony import */


      var _driverdetail_driverdetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./driverdetail/driverdetail.component */
      "./src/app/pages/drivermodule/driverdetail/driverdetail.component.ts");
      /* harmony import */


      var _driver_driver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./driver/driver.component */
      "./src/app/pages/drivermodule/driver/driver.component.ts");
      /* harmony import */


      var _adddriver_adddriver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./adddriver/adddriver.component */
      "./src/app/pages/drivermodule/adddriver/adddriver.component.ts");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _editdriver_editdriver_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./editdriver/editdriver.component */
      "./src/app/pages/drivermodule/editdriver/editdriver.component.ts");

      var DrivermoduleModule = function DrivermoduleModule() {
        _classCallCheck(this, DrivermoduleModule);
      };

      DrivermoduleModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: DrivermoduleModule
      });
      DrivermoduleModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function DrivermoduleModule_Factory(t) {
          return new (t || DrivermoduleModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _drivermodule_routing_module__WEBPACK_IMPORTED_MODULE_2__["DrivermoduleRoutingModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DrivermoduleModule, {
          declarations: [_drivermodule_component__WEBPACK_IMPORTED_MODULE_3__["DrivermoduleComponent"], _driver_request_driver_request_component__WEBPACK_IMPORTED_MODULE_4__["DriverRequestComponent"], _driverdetail_driverdetail_component__WEBPACK_IMPORTED_MODULE_5__["DriverdetailComponent"], _driver_driver_component__WEBPACK_IMPORTED_MODULE_6__["DriverComponent"], _adddriver_adddriver_component__WEBPACK_IMPORTED_MODULE_7__["AdddriverComponent"], _editdriver_editdriver_component__WEBPACK_IMPORTED_MODULE_19__["EditdriverComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _drivermodule_routing_module__WEBPACK_IMPORTED_MODULE_2__["DrivermoduleRoutingModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DrivermoduleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_drivermodule_component__WEBPACK_IMPORTED_MODULE_3__["DrivermoduleComponent"], _driver_request_driver_request_component__WEBPACK_IMPORTED_MODULE_4__["DriverRequestComponent"], _driverdetail_driverdetail_component__WEBPACK_IMPORTED_MODULE_5__["DriverdetailComponent"], _driver_driver_component__WEBPACK_IMPORTED_MODULE_6__["DriverComponent"], _adddriver_adddriver_component__WEBPACK_IMPORTED_MODULE_7__["AdddriverComponent"], _editdriver_editdriver_component__WEBPACK_IMPORTED_MODULE_19__["EditdriverComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _drivermodule_routing_module__WEBPACK_IMPORTED_MODULE_2__["DrivermoduleRoutingModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/drivermodule/editdriver/editdriver.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/drivermodule/editdriver/editdriver.component.ts ***!
      \***********************************************************************/

    /*! exports provided: EditdriverComponent */

    /***/
    function srcAppPagesDrivermoduleEditdriverEditdriverComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditdriverComponent", function () {
        return EditdriverComponent;
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
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");

      var EditdriverComponent = /*#__PURE__*/function () {
        function EditdriverComponent() {
          _classCallCheck(this, EditdriverComponent);

          this.days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        }

        _createClass(EditdriverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "check",
          value: function check(e, ref) {
            if (ref == 'mon' && e.checked) {
              this.checked = 'mon';
            } else if (ref == 'sun' && e.checked) {
              this.checked = 'sun';

              if (ref == 'sun' && !e.checked) {
                this.checked = 'xyx';
              }
            }
          }
        }, {
          key: "add",
          value: function add() {
            var row = document.createElement('div');
            row.className = 'row mb-2';
            row.innerHTML = " \n        <div class=\"col-md-5\">\n        <input type=\"time\" placeholder=\"\" class=\"form-control\">\n      </div>\n      <div class=\"col-md-5\"><input type=\"time\" placeholder=\"\" class=\"form-control\"></div>\n      <div class=\"col-md-2\"><a href=\"javascript:void(0)\" ><i class=\"far fa-times-circle\"></i></a></div>\n        ";
            document.querySelector('.showInputField').appendChild(row);
          }
        }, {
          key: "remove",
          value: function remove() {
            var removed = document.querySelector('.row.mb-2');
            console.log(removed);
          }
        }]);

        return EditdriverComponent;
      }();

      EditdriverComponent.??fac = function EditdriverComponent_Factory(t) {
        return new (t || EditdriverComponent)();
      };

      EditdriverComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EditdriverComponent,
        selectors: [["app-editdriver"]],
        decls: 223,
        vars: 8,
        consts: [[1, "card"], ["action", "#"], [1, "form-body"], [1, "card-body"], [1, "row"], [1, "col-md-12", "text-right"], ["routerLink", "/pages/vendors", 1, "btn", "btn-primary"], [1, "row", "p-t-20"], [1, "col-md-6"], [1, "form-group"], [1, "control-label"], ["type", "text", "id", "firstName", "placeholder", "John doe", 1, "form-control"], ["type", "number", "id", "firstName", "placeholder", "Restaurant name", 1, "form-control"], ["type", "date", "id", "firstName", "placeholder", "", 1, "form-control"], ["type", "email", "id", "firstName", "placeholder", "example@gmail.com", 1, "form-control"], ["name", "", "id", "", 1, "form-control"], ["value", "yes"], ["value", "no"], [1, "form-group", "has-danger"], ["type", "text", "id", "email", "placeholder", "#46543343", "disabled", "", 1, "form-control", "form-control-danger"], ["type", "text", "id", "zip", "placeholder", "eg:44343", 1, "form-control", "form-control-danger"], ["type", "text", "id", "city", "placeholder", "Berlin", 1, "form-control", "form-control-danger"], [1, "col-md-12"], ["name", "", "id", "", "cols", "30", "rows", "5", "placeholder", "#433 New garden Complex", 1, "form-control"], [1, "row", "mb-3"], [1, "col-md-4"], ["color", "primary", 1, "", 3, "change"], [1, "col-md-8"], [1, "col-md-5"], ["type", "time", "placeholder", "", 1, "form-control"], [1, "col-md-2"], ["href", "javascript:void()", 3, "click"], [1, "offset-md-4", "col-md-8", "mt-2"], [1, "showInputField"], ["type", "submit", 1, "btn", "btn-primary", "mr-3"]],
        template: function EditdriverComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Restaurant Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Date of birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Are you currently delivering right now?*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Vendor ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Zip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Type of restaurant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "textarea", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Opening days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Monday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "mat-slide-toggle", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditdriverComponent_Template_mat_slide_toggle_change_78_listener($event) {
              return ctx.check($event, "mon");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditdriverComponent_Template_a_click_87_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Add hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Tuesday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "mat-slide-toggle", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditdriverComponent_Template_mat_slide_toggle_change_98_listener($event) {
              return ctx.check($event, "tue");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditdriverComponent_Template_a_click_107_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Add hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Wednesday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "mat-slide-toggle", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditdriverComponent_Template_mat_slide_toggle_change_118_listener($event) {
              return ctx.check($event, "wed");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditdriverComponent_Template_a_click_127_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Add hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Thusrday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "mat-slide-toggle", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditdriverComponent_Template_mat_slide_toggle_change_138_listener($event) {
              return ctx.check($event, "thu");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditdriverComponent_Template_a_click_147_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Add hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Friday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "mat-slide-toggle", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditdriverComponent_Template_mat_slide_toggle_change_158_listener($event) {
              return ctx.check($event, "fri");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditdriverComponent_Template_a_click_167_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Add hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Saturday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "mat-slide-toggle", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditdriverComponent_Template_mat_slide_toggle_change_178_listener($event) {
              return ctx.check($event, "sat");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](183, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](185, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditdriverComponent_Template_a_click_187_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Add hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "Sunday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "mat-slide-toggle", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditdriverComponent_Template_mat_slide_toggle_change_198_listener($event) {
              return ctx.check($event, "sun");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](203, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](205, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditdriverComponent_Template_a_click_207_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "Add hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](210, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "Shop Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "mat-slide-toggle", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditdriverComponent_Template_mat_slide_toggle_change_218_listener($event) {
              return ctx.check($event, "shop");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, " Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.checked == "mon" ? "Open" : "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.checked == "tue" ? "Open" : "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.checked == "wed" ? "Open" : "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.checked == "thu" ? "Open" : "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.checked == "fri" ? "Open" : "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.checked == "sat" ? "Open" : "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.checked == "sun" ? "Open" : "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.checked == "shop" ? "Enable" : "Disable");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlcm1vZHVsZS9lZGl0ZHJpdmVyL2VkaXRkcml2ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EditdriverComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-editdriver',
            templateUrl: './editdriver.component.html',
            styleUrls: ['./editdriver.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=drivermodule-drivermodule-module-es5.js.map