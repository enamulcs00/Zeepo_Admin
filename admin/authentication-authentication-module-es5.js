(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"], {
    /***/
    "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js ***!
      \*************************************************************************/

    /*! exports provided: NgOtpInputModule, ɵa, ɵb, ɵc */

    /***/
    function node_modulesNgOtpInput__ivy_ngcc__Fesm2015NgOtpInputJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgOtpInputModule", function () {
        return NgOtpInputModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return NgOtpInputComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return KeysPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return NumberOnlyDirective;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.onKeyDown($event);
          })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var i_r3 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.onKeyUp($event, i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("disabledNumberOnly", !ctx_r1.config.allowNumbersOnly)("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
        }
      }

      function NgOtpInputComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 1, 11, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrapper ", ctx_r0.config.containerClass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
        }
      }

      var KeysPipe = /*#__PURE__*/function () {
        function KeysPipe() {
          _classCallCheck(this, KeysPipe);
        }

        _createClass(KeysPipe, [{
          key: "transform",

          /**
           * @param {?} value
           * @return {?}
           */
          value: function transform(value) {
            return Object.keys(value);
          }
        }]);

        return KeysPipe;
      }();

      KeysPipe.ɵfac = function KeysPipe_Factory(t) {
        return new (t || KeysPipe)();
      };

      KeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "keys",
        type: KeysPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'keys'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var Config = function Config() {
        _classCallCheck(this, Config);
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgOtpInputComponent = /*#__PURE__*/function () {
        /**
         * @param {?} keysPipe
         */
        function NgOtpInputComponent(keysPipe) {
          _classCallCheck(this, NgOtpInputComponent);

          this.keysPipe = keysPipe;
          this.config = {
            length: 4
          }; // tslint:disable-next-line: no-output-on-prefix

          this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.inputControls = new Array(this.config.length);
          this.componentKey = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
        }
        /**
         * @return {?}
         */


        _createClass(NgOtpInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});

            for (var index = 0; index < this.config.length; index++) {
              this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
            }

            this.inputType = this.getInputType();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            if (!this.config.disableAutoFocus) {
              /** @type {?} */
              var containerItem = document.getElementById("c_".concat(this.componentKey));

              if (containerItem) {
                containerItem.addEventListener('paste',
                /**
                * @param {?} evt
                * @return {?}
                */
                function (evt) {
                  return _this.handlePaste(evt);
                });
                /** @type {?} */

                var ele = containerItem.getElementsByClassName('otp-input')[0];

                if (ele && ele.focus) {
                  ele.focus();
                }
              }
            }
          }
          /**
           * @private
           * @param {?} idx
           * @return {?}
           */

        }, {
          key: "getControlName",
          value: function getControlName(idx) {
            return "ctrl_".concat(idx);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "ifLeftArrow",
          value: function ifLeftArrow(event) {
            return this.ifKeyCode(event, 37);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "ifRightArrow",
          value: function ifRightArrow(event) {
            return this.ifKeyCode(event, 39);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "ifBackspaceOrDelete",
          value: function ifBackspaceOrDelete(event) {
            return event.key === 'Backspace' || event.key === 'Delete' || this.ifKeyCode(event, 8) || this.ifKeyCode(event, 46);
          }
          /**
           * @param {?} event
           * @param {?} targetCode
           * @return {?}
           */

        }, {
          key: "ifKeyCode",
          value: function ifKeyCode(event, targetCode) {
            /** @type {?} */
            var key = event.keyCode || event.charCode; // tslint:disable-next-line: triple-equals

            return key == targetCode ? true : false;
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onKeyDown",
          value: function onKeyDown($event) {
            /** @type {?} */
            var isSpace = this.ifKeyCode($event, 32);

            if (isSpace) {
              // prevent space
              return false;
            }
          }
          /**
           * @param {?} $event
           * @param {?} inputIdx
           * @return {?}
           */

        }, {
          key: "onKeyUp",
          value: function onKeyUp($event, inputIdx) {
            /** @type {?} */
            var nextInputId = this.appendKey("otp_".concat(inputIdx + 1));
            /** @type {?} */

            var prevInputId = this.appendKey("otp_".concat(inputIdx - 1));

            if (this.ifRightArrow($event)) {
              this.setSelected(nextInputId);
              return;
            }

            if (this.ifLeftArrow($event)) {
              this.setSelected(prevInputId);
              return;
            }
            /** @type {?} */


            var isBackspace = this.ifBackspaceOrDelete($event);

            if (isBackspace && !$event.target.value) {
              this.setSelected(prevInputId);
              this.rebuildValue();
              return;
            }

            if (!$event.target.value) {
              return;
            }

            if (this.ifValidEntry($event)) {
              this.setSelected(nextInputId);
            }

            this.rebuildValue();
          }
          /**
           * @param {?} id
           * @return {?}
           */

        }, {
          key: "appendKey",
          value: function appendKey(id) {
            return "".concat(id, "_").concat(this.componentKey);
          }
          /**
           * @param {?} eleId
           * @return {?}
           */

        }, {
          key: "setSelected",
          value: function setSelected(eleId) {
            this.focusTo(eleId);
            /** @type {?} */

            var ele = document.getElementById(eleId);

            if (ele && ele.setSelectionRange) {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                ele.setSelectionRange(0, 1);
              }, 0);
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "ifValidEntry",
          value: function ifValidEntry(event) {
            /** @type {?} */
            var inp = String.fromCharCode(event.keyCode);
            /** @type {?} */

            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            return isMobile || /[a-zA-Z0-9-_]/.test(inp) || this.config.allowKeyCodes && this.config.allowKeyCodes.includes(event.keyCode) || event.keyCode >= 96 && event.keyCode <= 105;
          }
          /**
           * @param {?} eleId
           * @return {?}
           */

        }, {
          key: "focusTo",
          value: function focusTo(eleId) {
            /** @type {?} */
            var ele = document.getElementById(eleId);

            if (ele) {
              ele.focus();
            }
          } // method to set component value

          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            var _this2 = this;

            if (this.config.allowNumbersOnly && isNaN(value)) {
              return;
            }

            this.otpForm.reset();

            if (!value) {
              this.rebuildValue();
              return;
            }

            value = value.toString().replace(/\s/g, ''); // remove whitespace

            Array.from(value).forEach(
            /**
            * @param {?} c
            * @param {?} idx
            * @return {?}
            */
            function (c, idx) {
              if (_this2.otpForm.get(_this2.getControlName(idx))) {
                _this2.otpForm.get(_this2.getControlName(idx)).setValue(c);
              }
            });

            if (!this.config.disableAutoFocus) {
              /** @type {?} */
              var containerItem = document.getElementById("c_".concat(this.componentKey));
              /** @type {?} */

              var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
              /** @type {?} */

              var ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];

              if (ele && ele.focus) {
                ele.focus();
              }
            }

            this.rebuildValue();
          }
          /**
           * @return {?}
           */

        }, {
          key: "rebuildValue",
          value: function rebuildValue() {
            var _this3 = this;

            /** @type {?} */
            var val = '';
            this.keysPipe.transform(this.otpForm.controls).forEach(
            /**
            * @param {?} k
            * @return {?}
            */
            function (k) {
              if (_this3.otpForm.controls[k].value) {
                val += _this3.otpForm.controls[k].value;
              }
            });
            this.onInputChange.emit(val);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getInputType",
          value: function getInputType() {
            return this.config.isPasswordInput ? 'password' : this.config.allowNumbersOnly ? 'tel' : 'text';
          }
          /**
           * @param {?} e
           * @return {?}
           */

        }, {
          key: "handlePaste",
          value: function handlePaste(e) {
            // Get pasted data via clipboard API

            /** @type {?} */
            var clipboardData = e.clipboardData || window['clipboardData'];

            if (clipboardData) {
              /** @type {?} */
              var pastedData = clipboardData.getData('Text');
            } // Stop data actually being pasted into div


            e.stopPropagation();
            e.preventDefault();

            if (!pastedData) {
              return;
            }

            this.setValue(pastedData);
          }
        }]);

        return NgOtpInputComponent;
      }();

      NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) {
        return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe));
      };

      NgOtpInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgOtpInputComponent,
        selectors: [["ng-otp-input"]],
        inputs: {
          config: "config"
        },
        outputs: {
          onInputChange: "onInputChange"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "class", "formControl", "id", "keydown", "keyup", 4, "ngFor", "ngForOf"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "formControl", "id", "keydown", "keyup"]],
        template: function NgOtpInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], NumberOnlyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]];
        },
        pipes: function pipes() {
          return [KeysPipe];
        },
        styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
      });
      /** @nocollapse */

      NgOtpInputComponent.ctorParameters = function () {
        return [{
          type: KeysPipe
        }];
      };

      NgOtpInputComponent.propDecorators = {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onInputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line: component-selector
            selector: 'ng-otp-input',
            template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" maxlength=\"1\"\r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"off\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
            styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input{width:30px;font-size:18px;height:30px}}"]
          }]
        }], function () {
          return [{
            type: KeysPipe
          }];
        }, {
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NumberOnlyDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _elRef
         * @param {?} _renderer
         */
        function NumberOnlyDirective(_elRef, _renderer) {
          _classCallCheck(this, NumberOnlyDirective);

          this._elRef = _elRef;
          this._renderer = _renderer;
        }
        /**
         * @return {?}
         */


        _createClass(NumberOnlyDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.disabledNumberOnly) {
              this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
            }
          }
        }]);

        return NumberOnlyDirective;
      }();

      NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) {
        return new (t || NumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      NumberOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NumberOnlyDirective,
        selectors: [["", "numberOnly", ""]],
        inputs: {
          disabledNumberOnly: "disabledNumberOnly"
        }
      });
      /** @nocollapse */

      NumberOnlyDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      NumberOnlyDirective.propDecorators = {
        disabledNumberOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberOnlyDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[numberOnly]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          disabledNumberOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgOtpInputModule = function NgOtpInputModule() {
        _classCallCheck(this, NgOtpInputModule);
      };

      NgOtpInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgOtpInputModule
      });
      NgOtpInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgOtpInputModule_Factory(t) {
          return new (t || NgOtpInputModule)();
        },
        providers: [KeysPipe],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgOtpInputModule, {
          declarations: function declarations() {
            return [NgOtpInputComponent, KeysPipe, NumberOnlyDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]];
          },
          exports: function exports() {
            return [NgOtpInputComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
            declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
            exports: [NgOtpInputComponent],
            providers: [KeysPipe]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ng-otp-input.js.map

      /***/

    },

    /***/
    "./src/app/authentication/404/not-found.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/404/not-found.component.ts ***!
      \***********************************************************/

    /*! exports provided: NotfoundComponent */

    /***/
    function srcAppAuthentication404NotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
        return NotfoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NotfoundComponent = /*#__PURE__*/function () {
        function NotfoundComponent() {
          _classCallCheck(this, NotfoundComponent);
        }

        _createClass(NotfoundComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return NotfoundComponent;
      }();

      NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) {
        return new (t || NotfoundComponent)();
      };

      NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotfoundComponent,
        selectors: [["app-not-found"]],
        decls: 10,
        vars: 0,
        consts: [[1, "error-box"], [1, "error-body", "text-center"], [1, "error-title", "text-danger"], [1, "text-uppercase", "error-subtitle"], [1, "text-muted", "m-t-30", "m-b-30"], ["href", "#/dashboard/classic", 1, "btn", "btn-danger", "btn-rounded", "waves-effect", "waves-light", "m-b-40"]],
        template: function NotfoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PAGE NOT FOUND !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "YOU SEEM TO BE TRYING TO FIND HIS WAY HOME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back to home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-not-found',
            templateUrl: './not-found.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/authentication/authentication.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/authentication/authentication.module.ts ***!
      \*********************************************************/

    /*! exports provided: AuthenticationModule */

    /***/
    function srcAppAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
        return AuthenticationModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _404_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./404/not-found.component */
      "./src/app/authentication/404/not-found.component.ts");
      /* harmony import */


      var _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lock/changepassword.component */
      "./src/app/authentication/lock/changepassword.component.ts");
      /* harmony import */


      var _login2_login2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login2/login2.component */
      "./src/app/authentication/login2/login2.component.ts");
      /* harmony import */


      var _authentication_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./authentication.routing */
      "./src/app/authentication/authentication.routing.ts");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-otp-input */
      "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js"); // import { LoginComponent } from './login/login.component';
      // import { SignupComponent } from './signup/signup.component';
      // import { Signup2Component } from './signup2/signup2.component';


      var AuthenticationModule = function AuthenticationModule() {
        _classCallCheck(this, AuthenticationModule);
      };

      AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthenticationModule
      });
      AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthenticationModule_Factory(t) {
          return new (t || AuthenticationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_7__["AuthenticationRoutes"]), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_8__["NgOtpInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, {
          declarations: [_404_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"], // LoginComponent,
          // SignupComponent,
          _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_5__["changepasswordComponent"], _login2_login2_component__WEBPACK_IMPORTED_MODULE_6__["Login2Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_8__["NgOtpInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_7__["AuthenticationRoutes"]), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_8__["NgOtpInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]],
            declarations: [_404_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"], // LoginComponent,
            // SignupComponent,
            _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_5__["changepasswordComponent"], _login2_login2_component__WEBPACK_IMPORTED_MODULE_6__["Login2Component"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/authentication/authentication.routing.ts":
    /*!**********************************************************!*\
      !*** ./src/app/authentication/authentication.routing.ts ***!
      \**********************************************************/

    /*! exports provided: AuthenticationRoutes */

    /***/
    function srcAppAuthenticationAuthenticationRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function () {
        return AuthenticationRoutes;
      });
      /* harmony import */


      var _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./404/not-found.component */
      "./src/app/authentication/404/not-found.component.ts");
      /* harmony import */


      var _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lock/changepassword.component */
      "./src/app/authentication/lock/changepassword.component.ts");
      /* harmony import */


      var _login2_login2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login2/login2.component */
      "./src/app/authentication/login2/login2.component.ts"); // import { LoginComponent } from './login/login.component';
      // import { SignupComponent } from './signup/signup.component';
      // import { Signup2Component } from './signup2/signup2.component';


      var AuthenticationRoutes = [{
        path: '',
        children: [{
          path: '404',
          component: _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotfoundComponent"]
        }, {
          path: 'changepassword',
          component: _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_1__["changepasswordComponent"]
        }, // {
        //   path: 'login2',
        //   component: LoginComponent
        // },
        {
          path: 'login',
          component: _login2_login2_component__WEBPACK_IMPORTED_MODULE_2__["Login2Component"]
        }]
      }];
      /***/
    },

    /***/
    "./src/app/authentication/lock/changepassword.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/authentication/lock/changepassword.component.ts ***!
      \*****************************************************************/

    /*! exports provided: changepasswordComponent */

    /***/
    function srcAppAuthenticationLockChangepasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "changepasswordComponent", function () {
        return changepasswordComponent;
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


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      "./src/app/services/common/common.service.ts");
      /* harmony import */


      var src_app_helpers_shareable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_helpers/shareable.service */
      "./src/app/_helpers/shareable.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function changepasswordComponent_div_9_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter old password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function changepasswordComponent_div_9_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minlength should 8.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function changepasswordComponent_div_9_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maxlength should 16.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function changepasswordComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, changepasswordComponent_div_9_span_3_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, changepasswordComponent_div_9_span_4_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, changepasswordComponent_div_9_span_5_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.PhoneSignupForm.get("oldPassword").hasError("required") && ctx_r0.PhoneSignupForm.get("oldPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.PhoneSignupForm.get("oldPassword").hasError("minlength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.PhoneSignupForm.get("oldPassword").hasError("maxlength"));
        }
      }

      function changepasswordComponent_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter new password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function changepasswordComponent_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minlength should 8.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function changepasswordComponent_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maxlength should 16.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function changepasswordComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter confirm new password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function changepasswordComponent_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm password does not match with new password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var changepasswordComponent = /*#__PURE__*/function () {
        function changepasswordComponent(fb, router, service, toaster, com) {
          _classCallCheck(this, changepasswordComponent);

          this.fb = fb;
          this.router = router;
          this.service = service;
          this.toaster = toaster;
          this.com = com;
          this.ChangePasswordToute = "user/update-password/";
          this.IsToken = false;
          this.currentUser = JSON.parse(sessionStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].TokenValue));
        }

        _createClass(changepasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obj = this.service.SaveObj;

            if (this.currentUser && this.currentUser.token) {
              this.IsToken = true;
              this.PhoneSignupForm = this.fb.group({
                "oldPassword": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
                "password": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
                "cnfPassword": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              }, {
                validators: this.com.MustMatch('password', 'cnfPassword')
              });
            } else {
              this.PhoneSignupForm = this.fb.group({
                "password": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
                "cnfPassword": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              }, {
                validators: this.com.MustMatch('password', 'cnfPassword')
              });
            }
          }
        }, {
          key: "changepass",
          value: function changepass() {
            if (this.PhoneSignupForm.valid) {
              this.CallChangePassword();
            } else {
              this.PhoneSignupForm.markAllAsTouched();
            }
          }
        }, {
          key: "BackToDashboard",
          value: function BackToDashboard() {
            window.history.back();
          }
        }, {
          key: "CallChangePassword",
          value: function CallChangePassword() {
            var _this4 = this;

            var _a;

            if (this.currentUser && this.currentUser.token) {
              this.ChangePasswordToute = "user/change-password/";
              this.obj = {
                current_password: this.PhoneSignupForm.value.oldPassword,
                new_password: this.PhoneSignupForm.value.password
              };
            } else {
              this.obj = {
                "email": (_a = this.obj) === null || _a === void 0 ? void 0 : _a.email,
                "password": this.PhoneSignupForm.value.password
              };
            }

            this.service.putApi(this.ChangePasswordToute, this.obj).subscribe(function (res) {
              if ([200, 201].includes(res.code)) {
                _this4.toaster.success("Password has been changed", 'Success');

                window.history.back();
              }
            });
          }
        }]);

        return changepasswordComponent;
      }();

      changepasswordComponent.ɵfac = function changepasswordComponent_Factory(t) {
        return new (t || changepasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_shareable_service__WEBPACK_IMPORTED_MODULE_5__["ShareableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]));
      };

      changepasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: changepasswordComponent,
        selectors: [["app-changepassword"]],
        decls: 28,
        vars: 7,
        consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/big/auth-bg.jpg) no-repeat center center"], [1, "auth-box"], [1, "logo"], [1, "db"], ["src", "assets/images/logo2.svg", "alt", "logo"], [1, "row"], [1, "col-12"], [1, "form-horizontal", "m-t-20", 3, "formGroup"], ["class", "form-group row", 4, "ngIf"], [1, "form-group", "row"], ["type", "password", "required", "", "placeholder", "New password", "formControlName", "password", 1, "form-control", "form-control-lg"], ["class", "error", 4, "ngIf"], ["type", "password", "required", "", "placeholder", "Confirm new password", "formControlName", "cnfPassword", 1, "form-control", "form-control-lg"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["type", "submit", 1, "btn", "btn-block", "btn-lg", "btn-info", 3, "click"], [1, "col-xs-12", "text-center"], [1, "btn", "btn-block", "btn-lg", "bg-white", "text-primary", 3, "click"], ["type", "password", "placeholder", "Old password", "formControlName", "oldPassword", 1, "form-control", "form-control-lg"], [1, "error"]],
        template: function changepasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, changepasswordComponent_div_9_Template, 6, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, changepasswordComponent_span_13_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, changepasswordComponent_span_14_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, changepasswordComponent_span_15_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, changepasswordComponent_span_19_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, changepasswordComponent_span_20_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function changepasswordComponent_Template_button_click_23_listener() {
              return ctx.changepass();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function changepasswordComponent_Template_a_click_26_listener() {
              return ctx.BackToDashboard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.PhoneSignupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsToken);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PhoneSignupForm.get("password").hasError("required") && ctx.PhoneSignupForm.get("password").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PhoneSignupForm.get("password").hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PhoneSignupForm.get("password").hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PhoneSignupForm.get("cnfPassword").hasError("required") && ctx.PhoneSignupForm.get("cnfPassword").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PhoneSignupForm.get("cnfPassword").hasError("mustMatch"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: [".error[_ngcontent-%COMP%] {\n  color: red;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9jay9jaG5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9jay9jaG5nLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3J7XG4gICAgY29sb3I6IHJlZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](changepasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-changepassword',
            templateUrl: './changepassword.component.html',
            styleUrls: ['./chng.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_helpers_shareable_service__WEBPACK_IMPORTED_MODULE_5__["ShareableService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
          }, {
            type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/authentication/login2/login2.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/login2/login2.component.ts ***!
      \***********************************************************/

    /*! exports provided: Login2Component */

    /***/
    function srcAppAuthenticationLogin2Login2ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Login2Component", function () {
        return Login2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      "./src/app/services/common/common.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var src_app_helpers_shareable_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_helpers/shareable.service */
      "./src/app/_helpers/shareable.service.ts");
      /* harmony import */


      var src_app_services_http_api_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/http/api.list */
      "./src/app/services/http/api.list.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-otp-input */
      "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");

      function Login2Component_div_2_div_12_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Login2Component_div_2_div_12_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email should be valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Login2Component_div_2_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Login2Component_div_2_div_12_span_1_Template, 2, 0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Login2Component_div_2_div_12_span_2_Template, 2, 0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.pattern);
        }
      }

      function Login2Component_div_2_div_18_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Login2Component_div_2_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Login2Component_div_2_div_18_span_1_Template, 2, 0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.password.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function Login2Component_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Login2Component_div_2_Template_input_keypress_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.omitSpace($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Login2Component_div_2_div_12_Template, 3, 2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, Login2Component_div_2_div_18_Template, 2, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Remember me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Login2Component_div_2_Template_a_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.showRecoverForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Forgot password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Login2Component_div_2_Template_button_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r0.submitted && ctx_r0.f.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r0.submitted && ctx_r0.f.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.password.errors);
        }
      }

      function Login2Component_div_3_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Login2Component_div_3_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter valid email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Login2Component_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recover Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enter your Email and instructions will be sent to you!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Login2Component_div_3_span_12_Template, 2, 0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Login2Component_div_3_span_13_Template, 2, 0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Login2Component_div_3_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.ResetFor("forgot");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Login2Component_div_3_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.showRecoverForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.ForgotPasswordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ForgotPasswordForm.get("email").hasError("required") && ctx_r1.ForgotPasswordForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ForgotPasswordForm.get("email").hasError("pattern"));
        }
      }

      var _c1 = function _c1() {
        return {
          length: 4,
          allowNumbersOnly: true
        };
      };

      function Login2Component_div_4_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ng-otp-input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function Login2Component_div_4_div_5_Template_ng_otp_input_onInputChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.onOtpChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Login2Component_div_4_div_5_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.VerifyOtp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Verify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Login2Component_div_4_div_5_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r21.ResetFor("ResendOtp");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Resend OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function Login2Component_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Login2Component_div_4_div_5_Template, 13, 2, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.otpform);
        }
      }

      var Login2Component = /*#__PURE__*/function () {
        function Login2Component(http, cm, fb, router, service, apiList) {
          _classCallCheck(this, Login2Component);

          this.http = http;
          this.cm = cm;
          this.fb = fb;
          this.router = router;
          this.service = service;
          this.apiList = apiList;
          this.loginform = true;
          this.recoverform = false;
          this.loginnumber = false;
          this.numberform = true;
          this.otpform = false;
          this.submitted = false;
          this.isRememberMeChecked = false;
        }

        _createClass(Login2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.fb.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              rememberMe: [false]
            });
            var rememberMe = JSON.parse(localStorage.getItem('rememberMe'));

            if (!(rememberMe == null || rememberMe == undefined || rememberMe == '')) {
              this.loginForm.controls['rememberMe'].patchValue(rememberMe);

              if (rememberMe == true) {
                var remembermeDetails = JSON.parse(localStorage.getItem('userEmail_pass'));
                this.loginForm.patchValue({
                  email: remembermeDetails.email,
                  password: remembermeDetails.password
                });
              }
            } else {
              this.loginForm.controls['rememberMe'].patchValue(false);
            }
          }
        }, {
          key: "omitSpace",
          value: function omitSpace(event) {
            var keyCode = event.which ? event.which : event.keyCode;

            if (keyCode == 32) {
              return false;
            }
          }
        }, {
          key: "RememberMe",
          value: function RememberMe(isRemember, param) {
            localStorage.setItem('rememberMe', this.loginForm.value.rememberMe);

            if (isRemember == true) {
              localStorage.setItem('userEmail_pass', JSON.stringify(param));
            } else {
              localStorage.removeItem('userEmail_pass');
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this5 = this;

            this.submitted = true;
            var params = {
              'email': this.loginForm.value.email,
              'password': this.loginForm.value.password
            };

            if (this.loginForm.invalid) {
              return;
            }

            if (this.loginForm.valid && this.submitted) {
              this.http.post(this.apiList.login, params).subscribe(function (res) {
                if (res.code == 200) {
                  sessionStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TokenValue, JSON.stringify(res === null || res === void 0 ? void 0 : res.data));

                  _this5.cm.presentsToast('success', 'top-end', res.message);

                  _this5.router.navigateByUrl('/dashboard');

                  _this5.RememberMe(_this5.loginForm.value.rememberMe, params);
                }
              });
            }
          }
        }, {
          key: "showRecoverForm",
          value: function showRecoverForm() {
            this.loginform = !this.loginform;
            this.recoverform = !this.recoverform;
            this.ForgotPasswordForm = this.fb.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]]
            });
          }
        }, {
          key: "shownumbrForm",
          value: function shownumbrForm() {
            this.loginform = !this.loginform;
            this.loginnumber = !this.loginnumber;
          }
        }, {
          key: "signotpform",
          value: function signotpform() {
            this.recoverform = !this.recoverform;
            this.loginnumber = !this.loginnumber;
            this.otpform = !this.otpform;
          }
        }, {
          key: "onOtpChange",
          value: function onOtpChange(e) {
            this.otpValue = e;
          }
        }, {
          key: "ResetFor",
          value: function ResetFor(ref) {
            if (this.ForgotPasswordForm.valid) {
              var obj = {
                "email": this.ForgotPasswordForm.value.email
              };
              this.Forgot(obj, ref);
            } else {
              this.ForgotPasswordForm.markAllAsTouched();
            }
          }
        }, {
          key: "Forgot",
          value: function Forgot(obj, onlyFor) {
            var _this6 = this;

            this.service.put("user/forgot-password/", obj).subscribe(function (res) {
              if ([200, 201].includes(res.code)) {
                _this6.cm.presentsToast('success', 'top-end', res.message);

                onlyFor == 'forgot' ? _this6.signotpform() : '';
              }
            });
          }
        }, {
          key: "ForgotOtp",
          value: function ForgotOtp(obj) {
            var _this7 = this;

            this.service.put("user/forgot-verify-otp/", obj).subscribe(function (res) {
              if ([200, 201].includes(res.code)) {
                _this7.service.SaveObj = obj;

                _this7.cm.presentsToast('success', 'top-end', res.message);

                _this7.router.navigate(['/changepassword']);
              }
            });
          }
        }, {
          key: "SendOtp",
          value: function SendOtp(obj) {
            var _this8 = this;

            this.service.post("user/verify-otp/", obj).subscribe(function (res) {
              if ([200, 201].includes(res.code)) {
                sessionStorage.setItem("OtpDetails", JSON.stringify(obj));

                _this8.cm.presentsToast('success', 'top-end', res.message);

                _this8.router.navigate(['/changepassword']);
              }
            });
          }
        }, {
          key: "VerifyOtp",
          value: function VerifyOtp() {
            if (this.otpValue && this.otpValue.length === 4) {
              var obj = {
                "email": this.ForgotPasswordForm.value.email,
                "otp": this.otpValue
              };
              this.ForgotOtp(obj);
            } else {
              this.cm.presentsToast('Error', 'top-end', 'Please enter 4-digit OTP');
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }]);

        return Login2Component;
      }();

      Login2Component.ɵfac = function Login2Component_Factory(t) {
        return new (t || Login2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_shareable_service__WEBPACK_IMPORTED_MODULE_6__["ShareableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_api_list__WEBPACK_IMPORTED_MODULE_7__["apilist"]));
      };

      Login2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Login2Component,
        selectors: [["app-login"]],
        decls: 5,
        vars: 3,
        consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/background/login-register.jpg) no-repeat center center", "background-size", "100% 100%"], [1, "auth-box", "on-sidebar"], ["id", "loginform", 4, "ngIf"], [4, "ngIf"], ["id", "loginnumber", 4, "ngIf"], ["id", "loginform"], [1, "logo"], [1, "db"], ["src", "assets/images/logo2.svg", "alt", "logo"], [1, "row"], [1, "col-12"], ["id", "loginform", 1, "form-horizontal", "m-t-20", 3, "formGroup"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "ti-user"], ["type", "text", "formControlName", "email", "placeholder", "Email", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", "form-control-lg", 3, "ngClass", "keypress"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "basic-addon2", 1, "input-group-text"], [1, "fa", "fa-lock"], ["type", "password", "formControlName", "password", "placeholder", "Password", "aria-label", "Password", "aria-describedby", "basic-addon1", 1, "form-control", "form-control-lg", 3, "ngClass"], [1, "form-group", "row"], [1, "col-md-12"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "formControlName", "rememberMe", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label", "text-white"], ["href", "javascript:void(0)", "id", "to-recover", 1, "text-white", "float-right", 3, "click"], [1, "fa", "fa-lock", "m-r-5"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["type", "button", 1, "btn", "btn-block", "btn-lg", "theme_btn", "text-white", 3, "click"], [1, "invalid-feedback"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "font-medium", "my-3"], [1, "row", "m-t-20"], [1, "col-12", 3, "formGroup"], [1, "form-group"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg"], ["type", "submit", "name", "action", 1, "btn", "btn-block", "btn-lg", "theme_btn", 3, "click"], [1, "col-12", "mt-2"], [1, "btn", "btn-block", "btn-lg", "theme_btn", 3, "click"], ["id", "loginnumber"], ["class", "col-12", 4, "ngIf"], ["action", "index.html", 1, "form-horizontal", "m-t-20"], [1, "col-12", "text-center"], [1, "otp-box", 3, "config", "onInputChange"], ["type", "submit", 1, "btn", "btn-block", "btn-lg", "theme_btn", 3, "click"], [1, "form-group", "m-b-0", "m-t-10", "text-center"], ["href", "javascript:void(0)", 1, "text-white", "m-l-5", 3, "click"]],
        template: function Login2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Login2Component_div_2_Template, 32, 9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Login2Component_div_3_Template, 21, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Login2Component_div_4_Template, 6, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginform);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recoverform);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginnumber);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], ng_otp_input__WEBPACK_IMPORTED_MODULE_9__["ɵa"]],
        styles: [".logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90px;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 15px;\n  position: relative;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4yL2xvZ2luMi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsV0FBVTtBQUFsQjs7QUFJQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQURkIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4yL2xvZ2luMi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDo5MHB4O1xuICAgIH1cbn1cblxuLmVycm9ye1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHJlZDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Login2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login2.component.html',
            styleUrls: ['./login2.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }, {
            type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: src_app_helpers_shareable_service__WEBPACK_IMPORTED_MODULE_6__["ShareableService"]
          }, {
            type: src_app_services_http_api_list__WEBPACK_IMPORTED_MODULE_7__["apilist"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/http/http.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/http/http.service.ts ***!
      \***********************************************/

    /*! exports provided: HttpService */

    /***/
    function srcAppServicesHttpHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _api_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./api.list */
      "./src/app/services/http/api.list.ts");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http, apiList) {
          _classCallCheck(this, HttpService);

          this.http = http;
          this.apiList = apiList;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        } // Post method code .......
        // httpLoginPost(url: string, params) {
        //   return this.http.post(this.baseUrl + this.apiList[url], params).toPromise().then();
        // }


        _createClass(HttpService, [{
          key: "httpPost",
          value: function httpPost(url, params) {
            return this.http.post(this.baseUrl + this.apiList[url], params);
          } // Post method with Header  code .......

        }, {
          key: "httpPostWithHeader",
          value: function httpPostWithHeader(url, params, mime) {
            return this.http.post(this.baseUrl + this.apiList[url], params, this.header(mime));
          }
        }, {
          key: "httpPatchWithHeader",
          value: function httpPatchWithHeader(url, params, mime) {
            console.log(params);
            return this.http.patch(this.baseUrl + this.apiList[url], params, this.header(mime));
          }
        }, {
          key: "httpPostWithParam",
          value: function httpPostWithParam(url, id, params) {
            return this.http.post(this.baseUrl + this.apiList[url] + "/" + id, params);
          }
        }, {
          key: "httpPostWithHeaderParam",
          value: function httpPostWithHeaderParam(url, id, params, mime) {
            return this.http.post(this.baseUrl + this.apiList[url] + "/" + id, params, this.header(mime));
          } // Get method with header code .......

        }, {
          key: "httpGetWithHeaderParam",
          value: function httpGetWithHeaderParam(url, params, mime) {
            return this.http.get(this.baseUrl + this.apiList[url] + "/" + params, this.header(mime));
          }
        }, {
          key: "httpGetWithParam",
          value: function httpGetWithParam(url, params) {
            return this.http.get(this.baseUrl + this.apiList[url] + "/" + params);
          }
        }, {
          key: "post",
          value: function post(url) {
            var postData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl).concat(url), postData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "PutWithHeader",
          value: function PutWithHeader(url) {
            var postData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var mime = arguments.length > 2 ? arguments[2] : undefined;
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl).concat(url), postData, this.header(mime)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return data;
            }));
          } // Put method with Header code .......

        }, {
          key: "httpPutWithHeader",
          value: function httpPutWithHeader(url, Id, params, mime) {
            return this.http.put(this.baseUrl + this.apiList[url] + "/" + Id, params, this.header(mime));
          }
        }, {
          key: "httpPut",
          value: function httpPut(url, params, mime) {
            return this.http.put(this.baseUrl + this.apiList[url], params, this.header(mime));
          }
        }, {
          key: "httpDeleteWithHeader",
          value: function httpDeleteWithHeader(url, Id, mime) {
            return this.http["delete"](this.baseUrl + this.apiList[url] + "/" + Id, this.header(mime));
          } // get method with header & Queryparam code .......

        }, {
          key: "httpGetWithHeaderQueryParam",
          value: function httpGetWithHeaderQueryParam(url, params, mime) {
            return this.http.get(this.baseUrl + this.apiList[url] + "?" + params, this.header(mime));
          }
        }, {
          key: "httpPutByQueryParam",
          value: function httpPutByQueryParam(url, Id, params, mime) {
            return this.http.put(this.baseUrl + this.apiList[url] + "?" + Id, params, this.header(mime));
          } // // Get method code .......

        }, {
          key: "httpGetWithHeader",
          value: function httpGetWithHeader(url, mime) {
            return this.http.get(this.baseUrl + this.apiList[url], this.header(mime));
          }
        }, {
          key: "httpGet",
          value: function httpGet(url) {
            return this.http.get(this.baseUrl + this.apiList[url]);
          }
        }, {
          key: "fileUpload",
          value: function fileUpload(fileData) {
            var formData = new FormData();
            formData.append('image', fileData, fileData.name);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              "mimeType": "multipart/form-data",
              auth: sessionStorage.ZeepToken
            });
            var headerObj = {
              headers: headers
            };
            return this.http.post(this.baseUrl + this.apiList['uploadFile'], formData, headerObj);
          }
        }, {
          key: "header",
          value: function header(mime) {
            if (sessionStorage.ZeepToken && mime) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                // "mimeType": "multipart/form-data",
                authorization: sessionStorage.ZeepToken.token
              });
              var option = {
                headers: headers
              };
              return option;
            }

            if (sessionStorage.ZeepToken && !mime) {
              var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'content-type': 'application/json',
                // "mimeType": "multipart/form-data",
                authorization: sessionStorage.ZeepToken.token
              });

              var _option = {
                headers: _headers
              };
              return _option;
            }
          }
        }, {
          key: "Httpheader",
          value: function Httpheader() {
            if (sessionStorage.ZeepToken && sessionStorage.ZeepToken.token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                // "mimeType": "multipart/form-data",
                authorization: sessionStorage.ZeepToken.token
              });
              var option = {
                headers: headers
              };
              return option;
            }

            if (sessionStorage.ZeepToken) {
              var _headers2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'content-type': 'application/json',
                // "mimeType": "multipart/form-data",
                authorization: sessionStorage.ZeepToken.token
              });

              var _option2 = {
                headers: _headers2
              };
              return _option2;
            }
          }
        }]);

        return HttpService;
      }();

      HttpService.ɵfac = function HttpService_Factory(t) {
        return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_list__WEBPACK_IMPORTED_MODULE_4__["apilist"]));
      };

      HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: HttpService,
        factory: HttpService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: _api_list__WEBPACK_IMPORTED_MODULE_4__["apilist"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=authentication-authentication-module-es5.js.map