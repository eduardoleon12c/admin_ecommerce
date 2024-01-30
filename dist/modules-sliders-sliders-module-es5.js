(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sliders-sliders-module"], {
    /***/
    "8Zsk":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/sliders/list-slider/list-slider.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ListSliderComponent */

    /***/
    function Zsk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListSliderComponent", function () {
        return ListSliderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/config/config */
      "0np6");
      /* harmony import */


      var _add_new_slider_add_new_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../add-new-slider/add-new-slider.component */
      "Qojg");
      /* harmony import */


      var _delete_new_slider_delete_new_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../delete-new-slider/delete-new-slider.component */
      "yzmL");
      /* harmony import */


      var _edit_new_slider_edit_new_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../edit-new-slider/edit-new-slider.component */
      "vaHQ");
      /* harmony import */


      var _services_slider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/slider.service */
      "hcrt");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ListSliderComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ListSliderComponent_tr_39_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Activo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListSliderComponent_tr_39_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Des Activo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListSliderComponent_tr_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListSliderComponent_tr_39_span_6_Template, 2, 0, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListSliderComponent_tr_39_span_7_Template, 2, 0, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListSliderComponent_tr_39_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var slider_r2 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.editSlider(slider_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rect", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListSliderComponent_tr_39_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var slider_r2 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7["delete"](slider_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "rect", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slider_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.URL_BACKEND + "api/sliders/uploads/slider/" + slider_r2.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slider_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slider_r2.state == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slider_r2.state == 2);
        }
      }

      var ListSliderComponent = /*#__PURE__*/function () {
        function ListSliderComponent(_serviceSlider, modalService) {
          _classCallCheck(this, ListSliderComponent);

          this._serviceSlider = _serviceSlider;
          this.modalService = modalService;
          this.sliders = [];
          this.search = "";
          this.isLoading$ = null;
          this.URL_BACKEND = src_app_config_config__WEBPACK_IMPORTED_MODULE_1__["URL_BACKEND"];
        }

        _createClass(ListSliderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isLoading$ = this._serviceSlider.isLoading$;
            this.allSliders();
          }
        }, {
          key: "allSliders",
          value: function allSliders() {
            var _this = this;

            this._serviceSlider.allSlider(this.search).subscribe(function (resp) {
              console.log(resp);
              _this.sliders = resp.sliders;
            });
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.search = "";
            this.allSliders();
          }
        }, {
          key: "openCreate",
          value: function openCreate() {
            var _this2 = this;

            var modalRef = this.modalService.open(_add_new_slider_add_new_slider_component__WEBPACK_IMPORTED_MODULE_2__["AddNewSliderComponent"], {
              centered: true,
              size: 'md'
            });
            modalRef.componentInstance.SliderC.subscribe(function (slider) {
              _this2.sliders.unshift(slider);
            });
          }
        }, {
          key: "editSlider",
          value: function editSlider(slider) {
            var _this3 = this;

            var modalRef = this.modalService.open(_edit_new_slider_edit_new_slider_component__WEBPACK_IMPORTED_MODULE_4__["EditNewSliderComponent"], {
              centered: true,
              size: 'md'
            });
            modalRef.componentInstance.slider_selected = slider;
            modalRef.componentInstance.SliderE.subscribe(function (slider) {
              var index = _this3.sliders.findIndex(function (item) {
                return item._id == slider._id;
              });

              if (index != -1) {
                _this3.sliders[index] = slider;
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(slider) {
            var _this4 = this;

            var modalRef = this.modalService.open(_delete_new_slider_delete_new_slider_component__WEBPACK_IMPORTED_MODULE_3__["DeleteNewSliderComponent"], {
              centered: true,
              size: 'md'
            });
            modalRef.componentInstance.slider_selected = slider;
            modalRef.componentInstance.SliderD.subscribe(function (resp) {
              var index = _this4.sliders.findIndex(function (item) {
                return item._id == slider._id;
              });

              if (index != -1) {
                _this4.sliders.splice(index, 1);
              }
            });
          }
        }]);

        return ListSliderComponent;
      }();

      ListSliderComponent.ɵfac = function ListSliderComponent_Factory(t) {
        return new (t || ListSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_slider_service__WEBPACK_IMPORTED_MODULE_5__["SliderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]));
      };

      ListSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListSliderComponent,
        selectors: [["app-list-slider"]],
        decls: 40,
        vars: 5,
        consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "icon-2x", "text-dark-50", "flaticon-file-1", "mx-2"], [1, "card-toolbar"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "icon-2x", "text-white", "flaticon-file-1"], [1, "card-body"], [1, "form", "form-label-right"], [1, "form-group", "row"], [1, "col-lg-3"], ["type", "text", "name", "searchText", "placeholder", "Buscar", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "form-text", "text-muted"], [1, "col-2"], [1, "btn", "btn-dark", 3, "click"], [4, "ngIf"], [1, "row"], [1, "col-12"], [1, "table-responsive"], ["id", "kt_advance_table_widget_1", 1, "table", "table-head-custom", "table-vertical-center"], [1, "text-left"], [4, "ngFor", "ngForOf"], [1, "spinner", "spinner-primary", "ml-5"], ["alt", "", "srcset", "", 2, "width", "60px", 3, "src"], ["class", "label label-success label-pill label-inline mr-2", 4, "ngIf"], ["class", "label label-danger label-pill label-inline mr-2", 4, "ngIf"], ["ngbTooltip", "Editar Slider", "ngbTooltipClass", "kt-tooltip", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-1", 3, "click"], [1, "svg-icon", "svg-icon-md", "svg-icon-primary"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z", "fill", "#000000", "fill-rule", "nonzero", "transform", "translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"], ["d", "M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3"], ["ngbTooltip", "Eliminar Slider", "ngbTooltipClass", "kt-tooltip", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", 3, "click"], [1, "svg-icon", "svg-icon-md", "svg-icon-danger"], ["d", "M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z", "fill", "#000000", "fill-rule", "nonzero"], ["d", "M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z", "fill", "#000000", "opacity", "0.3"], [1, "label", "label-success", "label-pill", "label-inline", "mr-2"], [1, "label", "label-danger", "label-pill", "label-inline", "mr-2"]],
        template: function ListSliderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lista Sliders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListSliderComponent_Template_a_click_7_listener() {
              return ctx.openCreate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Nuevo Slider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListSliderComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.search = $event;
            })("keyup.enter", function ListSliderComponent_Template_input_keyup_enter_14_listener() {
              return ctx.allSliders();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Buscar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " por TITULO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListSliderComponent_Template_button_click_20_listener() {
              return ctx.refresh();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Refresh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ListSliderComponent_ng_container_22_Template, 2, 0, "ng-container", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "IMAGEN ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "TITULO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "STATUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "ACCI\xD3N");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ListSliderComponent_tr_39_Template, 23, 4, "tr", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 3, ctx.isLoading$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sliders);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXNsaWRlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListSliderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-slider',
            templateUrl: './list-slider.component.html',
            styleUrls: ['./list-slider.component.scss']
          }]
        }], function () {
          return [{
            type: _services_slider_service__WEBPACK_IMPORTED_MODULE_5__["SliderService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Qojg":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/sliders/add-new-slider/add-new-slider.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AddNewSliderComponent */

    /***/
    function Qojg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewSliderComponent", function () {
        return AddNewSliderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/componets/notifications/noticy-alert/noticy-alert.component */
      "/rCd");
      /* harmony import */


      var _services_slider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/slider.service */
      "hcrt");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toast-notifications */
      "7Dfe");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddNewSliderComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imagen_previzualizacion, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var AddNewSliderComponent = /*#__PURE__*/function () {
        function AddNewSliderComponent(_sliderService, modal, toaster) {
          _classCallCheck(this, AddNewSliderComponent);

          this._sliderService = _sliderService;
          this.modal = modal;
          this.toaster = toaster;
          this.SliderC = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.name = null;
          this.link = null;
          this.imagen_file = null;
          this.imagen_previzualizacion = null;
        }

        _createClass(AddNewSliderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "processFile",
          value: function processFile($event) {
            var _this5 = this;

            console.log($event.target);

            if ($event.target.files[0].type.indexOf("image") < 0) {
              this.imagen_previzualizacion = null;
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'Upps! Necesita ingresar un archivo de tipo imagen.'"
              });
              return;
            }

            this.imagen_file = $event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(this.imagen_file);

            reader.onloadend = function () {
              return _this5.imagen_previzualizacion = reader.result;
            };
          }
        }, {
          key: "save",
          value: function save() {
            var _this6 = this;

            console.log(this.name);

            if (!this.name || !this.imagen_file || !this.link) {
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'Upps! Necesita ingresar todos los campos.'"
              });
              return;
            }

            var formData = new FormData();
            formData.append('title', this.name);
            formData.append('link', this.link);
            formData.append('portada', this.imagen_file); // 

            this._sliderService.createSlider(formData).subscribe(function (resp) {
              console.log(resp);

              _this6.SliderC.emit(resp);

              _this6.modal.close();
            });
          }
        }]);

        return AddNewSliderComponent;
      }();

      AddNewSliderComponent.ɵfac = function AddNewSliderComponent_Factory(t) {
        return new (t || AddNewSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_slider_service__WEBPACK_IMPORTED_MODULE_2__["SliderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__["Toaster"]));
      };

      AddNewSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddNewSliderComponent,
        selectors: [["app-add-new-slider"]],
        outputs: {
          SliderC: "SliderC"
        },
        decls: 37,
        vars: 3,
        consts: [[1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [1, "icon-2x", "text-dark-50", "flaticon-file-1", "mx-2"], [1, "overlay", "overlay-block", "cursor-default", "modal-body"], [1, "row"], [1, "col-10"], [1, "form-group"], [1, "text-danger"], ["type", "text", "placeholder", "", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "", "name", "link", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-12"], [1, "form-label"], [1, "custom-file"], ["type", "file", "id", "customFile", "accept", ".jpeg, .bmp, .jpg, .png, .gif, .webp", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], ["class", "", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], [1, ""], ["alt", "", "srcset", "", 2, "width", "150px", 3, "src"]],
        template: function AddNewSliderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Crear Slider ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Titulo: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewSliderComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Link: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewSliderComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.link = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sube tu imagen: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddNewSliderComponent_Template_input_change_27_listener($event) {
              return ctx.processFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Choose file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddNewSliderComponent_div_31_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewSliderComponent_Template_button_click_33_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Guardar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewSliderComponent_Template_button_click_35_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagen_previzualizacion);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbmV3LXNsaWRlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewSliderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-new-slider',
            templateUrl: './add-new-slider.component.html',
            styleUrls: ['./add-new-slider.component.scss']
          }]
        }], function () {
          return [{
            type: _services_slider_service__WEBPACK_IMPORTED_MODULE_2__["SliderService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
          }, {
            type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__["Toaster"]
          }];
        }, {
          SliderC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "hcrt":
    /*!*************************************************************!*\
      !*** ./src/app/modules/sliders/_services/slider.service.ts ***!
      \*************************************************************/

    /*! exports provided: SliderService */

    /***/
    function hcrt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SliderService", function () {
        return SliderService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/config/config */
      "0np6");
      /* harmony import */


      var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../auth */
      "tmEo");

      var SliderService = /*#__PURE__*/function () {
        function SliderService(http, authservice) {
          _classCallCheck(this, SliderService);

          this.http = http;
          this.authservice = authservice;
          this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.isLoading$ = this.isLoadingSubject.asObservable();
        }

        _createClass(SliderService, [{
          key: "allSlider",
          value: function allSlider() {
            var _this7 = this;

            var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'token': this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/sliders/list?search=" + search;
            return this.http.get(URL, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this7.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "createSlider",
          value: function createSlider(data) {
            var _this8 = this;

            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'token': this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/sliders/register";
            return this.http.post(URL, data, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this8.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "updateSlider",
          value: function updateSlider(data) {
            var _this9 = this;

            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'token': this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/sliders/update";
            return this.http.put(URL, data, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this9.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "deleteSlider",
          value: function deleteSlider(categorie_id) {
            var _this10 = this;

            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'token': this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/sliders/delete?_id=" + categorie_id;
            return this.http["delete"](URL, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this10.isLoadingSubject.next(false);
            }));
          }
        }]);

        return SliderService;
      }();

      SliderService.ɵfac = function SliderService_Factory(t) {
        return new (t || SliderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
      };

      SliderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: SliderService,
        factory: SliderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SliderService, [{
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
    "s+6Q":
    /*!***************************************************!*\
      !*** ./src/app/modules/sliders/sliders.module.ts ***!
      \***************************************************/

    /*! exports provided: SlidersModule */

    /***/
    function s6Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidersModule", function () {
        return SlidersModule;
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


      var _sliders_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sliders-routing.module */
      "s+E3");
      /* harmony import */


      var _sliders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sliders.component */
      "upKh");
      /* harmony import */


      var _add_new_slider_add_new_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-new-slider/add-new-slider.component */
      "Qojg");
      /* harmony import */


      var _edit_new_slider_edit_new_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-new-slider/edit-new-slider.component */
      "vaHQ");
      /* harmony import */


      var _delete_new_slider_delete_new_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./delete-new-slider/delete-new-slider.component */
      "yzmL");
      /* harmony import */


      var _list_slider_list_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./list-slider/list-slider.component */
      "8Zsk");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-inline-svg */
      "e8Ap");
      /* harmony import */


      var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/_metronic/shared/crud-table */
      "Br0f");

      var SlidersModule = /*#__PURE__*/_createClass(function SlidersModule() {
        _classCallCheck(this, SlidersModule);
      });

      SlidersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SlidersModule
      });
      SlidersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SlidersModule_Factory(t) {
          return new (t || SlidersModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sliders_routing_module__WEBPACK_IMPORTED_MODULE_2__["SlidersRoutingModule"], // 
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__["InlineSVGModule"], src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_12__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlidersModule, {
          declarations: [_sliders_component__WEBPACK_IMPORTED_MODULE_3__["SlidersComponent"], _add_new_slider_add_new_slider_component__WEBPACK_IMPORTED_MODULE_4__["AddNewSliderComponent"], _edit_new_slider_edit_new_slider_component__WEBPACK_IMPORTED_MODULE_5__["EditNewSliderComponent"], _delete_new_slider_delete_new_slider_component__WEBPACK_IMPORTED_MODULE_6__["DeleteNewSliderComponent"], _list_slider_list_slider_component__WEBPACK_IMPORTED_MODULE_7__["ListSliderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sliders_routing_module__WEBPACK_IMPORTED_MODULE_2__["SlidersRoutingModule"], // 
          _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__["InlineSVGModule"], src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_12__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidersModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_sliders_component__WEBPACK_IMPORTED_MODULE_3__["SlidersComponent"], _add_new_slider_add_new_slider_component__WEBPACK_IMPORTED_MODULE_4__["AddNewSliderComponent"], _edit_new_slider_edit_new_slider_component__WEBPACK_IMPORTED_MODULE_5__["EditNewSliderComponent"], _delete_new_slider_delete_new_slider_component__WEBPACK_IMPORTED_MODULE_6__["DeleteNewSliderComponent"], _list_slider_list_slider_component__WEBPACK_IMPORTED_MODULE_7__["ListSliderComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sliders_routing_module__WEBPACK_IMPORTED_MODULE_2__["SlidersRoutingModule"], // 
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__["InlineSVGModule"], src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_12__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "s+E3":
    /*!***********************************************************!*\
      !*** ./src/app/modules/sliders/sliders-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SlidersRoutingModule */

    /***/
    function sE3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidersRoutingModule", function () {
        return SlidersRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _list_slider_list_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-slider/list-slider.component */
      "8Zsk");
      /* harmony import */


      var _sliders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sliders.component */
      "upKh");

      var routes = [{
        path: '',
        component: _sliders_component__WEBPACK_IMPORTED_MODULE_3__["SlidersComponent"],
        children: [{
          path: 'lista-sliders',
          component: _list_slider_list_slider_component__WEBPACK_IMPORTED_MODULE_2__["ListSliderComponent"]
        }]
      }];

      var SlidersRoutingModule = /*#__PURE__*/_createClass(function SlidersRoutingModule() {
        _classCallCheck(this, SlidersRoutingModule);
      });

      SlidersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SlidersRoutingModule
      });
      SlidersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SlidersRoutingModule_Factory(t) {
          return new (t || SlidersRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlidersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidersRoutingModule, [{
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
    "upKh":
    /*!******************************************************!*\
      !*** ./src/app/modules/sliders/sliders.component.ts ***!
      \******************************************************/

    /*! exports provided: SlidersComponent */

    /***/
    function upKh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidersComponent", function () {
        return SlidersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SlidersComponent = /*#__PURE__*/function () {
        function SlidersComponent() {
          _classCallCheck(this, SlidersComponent);
        }

        _createClass(SlidersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SlidersComponent;
      }();

      SlidersComponent.ɵfac = function SlidersComponent_Factory(t) {
        return new (t || SlidersComponent)();
      };

      SlidersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SlidersComponent,
        selectors: [["app-sliders"]],
        decls: 1,
        vars: 0,
        template: function SlidersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbGlkZXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sliders',
            templateUrl: './sliders.component.html',
            styleUrls: ['./sliders.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vaHQ":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/sliders/edit-new-slider/edit-new-slider.component.ts ***!
      \******************************************************************************/

    /*! exports provided: EditNewSliderComponent */

    /***/
    function vaHQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditNewSliderComponent", function () {
        return EditNewSliderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/componets/notifications/noticy-alert/noticy-alert.component */
      "/rCd");
      /* harmony import */


      var src_app_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/config/config */
      "0np6");
      /* harmony import */


      var _services_slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/slider.service */
      "hcrt");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toast-notifications */
      "7Dfe");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function EditNewSliderComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imagen_previzualizacion, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var EditNewSliderComponent = /*#__PURE__*/function () {
        function EditNewSliderComponent(_sliderService, modal, toaster) {
          _classCallCheck(this, EditNewSliderComponent);

          this._sliderService = _sliderService;
          this.modal = modal;
          this.toaster = toaster;
          this.SliderE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.name = null;
          this.link = null;
          this.imagen_file = null;
          this.imagen_previzualizacion = null;
          this.state = 1;
        }

        _createClass(EditNewSliderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.name = this.slider_selected.title;
            this.link = this.slider_selected.link;
            this.state = this.slider_selected.state;
            this.imagen_previzualizacion = src_app_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_BACKEND"] + 'api/sliders/uploads/slider/' + this.slider_selected.imagen;
          }
        }, {
          key: "processFile",
          value: function processFile($event) {
            var _this11 = this;

            console.log($event.target);

            if ($event.target.files[0].type.indexOf("image") < 0) {
              this.imagen_previzualizacion = null;
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'Upps! Necesita ingresar un archivo de tipo imagen.'"
              });
              return;
            }

            this.imagen_file = $event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(this.imagen_file);

            reader.onloadend = function () {
              return _this11.imagen_previzualizacion = reader.result;
            };
          }
        }, {
          key: "save",
          value: function save() {
            var _this12 = this;

            console.log(this.name);

            if (!this.name || !this.link) {
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'Upps! Necesita ingresar todos los campos.'"
              });
              return;
            }

            var formData = new FormData();
            formData.append('_id', this.slider_selected._id);
            formData.append('title', this.name);
            formData.append('link', this.link);
            formData.append('state', this.state);
            formData.append('portada', this.imagen_file); // 

            this._sliderService.updateSlider(formData).subscribe(function (resp) {
              console.log(resp);

              _this12.SliderE.emit(resp.slider);

              _this12.modal.close();
            });
          }
        }]);

        return EditNewSliderComponent;
      }();

      EditNewSliderComponent.ɵfac = function EditNewSliderComponent_Factory(t) {
        return new (t || EditNewSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_slider_service__WEBPACK_IMPORTED_MODULE_3__["SliderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["Toaster"]));
      };

      EditNewSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditNewSliderComponent,
        selectors: [["app-edit-new-slider"]],
        inputs: {
          slider_selected: "slider_selected"
        },
        outputs: {
          SliderE: "SliderE"
        },
        decls: 47,
        vars: 5,
        consts: [[1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [1, "icon-2x", "text-dark-50", "flaticon-file-1", "mx-2"], [1, "overlay", "overlay-block", "cursor-default", "modal-body"], [1, "row"], [1, "col-10"], [1, "form-group"], [1, "text-danger"], ["type", "text", "placeholder", "", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "", "name", "link", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-6"], ["name", "status", "placeholder", "Estado", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], [1, "col-12"], [1, "form-label"], [1, "custom-file"], ["type", "file", "id", "customFile", "accept", ".jpeg, .bmp, .jpg, .png, .gif, .webp", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], ["class", "", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], [1, ""], ["alt", "", "srcset", "", 2, "width", "150px", 3, "src"]],
        template: function EditNewSliderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Titulo: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditNewSliderComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Link: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditNewSliderComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.link = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Estado de slider: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditNewSliderComponent_Template_select_ngModelChange_26_listener($event) {
              return ctx.state = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Activo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Desactivo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sube tu imagen: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditNewSliderComponent_Template_input_change_37_listener($event) {
              return ctx.processFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Choose file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EditNewSliderComponent_div_41_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditNewSliderComponent_Template_button_click_43_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Guardar Cambios ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditNewSliderComponent_Template_button_click_45_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" EDITAR SLIDER : ", ctx.slider_selected.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagen_previzualizacion);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW5ldy1zbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditNewSliderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-new-slider',
            templateUrl: './edit-new-slider.component.html',
            styleUrls: ['./edit-new-slider.component.scss']
          }]
        }], function () {
          return [{
            type: _services_slider_service__WEBPACK_IMPORTED_MODULE_3__["SliderService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]
          }, {
            type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["Toaster"]
          }];
        }, {
          SliderE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          slider_selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "yzmL":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/sliders/delete-new-slider/delete-new-slider.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: DeleteNewSliderComponent */

    /***/
    function yzmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteNewSliderComponent", function () {
        return DeleteNewSliderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/componets/notifications/noticy-alert/noticy-alert.component */
      "/rCd");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _services_slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/slider.service */
      "hcrt");
      /* harmony import */


      var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toast-notifications */
      "7Dfe");

      var DeleteNewSliderComponent = /*#__PURE__*/function () {
        function DeleteNewSliderComponent(modal, sliderService, toaster) {
          _classCallCheck(this, DeleteNewSliderComponent);

          this.modal = modal;
          this.sliderService = sliderService;
          this.toaster = toaster;
          this.SliderD = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(DeleteNewSliderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "delete",
          value: function _delete() {
            var _this13 = this;

            this.sliderService.deleteSlider(this.slider_selected._id).subscribe(function (resp) {
              console.log(resp);

              _this13.SliderD.emit("");

              _this13.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "success-'EL SLIDER  SE ELIMINO CORRECTAMENTE.'"
              });

              _this13.modal.close();
            }, function (error) {
              if (error.error) {
                _this13.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                  text: "danger-'".concat(error.error.message, "'")
                });
              }
            });
          }
        }]);

        return DeleteNewSliderComponent;
      }();

      DeleteNewSliderComponent.ɵfac = function DeleteNewSliderComponent_Factory(t) {
        return new (t || DeleteNewSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_slider_service__WEBPACK_IMPORTED_MODULE_3__["SliderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__["Toaster"]));
      };

      DeleteNewSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeleteNewSliderComponent,
        selectors: [["app-delete-new-slider"]],
        inputs: {
          slider_selected: "slider_selected"
        },
        outputs: {
          SliderD: "SliderD"
        },
        decls: 15,
        vars: 2,
        consts: [[1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [1, "icon-2x", "text-dark-50", "flaticon-user-add", "mx-2"], [1, "overlay", "overlay-block", "cursor-default", "modal-body"], [1, "row"], [1, "col-12"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", "btn-elevate", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"]],
        template: function DeleteNewSliderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteNewSliderComponent_Template_button_click_11_listener() {
              return ctx["delete"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ELIMINAR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteNewSliderComponent_Template_button_click_13_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" SLIDER : ", ctx.slider_selected.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SEGURO DE ELIMINAR EL SLIDER ", ctx.slider_selected.title, "");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtbmV3LXNsaWRlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteNewSliderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete-new-slider',
            templateUrl: './delete-new-slider.component.html',
            styleUrls: ['./delete-new-slider.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
          }, {
            type: _services_slider_service__WEBPACK_IMPORTED_MODULE_3__["SliderService"]
          }, {
            type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__["Toaster"]
          }];
        }, {
          SliderD: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          slider_selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-sliders-sliders-module-es5.js.map