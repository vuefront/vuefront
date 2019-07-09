import { BCard, BFormGroup, BFormInput, BFormTextarea, BFormRadioGroup, BButton, BFormInvalidFeedback } from 'bootstrap-vue';
import { validationMixin } from 'vuelidate';
import required from 'vuelidate/lib/validators/required';
import minLength from 'vuelidate/lib/validators/minLength';
import minValue from 'vuelidate/lib/validators/minValue';
import maxLength from 'vuelidate/lib/validators/maxLength';
import maxValue from 'vuelidate/lib/validators/maxValue';

var script = {
  components: {
    BCard,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormRadioGroup,
    BButton,
    BFormInvalidFeedback
  },
  props: {
    reviews: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      author: "",
      rating: 0,
      review: ""
    };
  },
  mixins: [validationMixin],
  validations: {
    rating: {
      required,
      minValue: minValue(1),
      maxValue: maxValue(5)
    },
    author: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(32)
    },
    review: {
      required,
      minLength: minLength(25),
      maxLength: maxLength(1000)
    }
  },
  methods: {
    handleSend() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit("create", {
          content: this.review,
          author: this.author,
          rating: this.rating
        });
        this.author = "";
        this.rating = 0;
        this.review = "";
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
  return _c("div", { staticClass: "reviews-section" }, [
    _c("div", { staticClass: "reviews-section__title h3 mb-3" }, [
      _vm._v(_vm._s(_vm.$t("elements.common.reviews.titleText")))
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-4" },
      _vm._l(_vm.reviews, function(review, index) {
        return _c("b-card", { key: index, staticClass: "mb-3" }, [
          _c("div", [
            _c(
              "div",
              {
                staticClass: "reviews-section__author mb-1 font-weight-bold h5"
              },
              [_vm._v(_vm._s(review.author))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "review-section_content lead" }, [
              _vm._v(_vm._s(review.content))
            ])
          ])
        ])
      }),
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "review-section__new" },
      [
        _c("div", { staticClass: "review-section__new_title title mb-3" }, [
          _vm._v(_vm._s(_vm.$t("elements.common.reviews.writeText")))
        ]),
        _vm._v(" "),
        _c(
          "b-form-group",
          { attrs: { label: _vm.$t("elements.common.reviews.ratingEntry") } },
          [
            _c("vf-rating", {
              attrs: {
                color: "#ffcc00",
                "aria-describedby": "input-rating-feedback"
              },
              model: {
                value: _vm.rating,
                callback: function($$v) {
                  _vm.rating = $$v;
                },
                expression: "rating"
              }
            }),
            _vm._v(" "),
            _c(
              "b-form-invalid-feedback",
              {
                attrs: {
                  state: _vm.$v.rating.$dirty ? !_vm.$v.rating.$error : null,
                  id: "input-rating-feedback"
                }
              },
              [_vm._v(_vm._s(_vm.$t("elements.common.reviews.ratingError")))]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-form-group",
          {
            attrs: {
              label: _vm.$t("elements.common.reviews.nameEntry"),
              "label-for": "input-name"
            }
          },
          [
            _c("b-form-input", {
              attrs: {
                id: "input-name",
                state: _vm.$v.author.$dirty ? !_vm.$v.author.$error : null,
                "aria-describedby": "input-author-feedback",
                trim: ""
              },
              model: {
                value: _vm.author,
                callback: function($$v) {
                  _vm.author = $$v;
                },
                expression: "author"
              }
            }),
            _vm._v(" "),
            _c(
              "b-form-invalid-feedback",
              { attrs: { id: "input-author-feedback" } },
              [_vm._v(_vm._s(_vm.$t("elements.common.reviews.authorError")))]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-form-group",
          {
            attrs: {
              label: _vm.$t("elements.common.reviews.reviewEntry"),
              "label-for": "input-review"
            }
          },
          [
            _c("b-form-textarea", {
              attrs: {
                id: "input-review",
                state: _vm.$v.review.$dirty ? !_vm.$v.review.$error : null,
                "aria-describedby": "input-review-feedback",
                trim: ""
              },
              model: {
                value: _vm.review,
                callback: function($$v) {
                  _vm.review = $$v;
                },
                expression: "review"
              }
            }),
            _vm._v(" "),
            _c(
              "b-form-invalid-feedback",
              { attrs: { id: "input-review-feedback" } },
              [_vm._v(_vm._s(_vm.$t("elements.common.reviews.reviewError")))]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-sm-right" },
          [
            _c(
              "b-button",
              { attrs: { variant: "primary" }, on: { click: _vm.handleSend } },
              [_vm._v(_vm._s(_vm.$t("elements.common.reviews.buttonSend")))]
            )
          ],
          1
        )
      ],
      1
    )
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
  

  
  var reviews = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default reviews;
