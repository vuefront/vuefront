<template>
  <vf-o-form @submit="onSubmit">
    <vf-m-field id="input-keyword">
      <template #label>{{$t('elements.common.search.keywordEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="keyword" @keypress.stop="handleKeyPress" trim />
      </template>
    </vf-m-field>
    <template #button>{{$t('elements.common.search.buttonSearch')}}</template>
  </vf-o-form>
</template>
<script>
export default {
  data() {
    return {
      keyword: this.$route.params.slug
    };
  },
  methods: {
    onSubmit() {
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
