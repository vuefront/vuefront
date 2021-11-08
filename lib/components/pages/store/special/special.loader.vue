<template>
  <vf-l-t-store-special :grid-size="gridSize" />
</template>
<script lang="ts" setup>
import { computed } from "vue";
import useModule from "../../../../utils/module";
const { checkModules } = useModule();

const gridSize = computed(() => {
  if (checkModules("columnLeft") && checkModules("columnRight")) {
    return 2;
  } else if (checkModules("columnLeft") || checkModules("columnRight")) {
    return 3;
  } else {
    return 4;
  }
});
</script>
