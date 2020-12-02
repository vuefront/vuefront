<template>
  <button
    :is="to ? 'router-link': 'button'"
    v-on="$listeners"
    :disabled="disabled"
    :pressed="pressed"
    :active="active"
    :type="type"
    :class="getClass"
    class="vf-a-button"
  >
    <slot></slot>
    <span v-if="$slots.visible" class="btn-inner--visible">
      <slot name="visible"></slot>
    </span>
    <span v-if="$slots.hidden" class="btn-inner--hidden">
      <slot name="hidden"></slot>
    </span>
  </button>
</template>
<script>
export default {
  props: {
    animatedY: {
      type: Boolean,
      default() {
        return null;
      }
    },
    animatedX: {
      type: Boolean,
      default() {
        return null;
      }
    },
    rounded: {
      type: Boolean,
      default() {
        return null;
      }
    },
    type: {
      type: String,
      default() {
        return "button";
      }
    },
    active: {
      type: Boolean,
      default() {
        return null;
      }
    },
    outline: {
      type: Boolean,
      default() {
        return null;
      }
    },
    size: {
      type: String,
      default() {
        return 'md'
      }
    },
    pressed: {
      type: Boolean,
      default() {
        return false;
      }
    },
    color: {
      type: String,
      default() {
        return "primary";
      }
    },
    to: {
      type: [String, Object],
      default() {
        return null;
      }
    },
    nuxt: {
      type: Boolean,
      default() {
        return false;
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    getClass() {
      const result = []

      if (this.disabled) {
        result.push('disabled:opacity-50')
      }
      if (this.pressed) {
        result.push('active')
      }
      if (this.outline) {
        result.push('vf-a-button--outline-'+this.color)
        
      } else {
        result.push('vf-a-button--'+this.color)
      }

      result.push('vf-a-button--'+this.size)

      if (this.rounded) {
        result.push('vf-a-button--rounded')
      }

      if (this.animatedX || this.animatedY) {
        result.push('vf-a-button--animated')
      }

      if (this.animatedX) {
        result.push('vf-a-button--animated-x')
      }

      if (this.animatedY) {
        result.push('vf-a-button--animated-y')
      }

      return result.join(' ')

    }
  }
};
</script>