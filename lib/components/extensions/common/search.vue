<template>
  <div class="mb-3">
     <b-input-group>
    <b-form-input
      v-model="keyword"
      :placeholder="$t('elements.common.header.navSearch.placeholderText')"
      size="sm"
      :hide-details="!$vuefront.isAMP"
      @keypress="handleKeyPress"
    />
    <b-input-group-append>
      <b-button size="sm" variant="primary" @click="handleSearch"><vf-a-icon icon="search"/></b-button>
    </b-input-group-append>
    </b-input-group>
  </div>
</template>
<script>
import { BFormInput, BInputGroup, BInputGroupAppend, BButton  } from "bootstrap-vue";
export default {
  components: {
    BFormInput, BInputGroup,BInputGroupAppend, BButton
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
        this.keyword = "";
      }
    }
  },
  watchQuery: true,
  methods: {
    handleKeyPress(e) {
      if (e.key === "Enter") {
        if (this.keyword !== "") {
          this.$router.push(`/search/${this.keyword}`);
        } else {
          this.$router.push("/search");
        }
      }
    },
    handleSearch(e) {
        if (this.keyword !== "") {
          this.$router.push(`/search/${this.keyword}`);
        } else {
          this.$router.push("/search");
        }
    }
  },
  beforeMount() {
    if (
      this.$route.matched.length > 0 &&
      this.$route.matched[0].path === "/search/:slug"
    ) {
      this.keyword = this.$route.params.slug;
    }
  }
};
</script>
