<template>
  <section class="section-page">
    <h2 class="display-4 mb-4" v-html="page.title"/>
    <p v-html="page.description"/>
  </section>
</template>
<script>
export default {
  props: ["page"]
};
</script>
