<template>
  <slot v-if="isClient"></slot>
</template>
<script lang="ts" setup>
import { computed, inject } from "vue";
const vuefront$ = inject<any>("$vuefront");
const isClient = computed(() => vuefront$.isClient);
</script>
