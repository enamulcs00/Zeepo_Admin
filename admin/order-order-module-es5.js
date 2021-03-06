(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"], {
    /***/
    "./src/app/pages/order/order-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/order/order-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: OrderRoutingModule */

    /***/
    function srcAppPagesOrderOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function () {
        return OrderRoutingModule;
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


      var src_app_pages_order_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/pages/order/order.component */
      "./src/app/pages/order/order.component.ts");
      /* harmony import */


      var _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orderdetail/orderdetail.component */
      "./src/app/pages/order/orderdetail/orderdetail.component.ts");
      /* harmony import */


      var _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./orderlist/orderlist.component */
      "./src/app/pages/order/orderlist/orderlist.component.ts");

      var routes = [{
        path: '',
        component: src_app_pages_order_order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"],
        children: [{
          path: '',
          component: _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_4__["OrderlistComponent"],
          data: {
            title: 'Orders',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Pricing Page'
            }]
          }
        }, {
          path: 'orderdetail',
          component: _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_3__["OrderdetailComponent"],
          data: {
            title: 'Order Detail',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Order Detail'
            }]
          }
        }]
      }];

      var OrderRoutingModule = function OrderRoutingModule() {
        _classCallCheck(this, OrderRoutingModule);
      };

      OrderRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: OrderRoutingModule
      });
      OrderRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function OrderRoutingModule_Factory(t) {
          return new (t || OrderRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](OrderRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderRoutingModule, [{
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
    "./src/app/pages/order/order.component.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/order/order.component.ts ***!
      \************************************************/

    /*! exports provided: OrderComponent */

    /***/
    function srcAppPagesOrderOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
        return OrderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var OrderComponent = /*#__PURE__*/function () {
        function OrderComponent() {
          _classCallCheck(this, OrderComponent);
        }

        _createClass(OrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrderComponent;
      }();

      OrderComponent.??fac = function OrderComponent_Factory(t) {
        return new (t || OrderComponent)();
      };

      OrderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OrderComponent,
        selectors: [["app-order"]],
        decls: 1,
        vars: 0,
        template: function OrderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-order',
            templateUrl: './order.component.html',
            styleUrls: ['./order.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/order/order.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/order/order.module.ts ***!
      \*********************************************/

    /*! exports provided: OrderModule */

    /***/
    function srcAppPagesOrderOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderModule", function () {
        return OrderModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-quill */
      "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-chartist */
      "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_pages_order_order_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/pages/order/order.component */
      "./src/app/pages/order/order.component.ts");
      /* harmony import */


      var _order_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./order-routing.module */
      "./src/app/pages/order/order-routing.module.ts");
      /* harmony import */


      var _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./orderlist/orderlist.component */
      "./src/app/pages/order/orderlist/orderlist.component.ts");
      /* harmony import */


      var _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./orderdetail/orderdetail.component */
      "./src/app/pages/order/orderdetail/orderdetail.component.ts");

      var OrderModule = function OrderModule() {
        _classCallCheck(this, OrderModule);
      };

      OrderModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: OrderModule
      });
      OrderModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function OrderModule_Factory(t) {
          return new (t || OrderModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_21__["OrderRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__["NgxChartsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__["DragDropModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](OrderModule, {
          declarations: [_orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_22__["OrderlistComponent"], _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_23__["OrderdetailComponent"], src_app_pages_order_order_component__WEBPACK_IMPORTED_MODULE_20__["OrderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_21__["OrderRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__["NgxChartsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__["DragDropModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_22__["OrderlistComponent"], _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_23__["OrderdetailComponent"], src_app_pages_order_order_component__WEBPACK_IMPORTED_MODULE_20__["OrderComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_21__["OrderRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__["NgxChartsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__["DragDropModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/order/orderdetail/orderdetail.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/order/orderdetail/orderdetail.component.ts ***!
      \******************************************************************/

    /*! exports provided: OrderdetailComponent */

    /***/
    function srcAppPagesOrderOrderdetailOrderdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderdetailComponent", function () {
        return OrderdetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      function OrderdetailComponent_ng_template_173_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderdetailComponent_ng_template_173_Template_button_click_1_listener() {
            var modal_r2 = ctx.$implicit;
            return modal_r2.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var OrderdetailComponent = /*#__PURE__*/function () {
        function OrderdetailComponent(modalService) {
          _classCallCheck(this, OrderdetailComponent);

          this.modalService = modalService;
        }

        _createClass(OrderdetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            history.back();
          }
        }, {
          key: "itemShowModal",
          value: function itemShowModal(itemShow) {
            this.modalService.open(itemShow, {
              size: 'sm'
            });
          }
        }]);

        return OrderdetailComponent;
      }();

      OrderdetailComponent.??fac = function OrderdetailComponent_Factory(t) {
        return new (t || OrderdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      OrderdetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OrderdetailComponent,
        selectors: [["app-orderdetail"]],
        decls: 175,
        vars: 0,
        consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-12", "text-right"], ["href", "javascript:void()", 1, "btn", "btn-primary", "mb-3", 3, "click"], [1, "col-md-4"], [1, "col-md-8"], [1, "label", "label-success"], [1, "table-reponsive"], [1, "table"], ["href", "javascript:void(0)", 3, "click"], ["src", "assets/images/food/1.jpg", "width", "60px", "height", "60px"], [1, "fas", "fa-euro-sign"], ["colspan", "3", 1, "text-nowrap"], [1, "table-repsonsive"], [1, "text-right"], ["class", "modal-dialog modal-dialog-centered"], ["itemshow", ""], [1, "modal-body"], ["type", "button", 1, "btn", "close-btn", 3, "click"], ["src", "assets/images/food/1.jpg", 1, "img-fluid"]],
        template: function OrderdetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderdetailComponent_Template_a_click_4_listener() {
              return ctx.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Order ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Client");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Andy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Phone No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "+91-45444544");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Delivery Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "#455 Sector-15 Noida");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Date Of Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "27-02-2021/12:20:45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Completed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Method");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Paypal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Payment Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Waitning for Client");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Update At");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "27-02-2021/12:20:45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Restaurant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "KFC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Lorem ipsum dolor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Phone No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "+91-4343434343");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Driver");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia, id dolorum suscipit quibusdam maiores rem exercitationem non nostrum facere.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Image ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Item ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderdetailComponent_Template_a_click_127_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](174);

              return ctx.itemShowModal(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Soya Chap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "27 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Subtotal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "54:00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Delivery Fee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "0.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Tax(5%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "2.70 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "57.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](173, OrderdetailComponent_ng_template_173_Template, 4, 0, "ng-template", 16, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyZGV0YWlsL29yZGVyZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderdetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-orderdetail',
            templateUrl: './orderdetail.component.html',
            styleUrls: ['./orderdetail.component.css']
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
    "./src/app/pages/order/orderlist/orderlist.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/order/orderlist/orderlist.component.ts ***!
      \**************************************************************/

    /*! exports provided: OrderlistComponent */

    /***/
    function srcAppPagesOrderOrderlistOrderlistComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderlistComponent", function () {
        return OrderlistComponent;
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

      function OrderlistComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Are you sure you want to delete this order?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_1_Template_button_click_4_listener() {
            var modal_r18 = ctx.$implicit;
            return modal_r18.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_1_Template_button_click_6_listener() {
            var modal_r18 = ctx.$implicit;
            return modal_r18.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_3_Template_button_click_1_listener() {
            var modal_r21 = ctx.$implicit;
            return modal_r21.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ");

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

      function OrderlistComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "textarea", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_5_Template_button_click_5_listener() {
            var modal_r23 = ctx.$implicit;
            return modal_r23.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_7_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var topping_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", topping_r27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](topping_r27);
        }
      }

      function OrderlistComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Change Driver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Select Drive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, OrderlistComponent_ng_template_7_mat_option_7_Template, 2, 2, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_7_Template_button_click_8_listener() {
            var modal_r25 = ctx.$implicit;
            return modal_r25.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r7.toppings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r7.toppingList);
        }
      }

      function OrderlistComponent_ng_template_13_th_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " # ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_13_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r47.serial_no, " ");
        }
      }

      function OrderlistComponent_ng_template_13_th_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Ordered Items ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_13_td_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r48.ordered_item, " ");
        }
      }

      function OrderlistComponent_ng_template_13_th_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Customer Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_13_td_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r49.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r49.contact, " ");
        }
      }

      function OrderlistComponent_ng_template_13_th_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Delivery Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_13_td_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_13_td_43_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](25);

            return ctx_r51.mapModal(_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r50.address, " ");
        }
      }

      function OrderlistComponent_ng_template_13_th_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Price of the Total Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_13_td_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r53.price, " ");
        }
      }

      function OrderlistComponent_ng_template_13_th_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Vendor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_13_td_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r54.vendor, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r54.vendormail, " ");
        }
      }

      function OrderlistComponent_ng_template_13_th_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_13_td_52_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Pending ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_13_td_52_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r56.vendorConfirmModal(ctx_r56.vendorConfirm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Accept ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_13_td_52_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r57);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);

            return ctx_r58.orderConfirmModal(_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Reject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_13_tr_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 80);
        }
      }

      function OrderlistComponent_ng_template_13_tr_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 81);
        }
      }

      function OrderlistComponent_ng_template_13_tr_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("No data matching the filter \"", ctx_r46.input.value, "\"");
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25, 100];
      };

      function OrderlistComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-form-field", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Filter by date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-date-range-input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "mat-datepicker-toggle", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "mat-date-range-picker", null, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Download CSV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Filter by order status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Accepted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Rejected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "table", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](32, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, OrderlistComponent_ng_template_13_th_33_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, OrderlistComponent_ng_template_13_td_34_Template, 2, 1, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](35, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, OrderlistComponent_ng_template_13_th_36_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, OrderlistComponent_ng_template_13_td_37_Template, 2, 1, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](38, 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, OrderlistComponent_ng_template_13_th_39_Template, 2, 0, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, OrderlistComponent_ng_template_13_td_40_Template, 4, 2, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](41, 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, OrderlistComponent_ng_template_13_th_42_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, OrderlistComponent_ng_template_13_td_43_Template, 4, 1, "td", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](44, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, OrderlistComponent_ng_template_13_th_45_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, OrderlistComponent_ng_template_13_td_46_Template, 2, 1, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](47, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, OrderlistComponent_ng_template_13_th_48_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, OrderlistComponent_ng_template_13_td_49_Template, 4, 2, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](50, 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, OrderlistComponent_ng_template_13_th_51_Template, 2, 0, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, OrderlistComponent_ng_template_13_td_52_Template, 9, 0, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, OrderlistComponent_ng_template_13_tr_53_Template, 1, 0, "tr", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, OrderlistComponent_ng_template_13_tr_54_Template, 1, 0, "tr", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, OrderlistComponent_ng_template_13_tr_55_Template, 3, 1, "tr", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "mat-paginator", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](18);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rangePicker", _r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r8.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r8.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r8.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0));
        }
      }

      function OrderlistComponent_ng_template_15_th_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " # ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_15_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r80 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r80.serial_no, " ");
        }
      }

      function OrderlistComponent_ng_template_15_th_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Ordered Items ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_15_td_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r81 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r81.ordered_item, " ");
        }
      }

      function OrderlistComponent_ng_template_15_th_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Customer Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_15_td_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r82 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r82.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r82.contact, " ");
        }
      }

      function OrderlistComponent_ng_template_15_th_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Delivery Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_15_td_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_15_td_43_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r85);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](25);

            return ctx_r84.mapModal(_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r83 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r83.address, " ");
        }
      }

      function OrderlistComponent_ng_template_15_th_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Price of the Total Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_15_td_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r86 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r86.price, " ");
        }
      }

      function OrderlistComponent_ng_template_15_th_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Vendor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_15_td_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r87 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r87.vendor, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r87.vendormail, " ");
        }
      }

      function OrderlistComponent_ng_template_15_th_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Payment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_15_td_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r88 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", row_r88.payment == "Pending" ? "btn-outline-info" : "btn-outline-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](row_r88.payment);
        }
      }

      function OrderlistComponent_ng_template_15_th_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_15_td_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Ready for Pickup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Completed/Delivered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_15_tr_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 80);
        }
      }

      function OrderlistComponent_ng_template_15_tr_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 81);
        }
      }

      function OrderlistComponent_ng_template_15_tr_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("No data matching the filter \"", ctx_r79.input.value, "\"");
        }
      }

      function OrderlistComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-form-field", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Filter by date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-date-range-input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "mat-datepicker-toggle", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "mat-date-range-picker", null, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Download CSV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Filter by order status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Accepted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Rejected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "table", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](32, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, OrderlistComponent_ng_template_15_th_33_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, OrderlistComponent_ng_template_15_td_34_Template, 2, 1, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](35, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, OrderlistComponent_ng_template_15_th_36_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, OrderlistComponent_ng_template_15_td_37_Template, 2, 1, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](38, 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, OrderlistComponent_ng_template_15_th_39_Template, 2, 0, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, OrderlistComponent_ng_template_15_td_40_Template, 4, 2, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](41, 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, OrderlistComponent_ng_template_15_th_42_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, OrderlistComponent_ng_template_15_td_43_Template, 4, 1, "td", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](44, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, OrderlistComponent_ng_template_15_th_45_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, OrderlistComponent_ng_template_15_td_46_Template, 2, 1, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](47, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, OrderlistComponent_ng_template_15_th_48_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, OrderlistComponent_ng_template_15_td_49_Template, 4, 2, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](50, 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, OrderlistComponent_ng_template_15_th_51_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, OrderlistComponent_ng_template_15_td_52_Template, 3, 2, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](53, 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, OrderlistComponent_ng_template_15_th_54_Template, 2, 0, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, OrderlistComponent_ng_template_15_td_55_Template, 9, 0, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, OrderlistComponent_ng_template_15_tr_56_Template, 1, 0, "tr", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, OrderlistComponent_ng_template_15_tr_57_Template, 1, 0, "tr", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, OrderlistComponent_ng_template_15_tr_58_Template, 3, 1, "tr", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "mat-paginator", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](18);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rangePicker", _r60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r9.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r9.displayedColumns1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r9.displayedColumns1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0));
        }
      }

      function OrderlistComponent_ng_template_17_th_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " # ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_17_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r111 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r111.serial_no, " ");
        }
      }

      function OrderlistComponent_ng_template_17_th_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Ordered Items ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_17_td_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r112 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r112.ordered_item, " ");
        }
      }

      function OrderlistComponent_ng_template_17_th_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Customer Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_17_td_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r113 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r113.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r113.contact, " ");
        }
      }

      function OrderlistComponent_ng_template_17_th_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Delivery Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_17_td_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_17_td_43_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r116);

            var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](25);

            return ctx_r115.mapModal(_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r114 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r114.address, " ");
        }
      }

      function OrderlistComponent_ng_template_17_th_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Price of the Total Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_17_td_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r117 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r117.price, " ");
        }
      }

      function OrderlistComponent_ng_template_17_th_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Vendor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_17_td_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r118 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r118.vendor, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r118.vendormail, " ");
        }
      }

      function OrderlistComponent_ng_template_17_th_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Payment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_17_td_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r119 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", row_r119.payment == "Pending" ? "btn-outline-info" : "btn-outline-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](row_r119.payment);
        }
      }

      function OrderlistComponent_ng_template_17_th_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_17_td_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r120 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", row_r120.status == "Rejected" ? "btn-outline-danger" : row_r120.status == "Pending" ? "btn-outline-info" : "btn-outline-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](row_r120.status);
        }
      }

      function OrderlistComponent_ng_template_17_tr_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 80);
        }
      }

      function OrderlistComponent_ng_template_17_tr_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 81);
        }
      }

      function OrderlistComponent_ng_template_17_tr_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("No data matching the filter \"", ctx_r110.input.value, "\"");
        }
      }

      function OrderlistComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-form-field", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Filter by date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-date-range-input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "mat-datepicker-toggle", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "mat-date-range-picker", null, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Download CSV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Filter by order status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Rejected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "table", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](32, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, OrderlistComponent_ng_template_17_th_33_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, OrderlistComponent_ng_template_17_td_34_Template, 2, 1, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](35, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, OrderlistComponent_ng_template_17_th_36_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, OrderlistComponent_ng_template_17_td_37_Template, 2, 1, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](38, 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, OrderlistComponent_ng_template_17_th_39_Template, 2, 0, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, OrderlistComponent_ng_template_17_td_40_Template, 4, 2, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](41, 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, OrderlistComponent_ng_template_17_th_42_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, OrderlistComponent_ng_template_17_td_43_Template, 4, 1, "td", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](44, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, OrderlistComponent_ng_template_17_th_45_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, OrderlistComponent_ng_template_17_td_46_Template, 2, 1, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](47, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, OrderlistComponent_ng_template_17_th_48_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, OrderlistComponent_ng_template_17_td_49_Template, 4, 2, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](50, 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, OrderlistComponent_ng_template_17_th_51_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, OrderlistComponent_ng_template_17_td_52_Template, 3, 2, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](53, 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, OrderlistComponent_ng_template_17_th_54_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, OrderlistComponent_ng_template_17_td_55_Template, 3, 2, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, OrderlistComponent_ng_template_17_tr_56_Template, 1, 0, "tr", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, OrderlistComponent_ng_template_17_tr_57_Template, 1, 0, "tr", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, OrderlistComponent_ng_template_17_tr_58_Template, 3, 1, "tr", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "mat-paginator", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](18);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rangePicker", _r91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r10.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r10.displayedColumns2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r10.displayedColumns2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0));
        }
      }

      function OrderlistComponent_ng_template_19_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " # ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_19_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r140 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r140.serial_no, " ");
        }
      }

      function OrderlistComponent_ng_template_19_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Ordered Items ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_19_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r141 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r141.ordered_item, " ");
        }
      }

      function OrderlistComponent_ng_template_19_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Customer Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_19_td_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r142 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r142.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r142.contact, " ");
        }
      }

      function OrderlistComponent_ng_template_19_th_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Delivery Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_19_td_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_19_td_35_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r145);

            var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](25);

            return ctx_r144.mapModal(_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r143 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r143.address, " ");
        }
      }

      function OrderlistComponent_ng_template_19_th_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Price of the Total Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_19_td_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r146 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r146.price, " ");
        }
      }

      function OrderlistComponent_ng_template_19_th_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Vendor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_19_td_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r147 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r147.vendor, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r147.vendormail, " ");
        }
      }

      function OrderlistComponent_ng_template_19_th_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_19_td_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Approve");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Decline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_19_tr_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 80);
        }
      }

      function OrderlistComponent_ng_template_19_tr_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 81);
        }
      }

      function OrderlistComponent_ng_template_19_tr_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("No data matching the filter \"", ctx_r139.input.value, "\"");
        }
      }

      function OrderlistComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Download CSV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-form-field", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Filter by date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-date-range-input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "mat-datepicker-toggle", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "mat-date-range-picker", null, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "table", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](24, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, OrderlistComponent_ng_template_19_th_25_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, OrderlistComponent_ng_template_19_td_26_Template, 2, 1, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](27, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, OrderlistComponent_ng_template_19_th_28_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, OrderlistComponent_ng_template_19_td_29_Template, 2, 1, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](30, 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, OrderlistComponent_ng_template_19_th_31_Template, 2, 0, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, OrderlistComponent_ng_template_19_td_32_Template, 4, 2, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](33, 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, OrderlistComponent_ng_template_19_th_34_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, OrderlistComponent_ng_template_19_td_35_Template, 4, 1, "td", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](36, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, OrderlistComponent_ng_template_19_th_37_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, OrderlistComponent_ng_template_19_td_38_Template, 2, 1, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](39, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, OrderlistComponent_ng_template_19_th_40_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, OrderlistComponent_ng_template_19_td_41_Template, 4, 2, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](42, 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, OrderlistComponent_ng_template_19_th_43_Template, 2, 0, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, OrderlistComponent_ng_template_19_td_44_Template, 9, 0, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, OrderlistComponent_ng_template_19_tr_45_Template, 1, 0, "tr", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, OrderlistComponent_ng_template_19_tr_46_Template, 1, 0, "tr", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, OrderlistComponent_ng_template_19_tr_47_Template, 3, 1, "tr", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "mat-paginator", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](21);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rangePicker", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r11.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r11.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r11.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0));
        }
      }

      function OrderlistComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "textarea", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_20_Template_button_click_6_listener() {
            var modal_r150 = ctx.$implicit;
            return modal_r150.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_22_Template_button_click_1_listener() {
            var modal_r152 = ctx.$implicit;
            return modal_r152.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit neque reprehenderit quidem beatae repudiandae quisquam voluptas, ipsa molestias autem fuga.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderlistComponent_ng_template_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderlistComponent_ng_template_24_Template_button_click_1_listener() {
            var modal_r154 = ctx.$implicit;
            return modal_r154.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "iframe", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var OrderlistComponent = /*#__PURE__*/function () {
        function OrderlistComponent(modalService) {
          _classCallCheck(this, OrderlistComponent);

          this.modalService = modalService;
          this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          });
          this.title = 'My first AGM project';
          this.lat = 51.678418;
          this.lng = 7.809007; // displayedColumns: string[] = ['serial_no', 'audio', 'hotelName','name' ,'id','contact','comment','address','driver','orderdate','deliverydate','orderStatus','totalSales','action'];

          this.displayedColumns = ['serial_no', 'name', 'ordered_item', 'address', 'price', 'vendor', 'action'];
          this.displayedColumns1 = ['serial_no', 'name', 'ordered_item', 'address', 'price', 'vendor', 'payment', 'action'];
          this.displayedColumns2 = ['serial_no', 'name', 'ordered_item', 'address', 'price', 'vendor', 'payment', 'status'];
          this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.toppingList = ['Jamas Thomas', 'Rony Roy', 'Vicky Andy', 'john Vick', 'Alex Harry', 'Harry Roy'];
          this.table = [{
            serial_no: "1",
            audio: "assets/media/example.mp3",
            ordered_item: "Banana : 10",
            name: 'Sandy roy',
            contact: '+91 9874563210',
            address: "#454 1st Block, Rammurthy, Bangalore-560016",
            price: "$ 200",
            vendor: "vendor 1",
            vendormail: "vendor@gmail.com",
            payment: "Success",
            action: "0",
            status: "Completed"
          }, {
            serial_no: "2",
            audio: "assets/media/example.mp3",
            ordered_item: "Apple : 10",
            name: 'Rohan Smith',
            contact: '+91 9874563210',
            address: "#454 1st Block, Rammurthy, Bangalore-560016",
            price: "$ 250",
            vendor: "vendor 2",
            vendormail: "vendor@gmail.com",
            payment: "Pending",
            action: "1",
            status: "Rejected"
          }, {
            serial_no: "3",
            audio: "assets/media/example.mp3",
            ordered_item: "Apple : 3",
            name: 'john Doe',
            contact: '+91 9874563210',
            address: "#454 1st Block, Rammurthy, Bangalore-560016",
            price: "$ 150",
            vendor: "vendor 3",
            vendormail: "vendor@gmail.com",
            payment: "Success",
            action: "1",
            status: "Completed"
          }];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.table);
        }

        _createClass(OrderlistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
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
          key: "reviewModal",
          value: function reviewModal(review) {
            this.modalService.open(review, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }, {
          key: "orderConfirmModal",
          value: function orderConfirmModal(orderConfirm) {
            this.modalService.open(orderConfirm, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'sm'
            });
          }
        }, {
          key: "changedriverModal",
          value: function changedriverModal(changedriver) {
            this.modalService.open(changedriver, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'sm'
            });
          }
        }, {
          key: "commentModal",
          value: function commentModal(comment) {
            this.modalService.open(comment, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'sm'
            });
          }
        }, {
          key: "mapModal",
          value: function mapModal(map) {
            this.modalService.open(map, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'md'
            });
          }
        }]);

        return OrderlistComponent;
      }();

      OrderlistComponent.??fac = function OrderlistComponent_Factory(t) {
        return new (t || OrderlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      OrderlistComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OrderlistComponent,
        selectors: [["app-orderlist"]],
        viewQuery: function OrderlistComponent_Query(rf, ctx) {
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
        decls: 26,
        vars: 0,
        consts: [[1, "row"], ["userDelete", ""], ["review", ""], ["orderConfirm", ""], ["changedriver", ""], [1, "card"], [1, "card-body"], ["type", "pills", 1, "cstm_tabs"], ["title", "upcoming Orders"], ["ngbTabContent", ""], ["title", "Ongoing Orders"], ["title", "Past Orders"], ["title", "Return Orders"], ["comment", ""], ["map", ""], [1, "modal-body"], [1, "btn-group"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-primary", "mr-2", 3, "click"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-seconadary", 3, "click"], ["type", "button", "aria-label", "Close", 1, "close-icon", 3, "click"], [1, "mdi", "mdi-close"], [1, "col-lg-12", "col-xlg-12", "col-md-12"], [1, "card", "custom-tabs", "mb-0"], [1, "row", "pt-2"], [1, "col-md-12"], [1, "form-group"], ["rows", "3", 1, "form-control"], [1, "btn", "btn-primary", "mt-2", 3, "click"], [1, "w-100"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"], [3, "value"], [1, "col-lg-12", "mt-3"], [1, "col-md-4"], [1, "mb-2"], ["type", "text", "id", "prenametext", "placeholder", "Search", 1, "form-control"], [1, "col-md-8", "text-right"], [1, "d-block"], ["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "mr-2", "d-inline-block"], [1, "btn", "btn-primary"], ["ngbDropdown", "", 1, "d-inline-block", "mb-2", "mr-2"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], [1, "table-responsive"], ["mat-table", "", "matSort", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "serial_no"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ordered_item"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", "class", "text-nowrap", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-nowrap", 4, "matCellDef"], ["matColumnDef", "address"], ["mat-cell", "", "style", "width:200px;", 4, "matCellDef"], ["matColumnDef", "price"], ["matColumnDef", "vendor"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [1, "col-md-12", "text-right"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap"], ["mat-cell", "", 1, "text-nowrap"], ["mat-cell", "", 2, "width", "200px"], ["href", "javascript:void()", 3, "click"], [1, "sl-icon-info"], ["ngbDropdown", "", "placement", "bottom-right", "display", "dynamic", "container", "body", 1, "dropdown-menu-right"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "btn-sm"], ["href", "javascript:void()", 1, "dropdown-item", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], ["matColumnDef", "payment"], [1, "btn", "sts", 3, "ngClass"], ["id", "dropdownBasic2", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "btn-sm"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic2"], ["matColumnDef", "status"], [1, "mr-3", "d-inline-block"], [1, "d-inline-block"], [1, "mb-3"], ["name", "", "id", "", "cols", "30", "rows", "5", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "mr-0", "btn-primary", "mt-2", 3, "click"], [1, "btn", "close-icon", 3, "click"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508", "width", "100%", "height", "150", "frameborder", "0", "allowfullscreen", "", 2, "border", "0"]],
        template: function OrderlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderlistComponent_ng_template_1_Template, 8, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, OrderlistComponent_ng_template_3_Template, 11, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, OrderlistComponent_ng_template_5_Template, 7, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, OrderlistComponent_ng_template_7_Template, 10, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ngb-tabset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ngb-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, OrderlistComponent_ng_template_13_Template, 58, 7, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ngb-tab", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, OrderlistComponent_ng_template_15_Template, 61, 7, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ngb-tab", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, OrderlistComponent_ng_template_17_Template, 61, 7, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "ngb-tab", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, OrderlistComponent_ng_template_19_Template, 50, 7, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, OrderlistComponent_ng_template_20_Template, 8, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, OrderlistComponent_ng_template_22_Template, 8, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, OrderlistComponent_ng_template_24_Template, 5, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDateRangePicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVybGlzdC9vcmRlcmxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderlistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-orderlist',
            templateUrl: './orderlist.component.html',
            styleUrls: ['./orderlist.component.css']
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

    }
  }]);
})();
//# sourceMappingURL=order-order-module-es5.js.map