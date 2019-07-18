<template>
  <section class="blog-category">
    <template v-if="loaded">
      <vf-template-category-blog :category="category" :posts="posts" :grid-size="gridSize" />
    </template>
    <template v-else>
      <vf-loader-category-blog-page :grid-size="gridSize" />
    </template>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import categoryPageGql from "vuefront/graphql/blog/category/page.graphql";
import { BaseModule } from "vuefront/lib/utils/module.js";

export default {
  head() {
    return {
      title: this.category.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.category.description
        }
      ]
    };
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
        query: categoryPageGql,
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
