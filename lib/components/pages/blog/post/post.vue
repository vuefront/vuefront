<template>
  <vf-o-layout>
    <vf-t-blog-post v-if="loaded" :post="post" />
    <vf-l-t-blog-post v-else />
  </vf-o-layout>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  asyncData(ctx) {
    return {
      loaded: !process.client,
    };
  },
  data() {
    return {
      loaded: true,
    };
  },
  head() {
    if (!this.post.meta) {
      return {};
    }
    return {
      title: this.post.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.meta.description,
        },
        {
          name: "keywords",
          content: this.post.meta.keyword,
        },
      ],
    };
  },
  breadcrumbs() {
    return [
      {
        title: this.post.meta.title,
        to: this.$route.path,
      },
    ];
  },
  computed: {
    ...mapGetters({
      post: "blog/post/get",
    }),
  },
  mounted() {
    if (!this.loaded) {
      this.handleLoadData();
    }
  },
  serverPrefetch() {
    return this.handleLoadData(this);
  },
  methods: {
    async handleLoadData(ctx) {
      const { id } = this.$vuefront.params;
      await this.$store.dispatch("apollo/query", {
        query: this.$options.query,
        variables: { id },
      });
      const { post } = this.$store.getters["apollo/get"];

      this.$store.commit("blog/post/setPost", post);
      this.loaded = true;
    },
  },
};
</script>
<graphql>
query($id: String) {
  post(id: $id) {
    id
    title
    description
    image
    imageLazy
    datePublished
    rating
    meta {
      title
      description
      keyword
    }
    categories {
      id
      name
      url(url: "/blog/category/_id")
    }
    prev {
      id
      name
      image
      imageLazy
      shortDescription
      keyword
    }
    next {
      id
      name
      image
      imageLazy
      shortDescription
      keyword
    }
    reviews {
      totalElements
      content {
        author
        author_email
        content
        created_at
        rating
      }
    }
  }
}
</graphql>
