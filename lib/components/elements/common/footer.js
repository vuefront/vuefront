import { BContainer, BRow, BCol } from 'bootstrap-vue';
import 'vuefront/scss/elements/common/footer.scss';

var script = {
  components: {
    BContainer,
    BRow,
    BCol
  },
  props: ["logo"],
  data() {
    return {};
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  }
  var options = typeof script === 'function' ? script.options : script;
  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true;
    if (isFunctionalTemplate) {
      options.functional = true;
    }
  }
  if (scopeId) {
    options._scopeId = scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function hook(context) {
      context = context ||
      this.$vnode && this.$vnode.ssrContext ||
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }
      if (style) {
        style.call(this, createInjectorSSR(context));
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }
  if (hook) {
    if (options.functional) {
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return script;
}
var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "footer",
    { staticClass: "footer-section clearfix" },
    [
      _c(
        "b-container",
        [
          _c(
            "b-row",
            { staticClass: "pt-md" },
            [
              _c("b-col", { staticClass: "mb-5 mb-lg-0", attrs: { sm: "4" } }, [
                _c(
                  "div",
                  [
                    _vm.$vuefront.isAMP
                      ? _c("amp-img", {
                          staticClass: "mb-3",
                          attrs: { src: _vm.logo, width: "180", height: "40" }
                        })
                      : _c("img", {
                          staticClass: "mb-3",
                          staticStyle: { height: "40px" },
                          attrs: { src: _vm.logo, alt: "" }
                        }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        _vm._s(_vm.$t("elements.common.footer.descriptionText"))
                      )
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass: "ml-lg-auto mb-5 mb-lg-0",
                  attrs: { sm: "4", md: "6", lg: "2" }
                },
                [_c("vf-position", { attrs: { name: "footerLeft" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass: "mb-5 mb-lg-0",
                  attrs: { sm: "4", md: "6", lg: "2" }
                },
                [_c("vf-position", { attrs: { name: "footerCenter" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass: "mb-5 mb-lg-0",
                  attrs: { sm: "4", md: "6", lg: "2" }
                },
                [_c("vf-position", { attrs: { name: "footerRight" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "py-4 mt-4 delimiter-top" },
            [
              _c("b-col", { attrs: { md: "6" } }, [
                _c("div", {
                  staticClass:
                    "text-sm font-weight-bold text-center text-md-left",
                  domProps: {
                    innerHTML: _vm._s(
                      _vm.$t("elements.common.footer.copyrightText")
                    )
                  }
                })
              ]),
              _vm._v(" "),
              _c("b-col", { attrs: { md: "6" } })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var footer = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default footer;
