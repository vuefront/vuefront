<template>
  <vf-o-apollo class="vf-e-blog-latest-post">
    <template #loader>
      <span>
        <vf-l-o-post-module :column="column" />
      </span>
    </template>
    <template #default="{ data }">
      <span>
        <vf-o-post-module :items="data.latestPosts.content" :column="column">{{
          $t("modules.blog.latestPost.textTitle")
        }}</vf-o-post-module>
      </span>
    </template>
  </vf-o-apollo>
</template>
<script lang="ts" setup>
defineProps({
  column: {
    type: Boolean,
    default: () => false,
  },
});
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
