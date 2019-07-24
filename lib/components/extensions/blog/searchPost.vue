<template>
  <vf-apollo :variables="{search:keyword}">
    <template #loader>
      <vf-loader-post-module :column="column" />
    </template>
    <template #default="{data}">
      <vf-o-post-module
        v-if="data.searchPosts.content.length > 0"
        :items="data.searchPosts.content"
        :column="column"
      >{{$t('modules.blog.searchPost.textTitle')}}</vf-o-post-module>
    </template>
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
<graphql>
query($search: String) {
  searchPosts: postsList(
    page: 1
    size: 12
    sort: "date_added"
    order: "DESC"
    search: $search
  ) {
    content {
      id
      title
      shortDescription
      image
      imageLazy
      keyword
      categories {
        id
        name
        url(url: "/blog/category/_id")
      }
      reviews {
        totalElements
      }
    }
  }
}
</graphql>