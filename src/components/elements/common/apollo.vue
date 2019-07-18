<template>
  <div>
    <template v-if="loading">
      <slot name="loader">
        <vf-loader-common />
      </slot>
    </template>
    <slot v-else :data="data"></slot>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { isUndefined } from "lodash";
export default {
  props: ["query", "variables"],
  data() {
    const prefetchData = this.$store.getters["apollo/prefetchData"];
    let query = this.query;
    if (this.$parent.$options.query) {
      query = this.$parent.$options.query;
    }
    const hashCode = this.hashCode(
      JSON.stringify({ query, variables: this.variables })
    );

    let data = {};
    let error = {};
    let loading = true;

    if (!isUndefined(prefetchData[hashCode])) {
      data = prefetchData[hashCode].data;
      loading = prefetchData[hashCode].loading;
    }

    return {
      data,
      error,
      loading
    };
  },
  watch: {
    $route(to, from) {
      this.loadData();
    }
  },
  watchQuery: true,
  computed: {
    ...mapGetters({
      prefetchData: "apollo/prefetchData"
    }),
    componentHash() {
      let query = this.query;
      if (this.$parent.$options.query) {
        query = this.$parent.$options.query;
      }
      return this.hashCode(
        JSON.stringify({ query, variables: this.variables })
      );
    }
  },
  serverPrefetch() {
    return this.loadData(true);
  },
  mounted() {
    if (this.loading) {
      this.loadData();
    }
  },
  methods: {
    loadData(ssr = false) {
      return new Promise((resolve, rejects) => {
        let query = this.query;
        if (this.$parent.$options.query) {
          query = this.$parent.$options.query;
        }
        this.$vfapollo
          .query({
            query,
            variables: this.variables ? this.variables : {}
          })
          .then(({ data }) => {
            if (ssr) {
              this.$store.commit("apollo/setPrefetchData", {
                key: this.componentHash,
                data: { data, loading: false }
              });
            }
            this.data = data;
            this.loading = false;
            resolve();
          })
          .catch(e => {
            if (ssr) {
              this.$store.commit("apollo/setPrefetchData", {
                key: this.componentHash,
                data: { error: {}, loading: false }
              });
            }
            this.error = {};
            this.loading = false;
            rejects(e);
          });
      });
    },
    hashCode(str) {
      var hash = 0,
        i,
        chr;
      if (str.length === 0) return hash;
      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
      }
      return hash;
    }
  }
};
</script>
