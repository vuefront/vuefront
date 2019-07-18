<template>
  <section class="blog-category">
    <vf-category-blog :category="category" class="mb-5" />
    <vf-posts-grid :posts="posts.content" :grid-size="grid" />
    <vf-pagination :page="posts.number" :totalPages="posts.totalPages" @input="handleChangePage" />
  </section>
</template>
<script>
export default {
  props: ["category", "posts", "gridSize"],
  computed: {
    grid() {
      return this.gridSize
    }
  },
  methods: {
    async handleChangePage(page) {
      this.$router.push({
        path: "/blog/category/" + this.$route.params.id,
        query: { page }
      });
    }
  }
};
</script>
