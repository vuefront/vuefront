<template>
  <vf-o-layout class="common-page">
    <vf-t-common-page :page="page" />
  </vf-o-layout>
</template>
<script>
import { mapGetters } from "vuex";
import pageGql from "./page.graphql";

export default {
  head() {
    if (!this.page.meta) {
      return {};
    }
    return {
      title: this.page.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.meta.description
        },
        {
          name: "keywords",
          content: this.page.meta.keyword
        }
      ]
    };
  },
  breadcrumbs() {
    return [
      {
        title: this.page.meta.title,
        to: this.$route.path
      }
    ];
  },
  props: ["url", "keyword", "id"],
  computed: {
    ...mapGetters({
      page: "common/page/get"
    })
  },
  async asyncData({ store, params, app }) {
    let { id } = app.$vuefront.params;
    await store.dispatch("apollo/query", {
      query: pageGql,
      variables: { id }
    });

    const { page } = store.getters["apollo/get"];

    store.commit("common/page/setPage", page);
  }
};
</script>
