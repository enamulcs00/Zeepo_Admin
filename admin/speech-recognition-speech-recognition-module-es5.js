(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["speech-recognition-speech-recognition-module"], {
    /***/
    "./src/app/pages/speech-recognition/speech-recognition-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/speech-recognition/speech-recognition-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: SpeechRecognitionRoutingModule */

    /***/
    function srcAppPagesSpeechRecognitionSpeechRecognitionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechRecognitionRoutingModule", function () {
        return SpeechRecognitionRoutingModule;
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


      var _speech_recognition_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./speech-recognition.component */
      "./src/app/pages/speech-recognition/speech-recognition.component.ts");
      /* harmony import */


      var _speechadd_speechadd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./speechadd/speechadd.component */
      "./src/app/pages/speech-recognition/speechadd/speechadd.component.ts");
      /* harmony import */


      var _speechedit_speechedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./speechedit/speechedit.component */
      "./src/app/pages/speech-recognition/speechedit/speechedit.component.ts");
      /* harmony import */


      var _speechlist_speechlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./speechlist/speechlist.component */
      "./src/app/pages/speech-recognition/speechlist/speechlist.component.ts");

      var routes = [{
        path: "",
        component: _speech_recognition_component__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognitionComponent"],
        children: [{
          path: "",
          component: _speechlist_speechlist_component__WEBPACK_IMPORTED_MODULE_5__["SpeechlistComponent"],
          data: {
            title: 'Speech List',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Speech'
            }]
          }
        }, {
          path: "add",
          component: _speechadd_speechadd_component__WEBPACK_IMPORTED_MODULE_3__["SpeechaddComponent"],
          data: {
            title: 'Add Speech',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Speech'
            }]
          }
        }, {
          path: "edit",
          component: _speechedit_speechedit_component__WEBPACK_IMPORTED_MODULE_4__["SpeecheditComponent"],
          data: {
            title: 'Edit Speech',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Speech'
            }]
          }
        }]
      }];

      var SpeechRecognitionRoutingModule = function SpeechRecognitionRoutingModule() {
        _classCallCheck(this, SpeechRecognitionRoutingModule);
      };

      SpeechRecognitionRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SpeechRecognitionRoutingModule
      });
      SpeechRecognitionRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SpeechRecognitionRoutingModule_Factory(t) {
          return new (t || SpeechRecognitionRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SpeechRecognitionRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SpeechRecognitionRoutingModule, [{
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
    "./src/app/pages/speech-recognition/speech-recognition.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/speech-recognition/speech-recognition.component.ts ***!
      \**************************************************************************/

    /*! exports provided: SpeechRecognitionComponent */

    /***/
    function srcAppPagesSpeechRecognitionSpeechRecognitionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechRecognitionComponent", function () {
        return SpeechRecognitionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var SpeechRecognitionComponent = /*#__PURE__*/function () {
        function SpeechRecognitionComponent() {
          _classCallCheck(this, SpeechRecognitionComponent);
        }

        _createClass(SpeechRecognitionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpeechRecognitionComponent;
      }();

      SpeechRecognitionComponent.??fac = function SpeechRecognitionComponent_Factory(t) {
        return new (t || SpeechRecognitionComponent)();
      };

      SpeechRecognitionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SpeechRecognitionComponent,
        selectors: [["app-speech-recognition"]],
        decls: 1,
        vars: 0,
        template: function SpeechRecognitionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWVjaC1yZWNvZ25pdGlvbi9zcGVlY2gtcmVjb2duaXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SpeechRecognitionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-speech-recognition',
            templateUrl: './speech-recognition.component.html',
            styleUrls: ['./speech-recognition.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/speech-recognition/speech-recognition.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/speech-recognition/speech-recognition.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SpeechRecognitionModule */

    /***/
    function srcAppPagesSpeechRecognitionSpeechRecognitionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechRecognitionModule", function () {
        return SpeechRecognitionModule;
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


      var _speech_recognition_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./speech-recognition-routing.module */
      "./src/app/pages/speech-recognition/speech-recognition-routing.module.ts");
      /* harmony import */


      var _speech_recognition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./speech-recognition.component */
      "./src/app/pages/speech-recognition/speech-recognition.component.ts");
      /* harmony import */


      var _speechlist_speechlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./speechlist/speechlist.component */
      "./src/app/pages/speech-recognition/speechlist/speechlist.component.ts");
      /* harmony import */


      var _speechedit_speechedit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./speechedit/speechedit.component */
      "./src/app/pages/speech-recognition/speechedit/speechedit.component.ts");
      /* harmony import */


      var _speechadd_speechadd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./speechadd/speechadd.component */
      "./src/app/pages/speech-recognition/speechadd/speechadd.component.ts");

      var SpeechRecognitionModule = function SpeechRecognitionModule() {
        _classCallCheck(this, SpeechRecognitionModule);
      };

      SpeechRecognitionModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SpeechRecognitionModule
      });
      SpeechRecognitionModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SpeechRecognitionModule_Factory(t) {
          return new (t || SpeechRecognitionModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _speech_recognition_routing_module__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognitionRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SpeechRecognitionModule, {
          declarations: [_speechlist_speechlist_component__WEBPACK_IMPORTED_MODULE_4__["SpeechlistComponent"], _speechedit_speechedit_component__WEBPACK_IMPORTED_MODULE_5__["SpeecheditComponent"], _speechadd_speechadd_component__WEBPACK_IMPORTED_MODULE_6__["SpeechaddComponent"], _speech_recognition_component__WEBPACK_IMPORTED_MODULE_3__["SpeechRecognitionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _speech_recognition_routing_module__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognitionRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SpeechRecognitionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_speechlist_speechlist_component__WEBPACK_IMPORTED_MODULE_4__["SpeechlistComponent"], _speechedit_speechedit_component__WEBPACK_IMPORTED_MODULE_5__["SpeecheditComponent"], _speechadd_speechadd_component__WEBPACK_IMPORTED_MODULE_6__["SpeechaddComponent"], _speech_recognition_component__WEBPACK_IMPORTED_MODULE_3__["SpeechRecognitionComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _speech_recognition_routing_module__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognitionRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/speech-recognition/speechadd/speechadd.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/speech-recognition/speechadd/speechadd.component.ts ***!
      \***************************************************************************/

    /*! exports provided: SpeechaddComponent */

    /***/
    function srcAppPagesSpeechRecognitionSpeechaddSpeechaddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechaddComponent", function () {
        return SpeechaddComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SpeechaddComponent = /*#__PURE__*/function () {
        function SpeechaddComponent() {
          _classCallCheck(this, SpeechaddComponent);
        }

        _createClass(SpeechaddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpeechaddComponent;
      }();

      SpeechaddComponent.??fac = function SpeechaddComponent_Factory(t) {
        return new (t || SpeechaddComponent)();
      };

      SpeechaddComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SpeechaddComponent,
        selectors: [["app-speechadd"]],
        decls: 9,
        vars: 0,
        consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-12", "text-right"], ["action", "#", 1, "col-12"], [1, "col-md-3", "form-group"], ["type", "text", "placeholder", "Add sentence", 1, "form-control", "w-100"], [1, "btn", "theme_btn", "mt-3"]],
        template: function SpeechaddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWVjaC1yZWNvZ25pdGlvbi9zcGVlY2hhZGQvc3BlZWNoYWRkLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SpeechaddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-speechadd',
            templateUrl: './speechadd.component.html',
            styleUrls: ['./speechadd.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/speech-recognition/speechedit/speechedit.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/speech-recognition/speechedit/speechedit.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: SpeecheditComponent */

    /***/
    function srcAppPagesSpeechRecognitionSpeecheditSpeecheditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeecheditComponent", function () {
        return SpeecheditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SpeecheditComponent = /*#__PURE__*/function () {
        function SpeecheditComponent() {
          _classCallCheck(this, SpeecheditComponent);
        }

        _createClass(SpeecheditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpeecheditComponent;
      }();

      SpeecheditComponent.??fac = function SpeecheditComponent_Factory(t) {
        return new (t || SpeecheditComponent)();
      };

      SpeecheditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SpeecheditComponent,
        selectors: [["app-speechedit"]],
        decls: 2,
        vars: 0,
        template: function SpeecheditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "speechedit works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWVjaC1yZWNvZ25pdGlvbi9zcGVlY2hlZGl0L3NwZWVjaGVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SpeecheditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-speechedit',
            templateUrl: './speechedit.component.html',
            styleUrls: ['./speechedit.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/speech-recognition/speechlist/speechlist.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/speech-recognition/speechlist/speechlist.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: SpeechlistComponent */

    /***/
    function srcAppPagesSpeechRecognitionSpeechlistSpeechlistComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechlistComponent", function () {
        return SpeechlistComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      function SpeechlistComponent_ng_template_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Speech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpeechlistComponent_ng_template_82_Template_button_click_3_listener() {
            var modal_r4 = ctx.$implicit;
            return modal_r4.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Select Language ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " HINDI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " PUNJABI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " ENGLISH ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " FRENCH ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Add More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SpeechlistComponent_ng_template_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Edit Speech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpeechlistComponent_ng_template_84_Template_button_click_3_listener() {
            var modal_r6 = ctx.$implicit;
            return modal_r6.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Change Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " HINDI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " PUNJABI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " ENGLISH ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " FRENCH ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Add More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var SpeechlistComponent = /*#__PURE__*/function () {
        function SpeechlistComponent(modalService) {
          _classCallCheck(this, SpeechlistComponent);

          this.modalService = modalService;
        }

        _createClass(SpeechlistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addspeech",
          value: function addspeech(content3) {
            this.modalService.open(content3, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }, {
          key: "editspeech",
          value: function editspeech(content4) {
            this.modalService.open(content4, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }]);

        return SpeechlistComponent;
      }();

      SpeechlistComponent.??fac = function SpeechlistComponent_Factory(t) {
        return new (t || SpeechlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      SpeechlistComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SpeechlistComponent,
        selectors: [["app-speechlist"]],
        decls: 86,
        vars: 0,
        consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-12", "text-right"], [1, "btn", "theme_btn", "mb-3", 3, "click"], [1, "col-md-3"], [1, "d-flex", "justify-content-between"], [1, "cursor_pointer", 3, "click"], [1, "fas", "fa-pencil-alt", "font-14"], ["href", "javascript:void()", 1, "ml-2"], [1, "fas", "fa-trash", "font-14"], [1, "mb-0"], [1, "d-flex"], ["content3", ""], ["content4", ""], [1, "modal-header", "p-2"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["action", "", 1, "col-12", "row"], [1, "col-md-6", "form-group"], ["name", "", "id", "", 1, "form-control"], ["selected", "", "disabled", ""], ["type", "text", "placeholder", "Add sentence", 1, "form-control", "w-100"], [1, "btn", "theme_btn", "mt-3"], [1, "col-md-12"], ["type", "text", "value", "Sentence 1", "placeholder", "Add sentence", 1, "form-control", "w-100"], ["type", "text", "value", "Sentence 2", "placeholder", "Add sentence", 1, "form-control", "w-100"], ["type", "text", "value", "Sentence 3", "placeholder", "Add sentence", 1, "form-control", "w-100"], ["type", "text", "value", "Sentence 4", "placeholder", "Add sentence", 1, "form-control", "w-100"]],
        template: function SpeechlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpeechlistComponent_Template_a_click_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](83);

              return ctx.addspeech(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Add Sentences");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "HINDI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpeechlistComponent_Template_a_click_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](85);

              return ctx.editspeech(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Sentences 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Sentences 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Sentences 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Sentences 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "PUNJABI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpeechlistComponent_Template_a_click_31_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](85);

              return ctx.editspeech(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Sentences 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Sentences 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " Sentences 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Sentences 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "ENGLISH ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpeechlistComponent_Template_a_click_50_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](85);

              return ctx.editspeech(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Sentences 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Sentences 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Sentences 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Sentences 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "FRENCH ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpeechlistComponent_Template_a_click_69_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](85);

              return ctx.editspeech(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " Sentences 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " Sentences 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " Sentences 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Sentences 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](82, SpeechlistComponent_ng_template_82_Template, 28, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](84, SpeechlistComponent_ng_template_84_Template, 34, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWVjaC1yZWNvZ25pdGlvbi9zcGVlY2hsaXN0L3NwZWVjaGxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SpeechlistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-speechlist',
            templateUrl: './speechlist.component.html',
            styleUrls: ['./speechlist.component.css']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=speech-recognition-speech-recognition-module-es5.js.map