<template>
  <section class="section-page">
    <vf-a-heading level="2" class="display-4 mb-4" v-html="page.title"/>
    <div v-html="page.description"></div>
  </section>
</template>
<script>
export default {
  props: {
    page: {
      type: Object,
      default() {
        return null;
      }
    }
  }
};
</script>
