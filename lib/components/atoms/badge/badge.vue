<template>
  <span class="vf-a-badge" :class="getClass">
    <slot></slot>
  </span>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default() {
        return "primary";
      },
    },
    rounded: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    getColors() {
      return {
        primary: "vf-a-badge--primary",
        secondary: "vf-a-badge--secondary",
        success: "vf-a-badge--success",
        info: "vf-a-badge--info",
        warning: "vf-a-badge--warning",
        danger: "vf-a-badge--danger",
        white: "vf-a-badge--white",
        light: "vf-a-badge--light",
        dark: "vf-a-badge--dark",
      };
    },
    getClass() {
      const result = [];

      result.push(this.getColors[this.color]);

      if (this.rounded) {
        result.push("vf-a-badge--rounded");
      }

      return result.join(" ");
    },
  },
};
</script>
