<template>
  <vf-product :product="product"/>
</template>
<script>
import { mapGetters } from "vuex";
import {isEmpty} from 'lodash'
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
  async fetch(ctx) {
    let {id} = ctx.app.$vuefront.params
    await ctx.store.dispatch("apollo/query", {
      query: productGetGql,
      variables: { id, limit: 5 }
    });
    const { product } = ctx.store.getters["apollo/get"];
    ctx.store.commit("store/product/setProduct", product);
  }
};
</script>
