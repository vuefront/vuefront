import { BListGroup, BListGroupItem } from 'bootstrap-vue';
import includes from 'lodash/includes';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

var script = {
  components: {
    BListGroup,
    BListGroupItem
  },
  computed: {
    id() {
      let result = false;
      if (!isEmpty(this.$route.params.id)) {
        result = this.$route.params.id;
      }
      if (!isEmpty(this.$route.matched[0].props)) {
        result = this.$route.matched[0].props.default.id;
      }
      return result;
    }
  },
  methods: {
    url(category) {
      if (category.keyword && category.keyword !== "") {
        return "/" + category.keyword;
      } else {
        return `/store/category/${category.id}`;
      }
    },
    checkView(value, subValues) {
      if (this.id) {
        if (this.id === value.id) {
          return true;
        } else if (includes(map(subValues, subValue => subValue.id), this.id)) {
          return true;
        }
      }
      return false;
    }
  }
};

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoriesList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"parent"},"value":{"kind":"IntValue","value":"0"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keyword"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keyword"},"arguments":[],"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":192}};
    doc.loc.source = {"body":"{\r\n  categoriesList(page: 1, size: 10, parent: 0) {\r\n    content {\r\n      id\r\n      name\r\n      keyword\r\n      categories {\r\n        id\r\n        name\r\n        keyword\r\n      }\r\n    }\r\n  }\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

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
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("vf-apollo", {
    attrs: { query: doc },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var data = ref.data;
          return [
            _c(
              "div",
              { staticClass: "categoriesList mb-4" },
              [
                _c(
                  "b-list-group",
                  [
                    _vm._l(data.categoriesList.content, function(value, index) {
                      return [
                        _c("b-list-group-item", {
                          key: "root-" + index,
                          attrs: {
                            to: _vm.url(value),
                            active: _vm.checkView(value, value.categories)
                          },
                          domProps: { innerHTML: _vm._s(value.name) }
                        }),
                        _vm._v(" "),
                        _vm.checkView(value, value.categories)
                          ? _vm._l(value.categories, function(
                              subValue,
                              subIndex
                            ) {
                              return _c("b-list-group-item", {
                                key: "sub-" + subIndex,
                                attrs: {
                                  to: _vm.url(subValue),
                                  active: subValue.id === _vm.id
                                },
                                domProps: {
                                  innerHTML: _vm._s(
                                    "&nbsp;&nbsp;&nbsp;- " + subValue.name
                                  )
                                }
                              })
                            })
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                )
              ],
              1
            )
          ]
        }
      }
    ])
  })
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
  

  
  var category = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default category;
