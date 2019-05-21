<template>
  <vf-post :post="post"/>
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
  computed: {
    ...mapGetters({
      post: "blog/post/get"
    })
  },
  async fetch({ store, app, params }) {
    let {id} = app.$vuefront.params
    await store.dispatch("apollo/query", {
      query: postGetGql,
      variables: { id }
    });
    const { post } = store.getters["apollo/get"];

    store.commit("blog/post/setPost", post);
  }
};
</script>
