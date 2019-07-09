import { BAlert, BCard, BCardBody, BCardFooter, BForm, BFormGroup, BFormInput, BButton, BLink, BFormInvalidFeedback } from 'bootstrap-vue';
import { validationMixin } from 'vuelidate';
import required from 'vuelidate/lib/validators/required';
import minLength from 'vuelidate/lib/validators/minLength';
import maxLength from 'vuelidate/lib/validators/maxLength';
import email from 'vuelidate/lib/validators/email';
import { mapGetters } from 'vuex';

var script = {
  components: {
    BAlert,
    BCard,
    BCardBody,
    BCardFooter,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BLink,
    BFormInvalidFeedback
  },
  data() {
    const customer_info = this.$store.getters["common/customer/get"];
    return {
      form: {
        firstName: customer_info.firstName,
        lastName: customer_info.lastName,
        email: customer_info.email
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(32)
      },
      lastName: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(32)
      },
      email: {
        required,
        email
      }
    }
  },
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    })
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();
      if (!this.$v.form.$invalid) {
        await this.$store.dispatch("common/customer/edit", {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          email: this.form.email
        });
        if (!this.error) {
          this.$router.push("/account");
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
    "b-card",
    { staticClass: "shadow mb-0", attrs: { "no-body": "" } },
    [
      _c(
        "b-card-body",
        { staticClass: "px-md-5 py-5" },
        [
          _c("div", { staticClass: "mb-5" }, [
            _c("h6", { staticClass: "h3" }, [
              _vm._v(_vm._s(_vm.$t("elements.common.account.edit.titleText")))
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-muted mb-0" }, [
              _vm._v(
                _vm._s(_vm.$t("elements.common.account.edit.subTitleText"))
              )
            ])
          ]),
          _vm._v(" "),
          _c("b-alert", {
            attrs: { show: _vm.error.message },
            domProps: { innerHTML: _vm._s(_vm.error.message) }
          }),
          _vm._v(" "),
          _c(
            "b-form",
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: _vm.$t(
                      "elements.common.account.edit.firstNameEntry"
                    ),
                    "label-for": "input-first-name"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "input-first-name",
                      state: _vm.$v.form.firstName.$dirty
                        ? !_vm.$v.form.firstName.$error
                        : null,
                      "aria-describedby": "input-first-name-feedback"
                    },
                    model: {
                      value: _vm.form.firstName,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.form,
                          "firstName",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        );
                      },
                      expression: "form.firstName"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-form-invalid-feedback",
                    { attrs: { id: "input-first-name-feedback" } },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("elements.common.account.edit.firstNameError")
                        )
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: _vm.$t("elements.common.account.edit.lastNameEntry"),
                    "label-for": "input-last-name"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "input-last-name",
                      state: _vm.$v.form.lastName.$dirty
                        ? !_vm.$v.form.lastName.$error
                        : null,
                      "aria-describedby": "input-last-name-feedback"
                    },
                    model: {
                      value: _vm.form.lastName,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.form,
                          "lastName",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        );
                      },
                      expression: "form.lastName"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-form-invalid-feedback",
                    { attrs: { id: "input-last-name-feedback" } },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("elements.common.account.edit.lastNameError")
                        )
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: _vm.$t("elements.common.account.edit.emailEntry"),
                    "label-for": "input-email"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "input-email",
                      state: _vm.$v.form.email.$dirty
                        ? !_vm.$v.form.email.$error
                        : null,
                      "aria-describedby": "input-email-feedback"
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
                        _vm._s(
                          _vm.$t("elements.common.account.edit.emailError")
                        )
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-4" },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "btn-icon",
                      attrs: {
                        disabled: _vm.$v.form.$invalid,
                        size: "sm",
                        pill: "",
                        variant: "primary"
                      },
                      on: { click: _vm.onSubmit }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.$t("elements.common.account.edit.buttonSave")
                          ) +
                          "\n          "
                      ),
                      _c("vf-icon", {
                        attrs: { icon: "long-arrow-alt-right", size: "sm" }
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
      ),
      _vm._v(" "),
      _c(
        "b-card-footer",
        { staticClass: "px-md-5" },
        [
          _c("small", [
            _vm._v(_vm._s(_vm.$t("elements.common.account.edit.footerText")))
          ]),
          _vm._v(" "),
          _c(
            "b-link",
            {
              staticClass: "small font-weight-bold",
              attrs: { to: "/account/password" }
            },
            [
              _vm._v(
                _vm._s(_vm.$t("elements.common.account.edit.footerLinkText"))
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
  

  
  var edit = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default edit;
