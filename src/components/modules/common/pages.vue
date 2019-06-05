<template>
  <section class="module-pages">
    <vf-apollo v-slot="{data}" :query="require('~/graphql/modules/pages.graphql')">
      <h6 class="heading mb-3">{{$t('modules.common.pages.textTitle')}}</h6>
      <ul class="list-unstyled">
        <li v-for="(value, key) in data.pagesList.content" :key="key">
          <b-link :to="url(value)" v-html="value.title"/>
        </li>
      </ul>
    </vf-apollo>
  </section>
</template>
<script>
import { BLink } from "bootstrap-vue";
export default {
  components: {
    BLink
  },
  methods: {
    url(page) {
      if (page.keyword && page.keyword !== "") {
        return "/" + page.keyword;
      } else {
        return `/page/${page.id}`;
      }
    },
  }
};
</script>

