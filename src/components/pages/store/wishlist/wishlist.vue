<template>
  <vf-t-store-wishlist :wishlist="wishlist" />
</template>
<script lang="ts" setup>
import { mapGetters, useStore } from "vuex";
import useQuery from "../../../../utils/query";
import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import { computed } from "vue";
const { query } = useQuery();
const store = useStore();
const loadData = async () => {
  await store.dispatch("apollo/query", {
    query,
  });

  if (!store.getters["vuefront/error"]) {
    store.commit(
      "store/wishlist/setWishlist",
      store.getters["apollo/get"].wishlist
    );
  }
};
const i18n = useI18n();

useMeta({
  title: i18n.t("pages.store.wishlist.metaTitle"),
});
const route = useRoute();
const { onLoad } = useBreadcrumbs();
onLoad([
  {
    title: i18n.t("pages.store.wishlist.breadcrumbTitle"),
    to: route.path,
  },
]);
const wishlist = computed(() => store.getters["store/wishlist/get"]);
await loadData();
</script>
<graphql>
{
  wishlist {
    id
    name
    model
    price
    image
    imageLazy
    url(url: "/store/product/_id")
    extra {
      name
      value
    }
    manufacturer {
      id
      name
      url(url: "/store/manufacturer/_id")
    }
  }
}
</graphql>
