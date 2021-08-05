<template>
  <vf-t-common-layout class="blog-category">
    <template v-if="loaded">
      <vf-t-blog-category
        :category="category"
        :posts="posts"
        :grid-size="gridSize"
      />
    </template>
    <template v-else>
      <vf-l-t-blog-category :grid-size="gridSize" />
    </template>
  </vf-t-common-layout>
</template>
<script>
import { mapGetters } from "vuex";
import { BaseModule } from "vuefront/lib/utils/module.js";

export default {
  mixins: [BaseModule],
  props: ["id", "keyword", "url"],
  asyncData(ctx) {
    return {
      loaded: !process.client,
    };
  },
  data() {
    const page = this.$route.query.page ? Number(this.$route.query.page) : 1;
    return {
      loaded: true,
      page,
    };
  },
  head() {
    if (!this.category.meta) {
      return {};
    }
    return {
      title: this.category.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.category.meta.description,
        },
        {
          name: "keywords",
          content: this.category.meta.keyword,
        },
      ],
    };
  },
  breadcrumbs() {
    return [
      {
        title: this.category.meta.title,
        to: this.$route.path,
      },
    ];
  },
  computed: {
    ...mapGetters({
      posts: "blog/post/list",
      category: "blog/category/get",
    }),
    gridSize() {
      if (this.checkModules("columnLeft") && this.checkModules("columnRight")) {
        return 2;
      } else if (
        this.checkModules("columnLeft") ||
        this.checkModules("columnRight")
      ) {
        return 3;
      } else {
        return 4;
      }
    },
  },
  serverPrefetch() {
    return this.handleLoadData(this);
  },
  watch: {
    loaded(newValue, oldValue) {
      if (!newValue && oldValue) {
        this.handleLoadData();
      }
    },
  },
  watchQuery: true,
  mounted() {
    if (!this.loaded) {
      this.handleLoadData();
    }
  },

  methods: {
    async handleLoadData(ctx) {
      const { id } = this.$vuefront.params;
      await this.$store.dispatch("apollo/query", {
        query: this.$options.query,
        variables: { page: this.page, size: 12, categoryId: id },
      });

      const { postsList, categoryBlog } = this.$store.getters["apollo/get"];

      this.$store.commit("blog/post/setEntities", postsList);
      this.$store.commit("blog/category/setCategory", categoryBlog);

      this.loaded = true;
    },
    handleChangePage(page) {
      this.$router.push({
        path: "/blog/category/" + this.$route.params.id,
        query: { page },
      });
    },
  },
};
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
