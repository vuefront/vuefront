<template>
  <vf-post v-if="loaded" :post="post" />
  <vf-post-loader v-else />
</template>
<script>
import { mapGetters } from "vuex";
import postGetGql from "~/graphql/blog/post/get.graphql";

export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.shortDescription
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
      post: "blog/post/get"
    })
  },
  mounted() {
    if (!this.loaded) {
      this.handleLoadData();
    }
  },
  asyncData() {
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
        query: postGetGql,
        variables: { id }
      });
      const { post } = this.$store.getters["apollo/get"];

      this.$store.commit("blog/post/setPost", post);
      this.loaded = true;
    }
  }
};
</script>
