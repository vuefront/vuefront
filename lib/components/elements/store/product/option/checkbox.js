import { BButton } from 'bootstrap-vue';
import { find, includes, filter } from 'lodash';

var script = {
  components: {
    BButton
  },
  props: ['option', 'selected'],
  computed: {
    selectedOptionValue() {
      let result = find(
        this.selected,
        {id: this.option.id}
      );
      return result ? result.value.split('|') : []
    }
  },
  methods: {
    handleChange(value) {
      const current = this.selectedOptionValue;
      let result = current;
      if(includes(current, value)) {
        result = filter(result, optionValue => value !== optionValue);
      } else {
        result = [...result, value];
      }
      this.$emit('change', result.join('|'));
    },
    checkActive(e, option) {
      let result = find(
        this.selected,
        {id: option.id}
      );
      return result ? includes(result.value.split('|'), e) : false;
    },
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
    { staticClass: "btn-group-toggle btn-group-options row mx-0 mt-3 mb-5" },
    _vm._l(_vm.option.values, function(value, key) {
      return _c(
        "b-button",
        {
          key: key,
          staticClass: "col-12 mb-2 text-sm",
          attrs: {
            pressed: _vm.checkActive(value.id, _vm.option),
            active: _vm.checkActive(value.id, _vm.option),
            variant: "neutral",
            size: "lg"
          },
          on: {
            click: function($event) {
              return _vm.handleChange(value.id)
            }
          }
        },
        [_vm._v(_vm._s(value.name))]
      )
    }),
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
  

  
  var checkbox = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default checkbox;
