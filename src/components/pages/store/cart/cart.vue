<template>
  <vf-t-store-cart :cart="cart" />
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import useQuery from "../../../../utils/query";

const { onLoad } = useBreadcrumbs();
const i18n = useI18n();
const route = useRoute();
const store = useStore();
const { query } = useQuery();
useMeta({
  title: i18n.t("pages.store.cart.metaTitle"),
});
onLoad([
  {
    title: i18n.t("pages.store.cart.breadcrumbTitle"),
    to: route.path,
  },
]);
const cart = computed(() => store.getters["store/cart/get"]);
const handleLoadData = async () => {
  await store.dispatch("apollo/query", {
    query,
  });
  if (!store.getters["vuefront/error"] && store.getters["apollo/get"].cart) {
    store.commit("store/cart/setCart", store.getters["apollo/get"].cart);
  }
};
await handleLoadData();
</script>
<graphql>
query {
    cart {
        products {
            key
            quantity
            total
            option {
                name
                value
                type
            }
            product {
                id
                name
                model
                price
                image
                imageLazy
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
        total
    }
}
</graphql>
