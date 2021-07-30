<template>
  <div class="vf-o-position" :class="`vf-o-position--${name}`">
    <slot v-if="modules.length === 0"></slot>
    <template v-for="(value, index) in modules" v-else :key="index">
      <component
        :is="extension(value)"
        v-bind="value.props"
        class="vf-o-position__module"
      >
        <slot></slot>
      </component>
    </template>
  </div>
</template>
<script>
import { BaseLayout } from "vuefront/lib/utils/baseLayout.js";
import { BaseModule } from "vuefront/lib/utils/module.js";
import { defineAsyncComponent } from "vue";
export default {
  mixins: [BaseLayout, BaseModule],
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
  mounted() {
    this.checkModules(this.name);
  },
  methods: {
    kebabize(str) {
      return str
        .split("")
        .map((letter, idx) => {
          return letter.toUpperCase() === letter
            ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
            : letter;
        })
        .join("");
    },
    extension(value) {
      return "vf-e-" + this.kebabize(value.component);
    },
  },
};
</script>
