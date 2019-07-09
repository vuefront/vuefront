import { BLink, BRow, BCol, BContainer, BCard, BCardBody, BCardImgLazy, BCardFooter, BButton, BButtonGroup } from 'bootstrap-vue';
import 'vuefront/scss/elements/store/productThumb.scss';
import { mapGetters } from 'vuex';

var placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADhCAMAAABFoniZAAAA/1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD64ociAAAAVXRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRocHR4fISIjJScoKSorLC0uLzAyMzQ1Nzg5Ozw9P0BBQkRFRkdISUpLTE1OT1BRUlNVVldYWVpbXF1edg6iGgAAA2pJREFUeNrt3OtS2kAYgGE2AUFFsQIe8Kyo1CKoKFZLS4VSOZsD938tVasYRBI6ko6z+z6/lRnfmSxfkl0DAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4cPRYwjfxGSFXq6Nm1zedm6RUsaK3PR/ZOalizTce/iZ/3H/ymXSxqrljPxTuZIx1pvny0bEmsYhFLGIR64PECi/v7u/Eg8TyjqVvfO/ez1ztYkIQyyOWvt95GrtvU4JY7rHW2/27lGqMWK6xwiXHLV1eI5ZbrJWu4wa4Nksst1h7tiNWJ0kst1gZZyxjhVhusXYtR6x2nFhusRJtR6zKNLHcYoUuX1pZGa9BS4vvbUeFunPWUr0fq+T1Zainm7ZVXdeUjSU2nmrZPxY9fklsPw77jZS694YiXqjfGd1fWc8hK/GUtRJT+KmDPp9aX57xnN6nr58n/fOQurHGox/3pwwjrRHLdcHa6rx8bzZXieXmU835GrUcJdZo4Ut74J3zaZBYIxesI3PwDb2xK4g1wnr79X6GepJYI368Mrz749sMsd4ydWEPx7LyOrHeuH0+MN7aWNTdEsQastp8extWbVHxWJGdfPrVDBX9OWrP2lVE6VjRS7Nn3aw4r6/gqT1qh5/5RVM4Vuj8MUzN8XhZ7N6N3g/ZXhPKxtIOzKGxYKnhtnu0uqBsrP5KbuWex4KZkvtW22JY0VjR8ssbxM2/11cwZ7lvTDYONSVjhQr267FAbHe9tnG3UirGGlzJ7a8PY0H8t/em9/KcgrGS9cGx4EgLRK7sMU4InIWUizVbGhoL9Kw1znkKIy0Ui6Xnh8JUDtvjnT5pLKkVS2wNr+S2Me5ZnYGnNfLHGmclH806CSoUa6yV3EV3RygTS8ua7zw0d7uoSiyx0Xn3EcPraUViLVTffx7TzOpKxAoX7ffH6rU3VYilZczeJNQWFIiVak3oYPTT0xqZY82VJ3WM3MxokseaKtiTitVrrckdS6SN3uTczEkdy/0J+z8vW4WQxLFmS5P97xcPWwKljZXInUzWwZS8scTEyXoZFuejflhtyRirW7/1Q8OSMZaP5IoV+eFnK3Nfqlhi+azom4vPkYBcNN0/IgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//gDufzXGjPh0CAAAAAASUVORK5CYII=";

var script = {
  components: {
    BLink,
    BRow,
    BCol,
    BContainer,
    BCard,
    BCardBody,
    BCardImgLazy,
    BCardFooter,
    BButton,
    BButtonGroup
  },
  props: ["product", "wide"],
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    }),
    mainImage() {
      return this.product.image !== "" ? this.product.image : placeholder;
    },
    mainImagelazy() {
      return this.product.imageLazy !== ""
        ? this.product.imageLazy
        : placeholder;
    },
    url() {
      if (this.product.keyword && this.product.keyword !== "") {
        return "/" + this.product.keyword;
      } else {
        return "/store/product/" + this.product.id;
      }
    }
  },
  methods: {
    async handleAddToCart() {
      await this.$store.dispatch("store/cart/add", {
        id: this.product.id,
        quantity: 1,
        options: []
      });
      if (!this.error) {
        this.$store.commit(
          "notification/add",
          this.product.name +
            this.$t("elements.store.productThumb.notificationText")
        );
      } else {
        this.$store.commit("notification/error", this.error.message);
        this.$router.push("/store/product/" + this.product.id);
      }
    },
    async handleAddToWishlist() {
      this.$store.commit(
        "notification/add",
        this.product.name +
          this.$t("elements.store.productThumb.wishlistNotificationText")
      );
      await this.$store.dispatch("store/wishlist/add", {
        id: Number(this.product.id)
      });
    },
    async handleAddToCompare() {
      this.$store.commit(
        "notification/add",
        this.product.name +
          this.$t("elements.store.productThumb.compareNotificationText")
      );
      await this.$store.dispatch("store/compare/add", {
        id: Number(this.product.id)
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
    "b-card",
    {
      staticClass: "card-product",
      class: { "card-product_wide": _vm.wide },
      attrs: { "no-body": "" }
    },
    [
      _c(
        "b-row",
        { attrs: { "no-gutters": "" } },
        [
          _c(
            "b-col",
            { staticClass: "px-4", attrs: { md: _vm.wide ? 3 : 12 } },
            [
              _c(
                "b-link",
                {
                  staticClass: "card-product__image_wrapper",
                  attrs: { to: _vm.url }
                },
                [
                  _vm.$vuefront.isAMP
                    ? _c("amp-img", {
                        staticClass: "card-product__image",
                        attrs: {
                          src: _vm.mainImage,
                          width: "205",
                          height: "205"
                        }
                      })
                    : _c("b-card-img-lazy", {
                        staticClass: "card-product__image",
                        attrs: {
                          src: _vm.mainImage,
                          "blank-src": _vm.mainImagelazy,
                          fluid: ""
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
            { attrs: { md: _vm.wide ? 9 : 12 } },
            [
              _c(
                "b-card-body",
                { staticClass: "pt-0" },
                [
                  _c("h3", { staticClass: "h6 mb-0 card-product__name" }, [
                    _vm._v(_vm._s(_vm.product.name))
                  ]),
                  _vm._v(" "),
                  _vm.product.rating > 0 && _vm.wide
                    ? _c("vf-rating", {
                        attrs: {
                          value: _vm.product.rating,
                          color: "#ffcc00",
                          readonly: ""
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "card-product__description text-sm mb-3",
                    domProps: {
                      innerHTML: _vm._s(_vm.product.shortDescription)
                    }
                  }),
                  _vm._v(" "),
                  _c("h4", { staticClass: "mb-0 card-product__price" }, [
                    _vm.product.special !== ""
                      ? _c(
                          "span",
                          { staticClass: "card-product__price_special" },
                          [_vm._v(_vm._s(_vm.product.special))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        class: {
                          "font-weight-regular": _vm.product.special !== ""
                        }
                      },
                      [_vm._v(_vm._s(_vm.product.price))]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button-group",
                { staticStyle: { width: "100%" }, attrs: { size: "sm" } },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "border border-radius-top-left-0",
                      attrs: { variant: "light-gray" },
                      on: { click: _vm.handleAddToCart }
                    },
                    [
                      _c("vf-icon", {
                        attrs: { icon: ["fas", "shopping-cart"] }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "border border-radius-top-right-0",
                      attrs: { variant: "light-gray" },
                      on: { click: _vm.handleAddToWishlist }
                    },
                    [_c("vf-icon", { attrs: { icon: ["fas", "heart"] } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "border border-radius-top-right-0",
                      attrs: { variant: "light-gray" },
                      on: { click: _vm.handleAddToCompare }
                    },
                    [
                      _c("vf-icon", {
                        attrs: { icon: ["fas", "exchange-alt"] }
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
  

  
  var thumb = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default thumb;
