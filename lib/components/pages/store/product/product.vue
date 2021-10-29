<template>
  <vf-t-store-product
    :product="product"
    :quantity="quantity"
    @change-quantity="quantity = $event"
  />
</template>
<script lang="ts" setup>
import gql from "graphql-tag";
import { computed, inject, ref } from "vue";
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import useQuery from "../../../../utils/query";
const quantity = ref(1);
const store = useStore();
const category = ref<any>(null);
const { meta } = useMeta({});
const { onLoad } = useBreadcrumbs();
const { query } = useQuery();
const route = useRoute();
const vuefront$ = inject<any>("$vuefront");
const vfapollo$ = inject<any>("$vfapollo");
const product = computed(() => store.getters["store/product/get"]);
const handleLoadData = async () => {
  const { id } = vuefront$.params;
  await store.dispatch("apollo/query", {
    query,
    variables: { id, limit: 5 },
  });
  const { product } = store.getters["apollo/get"];
  store.commit("store/product/setProduct", product);
  meta.title = product.meta.title;
  meta.description = product.meta.description;
  meta.keywords = product.meta.keyword;
  const items = [];

  if (route.query.category_id) {
    const { data } = await vfapollo$.query({
      query: gql`
        query ($id: String) {
          category(id: $id) {
            id
            name
            url(url: "/store/category/_id")
            meta {
              title
            }
          }
        }
      `,
      variables: { id: route.query.category_id },
    });
    category.value = data.category;
    if (category.value.meta.title) {
      items.push({
        title: category.value.meta.title,
        to: category.value.url,
      });
    }
  }
  onLoad([
    ...items,
    {
      title: product.meta.title,
      to: route.path,
    },
  ]);
};

await handleLoadData();
</script>
<graphql>
  query($id: String, $limit: Int) {
      product(id: $id) {
          id
          name
          shortDescription
          description
          model
          stock
          price
          special
          image
          reviews {
              author
              author_email
              content
              created_at
              rating
          }
          options {
              id
              name
              type
              values {
                  id
                  name
              }
          }
          imageLazy
          imageBig
          rating
          extra {
            name
            value
          }
          manufacturer {
            id
            name
            image
            imageLazy
            url(url: "/store/manufacturer/_id")
          }
          images(limit: $limit) {
              image
              imageLazy
              imageBig
          }
          attributes {
              name
              options
          }
          meta {
            title
            description
            keyword
          }
      }
  }
</graphql>
