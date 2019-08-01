<template>
  <vf-o-apollo>
    <template #loader>
      <vf-l-post-module :column="column" />
    </template>
    <template #default="{data}">
      <vf-o-post-module
        :items="data.latestPosts.content"
        :column="column"
      >{{$t('modules.blog.latestPost.textTitle')}}</vf-o-post-module>
    </template>
  </vf-o-apollo>
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
