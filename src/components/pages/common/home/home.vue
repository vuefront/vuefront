<template>
  <vf-t-common-layout class="vf-p-common-home"></vf-t-common-layout>
</template>
<graphql>
{
	home {
    meta {
      title
      description
      keyword
    }
  }
}
</graphql>
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
      title: "",
      description: "",
      keyword: "",
      loaded: false,
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        {
          name: "keywords",
          content: this.keyword,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      error: "vuefront/error",
    }),
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
  serverPrefetch() {
    return this.handleLoadData();
  },
  methods: {
    async handleLoadData() {
      await this.$store.dispatch("apollo/query", {
        query: this.$options.query,
      });
      if (!this.error) {
        const { home } = this.$store.getters["apollo/get"];

        this.title = home.meta.title;
        this.description = home.meta.description;
        this.keyword = home.meta.keyword;
        this.loaded = true;
      }
    },
  },
};
</script>
