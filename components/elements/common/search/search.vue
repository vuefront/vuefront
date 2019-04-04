<template>
  <section class="search-section">
    <div class="display-1 font-weight-medium mb-3">Search</div>
    <v-layout row wrap>
      <v-flex xs12 md4>
        <v-form ref="form">
          <div class="text-xs-left mb-3">
            <v-label>Search Criteria</v-label>
            <v-text-field v-model="keyword" hide-details solo/>
          </div>
          <div class="left">
            <v-btn color="primary" class="ma-0" @click="handleSearch">Search</v-btn>
          </div>
        </v-form>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
import { VLayout, VFlex, VLabel, VForm, VTextField, VBtn } from "vuetify/lib";
export default {
  name: "vfCommonSearchDefault",
  components: {
    VLayout,
    VFlex,
    VLabel,
    VForm,
    VTextField,
    VBtn
  },
  data() {
    return {
      keyword: this.$route.params.slug
    };
  },
  methods: {
    handleSearch(e) {
      this.$router.push(`/search/${this.keyword}`);
    }
  }
};
</script>
