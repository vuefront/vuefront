<template>
  <section class="blog-category">
    <vf-category-blog :category="category" class="mb-5"/>
    <vf-posts-grid :posts="posts.content"/>
    <vf-pagination :page="page" :totalPages="totalPages" @input="handleChangePage"/>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import categoryPageGql from "~/graphql/blog/category/page.graphql";

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
  computed: {
    ...mapGetters({
      posts: "blog/post/list",
      category: "blog/category/get"
    })
  },
  watchQuery: true,
  methods: {
    async handleChangePage(page) {
      this.$router.push({
        path: "/blog/category/" + this.$route.params.id,
        query: { page }
      });
    }
  },
  async asyncData({ store, route, params }) {
    const page = route.query.page ? Number(route.query.page) : 1;

    await store.dispatch("apollo/query", {
      query: categoryPageGql,
      variables: { page, size: 12, categoryId: Number(params.id) }
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
