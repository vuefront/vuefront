<template>
  <vf-post :post="post"/>
</template>
<script lang="ts">
import { Vue, Component, Getter } from "nuxt-property-decorator";
import postGetGql from "~/types/graphql/blog/post/get.graphql";
import { Post } from "~/types";

@Component({
  head() {
    return {
      title: (this as any).post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: (this as any).post.shortDescription
        }
      ]
    };
  }
})
export default class extends Vue {
  @Getter("blog/post/get") post!: Post;

  async fetch({ store, app, params }) {
    await store.dispatch("apollo/query", {
      query: postGetGql,
      variables: { id: Number(params.id) }
    });
    const { post } = store.getters["apollo/get"];

    store.commit("blog/post/setPost", post);
  }
}
</script>