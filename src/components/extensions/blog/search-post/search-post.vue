<template>
  <vf-o-apollo class="vf-e-blog-search-post" :variables="{ search: keyword }">
    <template #loader>
      <span>
        <vf-l-o-post-module :column="column" />
      </span>
    </template>
    <template #default="{ data }">
      <span>
        <vf-o-post-module
          v-if="data.searchPosts.content.length > 0"
          :items="data.searchPosts.content"
          :column="column"
          >{{ $t("modules.blog.searchPost.textTitle") }}</vf-o-post-module
        >
      </span>
    </template>
  </vf-o-apollo>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
defineProps({
  column: {
    type: Boolean,
    default: () => false,
  },
});

const route = useRoute();

const keyword = computed(() => {
  return route.params.slug ? route.params.slug : "";
});
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
