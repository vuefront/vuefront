<template>
  <div>
    <b-form-input
      v-model="keyword"
      placeholder="Search"
      size="sm"
      hide-details
      @keypress="handleKeyPress"
    />
  </div>
</template>
<script>
import BFormInput from 'bootstrap-vue/es/components/form-input/form-input'
export default {
  components: {
    BFormInput
  },
  props: {
    keyword: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleKeyPress(e) {
      if (e.key === "Enter") {
        this.$router.push(`/search/${this.keyword}`);
      }
    },
    beforeMount() {
      if (this.$route.matched[0].path === "/search/:slug?") {
        this.keyword = this.$route.params.slug;
      }
    }
  }
};
</script>
