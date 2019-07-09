import { BRow, BCol, BContainer, BButton, BFormGroup, BFormInput } from 'bootstrap-vue';

var script = {
  components: {
    BRow,
    BCol,
    BContainer,
    BButton,
    BFormGroup,
    BFormInput
  },
  data() {
    return {
      keyword: this.$route.params.slug
    };
  },
  methods: {
    handleSearch(e) {
      if (this.keyword !== "") {
        this.$router.push(`/search/${this.keyword}`);
      } else {
        this.$router.push("/search");
      }
    },
    handleKeyPress(e) {
      if (e.key === "Enter") {
        if (this.keyword !== "") {
          this.$router.push(`/search/${this.keyword}`);
        } else {
          this.$router.push("/search");
        }
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
    { staticClass: "search-section" },
    [
      _c("div", { staticClass: "h1 mb-3" }, [
        _vm._v(_vm._s(_vm.$t("elements.common.search.titleText")))
      ]),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "12", md: "4" } },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: _vm.$t("elements.common.search.keywordEntry"),
                    "label-for": "input-criteria"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "input-criteria", trim: "" },
                    on: { keypress: _vm.handleKeyPress },
                    model: {
                      value: _vm.keyword,
                      callback: function($$v) {
                        _vm.keyword = $$v;
                      },
                      expression: "keyword"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-sm-left" },
                [
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "primary" },
                      on: { click: _vm.handleSearch }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("elements.common.search.buttonSearch"))
                      )
                    ]
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
  

  
  var search = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default search;
