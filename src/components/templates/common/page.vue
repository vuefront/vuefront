<template>
  <section class="common-page">
    <vf-page :page="page"/>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import pageGql from "~/graphql/common/page.graphql";

export default {
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      page: "common/page/get"
    })
  },
  async asyncData({ store, params, app }) {
    let {id} = app.$vuefront.params
    await store.dispatch("apollo/query", {
      query: pageGql,
      variables: { id }
    });

    const { page } = store.getters["apollo/get"];

    store.commit("common/page/setPage", page);
  }
};
</script>
