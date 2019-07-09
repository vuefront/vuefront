import { isUndefined } from 'lodash';

var script = {
  props: ["value", "color", "readonly"],
  data() {
    return {
      rating: 0,
      hover: false
    };
  },
  computed: {
    currentRating() {
      return this.hover ? this.rating : this.value;
    }
  },
  methods: {
    handleMouseOver(rating) {
      if (isUndefined(this.readonly)) {
        this.rating = rating;
        this.hover = true;
      }
    },
    handleMouseOut() {
      if (isUndefined(this.readonly)) {
        this.hover = false;
      }
    },
    handleClick(rating) {
      if (isUndefined(this.readonly)) {
        this.$emit("input", rating);
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
    { staticClass: "rating-section" },
    _vm._l([1, 2, 3, 4, 5], function(rating) {
      return _c(
        "span",
        {
          key: rating,
          staticStyle: { cursor: "pointer" },
          on: {
            mouseover: function($event) {
              return _vm.handleMouseOver(rating)
            },
            mouseout: _vm.handleMouseOut,
            click: function($event) {
              return _vm.handleClick(rating)
            }
          }
        },
        [
          _c("vf-icon", {
            staticStyle: { width: "1.125em" },
            style: { color: _vm.color },
            attrs: {
              icon: rating <= _vm.currentRating ? "star" : ["far", "star"]
            }
          })
        ],
        1
      )
    }),
    0
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
  

  
  var rating = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default rating;
