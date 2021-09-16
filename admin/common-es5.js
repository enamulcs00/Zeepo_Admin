(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./src/app/_helpers/shareable.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/_helpers/shareable.service.ts ***!
      \***********************************************/

    /*! exports provided: ShareableService */

    /***/
    function srcApp_helpersShareableServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareableService", function () {
        return ShareableService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var ShareableService = /*#__PURE__*/function () {
        function ShareableService(_http, spinner) {
          _classCallCheck(this, ShareableService);

          this._http = _http;
          this.spinner = spinner;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        }

        _createClass(ShareableService, [{
          key: "profileUpdate",
          value: function profileUpdate() {
            return this.subject.asObservable();
          }
        }, {
          key: "post",
          value: function post(url) {
            var postData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this._http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl).concat(url), postData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "get",
          value: function get(url) {
            return this._http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl).concat(url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "put",
          value: function put(url) {
            var putData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this._http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl).concat(url), putData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(url) {
            return this._http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl) + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "uploadMedia",
          value: function uploadMedia(formData) {
            return this._http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl, "upload/media/"), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "postApi",
          value: function postApi(url, data) {
            return this._http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl) + url, data);
          }
        }, {
          key: "putApi",
          value: function putApi(url, data) {
            return this._http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl) + url, data);
          }
        }, {
          key: "deleteApi",
          value: function deleteApi(url) {
            return this._http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl) + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "Showspinner",
          value: function Showspinner() {
            var _this = this;

            this.spinner.show();
            setTimeout(function () {
              _this.spinner.hide();
            }, 4000);
          }
        }]);

        return ShareableService;
      }();

      ShareableService.ɵfac = function ShareableService_Factory(t) {
        return new (t || ShareableService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]));
      };

      ShareableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ShareableService,
        factory: ShareableService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShareableService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map