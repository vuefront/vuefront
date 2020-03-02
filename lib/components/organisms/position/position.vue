<template>
  <div>
    <slot v-if="modules.length === 0"></slot>
    <div
      v-else
      v-for="(value, index) in modules"
      :key="index"
      :is="value.component"
      v-bind="value.props"
      class="mb-3"
    ></div>
  </div>
</template>
<script>
import { BaseLayout } from "vuefront/lib/utils/baseLayout.js";

export default {
  name: 'vf-o-position',
  props: {
    name: String
  },
  computed: {
    position() {
      return this.name;
    }
  },
  mixins: [BaseLayout]
};
</script>
