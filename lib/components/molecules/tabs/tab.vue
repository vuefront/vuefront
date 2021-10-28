<template>
  <div class="vf-m-tab" :class="{ '--active': hasActive }">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { inject, onBeforeMount, computed } from "vue";
const props = defineProps({
  title: {
    type: String,
    default() {
      return "";
    },
  },
});
const id = props.title.toLowerCase().replace(/ /g, "-");
const vfTabs = inject<any>("vfTabs");
const hasActive = computed(() => vfTabs.activeTab === id);
onBeforeMount(() => {
  vfTabs.tabs.push({
    title: props.title,
    id,
  });
});
</script>
