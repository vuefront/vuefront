<template>
  <vf-t-product v-if="loaded" :product="product" />
  <vf-loader-product v-else />
</template>
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
<script>
import { mapGetters } from "vuex";
export default {
  head() {
    if(!this.product.meta) {
      return {}
    }
    return {
      title: this.product.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.product.meta.description
        },
        {
          name: "keywords",
          content: this.product.meta.keyword
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
        query: this.$options.query,
        variables: { id, limit: 5 }
      });
      const { product } = this.$store.getters["apollo/get"];
      this.$store.commit("store/product/setProduct", product);
      this.loaded = true;
    }
  }
};
</script>
