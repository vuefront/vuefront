<template>
  <div class="vf-o-position" :class="`vf-o-position--${name}`">
    <slot v-if="modules.length === 0"></slot>
    <template v-else v-for="(value, index) in modules">
      <LazyHydrate when-visible :key="index">
        <div
          :is="$vuefront.extensions[value.component]"
          v-bind="value.props"
          class="vf-o-position__module"
        ></div>
      </LazyHydrate>
    </template>
  </div>
</template>
<script>
import { BaseLayout } from "vuefront/lib/utils/baseLayout.js";
import LazyHydrate from 'vue-lazy-hydration';

export default {
  components: {
    LazyHydrate
  },
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