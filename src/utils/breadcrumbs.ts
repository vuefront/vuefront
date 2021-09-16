import { useStore } from "vuex";
interface IBreadcrumbs {
  title: string;
  to: string;
}
export default function useBreadcrumbs() {
  const store = useStore();

  store.dispatch("common/breadcrumbs/init");

  const onLoad = async (items: IBreadcrumbs[]) => {
    await store.dispatch("common/breadcrumbs/load", items);
  };

  return { onLoad };
}
