<template>
  <section class="blog-category">
    <vf-category-blog :category="category" class="mb-5"/>
    <vf-posts-grid :posts="posts.content" :grid-size="gridSize"/>
    <vf-pagination :page="page" :totalPages="totalPages" @input="handleChangePage"/>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import categoryPageGql from "~/graphql/blog/category/page.graphql";
import { BaseModule } from "~/utils/module.js";

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
  computed: {
    ...mapGetters({
      posts: "blog/post/list",
      category: "blog/category/get"
    }),
    gridSize() {
        if(this.checkModules('columnLeft') && this.checkModules('columnRight')) {
            return 2
        } else if(this.checkModules('columnLeft') || this.checkModules('columnRight')) {
            return 3
        } else {
            return 4
        }
    }
  },
  mixins: [BaseModule],
  watchQuery: true,
  methods: {
    async handleChangePage(page) {
      this.$router.push({
        path: "/blog/category/" + this.$route.params.id,
        query: { page }
      });
    }
  },
  async asyncData({ store, route, params, app }) {
    const page = route.query.page ? Number(route.query.page) : 1;

    let {id} = app.$vuefront.params

    await store.dispatch("apollo/query", {
      query: categoryPageGql,
      variables: { page, size: 12, categoryId: id }
    });

    const { postsList, categoryBlog } = store.getters["apollo/get"];

    store.commit("blog/post/setEntities", postsList);
    store.commit("blog/category/setCategory", categoryBlog);

    return {
      page,
      totalPages: postsList.totalPages
    };
  }
};
</script>
