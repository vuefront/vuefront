<template>
  <section class="search-section">
    <div class="h1 mb-3">{{$t('elements.common.search.titleText')}}</div>
    <b-row>
      <b-col sm="12" md="4">
        <b-form-group :label="$t('elements.common.search.keywordEntry')" label-for="input-criteria">
          <b-form-input id="input-criteria" v-model="keyword" trim @keypress="handleKeyPress"/>
        </b-form-group>
        <div class="text-sm-left">
          <b-button
            variant="primary"
            @click="handleSearch"
          >{{$t('elements.common.search.buttonSearch')}}</b-button>
        </div>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import {
  BRow,
  BCol,
  BButton,
  BFormGroup,
  BFormInput
} from "bootstrap-vue";
export default {
  components: {
    BRow,
    BCol,
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
      if (this.keyword !== "") {
        this.$router.push(`/search/${this.keyword}`);
      } else {
        this.$router.push("/search");
      }
    },
    handleKeyPress(e) {
      if (e.key === "Enter") {
        if (this.keyword !== "") {
          this.$router.push(`/search/${this.keyword}`);
        } else {
          this.$router.push("/search");
        }
      }
    }
  }
};
</script>
