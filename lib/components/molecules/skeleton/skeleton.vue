<template>
  <Skeletor v-bind="$attrs"></Skeletor>
</template>
<script>
import { defineComponent } from "vue";
import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from "vue-skeletor";
export default defineComponent({
  components: {
    Skeletor,
  },
  inheritAttrs: false,
});
</script>
