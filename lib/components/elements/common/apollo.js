import { mapGetters } from 'vuex';
import isUndefined from 'lodash/isUndefined';

var script = {
  props: ["query", "variables"],
  data() {
    const prefetchData = this.$store.getters["apollo/prefetchData"];
    const hashCode = this.hashCode(
      JSON.stringify({ query: this.query, variables: this.variables })
    );
    let data = {};
    let error = {};
    let loading = true;
    if (!isUndefined(prefetchData[hashCode])) {
      data = prefetchData[hashCode].data;
      loading = prefetchData[hashCode].loading;
    }
    return {
      data,
      error,
      loading
    };
  },
  watch: {
    $route(to, from) {
      this.loadData();
    }
  },
  watchQuery: true,
  computed: {
    ...mapGetters({
      prefetchData: "apollo/prefetchData"
    }),
    componentHash() {
      return this.hashCode(
        JSON.stringify({ query: this.query, variables: this.variables })
      );
    }
  },
  serverPrefetch() {
    return this.loadData(true);
  },
  mounted() {
    if (this.loading) {
      this.loadData();
    }
  },
  methods: {
    loadData(ssr = false) {
      return new Promise((resolve, rejects) => {
        this.$vfapollo
          .query({
            query: this.query,
            variables: this.variables ? this.variables : {}
          })
          .then(({ data }) => {
            if (ssr) {
              this.$store.commit("apollo/setPrefetchData", {
                key: this.componentHash,
                data: { data, loading: false }
              });
            }
            this.data = data;
            this.loading = false;
            resolve();
          })
          .catch(e => {
            if (ssr) {
              this.$store.commit("apollo/setPrefetchData", {
                key: this.componentHash,
                data: { error: {}, loading: false }
              });
            }
            this.error = {};
            this.loading = false;
            rejects(e);
          });
      });
    },
    hashCode(str) {
      var hash = 0,
        i,
        chr;
      if (str.length === 0) return hash;
      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
      }
      return hash;
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
    "div",
    [
      _vm.loading
        ? [_vm._t("loader", [_c("vf-loader-common")])]
        : _vm._t("default", null, { data: _vm.data })
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
  

  
  var apollo = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default apollo;
