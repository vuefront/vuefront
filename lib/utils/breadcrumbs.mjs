import { useStore } from "vuex";
export default function useBreadcrumbs() {
  const store = useStore();
  store.dispatch("common/breadcrumbs/init");

  const onLoad = async items => {
    await store.dispatch("common/breadcrumbs/load", items);
  };

  return {
    onLoad
  };
}
//# sourceMappingURL=breadcrumbs.mjs.map