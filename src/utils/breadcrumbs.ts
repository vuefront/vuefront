import { useStore } from "vuex";
import isUndefined from "lodash-es/isUndefined";
import isEmpty from "lodash-es/isEmpty";
import { useRoute, useRouter } from "vue-router";
import { computed, inject, onServerPrefetch } from "vue";
interface IBreadcrumbsOptions {}
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
