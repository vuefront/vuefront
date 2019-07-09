import { BContainer, BRow, BCol, BNav, BNavItem, BNavbarNav, BNavItemDropdown, BDropdownItem, BLink, BNavText } from 'bootstrap-vue';
import 'vuefront/scss/elements/common/header/topNav.scss';
import { mapGetters } from 'vuex';

var script = {
  components: {
    BContainer,
    BRow,
    BCol,
    BNav,
    BNavItem,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BLink,
    BNavText
  },
  computed: {
    ...mapGetters({
      auth: "common/customer/auth"
    })
  },
  methods: {
    async handleLogout() {
      await this.$store.dispatch("common/customer/logout");
      this.$router.push("/account/login");
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
    { staticClass: "top-nav" },
    [
      _c(
        "b-container",
        [
          _c(
            "b-navbar-nav",
            { staticClass: "top-nav__navbar", attrs: { tag: "div" } },
            [
              _c(
                "b-nav",
                { attrs: { tag: "div" } },
                [
                  _c("vf-currency"),
                  _vm._v(" "),
                  _c("vf-language"),
                  _vm._v(" "),
                  _c(
                    "b-nav-item",
                    {
                      staticClass: "top-nav__link ml-auto",
                      attrs: { to: "/store/compare" }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("elements.common.header.topNav.compareText")
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-nav-item",
                    {
                      staticClass: "top-nav__link",
                      attrs: { to: "/account/wishlist" }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("elements.common.header.topNav.wishListText")
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-nav-item-dropdown",
                    { staticClass: "top-nav__dropdown", attrs: { right: "" } },
                    [
                      _c(
                        "template",
                        { slot: "button-content" },
                        [
                          _c("vf-icon", {
                            attrs: { icon: ["far", "user-circle"] }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.auth
                        ? _c(
                            "b-dropdown-item",
                            { attrs: { to: "/account/login" } },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "elements.common.header.topNav.signInText"
                                  )
                                )
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.auth
                        ? _c(
                            "b-dropdown-item",
                            { attrs: { to: "/account/register" } },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "elements.common.header.topNav.registerText"
                                  )
                                )
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.auth
                        ? _c("b-dropdown-item", { attrs: { to: "/account" } }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "elements.common.header.topNav.myAccountText"
                                )
                              )
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { to: "/account/wishlist" } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "elements.common.header.topNav.wishlistText"
                              )
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.auth
                        ? _c(
                            "b-dropdown-item",
                            { on: { click: _vm.handleLogout } },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "elements.common.header.topNav.signOutText"
                                  )
                                )
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    2
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
  

  
  var top = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default top;
