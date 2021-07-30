<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    :disabled="disabled"
    :type="type"
    :class="getClass"
    class="vf-a-button"
    v-bind="$attrs"
  >
    <slot></slot>
    <span v-if="$slots.visible" class="btn-inner--visible">
      <slot name="visible"></slot>
    </span>
    <span v-if="$slots.hidden" class="btn-inner--hidden">
      <slot name="hidden"></slot>
    </span>
  </component>
</template>
<script>
export default {
  props: {
    block: {
      type: Boolean,
      default() {
        return false;
      },
    },
    animatedY: {
      type: Boolean,
      default() {
        return null;
      },
    },
    animatedX: {
      type: Boolean,
      default() {
        return null;
      },
    },
    rounded: {
      type: Boolean,
      default() {
        return null;
      },
    },
    type: {
      type: String,
      default() {
        return "button";
      },
    },
    active: {
      type: Boolean,
      default() {
        return null;
      },
    },
    outline: {
      type: Boolean,
      default() {
        return null;
      },
    },
    size: {
      type: String,
      default() {
        return "md";
      },
    },
    pressed: {
      type: Boolean,
      default() {
        return false;
      },
    },
    color: {
      type: String,
      default() {
        return "primary";
      },
    },
    to: {
      type: [String, Object],
      default() {
        return null;
      },
    },
    nuxt: {
      type: Boolean,
      default() {
        return false;
      },
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      error: false,
    };
  },
  computed: {
    getSizes() {
      return {
        sm: "vf-a-button--sm",
        md: "vf-a-button--md",
        lg: "vf-a-button--lg",
      };
    },
    getColors() {
      return {
        link: "vf-a-button--link",
        primary: "vf-a-button--primary",
        secondary: "vf-a-button--secondary",
        success: "vf-a-button--success",
        info: "vf-a-button--info",
        warning: "vf-a-button--warning",
        danger: "vf-a-button--danger",
        white: "vf-a-button--white",
        light: "vf-a-button--light",
        dark: "vf-a-button--dark",
      };
    },
    getOutlineColors() {
      return {
        primary: "vf-a-button--outline-primary",
        secondary: "vf-a-button--outline-secondary",
        success: "vf-a-button--outline-success",
        info: "vf-a-button--outline-info",
        warning: "vf-a-button--outline-warning",
        danger: "vf-a-button--outline-danger",
        white: "vf-a-button--outline-white",
        light: "vf-a-button--outline-light",
        dark: "vf-a-button--outline-dark",
      };
    },
    getClass() {
      const result = [];

      if (this.disabled) {
        result.push("disabled:opacity-50");
      }
      if (this.active || this.pressed) {
        result.push("active");
      }
      if (this.outline) {
        result.push(this.getOutlineColors[this.color]);
      } else {
        result.push(this.getColors[this.color]);
      }

      if (this.block) {
        result.push("w-full");
      }

      result.push(this.getSizes[this.size]);

      if (this.rounded) {
        result.push("vf-a-button--rounded");
      }

      if (this.animatedX || this.animatedY) {
        result.push("vf-a-button--animated");
      }

      if (this.animatedX) {
        result.push("vf-a-button--animated-x");
      }

      if (this.animatedY) {
        result.push("vf-a-button--animated-y");
      }

      return result.join(" ");
    },
  },
};
</script>
