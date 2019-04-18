<template>
  <section class="module-pages">
    <vf-apollo v-slot="{data}" :query="require('~/graphql/modules/pages.graphql')">
      <h6 class="heading mb-3">Pages</h6>
      <ul class="list-unstyled">
        <li v-for="(value, key) in data.pagesList.content" :key="key">
          <b-link :to="`/page/${value.id}`" v-html="value.title"/>
        </li>
      </ul>
    </vf-apollo>
  </section>
</template>
<script>
import BLink from "bootstrap-vue/es/components/link/link";
export default {
  components: {
    BLink
  }
};
</script>

