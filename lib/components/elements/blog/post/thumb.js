import { BLink, BCard, BCardBody, BCardImgLazy } from 'bootstrap-vue';
import 'vuefront/scss/elements/blog/postThumb.scss';

var placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADhCAMAAABFoniZAAAA/1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD64ociAAAAVXRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRocHR4fISIjJScoKSorLC0uLzAyMzQ1Nzg5Ozw9P0BBQkRFRkdISUpLTE1OT1BRUlNVVldYWVpbXF1edg6iGgAAA2pJREFUeNrt3OtS2kAYgGE2AUFFsQIe8Kyo1CKoKFZLS4VSOZsD938tVasYRBI6ko6z+z6/lRnfmSxfkl0DAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4cPRYwjfxGSFXq6Nm1zedm6RUsaK3PR/ZOalizTce/iZ/3H/ymXSxqrljPxTuZIx1pvny0bEmsYhFLGIR64PECi/v7u/Eg8TyjqVvfO/ez1ztYkIQyyOWvt95GrtvU4JY7rHW2/27lGqMWK6xwiXHLV1eI5ZbrJWu4wa4Nksst1h7tiNWJ0kst1gZZyxjhVhusXYtR6x2nFhusRJtR6zKNLHcYoUuX1pZGa9BS4vvbUeFunPWUr0fq+T1Zainm7ZVXdeUjSU2nmrZPxY9fklsPw77jZS694YiXqjfGd1fWc8hK/GUtRJT+KmDPp9aX57xnN6nr58n/fOQurHGox/3pwwjrRHLdcHa6rx8bzZXieXmU835GrUcJdZo4Ut74J3zaZBYIxesI3PwDb2xK4g1wnr79X6GepJYI368Mrz749sMsd4ydWEPx7LyOrHeuH0+MN7aWNTdEsQastp8extWbVHxWJGdfPrVDBX9OWrP2lVE6VjRS7Nn3aw4r6/gqT1qh5/5RVM4Vuj8MUzN8XhZ7N6N3g/ZXhPKxtIOzKGxYKnhtnu0uqBsrP5KbuWex4KZkvtW22JY0VjR8ssbxM2/11cwZ7lvTDYONSVjhQr267FAbHe9tnG3UirGGlzJ7a8PY0H8t/em9/KcgrGS9cGx4EgLRK7sMU4InIWUizVbGhoL9Kw1znkKIy0Ui6Xnh8JUDtvjnT5pLKkVS2wNr+S2Me5ZnYGnNfLHGmclH806CSoUa6yV3EV3RygTS8ua7zw0d7uoSiyx0Xn3EcPraUViLVTffx7TzOpKxAoX7ffH6rU3VYilZczeJNQWFIiVak3oYPTT0xqZY82VJ3WM3MxokseaKtiTitVrrckdS6SN3uTczEkdy/0J+z8vW4WQxLFmS5P97xcPWwKljZXInUzWwZS8scTEyXoZFuejflhtyRirW7/1Q8OSMZaP5IoV+eFnK3Nfqlhi+azom4vPkYBcNN0/IgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//gDufzXGjPh0CAAAAAASUVORK5CYII=";

var script = {
  components: {
    BLink,
    BCard,
    BCardBody,
    BCardImgLazy
  },
  props: ["post"],
  computed: {
    mainImage() {
      return this.post.image !== "" ? this.post.image : placeholder;
    },
    mainImagelazy() {
      return this.post.imageLazy !== "" ? this.post.imageLazy : placeholder;
    },
    url() {
      if (this.post.keyword && this.post.keyword !== "") {
        return "/" + this.post.keyword;
      } else {
        return "/blog/post/" + this.post.id;
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
    { staticClass: "card-post", attrs: { "no-body": "" } },
    [
      _c(
        "b-link",
        { staticClass: "card-post_image_wrapper", attrs: { to: _vm.url } },
        [
          _vm.$vuefront.isAMP
            ? _c("amp-img", {
                staticClass: "card-post__image",
                attrs: { src: _vm.mainImage, width: "246", height: "153" }
              })
            : _c("b-card-img-lazy", {
                staticClass: "card-post__image",
                attrs: {
                  fluid: "",
                  src: _vm.mainImage,
                  "blank-src": _vm.mainImagelazy
                }
              })
        ],
        1
      ),
      _vm._v(" "),
      _c("b-card-body", { staticClass: "pt-0" }, [
        _c("h3", { staticClass: "h6 mb-0 card-post__title" }, [
          _vm._v(_vm._s(_vm.post.title))
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "card-post__description text-sm mb-3",
          domProps: { innerHTML: _vm._s(_vm.post.shortDescription) }
        })
      ])
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
  

  
  var thumb = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default thumb;
