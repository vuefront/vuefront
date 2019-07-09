var script = {
  props: ["category", "products", "mode", "sort", "gridSize"],
  data() {
    return {
      sizeOptions: [
        {
          text: this.$t("templates.store.category.15Text"),
          value: 15
        },
        {
          text: this.$t("templates.store.category.25Text"),
          value: 25
        },
        {
          text: this.$t("templates.store.category.50Text"),
          value: 50
        },
        {
          text: this.$t("templates.store.category.75Text"),
          value: 75
        },
        {
          text: this.$t("templates.store.category.100Text"),
          value: 100
        }
      ],
      sortOptions: [
        {
          text: this.$t("templates.store.category.defaultSortText"),
          value: "id|ASC"
        },
        {
          text: this.$t("templates.store.category.nameAscSortText"),
          value: "name|ASC"
        },
        {
          text: this.$t("templates.store.category.nameDescSortText"),
          value: "name|DESC"
        },
        {
          text: this.$t("templates.store.category.priceAscSortText"),
          value: "price|ASC"
        },
        {
          text: this.$t("templates.store.category.priceDescSortText"),
          value: "price|DESC"
        },
        {
          text: this.$t("templates.store.category.ratingAscSortText"),
          value: "rating|ASC"
        },
        {
          text: this.$t("templates.store.category.ratingDescSortText"),
          value: "rating|DESC"
        },
        {
          text: this.$t("templates.store.category.modelAscSortText"),
          value: "model|ASC"
        },
        {
          text: this.$t("templates.store.category.modelDescSortText"),
          value: "model|DESC"
        }
      ]
    };
  },
  computed: {
    isList() {
      return this.mode === "list";
    },
    grid() {
      return this.gridSize;
    }
  },
  methods: {
    async handleChangePage(page) {
      let { id } = this.$vuefront.params;
      this.$router.push({
        path: "/store/category/" + id,
        query: { page }
      });
    },
    handleChangeSort(sort) {
      const sorts = sort.split("|");
      let { id } = this.$vuefront.params;
      this.$router.push({
        path: "/store/category/" + id,
        query: { size: this.products.size.toString(), sort: sorts[0], order: sorts[1] }
      });
    },
    handleChangeMode(mode) {
      this.$store.commit("store/category/setMode", mode);
    },
    handleChangeSize(size) {
      const sorts = this.sort.split("|");
      let { id } = this.$vuefront.params;
      this.$router.push({
        path: "/store/category/" + id,
        query: { size: size.toString(), sort: sorts[0], order: sorts[1] }
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
    "section",
    { staticClass: "store-category-section" },
    [
      _c("vf-category", {
        staticClass: "mb-5",
        attrs: { category: _vm.category }
      }),
      _vm._v(" "),
      _vm.products.content.length > 0
        ? _c("vf-sort", {
            attrs: {
              sorts: _vm.sortOptions,
              sizes: _vm.sizeOptions,
              size: _vm.products.size,
              sort: _vm.sort,
              mode: _vm.mode
            },
            on: {
              changeSize: _vm.handleChangeSize,
              changeSort: _vm.handleChangeSort,
              changeMode: _vm.handleChangeMode
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.products.content.length > 0
        ? _c("vf-products-grid", {
            staticClass: "mb-4",
            attrs: {
              products: _vm.products.content,
              list: _vm.isList,
              "grid-size": _vm.grid
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.products.content.length === 0
        ? _c("vf-empty", { staticClass: "text-sm-center" }, [
            _vm._v(_vm._s(_vm.$t("templates.store.category.emptyText")))
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("vf-pagination", {
        attrs: {
          page: _vm.products.number,
          totalPages: _vm.products.totalPages
        },
        on: { input: _vm.handleChangePage }
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
