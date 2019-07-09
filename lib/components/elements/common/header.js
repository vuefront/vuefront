import { BRow, BCol, BCollapse, BContainer, VBToggle } from 'bootstrap-vue';
import 'vuefront/scss/elements/common/header.scss';

var script = {
  components: {
    BRow,
    BCol,
    BCollapse,
    BContainer
  },
  directives: {
    BToggle: VBToggle
  },
  props: {
    logo: {
      type: String,
      default: ""
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
    { staticClass: "header-section" },
    [
      _c(
        "b-row",
        { attrs: { "no-gutters": "" } },
        [
          _c(
            "b-col",
            { staticClass: "d-none d-md-block", attrs: { sm: "12" } },
            [_c("vf-header-top")],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "d-none d-md-block", attrs: { sm: "12" } },
            [
              _c("vf-header-center", {
                scopedSlots: _vm._u([
                  {
                    key: "left",
                    fn: function() {
                      return [
                        _c("vf-header-logo", {
                          staticClass: "d-none d-md-block",
                          attrs: { logo: _vm.logo }
                        })
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "center",
                    fn: function() {
                      return [
                        _c("vf-header-search", { staticClass: "mx-auto" })
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "right",
                    fn: function() {
                      return [_c("vf-header-cart")]
                    },
                    proxy: true
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "d-none d-md-block" },
            [
              _c(
                "b-container",
                [_c("vf-position", { attrs: { name: "headerMenu" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "d-block d-md-none", attrs: { sm: "12" } },
            [
              _c(
                "b-container",
                { staticClass: "header-section__top" },
                [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "b-toggle",
                          rawName: "v-b-toggle.menu-collapse",
                          modifiers: { "menu-collapse": true }
                        }
                      ],
                      staticClass: "header-section__toggle"
                    },
                    [_c("vf-icon", { attrs: { icon: "bars" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("vf-header-logo", {
                    staticClass: "mx-auto ml-2",
                    attrs: { logo: _vm.logo }
                  }),
                  _vm._v(" "),
                  _c("vf-header-cart")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-collapse",
                { attrs: { id: "menu-collapse" } },
                [
                  _c(
                    "vf-header-sidebar",
                    {
                      scopedSlots: _vm._u([
                        {
                          key: "top",
                          fn: function() {
                            return [_c("vf-header-search")]
                          },
                          proxy: true
                        },
                        {
                          key: "bottom",
                          fn: function() {
                            return [
                              _c("vf-currency"),
                              _vm._v(" "),
                              _c("vf-language")
                            ]
                          },
                          proxy: true
                        },
                        {
                          key: "right",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.menu-collapse",
                                      modifiers: { "menu-collapse": true }
                                    }
                                  ],
                                  staticClass: "header-section__toggle_close"
                                },
                                [_c("vf-icon", { attrs: { icon: "times" } })],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm._v(" "),
                      _c("vf-position", { attrs: { name: "headerMenu" } })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("vf-notification")
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
  

  
  var header = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default header;
