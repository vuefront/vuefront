<template>
  <vf-o-layout class="blog-category">
    <template v-if="loaded">
      <vf-t-blog-category :category="category" :posts="posts" :grid-size="gridSize" />
    </template>
    <template v-else>
      <vf-l-t-blog-category :grid-size="gridSize" />
    </template>
  </vf-o-layout>
</template>
<script>
import { mapGetters } from "vuex";
import { BaseModule } from "vuefront/lib/utils/module.js";

export default {
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
          content: this.category.meta.description
        },
        {
          name: "keywords",
          content: this.category.meta.keyword
        }
      ]
    };
  },
  breadcrumbs() {
    return [
      {
        title: this.category.meta.title,
        to: this.$route.path
      }
    ];
  },
  props: ["id", "keyword", "url"],
  data() {
    const page = this.$route.query.page ? Number(this.$route.query.page) : 1;
    return {
      loaded: true,
      page
    };
  },
  computed: {
    ...mapGetters({
      posts: "blog/post/list",
      category: "blog/category/get"
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
    }
  },
  serverPrefetch() {
    return this.handleLoadData(this);
  },
  mounted() {
    if (!this.loaded) {
      this.handleLoadData();
    }
  },
  asyncData(ctx) {
    return {
      loaded: !process.client
    };
  },
  mixins: [BaseModule],
  watchQuery: true,
  methods: {
    async handleLoadData(ctx) {
      let { id } = this.$vuefront.params;
      await this.$store.dispatch("apollo/query", {
        query: this.$options.query,
        variables: { page: this.page, size: 12, categoryId: id }
      });

      const { postsList, categoryBlog } = this.$store.getters["apollo/get"];

      this.$store.commit("blog/post/setEntities", postsList);
      this.$store.commit("blog/category/setCategory", categoryBlog);

      this.loaded = true;
    },
    async handleChangePage(page) {
      this.$router.push({
        path: "/blog/category/" + this.$route.params.id,
        query: { page }
      });
    }
  }
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
    categories {
      id
      name
      image
      imageLazy
      keyword
    }
    meta {
      title
      description
      keyword
    }
  }
}
</graphql>