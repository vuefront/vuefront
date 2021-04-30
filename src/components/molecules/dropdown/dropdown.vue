<template>
  <div ref="wrapper" class="vf-m-dropdown">
    <vf-a-button
      :color="variant"
      size="size"
      class="vf-m-dropdown__trigger"
      @click="show = !show"
      @keydown.esc="keydownHandler"
      @blur="blurHandler"
    >
      <slot name="button-content">
        {{ text }}
      </slot>
    </vf-a-button>
    <div v-if="show" class="vf-m-dropdown__menu">
      <div
        :class="getClassManu"
        class="vf-m-dropdown__menu-content"
      >
        <div class="vf-m-dropdown__menu-content-wrapper">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default() {
        return "";
      },
    },
    right: {
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
    variant: {
      type: String,
      default() {
        return "primary";
      },
    },
    nav: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    getClassManu() {
      const result = [];

      if (this.right) {
        result.push("vf-m-dropdown__menu-content--right");
      } else {
        result.push("vf-m-dropdown__menu-content--left");
      }

      return result.join(" ");
    },
  },
  methods: {
    keydownHandler(e) {
      this.show = false;
    },
    blurEventTargetIsChild(e) {
      const blurredElement = e.relatedTarget;

      if (blurredElement) {
        const wrapper = this.$refs.wrapper;
        return wrapper.contains(blurredElement);
      }

      return false;
    },
    hideIfFocusOutside(e) {
      if (!this.blurEventTargetIsChild(e)) {
        this.show = false;
      }
    },
    blurHandler(e) {
      this.hideIfFocusOutside(e);
    },
  },
};
</script>