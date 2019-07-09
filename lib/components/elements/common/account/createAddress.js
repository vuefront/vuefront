import { BAlert, BCard, BCardBody, BCardFooter, BForm, BFormGroup, BFormInput, BFormSelect, BButton, BLink, BFormInvalidFeedback } from 'bootstrap-vue';
import { validationMixin } from 'vuelidate';
import { isEmpty } from 'lodash';
import required from 'vuelidate/lib/validators/required';
import minLength from 'vuelidate/lib/validators/minLength';
import maxLength from 'vuelidate/lib/validators/maxLength';
import { mapGetters } from 'vuex';

var script = {
  props: ["countries"],
  components: {
    BAlert,
    BCard,
    BCardBody,
    BCardFooter,
    BForm,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BButton,
    BLink,
    BFormInvalidFeedback
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        company: "",
        address1: "",
        address2: "",
        city: "",
        countryId: "",
        zoneId: "",
        zipcode: ""
      }
    };
  },
  mixins: [validationMixin],
  validations() {
    let fields = {};
    if (!isEmpty(this.zones) && this.zones.content.length > 0) {
      fields = {
        ...fields,
        zoneId: {
          required
        }
      };
    }
    return {
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
        company: {
          minLength: minLength(1),
          maxLength: maxLength(32)
        },
        address1: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(128)
        },
        address2: {
          minLength: minLength(3),
          maxLength: maxLength(128)
        },
        city: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(128)
        },
        zipcode: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(10)
        },
        countryId: {
          required
        },
        ...fields
      }
    };
  },
  computed: {
    ...mapGetters({
      zones: "common/zone/list",
      error: "vuefront/error"
    })
  },
  methods: {
    async handleChangeCountry(value) {
      await this.$store.dispatch("common/zone/list", {
        page: 1,
        size: -1,
        country_id: value
      });
      this.form.zoneId = "";
    },
    async onSubmit() {
      this.$v.$touch();
      if (!this.$v.form.$invalid) {
        await this.$store.dispatch("common/address/create", {
          address: {
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            company: this.form.company,
            address1: this.form.address1,
            address2: this.form.address2,
            city: this.form.city,
            countryId: this.form.countryId,
            zoneId: this.form.zoneId,
            zipcode: this.form.zipcode
          }
        });
        if (!this.error) {
          this.$router.push("/account/address");
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
    { staticClass: "account-address-create" },
    [
      _c(
        "b-card",
        { staticClass: "shadow mb-0", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-body",
            { staticClass: "px-md-5 py-5" },
            [
              _c("div", { staticClass: "mb-5" }, [
                _c("h6", { staticClass: "h3" }, [
                  _vm._v(
                    _vm._s(_vm.$t("elements.common.address.create.titleText"))
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted mb-0" }, [
                  _vm._v(
                    _vm._s(
                      _vm.$t("elements.common.address.create.subTitleText")
                    )
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
                          "elements.common.address.create.firstNameEntry"
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
                              _vm.$t(
                                "elements.common.address.create.firstNameError"
                              )
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
                        label: _vm.$t(
                          "elements.common.address.create.lastNameEntry"
                        ),
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
                              _vm.$t(
                                "elements.common.address.create.lastNameError"
                              )
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
                        label: _vm.$t(
                          "elements.common.address.create.companyEntry"
                        ),
                        "label-for": "input-company"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "input-company",
                          state: _vm.$v.form.company.$dirty
                            ? !_vm.$v.form.company.$error
                            : null,
                          "aria-describedby": "input-company-feedback"
                        },
                        model: {
                          value: _vm.form.company,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "company",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            );
                          },
                          expression: "form.company"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-form-invalid-feedback",
                        { attrs: { id: "input-company-feedback" } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "elements.common.address.create.companyError"
                              )
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
                        label: _vm.$t(
                          "elements.common.address.create.address1Entry"
                        ),
                        "label-for": "input-address-1"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "input-address-1",
                          state: _vm.$v.form.address1.$dirty
                            ? !_vm.$v.form.address1.$error
                            : null,
                          "aria-describedby": "input-address-1-feedback"
                        },
                        model: {
                          value: _vm.form.address1,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "address1",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            );
                          },
                          expression: "form.address1"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-form-invalid-feedback",
                        { attrs: { id: "input-address-1-feedback" } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "elements.common.address.create.address1Error"
                              )
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
                        label: _vm.$t(
                          "elements.common.address.create.address2Entry"
                        ),
                        "label-for": "input-address-2"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "input-address-2",
                          state: _vm.$v.form.address2.$dirty
                            ? !_vm.$v.form.address2.$error
                            : null,
                          "aria-describedby": "input-address-2-feedback"
                        },
                        model: {
                          value: _vm.form.address2,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "address2",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            );
                          },
                          expression: "form.address2"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-form-invalid-feedback",
                        { attrs: { id: "input-address-2-feedback" } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "elements.common.address.create.address2Error"
                              )
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
                        label: _vm.$t(
                          "elements.common.address.create.cityEntry"
                        ),
                        "label-for": "input-city"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "input-city",
                          state: _vm.$v.form.city.$dirty
                            ? !_vm.$v.form.city.$error
                            : null,
                          "aria-describedby": "input-city-feedback"
                        },
                        model: {
                          value: _vm.form.city,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "city",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            );
                          },
                          expression: "form.city"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-form-invalid-feedback",
                        { attrs: { id: "input-city-feedback" } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t("elements.common.address.create.cityError")
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
                        label: _vm.$t(
                          "elements.common.address.create.zipcodeEntry"
                        ),
                        "label-for": "input-zipcode"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "input-zipcode",
                          state: _vm.$v.form.zipcode.$dirty
                            ? !_vm.$v.form.zipcode.$error
                            : null,
                          "aria-describedby": "input-zipcode-feedback"
                        },
                        model: {
                          value: _vm.form.zipcode,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "zipcode",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            );
                          },
                          expression: "form.zipcode"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-form-invalid-feedback",
                        { attrs: { id: "input-zipcode-feedback" } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "elements.common.address.create.zipcodeError"
                              )
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
                        label: _vm.$t(
                          "elements.common.address.create.countryEntry"
                        ),
                        "label-for": "input-country"
                      }
                    },
                    [
                      _c("b-form-select", {
                        attrs: {
                          id: "input-country",
                          state: _vm.$v.form.countryId.$dirty
                            ? !_vm.$v.form.countryId.$error
                            : null,
                          options: _vm.countries.content,
                          "aria-describedby": "input-country-feedback",
                          "value-field": "id",
                          "text-field": "name"
                        },
                        on: { input: _vm.handleChangeCountry },
                        model: {
                          value: _vm.form.countryId,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "countryId",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            );
                          },
                          expression: "form.countryId"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-form-invalid-feedback",
                        { attrs: { id: "input-country-feedback" } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "elements.common.address.create.countryError"
                              )
                            )
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.zones.content.length > 0
                    ? _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: _vm.$t(
                              "elements.common.address.create.zoneEntry"
                            ),
                            "label-for": "input-country"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "input-country",
                              state: _vm.$v.form.zoneId.$dirty
                                ? !_vm.$v.form.zoneId.$error
                                : null,
                              options: _vm.zones.content,
                              "aria-describedby": "input-zone-feedback",
                              "value-field": "id",
                              "text-field": "name"
                            },
                            model: {
                              value: _vm.form.zoneId,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form,
                                  "zoneId",
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                );
                              },
                              expression: "form.zoneId"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-form-invalid-feedback",
                            { attrs: { id: "input-zone-feedback" } },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "elements.common.address.create.zoneError"
                                  )
                                )
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
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
                            "\n            " +
                              _vm._s(
                                _vm.$t(
                                  "elements.common.address.create.buttonSave"
                                )
                              ) +
                              "\n            "
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
                _vm._v(
                  _vm._s(_vm.$t("elements.common.address.create.footerText"))
                )
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
                    _vm._s(
                      _vm.$t("elements.common.address.create.footerLinkText")
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
  

  
  var createAddress = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default createAddress;
