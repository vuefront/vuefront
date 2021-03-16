<template>
  <div class="vf-e-common-search">
    <vf-m-input-group>
      <vf-a-input
        v-model="keyword"
        :placeholder="$t('elements.common.header.navSearch.placeholderText')"
        size="sm"
        :hide-details="!$vuefront.isAMP"
        @keypress="handleKeyPress"
      />
      <template #append>
        <vf-a-button size="sm" color="primary" @click="handleSearch">
          <vf-a-icon :icon="mdiMagnify" />
        </vf-a-button>
      </template>
    </vf-m-input-group>
  </div>
</template>
<script>
import { mdiMagnify } from "@mdi/js";
export default {
  data() {
    return {
      keyword: "",
      mdiMagnify,
    };
  },
  watch: {
    $route(to, from) {
      if (to.matched[0].path === "/search/:slug") {
        this.keyword = to.params.slug;
      } else {
        this.keyword = "";
      }
    },
  },
  watchQuery: true,
  beforeMount() {
    if (
      this.$route.matched.length > 0 &&
      this.$route.matched[0].path === "/search/:slug"
    ) {
      this.keyword = this.$route.params.slug;
    }
  },
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
    },
  },
};
</script>
