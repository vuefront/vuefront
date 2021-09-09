<template>
  <vf-t-common-layout class="blog-category">
    <vf-t-blog-category
      v-if="loaded"
      :category="category"
      :posts="posts"
      :grid-size="gridSize"
    />
    <vf-l-t-blog-category v-else :grid-size="gridSize" />
  </vf-t-common-layout>
</template>
<script lang="ts" setup>
import { mapGetters } from "vuex";
import useModule from "../../../../utils/module";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  onServerPrefetch,
  ref,
  watch,
} from "vue";
import { useMeta } from "vue-meta";
import useQuery from "../../../../utils/query";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
const { onLoad } = useBreadcrumbs();
const route = useRoute();
const router = useRouter();
const store = useStore();
const { query } = useQuery();
const i18n = useI18n();
const { meta } = useMeta({});
const { checkModules } = useModule();
const vuefront$ = inject<any>("$vuefront");
const page = ref(route.query.page ? Number(route.query.page) : 1);
const props = defineProps({
  loaded: {
    type: Boolean,
    default: () => false,
  },
});

const handleLoadData = async () => {
  const { id } = vuefront$.params;
  await store.dispatch("apollo/query", {
    query,
    variables: { page: page.value, size: 12, categoryId: id },
  });

  const { postsList, categoryBlog } = store.getters["apollo/get"];

  store.commit("blog/post/setEntities", postsList);
  store.commit("blog/category/setCategory", categoryBlog);

  meta.title = categoryBlog.name;
  meta.description = categoryBlog.meta.description;
  meta.keywords = categoryBlog.meta.keywords;

  onLoad([
    {
      title: categoryBlog.meta.title,
      to: route.path,
    },
  ]);
};
const posts = computed(() => store.getters["blog/post/list"]);
const category = computed(() => store.getters["blog/category/get"]);
const gridSize = computed(() => {
  if (checkModules("columnLeft") && checkModules("columnRight")) {
    return 2;
  } else if (checkModules("columnLeft") || checkModules("columnRight")) {
    return 3;
  } else {
    return 4;
  }
});
onServerPrefetch(() => handleLoadData());
const handleChangePage = (page: number) => {
  router.push({
    path: "/blog/category/" + route.params.id,
    query: { page },
  });
};

await handleLoadData();

watch(
  () => route,
  () => {
    handleLoadData();
  },
  {
    deep: true,
  }
);
</script>
<graphql>
query($page: Int, $size: Int, $categoryId: String) {
  postsList(page: $page, size: $size, category_id: $categoryId) {
    content {
      id
      title
      description
      shortDescription
      image
      imageLazy
      url(url: "/blog/post/_id")
      keyword
      reviews {
        totalElements
      }
      categories {
        id
        name
        url(url: "/blog/category/_id")
      }
    }
    number
    totalPages
    totalElements
  }
  categoryBlog(id: $categoryId) {
    id
    name
    description
    url(url: "/blog/category/_id")
    categories {
      id
      name
      image
      imageLazy
      keyword
      url(url: "/blog/category/_id")
    }
    meta {
      title
      description
      keyword
    }
  }
}
</graphql>
