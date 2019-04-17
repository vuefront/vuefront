<template>
  <div>
    <vf-loader v-if="loading"/>
    <slot v-else :data="data"></slot>
  </div>
</template>
<script>
export default {
  props: ["query", "variables"],
  data() {
    return {
      loading: true,
      data: {},
      error: {}
    };
  },
  async mounted() {
    try {
      const { data } = await this.$vfapollo.query({
        query: this.query,
        variables: this.variables ? this.variables : {}
      });
      this.data = data;
      this.loading = false;
    } catch (e) {
      this.error = {};
    }
  }
};
</script>
