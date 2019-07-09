import { BImgLazy, BRow, BCol, BLink, BMedia } from 'bootstrap-vue';

var placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADhCAMAAABFoniZAAAA/1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD64ociAAAAVXRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRocHR4fISIjJScoKSorLC0uLzAyMzQ1Nzg5Ozw9P0BBQkRFRkdISUpLTE1OT1BRUlNVVldYWVpbXF1edg6iGgAAA2pJREFUeNrt3OtS2kAYgGE2AUFFsQIe8Kyo1CKoKFZLS4VSOZsD938tVasYRBI6ko6z+z6/lRnfmSxfkl0DAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4cPRYwjfxGSFXq6Nm1zedm6RUsaK3PR/ZOalizTce/iZ/3H/ymXSxqrljPxTuZIx1pvny0bEmsYhFLGIR64PECi/v7u/Eg8TyjqVvfO/ez1ztYkIQyyOWvt95GrtvU4JY7rHW2/27lGqMWK6xwiXHLV1eI5ZbrJWu4wa4Nksst1h7tiNWJ0kst1gZZyxjhVhusXYtR6x2nFhusRJtR6zKNLHcYoUuX1pZGa9BS4vvbUeFunPWUr0fq+T1Zainm7ZVXdeUjSU2nmrZPxY9fklsPw77jZS694YiXqjfGd1fWc8hK/GUtRJT+KmDPp9aX57xnN6nr58n/fOQurHGox/3pwwjrRHLdcHa6rx8bzZXieXmU835GrUcJdZo4Ut74J3zaZBYIxesI3PwDb2xK4g1wnr79X6GepJYI368Mrz749sMsd4ydWEPx7LyOrHeuH0+MN7aWNTdEsQastp8extWbVHxWJGdfPrVDBX9OWrP2lVE6VjRS7Nn3aw4r6/gqT1qh5/5RVM4Vuj8MUzN8XhZ7N6N3g/ZXhPKxtIOzKGxYKnhtnu0uqBsrP5KbuWex4KZkvtW22JY0VjR8ssbxM2/11cwZ7lvTDYONSVjhQr267FAbHe9tnG3UirGGlzJ7a8PY0H8t/em9/KcgrGS9cGx4EgLRK7sMU4InIWUizVbGhoL9Kw1znkKIy0Ui6Xnh8JUDtvjnT5pLKkVS2wNr+S2Me5ZnYGnNfLHGmclH806CSoUa6yV3EV3RygTS8ua7zw0d7uoSiyx0Xn3EcPraUViLVTffx7TzOpKxAoX7ffH6rU3VYilZczeJNQWFIiVak3oYPTT0xqZY82VJ3WM3MxokseaKtiTitVrrckdS6SN3uTczEkdy/0J+z8vW4WQxLFmS5P97xcPWwKljZXInUzWwZS8scTEyXoZFuejflhtyRirW7/1Q8OSMZaP5IoV+eFnK3Nfqlhi+azom4vPkYBcNN0/IgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//gDufzXGjPh0CAAAAAASUVORK5CYII=";

var script = {
  components: {
    BImgLazy,
    BRow,
    BCol,
    BLink,
    BMedia
  },
  props: ["post"],
  computed: {
    mainImage() {
      return this.post.image !== "" ? this.post.image : placeholder;
    },
    mainImagelazy() {
      return this.post.imageLazy !== "" ? this.post.imageLazy : placeholder;
    }
  },
  methods: {
    async handleCreateReview({ content, author, rating }) {
      await this.$store.dispatch("blog/post/addReview", {
        id: this.post.id,
        content,
        author,
        rating,
        limit: 3
      });
    },
    postImage(post) {
      return post.image !== "" ? post.image : placeholder;
    },
    postImagelazy(post) {
      return post.imageLazy !== "" ? post.imageLazy : placeholder;
    },
    url(post) {
      if (post.keyword && post.keyword !== "") {
        return "/" + post.keyword;
      } else {
        return "/blog/post/" + post.id;
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
    { staticClass: "post-section" },
    [
      _c("div", { staticClass: "post-section__title mb-3 h1 text-sm-left" }, [
        _vm._v(_vm._s(_vm.post.title))
      ]),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { sm: "6" } }, [
            _c(
              "div",
              { staticClass: "post-section__date mb-3 h6 text-sm-left" },
              [
                _vm._v(
                  _vm._s(_vm.$t("elements.blog.post.postByText")) +
                    " " +
                    _vm._s(_vm.post.datePublished)
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6" } },
            [
              _vm.post.rating > 0
                ? _c("vf-rating", {
                    staticClass: "text-right",
                    attrs: {
                      value: _vm.post.rating,
                      color: "#ffcc00",
                      readonly: ""
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("b-img-lazy", {
        staticClass: "post-section__image mb-3",
        staticStyle: { width: "100%" },
        attrs: { src: _vm.mainImage, "blank-src": _vm.mainImagelazy, fluid: "" }
      }),
      _vm._v(" "),
      _c("div", {
        staticClass: "post-section__content lead",
        domProps: { innerHTML: _vm._s(_vm.post.description) }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "border-top border-bottom mb-5" },
        [
          _vm.post.next || _vm.post.prev
            ? _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "py-3 pr-3 border-right",
                      attrs: { md: "6" }
                    },
                    [
                      _vm.post.prev
                        ? _c(
                            "b-link",
                            { attrs: { to: _vm.url(_vm.post.prev) } },
                            [
                              _c(
                                "b-media",
                                { attrs: { "vertical-align": "center" } },
                                [
                                  _c("b-img-lazy", {
                                    attrs: {
                                      slot: "aside",
                                      src: _vm.postImage(_vm.post.prev),
                                      "blank-src": _vm.postImagelazy(
                                        _vm.post.prev
                                      ),
                                      width: "160"
                                    },
                                    slot: "aside"
                                  }),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass: "h5 mt-0 mb-1",
                                    domProps: {
                                      innerHTML: _vm._s(_vm.post.prev.name)
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("p", {
                                    staticClass: "mb-0 text-sm",
                                    staticStyle: {
                                      "min-height": "65px",
                                      "max-height": "65px",
                                      overflow: "hidden"
                                    },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.post.prev.shortDescription
                                      )
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-3 pl-3", attrs: { md: "6" } },
                    [
                      _vm.post.next
                        ? _c(
                            "b-link",
                            { attrs: { to: _vm.url(_vm.post.next) } },
                            [
                              _c(
                                "b-media",
                                {
                                  attrs: {
                                    "right-align": "",
                                    "vertical-align": "center"
                                  }
                                },
                                [
                                  _c("b-img-lazy", {
                                    attrs: {
                                      slot: "aside",
                                      src: _vm.postImage(_vm.post.next),
                                      "blank-src": _vm.postImagelazy(
                                        _vm.post.next
                                      ),
                                      width: "160"
                                    },
                                    slot: "aside"
                                  }),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass: "h5 mt-0 mb-1",
                                    domProps: {
                                      innerHTML: _vm._s(_vm.post.next.name)
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("p", {
                                    staticClass: "mb-0 text-sm",
                                    staticStyle: {
                                      "min-height": "65px",
                                      "max-height": "65px",
                                      overflow: "hidden"
                                    },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.post.next.shortDescription
                                      )
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("vf-reviews", {
        attrs: { reviews: _vm.post.reviews.content },
        on: { create: _vm.handleCreateReview }
      })
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
  

  
  var post = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default post;
