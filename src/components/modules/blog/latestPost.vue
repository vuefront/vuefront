<template>
  <vf-apollo>
    <template #loader>
      <vf-loader-post-module :column="column" />
    </template>
    <template #default="{data}">
      <vf-post-module
        :items="data.latestPosts.content"
        :column="column"
      >{{$t('modules.blog.latestPost.textTitle')}}</vf-post-module>
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
  }
};
</script>
<graphql>
{
  latestPosts: postsList(page: 1, size: 4, sort: "date_added", order: "DESC") {
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
