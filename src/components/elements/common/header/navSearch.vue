<template>
  <div>
    <b-form-input
      v-model="keyword"
      :placeholder="$t('elements.common.header.navSearch.placeholderText')"
      size="sm"
      hide-details
      @keypress="handleKeyPress"
    />
  </div>
</template>
<script>
import BFormInput from "bootstrap-vue/es/components/form-input/form-input";
export default {
  components: {
    BFormInput
  },
  data() {
    return {
      keyword: ""
    };
  },
  watch: {
    $route(to, from) {
      if (to.matched[0].path === "/search/:slug") {
        this.keyword = to.params.slug;
      } else {
        this.keyword = ''
      }
    }
  },
  watchQuery: true,
  methods: {
    handleKeyPress(e) {
      if (e.key === "Enter") {
        this.$router.push(`/search/${this.keyword}`);
      }
    }
  },
  beforeMount() {
    if (this.$route.matched[0].path === "/search/:slug") {
      this.keyword = this.$route.params.slug;
    }
  }
};
</script>
