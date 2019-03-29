<template>
  <div class="home-page__latest_posts mb-5">
    <div class="home-page__latest_posts_title text-xs-center mb-5 subheading font-weight-medium">Latest posts
    </div>
    <ApolloQuery :query="require('~/types/graphql/modules/latestPost.graphql')">
      <template slot-scope="{ result: { data }, isLoading }">
        <div v-if="isLoading">Loading...</div>
        <vf-posts-grid v-else :posts="data.latestPosts.content" :column="column"/>
      </template>
    </ApolloQuery>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({default: false})
  column!: boolean
}
</script>
