import isEmpty from "lodash-es/isEmpty";
import isUndefined from "lodash-es/isUndefined";
import { computed, inject } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default function useModule() {
  const vuefront$ = inject<any>("$vuefront");
  const store = useStore();
  const route = useRoute();
  store.commit("position/setParams", vuefront$.params);

  let path = route.path;
  if (route.matched.length > 0) {
    path = route.matched[0].path;
    for (const key in route.params) {
      path = path.replace(`:${key}`, route.params[key].toString());
    }
  }
  store.commit("position/setRoute", path);

  const currentRoute = computed(() => store.getters["position/currentRoute"]);
  const positions = computed(() => store.getters["position/position"]);

  const checkModules = (position: string) => {
    let result = false;
    const status = positions.value(position);

    if (!status) {
      for (const route in vuefront$.layouts) {
        const layout = vuefront$.layouts[route];
        let regexRoute = route.replace("*", ".*");
        regexRoute = regexRoute.replace("//", "\\//");
        const regex = new RegExp("^" + regexRoute + "$", "i");

        if (regex.test(currentRoute.value)) {
          if (!isUndefined(layout[position]) && !isEmpty(layout[position])) {
            result = true;
            break;
          }
          if (
            !isUndefined(layout.extensions) &&
            !isUndefined(layout.extensions[position]) &&
            !isEmpty(layout.extensions[position])
          ) {
            result = true;
            break;
          }
        }
      }
    } else {
      result = status;
    }

    store.commit("position/setPosition", {
      name: position,
      status: result,
      route: currentRoute,
    });

    return result;
  };

  return { checkModules };
}
