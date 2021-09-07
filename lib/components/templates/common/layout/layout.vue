<template>
  <component :is="currentLayout" class="vf-t-common-layout">
    <slot></slot>
  </component>
</template>
<script lang="ts" setup>
import useLayout from "../../../../utils/baseLayout";
const { initLayout, layout } = useLayout("");
initLayout();
const currentLayout = "vf-t-layout-" + layout.value;
</script>
