import { useStore } from "vuex";
import { isEmpty, isUndefined } from "lodash";
import { useRoute } from "vue-router";
import { computed, inject } from "vue";

export default function useLayout(name: string) {
  const store = useStore();
  const route = useRoute();
  const vuefront$ = inject<any>("$vuefront");

  if (!isEmpty(name)) {
    store.dispatch("position/loadModules", { position: name });
  }

  let path = route.path;
  if (route.matched.length > 0) {
    path = route.matched[0].path;
    for (const key in route.params) {
      path = path.replace(`:${key}`, route.params[key].toString());
    }
  }

  store.commit("position/setParams", vuefront$.params);
  store.commit("position/setRoute", path);

  const currentRoute = computed(() => store.getters["position/currentRoute"]);
  const modulesList = computed(() => store.getters["position/modules"]);
  const layout = computed(() => store.getters["position/layout"]);

  const modules = computed(() => modulesList.value(name));

  const initLayout = () => {
    let template = "default";
    for (const route in vuefront$.layouts) {
      const layout = vuefront$.layouts[route];
      let regexRoute = route.replace("*", ".*");
      regexRoute = regexRoute.replace("//", "\\//");
      const regex = new RegExp("^" + regexRoute + "$", "i");

      if (regex.test(currentRoute.value)) {
        if (!isUndefined(layout.layout)) {
          template = layout.layout;
        }
      }
    }
    store.commit("position/setLayout", {
      layout: template,
      route: currentRoute.value,
    });
  };

  return { initLayout, layout, modules };
}
