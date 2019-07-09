import { BAlert, BForm, BFormGroup, BFormInput, BFormTextarea, BButton, BFormInvalidFeedback } from 'bootstrap-vue';
import { validationMixin } from 'vuelidate';
import required from 'vuelidate/lib/validators/required';
import minLength from 'vuelidate/lib/validators/minLength';
import maxLength from 'vuelidate/lib/validators/maxLength';
import email from 'vuelidate/lib/validators/email';
import { mapGetters } from 'vuex';

var script = {
  components: {
    BAlert,
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BButton,
    BFormInvalidFeedback
  },
  data() {
    return {
      loading: false,
      show: true,
      form: {
        name: null,
        email: null,
        message: null
      }
    };
  },
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    })
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(32)
      },
      email: {
        required,
        email
      },
      message: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(3000)
      }
    }
  },
  methods: {
    async onSubmit(e) {
      this.$v.$touch();
      if (!this.$v.form.$invalid) {
        await this.$store.dispatch("common/contact/send", this.form);
        if (!this.error) {
          this.$store.commit(
            "notification/add",
            this.$t("elements.common.contact.successText")
          );
          e.preventDefault();
          this.form.email = null;
          this.form.name = null;
          this.form.message = null;
          this.show = false;
          this.$nextTick(() => {
            this.$v.$reset();
            this.show = true;
          });
        } else {
          this.$store.commit(
            "notification/error",
            this.error.message
          );
        }
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
    { staticClass: "contact-form" },
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("elements.common.contact.titleText")))]),
      _vm._v(" "),
      _c("p", { staticClass: "lead" }, [
        _vm._v(_vm._s(_vm.$t("elements.common.contact.subTitleText")))
      ]),
      _vm._v(" "),
      _vm.show
        ? _c(
            "b-form",
            { ref: "form", staticClass: "mt-5" },
            [
              _c(
                "b-form-group",
                [
                  _c("b-form-input", {
                    attrs: {
                      state: _vm.$v.form.name.$dirty
                        ? !_vm.$v.form.name.$error
                        : null,
                      placeholder: _vm.$t(
                        "elements.common.contact.namePlaceholder"
                      ),
                      "aria-describedby": "input-name-feedback",
                      size: "lg"
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.form,
                          "name",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        );
                      },
                      expression: "form.name"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-form-invalid-feedback",
                    { attrs: { id: "input-name-feedback" } },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("elements.common.contact.nameError"))
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                [
                  _c("b-form-input", {
                    attrs: {
                      state: _vm.$v.form.email.$dirty
                        ? !_vm.$v.form.email.$error
                        : null,
                      placeholder: _vm.$t(
                        "elements.common.contact.emailPlaceholder"
                      ),
                      "aria-describedby": "input-email-feedback",
                      size: "lg"
                    },
                    model: {
                      value: _vm.form.email,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.form,
                          "email",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        );
                      },
                      expression: "form.email"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-form-invalid-feedback",
                    { attrs: { id: "input-email-feedback" } },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("elements.common.contact.emailError"))
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                [
                  _c("b-form-textarea", {
                    attrs: {
                      state: _vm.$v.form.message.$dirty
                        ? !_vm.$v.form.message.$error
                        : null,
                      placeholder: _vm.$t(
                        "elements.common.contact.messagePlaceholder"
                      ),
                      "aria-describedby": "input-message-feedback",
                      size: "lg",
                      rows: "5"
                    },
                    model: {
                      value: _vm.form.message,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.form,
                          "message",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        );
                      },
                      expression: "form.message"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-form-invalid-feedback",
                    { attrs: { id: "input-message-feedback" } },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("elements.common.contact.messageError"))
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { variant: "dark", pill: "" },
                  on: { click: _vm.onSubmit }
                },
                [_vm._v(_vm._s(_vm.$t("elements.common.contact.buttonSend")))]
              )
            ],
            1
          )
        : _vm._e()
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
  

  
  var form = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default form;
