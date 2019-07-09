import { BRow, BCol, BBadge, BButton } from 'bootstrap-vue';
import 'vuefront/scss/elements/store/product.scss';
import { mapGetters } from 'vuex';

var script = {
  components: {
    BRow,
    BCol,
    BBadge,
    BButton
  },
  props: ["product"],
  data() {
    return {
      selectedOptions: []
    };
  },
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    })
  },
  methods: {
    async handleAddToCart() {
      await this.$store.dispatch("store/cart/add", {
        id: this.product.id,
        quantity: 1,
        options: this.selectedOptions
      });
      if (!this.error) {
        this.$store.commit(
          "notification/add",
          this.product.name + this.$t("elements.store.product.notificationText")
        );
      } else {
        this.$store.commit("notification/error", this.error.message);
      }
    },
    handleChangeOptions(e) {
      this.selectedOptions = e;
    },
    async handleCreateReview({ content, author, rating }) {
      await this.$store.dispatch("store/product/addReview", {
        id: this.product.id,
        content,
        author,
        rating,
        limit: 5
      });
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
    { staticClass: "product-section" },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "12", md: "6" } },
            [
              _c("vf-product-image", { attrs: { product: _vm.product } }),
              _vm._v(" "),
              _c("vf-reviews", {
                attrs: { reviews: _vm.product.reviews },
                on: { create: _vm.handleCreateReview }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("b-col", { attrs: { sm: "12", md: "6" } }, [
            _c(
              "div",
              { staticClass: "product-info pl-lg-5" },
              [
                _c("div", { staticClass: "product-info__name h4" }, [
                  _vm._v(_vm._s(_vm.product.name))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product-info__model text-sm h6" }, [
                  _vm._v(_vm._s(_vm.product.model))
                ]),
                _vm._v(" "),
                _c(
                  "b-row",
                  [
                    _c(
                      "b-col",
                      { attrs: { sm: "6" } },
                      [
                        _vm.product.rating > 0
                          ? _c("vf-rating", {
                              attrs: {
                                value: _vm.product.rating,
                                color: "#ffcc00",
                                readonly: ""
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      { staticClass: "text-sm-right", attrs: { sm: "6" } },
                      [
                        _c(
                          "b-badge",
                          { attrs: { variant: "primary", pill: "" } },
                          [
                            _vm._v(
                              _vm._s(_vm.$t("elements.store.product.idText")) +
                                _vm._s(_vm.product.id)
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.product.stock
                          ? _c(
                              "b-badge",
                              { attrs: { variant: "success", pill: "" } },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t("elements.store.product.inStockText")
                                  )
                                )
                              ]
                            )
                          : _c(
                              "b-badge",
                              { attrs: { variant: "danger", pill: "" } },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t(
                                      "elements.store.product.outOfStockText"
                                    )
                                  )
                                )
                              ]
                            )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "my-4 py-4 border-top",
                    class: {
                      "border-bottom": _vm.product.attributes.lenght > 0
                    }
                  },
                  [
                    _c(
                      "h6",
                      {
                        staticClass:
                          "product-info__description-title text-sm mb-1"
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.$t("elements.store.product.descriptionText")
                          )
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "product-info__description text-sm",
                      domProps: { innerHTML: _vm._s(_vm.product.description) }
                    })
                  ]
                ),
                _vm._v(" "),
                _vm.product.attributes.length > 0
                  ? _c("vf-product-attribute", {
                      attrs: { product: _vm.product }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "py-4 my-4 border-bottom border-top" },
                  [
                    _vm.product.options.length > 0
                      ? _c("vf-product-option", {
                          attrs: { product: _vm.product },
                          on: { change: _vm.handleChangeOptions }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "b-row",
                      [
                        _c(
                          "b-col",
                          {
                            staticClass: "mb-4 mb-sm-0",
                            attrs: { sm: "6", md: "5" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "product-info__price h3" },
                              [
                                _vm.product.special !== ""
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "product-info__price_special"
                                      },
                                      [_vm._v(_vm._s(_vm.product.special))]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    class: {
                                      "font-weight-light":
                                        _vm.product.special !== "",
                                      h6: _vm.product.special !== ""
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.product.price))]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          {
                            staticClass: "text-sm-right",
                            attrs: { sm: "6", md: "7" }
                          },
                          [
                            _c(
                              "b-button",
                              {
                                attrs: { variant: "primary" },
                                on: { click: _vm.handleAddToCart }
                              },
                              [
                                _c("vf-icon", {
                                  attrs: { icon: "shopping-cart" }
                                }),
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm.$t(
                                        "elements.store.product.buttonAddToCart"
                                      )
                                    ) +
                                    "\n              "
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
              ],
              1
            )
          ])
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
  

  
  var product = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default product;
