<template>
  <div class="vf-m-card">
    <vf-m-card-body v-if="!noBody">
      <vf-a-heading v-if="title" level="4">{{ title }}</vf-a-heading>
      <slot></slot>
    </vf-m-card-body>
    <slot v-else></slot>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default() {
      return null;
    },
  },
  subTitle: {
    type: String,
    default() {
      return null;
    },
  },
  noBody: {
    type: Boolean,
    default() {
      return false;
    },
  },
  bodyBgColor: {
    type: String,
    default() {
      return "";
    },
  },
});
</script>
