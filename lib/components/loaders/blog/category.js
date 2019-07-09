import 'vuefront/scss/templates/common/loading.scss';
import { BContainer, BRow, BCol } from 'bootstrap-vue';
import { TbSkeleton, Skeleton } from 'tb-skeleton';

var script = {
  components: {
    BContainer,
    TbSkeleton,
    Skeleton,
    BRow,
    BCol
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
    "div",
    { staticClass: "loading-page" },
    [
      _c(
        "skeleton",
        {
          attrs: {
            "bg-color": "#eee",
            duration: "2",
            theme: "opacity",
            shape: "radius",
            width: "100%"
          }
        },
        [
          _c(
            "b-row",
            {
              staticStyle: { "padding-top": "7px" },
              attrs: { "align-h": "center" }
            },
            [
              _c(
                "b-col",
                { attrs: { sm: "4" } },
                [
                  _c("tb-skeleton", {
                    staticClass: "mx-auto",
                    attrs: { height: "37px" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            {
              staticStyle: { "padding-top": "38px" },
              attrs: { "align-h": "center" }
            },
            [
              _c(
                "b-col",
                { attrs: { sm: "9" } },
                [_c("tb-skeleton", { attrs: { height: "18px" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            {
              staticStyle: { "padding-top": "28px" },
              attrs: { "align-h": "center" }
            },
            [
              _c(
                "b-col",
                { attrs: { sm: "3" } },
                [
                  _c("tb-skeleton", {
                    staticClass: "mx-auto",
                    attrs: { height: "20px" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            {
              staticClass: "mb-5",
              staticStyle: { "padding-top": "16px" },
              attrs: { "align-h": "center" }
            },
            _vm._l([1, 2, 3, 4, 5, 6], function(value) {
              return _c(
                "b-col",
                { key: value, attrs: { sm: "4", md: "2" } },
                [
                  _c("tb-skeleton", {
                    staticClass: "mb-2",
                    attrs: { height: "82px" }
                  }),
                  _vm._v(" "),
                  _c("tb-skeleton", {
                    staticClass: "mx-auto",
                    staticStyle: { "margin-bottom": ".5rem" },
                    attrs: { height: "20px" }
                  })
                ],
                1
              )
            }),
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
  

  
  var category = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default category;
