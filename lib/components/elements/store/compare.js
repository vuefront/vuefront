import { BTable, BImgLazy, BMedia, BMediaBody, BMediaAside, BFormInput } from 'bootstrap-vue';
import 'vuefront/scss/elements/store/compare.scss';

var placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADhCAMAAABFoniZAAAA/1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD64ociAAAAVXRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRocHR4fISIjJScoKSorLC0uLzAyMzQ1Nzg5Ozw9P0BBQkRFRkdISUpLTE1OT1BRUlNVVldYWVpbXF1edg6iGgAAA2pJREFUeNrt3OtS2kAYgGE2AUFFsQIe8Kyo1CKoKFZLS4VSOZsD938tVasYRBI6ko6z+z6/lRnfmSxfkl0DAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4cPRYwjfxGSFXq6Nm1zedm6RUsaK3PR/ZOalizTce/iZ/3H/ymXSxqrljPxTuZIx1pvny0bEmsYhFLGIR64PECi/v7u/Eg8TyjqVvfO/ez1ztYkIQyyOWvt95GrtvU4JY7rHW2/27lGqMWK6xwiXHLV1eI5ZbrJWu4wa4Nksst1h7tiNWJ0kst1gZZyxjhVhusXYtR6x2nFhusRJtR6zKNLHcYoUuX1pZGa9BS4vvbUeFunPWUr0fq+T1Zainm7ZVXdeUjSU2nmrZPxY9fklsPw77jZS694YiXqjfGd1fWc8hK/GUtRJT+KmDPp9aX57xnN6nr58n/fOQurHGox/3pwwjrRHLdcHa6rx8bzZXieXmU835GrUcJdZo4Ut74J3zaZBYIxesI3PwDb2xK4g1wnr79X6GepJYI368Mrz749sMsd4ydWEPx7LyOrHeuH0+MN7aWNTdEsQastp8extWbVHxWJGdfPrVDBX9OWrP2lVE6VjRS7Nn3aw4r6/gqT1qh5/5RVM4Vuj8MUzN8XhZ7N6N3g/ZXhPKxtIOzKGxYKnhtnu0uqBsrP5KbuWex4KZkvtW22JY0VjR8ssbxM2/11cwZ7lvTDYONSVjhQr267FAbHe9tnG3UirGGlzJ7a8PY0H8t/em9/KcgrGS9cGx4EgLRK7sMU4InIWUizVbGhoL9Kw1znkKIy0Ui6Xnh8JUDtvjnT5pLKkVS2wNr+S2Me5ZnYGnNfLHGmclH806CSoUa6yV3EV3RygTS8ua7zw0d7uoSiyx0Xn3EcPraUViLVTffx7TzOpKxAoX7ffH6rU3VYilZczeJNQWFIiVak3oYPTT0xqZY82VJ3WM3MxokseaKtiTitVrrckdS6SN3uTczEkdy/0J+z8vW4WQxLFmS5P97xcPWwKljZXInUzWwZS8scTEyXoZFuejflhtyRirW7/1Q8OSMZaP5IoV+eFnK3Nfqlhi+azom4vPkYBcNN0/IgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//gDufzXGjPh0CAAAAAASUVORK5CYII=";

var script = {
  components: { BTable, BImgLazy, BMedia, BMediaBody, BMediaAside, BFormInput },
  props: ["compare"],
  data() {
    let fields = [
      {
        key: 0,
        label: ""
      }
    ];
    for (const key in this.compare) {
      const product = this.compare[key];
      fields = [
        ...fields,
        {
          key: product.id,
          label: this.compare[key].name,
          sortable: false
        }
      ];
    }
    return {
      fields
    };
  },
  computed: {
    items() {
      let result = [];
      const row = { 0: "Product" };
      for (const key in this.compare) {
        const product = this.compare[key];
        row[product.id] = product.name;
      }
      result = [...result, row];
      return result;
    }
  },
  methods: {
    mainImage(product) {
      return product.image !== "" ? product.image : placeholder;
    },
    mainImagelazy(product) {
      return product.imageLazy !== ""
        ? product.imageLazy
        : placeholder;
    },
    handleRemove(compareProduct) {
      this.$store.dispatch("store/compare/remove", {
        id: compareProduct.id
      });
    },
    async handleAddToCart(compareProduct) {
      this.$store.commit(
        "notification/add",
        compareProduct.name + this.$t("elements.store.compare.notificationText")
      );
      await this.$store.dispatch("store/cart/add", {
        id: compareProduct.id,
        quantity: 1,
        options: []
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
  return _c("section", { staticClass: "compare" }, [
    _c("div", { staticClass: "compare__products" }, [
      _c(
        "div",
        { staticClass: "compare__item" },
        [
          _c("div", { staticClass: "compare__item_value border p-2" }, [
            _vm._v(_vm._s(_vm.$t("elements.store.compare.productRow")))
          ]),
          _vm._v(" "),
          _vm._l(_vm.compare, function(value, index) {
            return _c("div", {
              key: index,
              staticClass: "compare__item_value border p-2",
              domProps: { innerHTML: _vm._s(value.name) }
            })
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "compare__item" },
        [
          _c("div", { staticClass: "compare__item_value border p-2" }, [
            _vm._v(_vm._s(_vm.$t("elements.store.compare.imageRow")))
          ]),
          _vm._v(" "),
          _vm._l(_vm.compare, function(value, index) {
            return _c(
              "div",
              { key: index, staticClass: "compare__item_value border p-2" },
              [
                _c("b-img-lazy", {
                  attrs: {
                    src: _vm.mainImage(value),
                    "blank-src": _vm.mainImagelazy(value),
                    width: "80",
                    height: "80"
                  }
                })
              ],
              1
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "compare__item" },
        [
          _c("div", { staticClass: "compare__item_value border p-2" }, [
            _vm._v(_vm._s(_vm.$t("elements.store.compare.priceRow")))
          ]),
          _vm._v(" "),
          _vm._l(_vm.compare, function(value, index) {
            return _c(
              "div",
              { key: index, staticClass: "compare__item_value border p-2" },
              [
                _c("div", { staticClass: "card-product__price h4" }, [
                  value.special !== ""
                    ? _c(
                        "span",
                        { staticClass: "card-product__price_special" },
                        [_vm._v(_vm._s(value.special))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "span",
                    { class: { "font-weight-regular": value.special !== "" } },
                    [_vm._v(_vm._s(value.price))]
                  )
                ])
              ]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "compare__item" },
        [
          _c("div", { staticClass: "compare__item_value border p-2" }, [
            _vm._v(_vm._s(_vm.$t("elements.store.compare.modelRow")))
          ]),
          _vm._v(" "),
          _vm._l(_vm.compare, function(value, index) {
            return _c(
              "div",
              { key: index, staticClass: "compare__item_value border p-2" },
              [_vm._v(_vm._s(value.model))]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "compare__item" },
        [
          _c("div", { staticClass: "compare__item_value border p-2" }, [
            _vm._v(_vm._s(_vm.$t("elements.store.compare.availabilityRow")))
          ]),
          _vm._v(" "),
          _vm._l(_vm.compare, function(value, index) {
            return _c(
              "div",
              { key: index, staticClass: "compare__item_value border p-2" },
              [
                value.stock
                  ? _c("div", [
                      _vm._v(
                        _vm._s(_vm.$t("elements.store.compare.inStockText"))
                      )
                    ])
                  : _c("div", [
                      _vm._v(
                        _vm._s(_vm.$t("elements.store.compare.outOfStockText"))
                      )
                    ])
              ]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "compare__item" },
        [
          _c("div", { staticClass: "compare__item_value border p-2" }, [
            _vm._v(_vm._s(_vm.$t("elements.store.compare.ratingRow")))
          ]),
          _vm._v(" "),
          _vm._l(_vm.compare, function(value, index) {
            return _c(
              "div",
              { key: index, staticClass: "compare__item_value border p-2" },
              [
                _c("vf-rating", {
                  attrs: { value: value.rating, color: "#ffcc00", readonly: "" }
                })
              ],
              1
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "compare__item" },
        [
          _c("div", { staticClass: "compare__item_value border p-2" }, [
            _vm._v(_vm._s(_vm.$t("elements.store.compare.summaryRow")))
          ]),
          _vm._v(" "),
          _vm._l(_vm.compare, function(value, index) {
            return _c("div", {
              key: index,
              staticClass: "compare__item_value border p-2",
              domProps: { innerHTML: _vm._s(value.shortDescription) }
            })
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "compare__item" },
        [
          _c("div", { staticClass: "compare__item_value border p-2" }),
          _vm._v(" "),
          _vm._l(_vm.compare, function(value, index) {
            return _c(
              "div",
              { key: index, staticClass: "compare__item_value border p-2" },
              [
                _c(
                  "div",
                  {
                    staticClass: "compare__action m-1 d-inline",
                    on: {
                      click: function($event) {
                        return _vm.handleAddToCart(value)
                      }
                    }
                  },
                  [
                    _c("vf-icon", { attrs: { icon: ["fas", "shopping-cart"] } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "compare__action m-1 ml-2 d-inline",
                    on: {
                      click: function($event) {
                        return _vm.handleRemove(value)
                      }
                    }
                  },
                  [_c("vf-icon", { attrs: { icon: "times" } })],
                  1
                )
              ]
            )
          })
        ],
        2
      )
    ])
  ])
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
  

  
  var compare = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default compare;
