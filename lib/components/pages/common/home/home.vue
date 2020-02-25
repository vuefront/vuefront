<template>
  <vf-o-layout class="home-page"></vf-o-layout>
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
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        },
        {
          name: "keywords",
          content: this.keyword
        }
      ]
    };
  },
  data() {
    return {
      title: "",
      description: "",
      keyword: "",
      loaded: false
    };
  },
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    })
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
  serverPrefetch() {
    return this.handleLoadData();
  },
  watchQuery: true,
  watch: {
    loaded(newValue, oldValue) {
      if (!newValue && oldValue) {
        this.handleLoadData();
      }
    }
  },
  methods: {
    async handleLoadData() {
      await this.$store.dispatch("apollo/query", {
        query: this.$options.query
      });
      if (!this.error) {
        const { home } = this.$store.getters["apollo/get"];

        this.title = home.meta.title;
        this.description = home.meta.description;
        this.keyword = home.meta.keyword;
        this.loaded = true;
      }
    }
  }
};
</script>
