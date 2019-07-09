import { BTable, BLink, BButton } from 'bootstrap-vue';
import 'vuefront/scss/elements/common/account/address.scss';

var script = {
  components: { BTable, BLink, BButton },
  props: ["items"],
  data() {
    return {
      fields: [
        {
          key: "address",
          label: this.$t("elements.common.account.address.addressColumn"),
          sortable: false
        },
        {
          key: "action",
          class: "account-address__action_column",
          label: this.$t("elements.common.account.address.actionColumn"),
          sortable: false
        }
      ]
    };
  },
  methods: {
    async handleRemove({ id }) {
      await this.$store.dispatch("common/address/remove", { id });
    },
    handleEdit({ id }) {
      this.$router.push(`/account/address/${id}/edit`);
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
    { staticClass: "account-address" },
    [
      _c("b-table", {
        staticClass: "table-address",
        attrs: { fields: _vm.fields, items: _vm.items },
        scopedSlots: _vm._u([
          {
            key: "address",
            fn: function(ref) {
              var item = ref.item;
              return [
                _vm._v(
                  "\n      " +
                    _vm._s(item.firstName) +
                    " " +
                    _vm._s(item.lastName) +
                    "\n      "
                ),
                _c("br"),
                _vm._v("\n      " + _vm._s(item.address1) + "\n      "),
                _c("br"),
                _vm._v(
                  "\n      " +
                    _vm._s(item.city) +
                    " " +
                    _vm._s(item.zipcode) +
                    "\n      "
                ),
                _c("br"),
                _vm._v("\n      " + _vm._s(item.zone.name) + "\n      "),
                _c("br"),
                _vm._v("\n      " + _vm._s(item.country.name) + "\n    ")
              ]
            }
          },
          {
            key: "action",
            fn: function(ref) {
              var item = ref.item;
              return [
                _c("div", { staticClass: "account-address__action ma-1" }, [
                  _c(
                    "span",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleEdit(item)
                        }
                      }
                    },
                    [_c("vf-icon", { attrs: { icon: "pencil-alt" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleRemove(item)
                        }
                      }
                    },
                    [_c("vf-icon", { attrs: { icon: "times" } })],
                    1
                  )
                ])
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-right" },
        [
          _c(
            "b-button",
            {
              attrs: {
                pill: "",
                variant: "primary",
                to: "/account/address/create"
              }
            },
            [
              _vm._v(
                _vm._s(
                  _vm.$t("elements.common.account.address.newAddressButton")
                )
              )
            ]
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
  

  
  var address = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default address;
