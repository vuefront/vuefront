import { mapGetters } from 'vuex';
import isUndefined from 'lodash/isUndefined';
import isEmpty from 'lodash/isEmpty';

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productsList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"special"},"value":{"kind":"BooleanValue","value":true}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"special"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"imageLazy"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rating"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keyword"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"number"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalPages"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalElements"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":397}};
    doc.loc.source = {"body":"query($page: Int, $size: Int, $sort: String, $order: String) {\r\n  productsList(\r\n    page: $page\r\n    size: $size\r\n    sort: $sort\r\n    order: $order\r\n    special: true\r\n  ) {\r\n    content {\r\n      id\r\n      name\r\n      shortDescription\r\n      price\r\n      special\r\n      image\r\n      imageLazy\r\n      rating\r\n      keyword\r\n    }\r\n    size\r\n    number\r\n    totalPages\r\n    totalElements\r\n  }\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

const BaseModule = {
  methods:  {
    checkModules(position) {
      for (const route in this.$vuefront.options.layouts) {
        const layout = this.$vuefront.options.layouts[route];
        let regexRoute = route.replace('*', '.*');
        regexRoute = regexRoute.replace('//', '\\//');
        const regex = new RegExp('^' + regexRoute + '$', 'i');
        let currentRoute = this.$route.path !== '' ? this.$route.path : '/';
        if(!isEmpty(this.$vuefront.params.url)) {
          currentRoute = this.$vuefront.params.url;
        }
        currentRoute = currentRoute.replace('/amp', '');
        currentRoute = currentRoute !== '' ? currentRoute : '/';
        if (regex.test(currentRoute) && !isUndefined(layout[position])) {
          if(!isEmpty(layout[position])) {
            return true
          }
        }
      }
      return false
    }
  }
};

var script = {
  head() {
    return {
      title: this.$t("templates.store.special.textTitle"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("templates.store.special.textTitle")
        }
      ]
    };
  },
  data() {
    const page = this.$route.query.page ? Number(this.$route.query.page) : 1;
    const size = this.$route.query.size ? Number(this.$route.query.size) : 15;
    const sort = this.$route.query.sort ? this.$route.query.sort : "id";
    const order = this.$route.query.order ? this.$route.query.order : "ASC";
    return {
      loaded: true,
      size,
      sort: `${sort}|${order}`,
      page
    };
  },
  computed: {
    ...mapGetters({
      mode: "store/category/mode",
      products: "store/product/list"
    }),
    gridSize() {
      if (this.checkModules("columnLeft") && this.checkModules("columnRight")) {
        return 2;
      } else if (
        this.checkModules("columnLeft") ||
        this.checkModules("columnRight")
      ) {
        return 3;
      } else {
        return 4;
      }
    }
  },
  mixins: [BaseModule],
  mounted() {
    if (!this.loaded) {
      this.handleLoadData();
    }
  },
  asyncData() {
    return {
      loaded: !process.client
    };
  },
  serverPrefetch() {
    return this.handleLoadData(this);
  },
  watchQuery: true,
  watch: {
    loaded(newValue, oldValue) {
      if (!newValue && oldValue) {
        this.handleLoadData();
      }
    }
  },
  methods: {
    async handleLoadData(ctx) {
      const sortData = this.sort.split("|");
      await this.$store.dispatch("apollo/query", {
        query: doc,
        variables: {
          page: this.page,
          size: this.size,
          sort: sortData[0],
          order: sortData[1]
        }
      });
      const { productsList } = this.$store.getters["apollo/get"];
      this.$store.commit("store/product/setEntities", productsList);
      this.loaded = true;
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
    { staticClass: "store-special-page" },
    [
      _vm.loaded
        ? [
            _c("vf-template-special", {
              attrs: {
                products: _vm.products,
                "grid-size": _vm.gridSize,
                mode: _vm.mode,
                sort: _vm.sort
              }
            })
          ]
        : [
            _c("vf-loader-special-page", {
              attrs: { "grid-size": _vm.gridSize }
            })
          ]
    ],
    2
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
  

  
  var special = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default special;
