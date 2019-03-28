<template>
  <div class="home-page__latest_posts mb-5">
    <div class="home-page__latest_posts_title text-xs-center mb-5 subheading font-weight-medium">Latest posts
    </div>
    <vf-posts-grid :posts="latestPosts.content" :column="column"/>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator'
import latestPostGraphql from '~/types/graphql/modules/latestPost.graphql'

@Component({
  apollo: {
    latestPosts: latestPostGraphql
  }
})
export default class extends Vue {
  @Prop({default: false})
  column!: boolean
}
</script>
