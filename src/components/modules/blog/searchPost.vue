<template>
  <ApolloQuery
    :query="require('../../../graphql/modules/searchPost.graphql')"
    :variables="{search:keyword}"
  >
    <template slot-scope="{ result: { data }, isLoading }">
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="data.searchPosts.content.length > 0" class="home-page__latest_posts mb-5">
        <div
          class="home-page__latest_posts_title text-sm-center mb-5 h6"
        >Search posts</div>
        <vf-posts-grid :posts="data.searchPosts.content" :column="column"/>
      </div>
    </template>
  </ApolloQuery>
</template>
<script>
import { ApolloQuery } from "vue-apollo";
export default {
  components: {
    ApolloQuery
  },
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
