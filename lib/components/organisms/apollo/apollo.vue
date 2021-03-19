<template>
  <div
    class="vf-o-apollo"
    :class="{
      'vf-o-apollo--loading': loading,
      'vf-o-apollo--loaded': !loading,
    }"
  >
    <template v-if="loading">
      <slot name="loader">
        <vf-a-loader />
      </slot>
    </template>
    <span v-else>
      <slot :data="data"></slot>
    </span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import isUndefined from "lodash/isUndefined";
export default {
  props: ["query", "variables"],
  computed: {
    ...mapGetters({
      prefetchData: "apollo/prefetchData",
    }),
    data() {
      let data = {};

      if (!isUndefined(this.prefetchData[this.componentHash])) {
        data = this.prefetchData[this.componentHash].data;
      }

      return data;
    },
    loading() {
      let loading = true;

      if (!isUndefined(this.prefetchData[this.componentHash])) {
        loading = this.prefetchData[this.componentHash].loading;
      }

      return loading;
    },
    componentHash() {
      let query = this.query;
      if (this.$parent.$options.query) {
        query = this.$parent.$options.query;
      }
      return this.hashCode(
        JSON.stringify({ query, variables: this.variables })
      );
    },
  },
  watch: {
    $route(to, from) {
      this.loadData();
    },
  },
  watchQuery: true,
  serverPrefetch() {
    return this.loadData(true);
  },
  mounted() {
    if (this.loading) {
      this.loadData();
    } else {
      this.$emit("loaded", this.data);
    }
  },
  methods: {
    loadData(ssr = false) {
      return new Promise((resolve, reject) => {
        let query = this.query;
        if (this.$parent.$options.query) {
          query = this.$parent.$options.query;
        }
        this.$vfapollo
          .query({
            query,
            variables: this.variables ? this.variables : {},
          })
          .then(({ data }) => {
            this.$emit("loaded", data);
            this.$store.commit("apollo/setPrefetchData", {
              key: this.componentHash,
              data: { data, loading: false },
            });
            resolve();
          })
          .catch((e) => {
            this.$store.commit("apollo/setPrefetchData", {
              key: this.componentHash,
              data: { error: {}, loading: false },
            });

            reject(e);
          });
      });
    },
    hashCode(str) {
      let hash = 0;
      let i;
      let chr;
      if (str.length === 0) return hash;
      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
      }
      return hash;
    },
  },
};
</script>
