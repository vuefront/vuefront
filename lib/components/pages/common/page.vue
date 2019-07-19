<template>
  <section class="common-page">
    <vf-page :page="page"/>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import pageGql from "vuefront/graphql/common/page.graphql";

export default {
  head() {
    if(!this.page.meta) {
      return {}
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
