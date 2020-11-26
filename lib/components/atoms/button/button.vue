<template>
  <button
    :is="to ? 'router-link': 'button'"
    v-on="$listeners"
    :disabled="disabled"
    :pressed="pressed"
    :active="active"
    :type="type"
    :class="getClass"
    class="vf-a-button cursor-pointer"
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

      result.push('border-'+this.color)
      result.push('border-2')
      result.push('hover:bg-'+this.color+'-darker')
      result.push('hover:border-'+this.color+'-darker')
      if (this.outline) {
        if (this.pressed) {
          result.push('text-'+this.color + '-inverted')
          result.push('bg-'+this.color+'-darker')
        } else {
          result.push('text-'+this.color)
          result.push('hover:text-'+this.color + '-inverted')
          result.push('bg-white')
        }
      } else {
        if (this.pressed) {
          result.push('bg-'+this.color+'-darker')
        } else {
          result.push('bg-'+this.color)
          result.push('text-'+this.color + '-inverted')
        }
      }

      if (this.size === 'sm') {
        result.push('px-2 py-1')
      }

      if (this.size === 'md') {
        result.push('px-3 py-2')
      }

      if (this.size === 'lg') {
        result.push('px-4 py-3')
      }

      if (this.disabled) {
        result.push('disabled:opacity-50')
      }

      if (this.rounded) {
        result.push('rounded-full')
      } else {
        result.push('rounded')

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