<template>
  <div class="home-page__latest_posts mb-5">
    <div class="home-page__latest_posts_title text-sm-center mb-5 h6">{{$t('modules.blog.latestPost.textTitle')}}</div>
    <vf-apollo v-slot="{data}" :query="require('../../../graphql/modules/latestPost.graphql')">
      <vf-posts-grid :posts="data.latestPosts.content" :column="column"/>
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
