import { BLink, BRow, BCol, BButton, BButtonGroup, BFormSelect, BInputGroup } from 'bootstrap-vue';

var script = {
  components: {
    BLink,
    BRow,
    BCol,
    BButton,
    BButtonGroup,
    BFormSelect,
    BInputGroup
  },
  props: ["sizes", "sorts", "sort", "size", "mode"],
  computed: {
    modeValue: {
      get() {
        return this.mode;
      },
      set(e) {
        this.$emit("changeMode", e);
      }
    },
    sizeValue: {
      get() {
        return this.size;
      },
      set(e) {
        this.$emit("changeSize", e);
      }
    },
    sortValue: {
      get() {
        return this.sort;
      },
      set(e) {
        this.$emit("changeSort", e);
      }
    }
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
    "section",
    { staticClass: "sort-section mb-4" },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6", md: "2", "align-self": "center" } },
            [
              _c(
                "b-button-group",
                { attrs: { size: "sm" } },
                [
                  _c(
                    "b-button",
                    {
                      attrs: {
                        pressed: _vm.mode === "grid",
                        variant: "light-gray"
                      },
                      on: {
                        click: function($event) {
                          _vm.modeValue = "grid";
                        }
                      }
                    },
                    [_c("vf-icon", { attrs: { icon: "th" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: {
                        pressed: _vm.mode === "list",
                        variant: "light-gray"
                      },
                      on: {
                        click: function($event) {
                          _vm.modeValue = "list";
                        }
                      }
                    },
                    [_c("vf-icon", { attrs: { icon: "th-list" } })],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { "align-self": "center" } },
            [
              _c("b-link", { attrs: { to: "/store/compare" } }, [
                _vm._v(_vm._s(_vm.$t("elements.store.productSort.compareText")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4", "align-self": "center" } },
            [
              _c(
                "b-input-group",
                {
                  attrs: {
                    prepend: _vm.$t("elements.store.productSort.sortByText"),
                    size: "sm"
                  }
                },
                [
                  _c("b-form-select", {
                    staticClass: "mr-3",
                    attrs: { options: _vm.sizes },
                    model: {
                      value: _vm.sizeValue,
                      callback: function($$v) {
                        _vm.sizeValue = $$v;
                      },
                      expression: "sizeValue"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "3", "align-self": "center" } },
            [
              _c(
                "b-input-group",
                {
                  attrs: {
                    prepend: _vm.$t("elements.store.productSort.showText"),
                    size: "sm"
                  }
                },
                [
                  _c("b-form-select", {
                    attrs: { options: _vm.sorts },
                    model: {
                      value: _vm.sortValue,
                      callback: function($$v) {
                        _vm.sortValue = $$v;
                      },
                      expression: "sortValue"
                    }
                  })
                ],
                1
              )
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
  

  
  var sort = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default sort;
