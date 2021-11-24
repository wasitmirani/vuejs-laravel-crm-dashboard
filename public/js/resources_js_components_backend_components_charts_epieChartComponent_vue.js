"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_components_charts_epieChartComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["title", "labels", "data", "label", "index"],
  data: function data() {
    return {
      option: null
    };
  },
  methods: {
    loadPieChart: function loadPieChart() {
      var pieColors = getChartColorsArray("#pie-chart" + this.index);
      dom = document.getElementById("pie-chart" + this.index);
      myChart = echarts.init(dom);
      app = {};
      this.option = null, this.option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.labels,
          textStyle: {
            color: "#858d98"
          }
        },
        color: pieColors,
        series: [{
          name: "Total " + this.label,
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: this.data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }]
      }, this.option && "object" == (typeof this.option === "undefined" ? "undefined" : _typeof(this.option)) && myChart.setOption(this.option, true);
    }
  },
  mounted: function mounted() {
    this.loadPieChart();
    console.log("Component mounted.Pie", this.index);
  } // mounted(){
  // this.loadPieChart();
  // }
  // [{data array sample
  //         value: 335,
  //         name: "Laptop"
  //     }, {
  //         value: 310,
  //         name: "Tablet"
  //     }, {
  //         value: 234,
  //         name: "Mobile"
  //     }, {
  //         value: 135,
  //         name: "Others"
  //     }, {
  //         value: 1548,
  //         name: "Desktop"
  //     }]

});

/***/ }),

/***/ "./resources/js/components/backend/components/charts/epieChartComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/backend/components/charts/epieChartComponent.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _epieChartComponent_vue_vue_type_template_id_15320d4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./epieChartComponent.vue?vue&type=template&id=15320d4d& */ "./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=template&id=15320d4d&");
/* harmony import */ var _epieChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./epieChartComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _epieChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _epieChartComponent_vue_vue_type_template_id_15320d4d___WEBPACK_IMPORTED_MODULE_0__.render,
  _epieChartComponent_vue_vue_type_template_id_15320d4d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/components/charts/epieChartComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_epieChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./epieChartComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_epieChartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=template&id=15320d4d&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=template&id=15320d4d& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_epieChartComponent_vue_vue_type_template_id_15320d4d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_epieChartComponent_vue_vue_type_template_id_15320d4d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_epieChartComponent_vue_vue_type_template_id_15320d4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./epieChartComponent.vue?vue&type=template&id=15320d4d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=template&id=15320d4d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=template&id=15320d4d&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/charts/epieChartComponent.vue?vue&type=template&id=15320d4d& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("h4", { staticClass: "card-title mb-0" }, [
          _vm._v(_vm._s(_vm.title) + " Chart"),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", {
          staticClass: "e-charts",
          attrs: {
            id: "pie-chart" + _vm.index,
            "data-colors":
              '["#34c38f", "#0a068c", "#16daf1", "#ffcc5a", "#6951ce"]',
          },
        }),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);