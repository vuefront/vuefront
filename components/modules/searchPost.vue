<template>
  <ApolloQuery :query="require('~/types/graphql/modules/searchPost.graphql')" :variables="{search:keyword}">
    <template slot-scope="{ result: { data }, isLoading }">
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="data.searchPosts.content.length > 0" class="home-page__latest_posts mb-5">
        <div class="home-page__latest_posts_title text-xs-center mb-5 subheading font-weight-medium">Search posts
        </div>
        <vf-posts-grid  :posts="data.searchPosts.content" :column="column"/>
      </div>
    </template>
  </ApolloQuery>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({default: false})
  column!: boolean

  get keyword() {
    return this.$route.params.slug ? this.$route.params.slug : ''
  }
}
</script>
