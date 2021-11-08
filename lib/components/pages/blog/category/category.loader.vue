<template>
  <vf-l-t-blog-category :grid-size="gridSize" />
</template>
<script lang="ts" setup>
import useModule from "../../../../utils/module";
const { checkModules } = useModule();

import { computed } from "vue";

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
