import { BNavItemDropdown, BDropdownItem } from 'bootstrap-vue';
import { mapGetters } from 'vuex';
import find from 'lodash/find';
import 'vuefront/scss/elements/store/currency.scss';

var script = {
  components: {
    BNavItemDropdown,
    BDropdownItem
  },
  computed: {
    ...mapGetters({
      currency: "store/currency/get",
      error: "vuefront/error"
    }),
    activeCurrency() {
      return find(this.currency, { active: true });
    }
  },
  methods: {
    async handleEdit({ code }) {
      await this.$store.dispatch("store/currency/edit", { code });
      if (!this.error) {
        location.reload();
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
  return _vm.currency.length > 1
    ? _c(
        "b-nav-item-dropdown",
        { staticClass: "currency-section" },
        [
          _c("template", { slot: "button-content" }, [
            _c(
              "span",
              {
                staticClass: "d-none d-md-inline-block currency-section__symbol"
              },
              [
                _vm._v(
                  _vm._s(
                    _vm.activeCurrency.symbol_left ||
                      _vm.activeCurrency.symbol_right
                  )
                )
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "currency-section__title" }, [
              _vm._v(_vm._s(_vm.activeCurrency.title))
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.currency, function(value, index) {
            return _c(
              "b-dropdown-item",
              {
                key: index,
                on: {
                  click: function($event) {
                    return _vm.handleEdit(value)
                  }
                }
              },
              [
                _vm._v(
                  _vm._s(value.symbol_left || value.symbol_right) +
                    " " +
                    _vm._s(value.title)
                )
              ]
            )
          })
        ],
        2
      )
    : _vm._e()
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
  

  
  var currency = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default currency;
