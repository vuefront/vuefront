<template>
  <div class="home-page__latest_posts mb-5">
    <div class="home-page__latest_posts_title text-sm-center mb-5 h6">Latest posts</div>
    <vf-apollo :query="require('../../../graphql/modules/latestPost.graphql')">
      <template v-slot:default="{data}">
        <vf-posts-grid :posts="data.latestPosts.content" :column="column"/>
      </template>
    </vf-apollo>
  </div>
</template>
<script>
export default {
  props: {
    column: {
      type: Boolean,
      default: false
    }
  }
};
</script>
