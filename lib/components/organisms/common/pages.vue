<template>
  <vf-apollo v-slot="{data}">
    <section class="module-pages">
      <h6 class="heading mb-3">{{$t('modules.common.pages.textTitle')}}</h6>
      <ul class="list-unstyled">
        <li v-for="(value, key) in data.pagesList.content" :key="key">
          <b-link :to="url(value)" v-html="value.title" />
        </li>
      </ul>
    </section>
  </vf-apollo>
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
    }
  }
};
</script>
<graphql>
{
  pagesList (page: 1, size: 4) {
    content {
      id
      title
      keyword
    }
  }
}
</graphql>