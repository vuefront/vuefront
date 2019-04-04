<template>
  <vf-product :product="product"/>
</template>
<script>
import { mapGetters } from "vuex";
import productGetGql from "~/graphql/store/product/get.graphql";
export default {
  head() {
    return {
      title: this.product.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.product.shortDescription
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      product: "store/product/get"
    })
  },
  async fetch({ store, params }) {
    await store.dispatch("apollo/query", {
      query: productGetGql,
      variables: { id: Number(params.id), limit: 3 }
    });
    const { product } = store.getters["apollo/get"];
    store.commit("store/product/setProduct", product);
  }
};
</script>
