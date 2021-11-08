<template>
  <section class="vf-e-common-extra-links">
    <vf-a-heading level="6" class="heading mb-3">{{
      $t("modules.common.extraLinks.textTitle")
    }}</vf-a-heading>
    <ul class="list-unstyled">
      <li v-for="(value, index) in links" :key="index">
        <vf-a-link :to="value.to">{{ value.text }}</vf-a-link>
      </li>
    </ul>
  </section>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
defineProps({
  links: {
    type: Array as PropType<{ to: string; text: string }[]>,
  },
});
</script>
