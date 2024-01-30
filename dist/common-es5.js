(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "ASgP":
    /*!********************************************************************!*\
      !*** ./src/app/modules/categories/_services/categories.service.ts ***!
      \********************************************************************/

    /*! exports provided: CategoriesService */

    /***/
    function ASgP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesService", function () {
        return CategoriesService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/config/config */
      "0np6");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../auth */
      "tmEo");

      var CategoriesService = /*#__PURE__*/function () {
        function CategoriesService(http, authservice) {
          _classCallCheck(this, CategoriesService);

          this.http = http;
          this.authservice = authservice;
          this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.isLoading$ = this.isLoadingSubject.asObservable();
        }

        _createClass(CategoriesService, [{
          key: "allCategories",
          value: function allCategories() {
            var _this = this;

            var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'token': this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/categories/list?search=" + search;
            return this.http.get(URL, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              return _this.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "createCategorie",
          value: function createCategorie(data) {
            var _this2 = this;

            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'token': this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/categories/register";
            return this.http.post(URL, data, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              return _this2.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "updateCategorie",
          value: function updateCategorie(data) {
            var _this3 = this;

            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'token': this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/categories/update";
            return this.http.put(URL, data, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              return _this3.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "deleteCategorie",
          value: function deleteCategorie(categorie_id) {
            var _this4 = this;

            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'token': this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/categories/delete?_id=" + categorie_id;
            return this.http["delete"](URL, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              return _this4.isLoadingSubject.next(false);
            }));
          }
        }]);

        return CategoriesService;
      }();

      CategoriesService.ɵfac = function CategoriesService_Factory(t) {
        return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
      };

      CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CategoriesService,
        factory: CategoriesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoriesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: _auth__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LZ44":
    /*!****************************************************!*\
      !*** ./src/app/modules/auth/_models/auth.model.ts ***!
      \****************************************************/

    /*! exports provided: AuthModel */

    /***/
    function LZ44(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModel", function () {
        return AuthModel;
      });

      var AuthModel = /*#__PURE__*/function () {
        function AuthModel() {
          _classCallCheck(this, AuthModel);
        }

        _createClass(AuthModel, [{
          key: "setAuth",
          value: function setAuth(auth) {
            this.accessToken = auth.accessToken;
            this.refreshToken = auth.refreshToken;
            this.expiresIn = auth.expiresIn;
          }
        }]);

        return AuthModel;
      }();
      /***/

    },

    /***/
    "Qy8N":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/auth/registration/confirm-password.validator.ts ***!
      \*************************************************************************/

    /*! exports provided: ConfirmPasswordValidator */

    /***/
    function Qy8N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function () {
        return ConfirmPasswordValidator;
      });

      var ConfirmPasswordValidator = /*#__PURE__*/function () {
        function ConfirmPasswordValidator() {
          _classCallCheck(this, ConfirmPasswordValidator);
        }

        _createClass(ConfirmPasswordValidator, null, [{
          key: "MatchPassword",
          value:
          /**
           * Check matching password with confirm password
           * @param control AbstractControl
           */
          function MatchPassword(control) {
            var password = control.get('password').value;
            var confirmPassword = control.get('cPassword').value;

            if (password !== confirmPassword) {
              control.get('cPassword').setErrors({
                ConfirmPassword: true
              });
            } else {
              return null;
            }
          }
        }]);

        return ConfirmPasswordValidator;
      }();
      /***/

    },

    /***/
    "rrsC":
    /*!****************************************************!*\
      !*** ./src/app/modules/auth/_models/user.model.ts ***!
      \****************************************************/

    /*! exports provided: UserModel */

    /***/
    function rrsC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModel", function () {
        return UserModel;
      });
      /* harmony import */


      var _auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.model */
      "LZ44");

      var UserModel = /*#__PURE__*/function (_auth_model__WEBPACK_) {
        _inherits(UserModel, _auth_model__WEBPACK_);

        var _super = _createSuper(UserModel);

        function UserModel() {
          _classCallCheck(this, UserModel);

          return _super.apply(this, arguments);
        }

        _createClass(UserModel, [{
          key: "setUser",
          value: function setUser(user) {
            this.id = user.id;
            this.username = user.username || '';
            this.password = user.password || '';
            this.fullname = user.fullname || '';
            this.email = user.email || '';
            this.pic = user.pic || './assets/media/users/default.jpg';
            this.roles = user.roles || [];
            this.occupation = user.occupation || '';
            this.companyName = user.companyName || '';
            this.phone = user.phone || '';
            this.address = user.address;
            this.socialNetworks = user.socialNetworks;
          }
        }]);

        return UserModel;
      }(_auth_model__WEBPACK_IMPORTED_MODULE_0__["AuthModel"]);
      /***/

    },

    /***/
    "tM0M":
    /*!****************************************************!*\
      !*** ./src/app/modules/i18n/translation.module.ts ***!
      \****************************************************/

    /*! exports provided: TranslationModule */

    /***/
    function tM0M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationModule", function () {
        return TranslationModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var TranslationModule = /*#__PURE__*/_createClass(function TranslationModule() {
        _classCallCheck(this, TranslationModule);
      });

      TranslationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TranslationModule
      });
      TranslationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TranslationModule_Factory(t) {
          return new (t || TranslationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TranslationModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map