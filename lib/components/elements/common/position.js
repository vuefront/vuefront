import isUndefined from 'lodash/isUndefined';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';

const BaseLayout = {
  computed: {
    modules() {
      let result = [];
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
        if (regex.test(currentRoute) && !isUndefined(layout[this.position])) {
          for (const key in layout[this.position]) {
            if (isString(layout[this.position][key])) {
              result = [
                ...result,
                {
                  component: 'vfModule' + layout[this.position][key],
                  props: {}
                }
              ];
            } else {
              result = [
                ...result,
                {
                  component: 'vfModule' + layout[this.position][key][0],
                  props: layout[this.position][key][1]
                }
              ];
            }
          }
        }
      }
      return result
    }
  }
};

var script = {
  props: {
    name: String
  },
  computed: {
    position() {
      return this.name
    }
  },
  mixins: [BaseLayout]
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
      _vm.modules.length === 0
        ? _vm._t("default")
        : _vm._l(_vm.modules, function(value, index) {
            return _c(
              value.component,
              _vm._b({ key: index, tag: "div" }, "div", value.props, false)
            )
          })
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
  

  
  var position = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default position;
