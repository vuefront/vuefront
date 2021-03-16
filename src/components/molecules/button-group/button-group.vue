<template>
  <div :class="getClass" class="vf-m-button-group" v-on="$listeners">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default() {
        return "md";
      },
    },
    block: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    getSizes() {
      return {
        sm: "vf-m-button-group--sm",
        md: "vf-m-button-group--md",
        lg: "vf-m-button-group--lg",
      };
    },
    getClass() {
      const result = [];

      if (this.block) {
        result.push("vf-m-button-group--block");
      }

      result.push(this.getSizes[this.size]);

      return result.join(" ");
    },
  },
};
</script>
