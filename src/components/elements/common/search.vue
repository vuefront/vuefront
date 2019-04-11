<template>
  <section class="search-section">
    <div class="h1 mb-3">Search</div>
    <b-row>
      <b-col sm="12" md="4">
        <b-form-group label="Search Criteria" label-for="input-criteria">
          <b-form-input id="input-criteria" v-model="keyword" trim/>
        </b-form-group>
        <div class="text-sm-left">
          <b-button variant="primary" @click="handleSearch">Search</b-button>
        </div>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import BContainer from "bootstrap-vue/es/components/layout/container";
import BButton from "bootstrap-vue/es/components/button/button";
import BFormGroup from "bootstrap-vue/es/components/form-group/form-group";
import BFormInput from "bootstrap-vue/es/components/form-input/form-input";
export default {
  components: {
    BRow,
    BCol,
    BContainer,
    BButton,
    BFormGroup,
    BFormInput
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
