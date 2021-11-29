"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_components_miniChartComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/miniChartComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/miniChartComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['title', 'index', 'label', 'series'],
  methods: {
    loadMiniChart: function loadMiniChart() {
      var barchartColors = getChartColorsArray("#mini-chart" + this.index);
      var options = {
        labels: [this.series[0].title, this.series[1].title],
        series: [this.series[0].value, this.series[1].value],
        chart: {
          type: "donut",
          height: 115
        },
        colors: barchartColors,
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        }
      };
      var chart = new ApexCharts(document.querySelector("#mini-chart" + this.index), options);
      chart.render();
    }
  },
  mounted: function mounted() {
    this.loadMiniChart();
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./resources/js/components/backend/components/miniChartComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/backend/components/miniChartComponent.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _miniChartComponent_vue_vue_type_template_id_08c74f19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./miniChartComponent.vue?vue&type=template&id=08c74f19& */ "./resources/js/components/backend/components/miniChartComponent.vue?vue&type=template&id=08c74f19&");
/* harmony import */ var _miniChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miniChartComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/components/miniChartComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _miniChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _miniChartComponent_vue_vue_type_template_id_08c74f19___WEBPACK_IMPORTED_MODULE_0__.render,
  _miniChartComponent_vue_vue_type_template_id_08c74f19___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/components/miniChartComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/components/miniChartComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/miniChartComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_miniChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./miniChartComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/miniChartComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_miniChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/components/miniChartComponent.vue?vue&type=template&id=08c74f19&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/miniChartComponent.vue?vue&type=template&id=08c74f19& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_miniChartComponent_vue_vue_type_template_id_08c74f19___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_miniChartComponent_vue_vue_type_template_id_08c74f19___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_miniChartComponent_vue_vue_type_template_id_08c74f19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./miniChartComponent.vue?vue&type=template&id=08c74f19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/miniChartComponent.vue?vue&type=template&id=08c74f19&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/miniChartComponent.vue?vue&type=template&id=08c74f19&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/miniChartComponent.vue?vue&type=template&id=08c74f19& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card card-h-100" }, [
    _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _c("div", { staticClass: "flex-grow-1" }, [
          _c(
            "span",
            { staticClass: "text-muted mb-3 lh-1 d-block text-truncate" },
            [_vm._v("Total " + _vm._s(_vm.title))]
          ),
          _vm._v(" "),
          _c("h4", { staticClass: "mb-3" }, [
            _c(
              "span",
              {
                staticClass: "counter-value",
                attrs: { "data-target": this.series[0].value }
              },
              [_vm._v(_vm._s(this.series[0].value))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-nowrap" }, [
            _c("span", { staticClass: "badge bg-soft-primary text-primary" }, [
              _vm._v(_vm._s(this.series[1].value))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ms-1 text-muted font-size-13" }, [
              _vm._v(_vm._s(_vm.label))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex-shrink-0 text-end dash-widget" }, [
          _c("div", {
            staticClass: "apex-charts",
            attrs: {
              id: "mini-chart" + _vm.index,
              "data-colors": '["#33c38e ", "#1c84ee"]'
            }
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);