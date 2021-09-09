<template>
  <vf-l-t-store-category
    :grid-size="gridSize"
    :grid-size-tablet="gridSizeTablet"
  />
</template>
<script lang="ts" setup>
import { computed } from "vue";
const { checkModules } = useModule();
import useModule from "../../../../utils/module";

const gridSize = computed(() => {
  if (checkModules("columnLeft") && checkModules("columnRight")) {
    return 2;
  } else if (checkModules("columnLeft") || checkModules("columnRight")) {
    return 3;
  } else {
    return 4;
  }
});

const gridSizeTablet = computed(() => {
  if (checkModules("columnLeft") && checkModules("columnRight")) {
    return 1;
  } else if (checkModules("columnLeft") || checkModules("columnRight")) {
    return 2;
  } else {
    return 3;
  }
});
</script>
