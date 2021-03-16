<template>
  <div class="vf-o-position" :class="`vf-o-position--${name}`">
    <slot v-if="modules.length === 0"></slot>
    <template v-for="(value, index) in modules" v-else>
      <LazyHydrate :key="index" when-visible>
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
import LazyHydrate from "vue-lazy-hydration";

export default {
  components: {
    LazyHydrate,
  },
  mixins: [BaseLayout],
  props: {
    name: {
      type: String,
      default() {
        return null;
      },
    },
  },
  computed: {
    position() {
      return this.name;
    },
  },
};
</script>
