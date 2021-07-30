<template>
  <component :is="tag" class="vf-a-heading" :class="getClass">
    <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    level: {
      type: [Number, String],
      default() {
        return 1;
      },
    },
    tag: {
      type: String,
      default() {
        return "div";
      },
    },
  },
  computed: {
    getLevels() {
      return {
        1: "vf-a-heading--1",
        2: "vf-a-heading--2",
        3: "vf-a-heading--3",
        4: "vf-a-heading--4",
        5: "vf-a-heading--5",
        6: "vf-a-heading--6",
      };
    },
    getClass() {
      const result = [];

      result.push(this.getLevels[this.level]);

      return result.join(" ");
    },
  },
};
</script>
