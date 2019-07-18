<template>
  <vf-product v-if="loaded" :product="product"/>
  <vf-loader-product v-else/>
</template>
<script>
import { mapGetters } from "vuex";
import productGetGql from "vuefront/graphql/store/product/get.graphql";
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
  data() {
    return {
      loaded: true
    };
  },
  computed: {
    ...mapGetters({
      product: "store/product/get"
    })
  },
  mounted() {
    if (!this.loaded) {
      this.handleLoadData();
    }
  },
  asyncData(ctx) {
    return {
      loaded: !process.client
    };
  },
  serverPrefetch() {
    return this.handleLoadData(this);
  },
  methods: {
    async handleLoadData(ctx) {
      let { id } = this.$vuefront.params;
      await this.$store.dispatch("apollo/query", {
        query: productGetGql,
        variables: { id, limit: 5 }
      });
      const { product } = this.$store.getters["apollo/get"];
      this.$store.commit("store/product/setProduct", product);
      this.loaded = true;
    }
  }
};
</script>
