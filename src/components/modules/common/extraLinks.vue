<template>
  <section class="module-pages">
    <h6 class="heading mb-3">{{$t('modules.common.extraLinks.textTitle')}}</h6>
    <ul class="list-unstyled">
      <li v-for="(value, index) in links" :key="index">
        <b-link :to="value.to">{{value.text}}</b-link>
      </li>
    </ul>
  </section>
</template>
<script>
import { BLink } from "bootstrap-vue";
export default {
  components: {
    BLink
  },
  props: ["links"]
};
</script>

