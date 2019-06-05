<template>
  <vf-apollo
    v-slot="{data}"
    :query="require('../../../graphql/modules/searchPost.graphql')"
    :variables="{search:keyword}"
  >
    <div v-if="data.searchPosts && data.searchPosts.content.length > 0" class="home-page__latest_posts mb-5">
      <div class="home-page__latest_posts_title text-sm-center mb-5 h6">{{$t('modules.blog.searchPost.textTitle')}}</div>
      <vf-posts-grid :posts="data.searchPosts.content" :column="column"/>
    </div>
  </vf-apollo>
</template>
<script>
export default {
  props: {
    column: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    keyword() {
      return this.$route.params.slug ? this.$route.params.slug : "";
    }
  }
};
</script>
