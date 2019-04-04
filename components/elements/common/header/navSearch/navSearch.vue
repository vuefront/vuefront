<template>
  <div>
    <v-text-field
      v-model="keyword"
      label="Search"
      class="ma-0 pa-0"
      hide-details
      @keypress="handleKeyPress"
    />
  </div>
</template>
<script>
import { VTextField } from 'vuetify/lib'
export default {
  name: "vfCommonNavSearchDefault",
  components: {
    VTextField
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
