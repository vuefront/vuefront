import { BLink, BNav, VBToggle } from 'bootstrap-vue';
import 'vuefront/scss/elements/common/header/topMenu.scss';
import { isString } from 'lodash';

var script = {
  components: {
    BLink,
    BNav
  },
  directives: {
    BToggle: VBToggle
  },
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  computed: {
    loaded() {
      return this.$store.getters["menu/loaded"](this.idHash);
    },
    menuItems() {
      return this.$store.getters["menu/list"](this.idHash);
    },
    idHash() {
      return this.hashCode(JSON.stringify(this.items));
    }
  },
  serverPrefetch() {
    return this.handleLoadMenu();
  },
  mounted() {
    if (!this.loaded) {
      this.handleLoadMenu();
    }
  },
  methods: {
    async handleLoadMenu() {
      if (!this.loaded) {
        let asyncItems = [];
        for (const key in this.items) {
          const item = this.items[key];
          if (isString(item)) {
            asyncItems = [
              ...asyncItems,
              this.$store.dispatch(`menu/${item}/load`, {})
            ];
          }
        }
        await Promise.all(asyncItems);
        let result = [];
        for (const key in this.items) {
          const item = this.items[key];
          if (isString(item)) {
            result = [...result, ...this.$store.getters[`menu/${item}/get`]];
          } else {
            result = [...result, item];
          }
        }
        this.$store.commit("menu/setEntities", {
          id: this.idHash,
          items: result
        });
        this.$store.commit("menu/setLoaded", { id: this.idHash, loaded: true });
      }
    },
    hashCode(str) {
      var hash = 0,
        i,
        chr;
      if (str.length === 0) return hash;
      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
      }
      return hash;
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
    { staticClass: "nav-menu-section" },
    _vm._l(_vm.menuItems, function(item, index) {
      return _c(
        "div",
        { key: index, staticClass: "nav-menu-section__item" },
        [
          _c(
            "b-link",
            {
              staticClass: "nav-menu-section__item_link",
              attrs: { to: item.to }
            },
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
                  staticClass: "nav-menu-section__item_title body-2"
                },
                [_vm._v(_vm._s(item.title))]
              ),
              _vm._v(" "),
              item.children && item.children.length > 0
                ? _c("vf-icon", {
                    staticClass: "nav-menu-section__item_icon",
                    attrs: { icon: "angle-down" }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          item.children && item.children.length > 0
            ? _c(
                "div",
                {
                  staticClass:
                    "nav-menu-section__sub_menu nav-menu-section__sub_menu--vertical"
                },
                _vm._l(item.children, function(subItem, key) {
                  return _c(
                    "div",
                    { key: key, staticClass: "nav-menu-section__item" },
                    [
                      _c(
                        "b-link",
                        {
                          directives: [
                            {
                              name: "b-toggle",
                              rawName: "v-b-toggle.menu-collapse",
                              modifiers: { "menu-collapse": true }
                            }
                          ],
                          staticClass:
                            "nav-menu-section__item_link nav-menu-section__item_link--size_big",
                          attrs: { to: subItem.to }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "nav-menu-section__item_title subheading"
                            },
                            [_vm._v(_vm._s(subItem.title))]
                          ),
                          _vm._v(" "),
                          subItem.children.length > 0
                            ? _c("vf-icon", {
                                staticClass:
                                  "nav-menu-section__item_icon nav-menu-section__item_icon--float",
                                attrs: { icon: "angle-right" }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      subItem.children.length > 0
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "nav-menu-section__sub_menu nav-menu-section__sub_menu--horizontal"
                            },
                            _vm._l(subItem.children, function(value, subKey) {
                              return _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.menu-collapse",
                                      modifiers: { "menu-collapse": true }
                                    }
                                  ],
                                  key: subKey,
                                  staticClass: "nav-menu-section__item"
                                },
                                [
                                  _c(
                                    "b-link",
                                    {
                                      staticClass:
                                        "nav-menu-section__item_link nav-menu-section__item_link--size_medium",
                                      attrs: { to: value.to }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "nav-menu-section__item_title subheading"
                                        },
                                        [_vm._v(_vm._s(value.title))]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            }),
                            0
                          )
                        : _vm._e()
                    ],
                    1
                  )
                }),
                0
              )
            : _vm._e()
        ],
        1
      )
    }),
    0
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
  

  
  var menu = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default menu;
