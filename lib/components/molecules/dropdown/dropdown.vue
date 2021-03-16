<template>
  <div ref="wrapper" class="inline-flex flex-col vf-m-dropdown">
    <vf-a-button
      :color="variant"
      size="size"
      class="flex items-center"
      @click="show = !show"
      @keydown.esc="keydownHandler"
      @blur="blurHandler"
    >
      <slot name="button-content">
        {{ text }}
      </slot>
    </vf-a-button>
    <div v-if="show" class="relative z-10">
      <div
        :class="getClassManu"
        class="absolute w-auto rounded-md shadow-lg bg-white"
      >
        <div class="rounded-md shadow-xs py-1">
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
        result.push("origin-top-right right-0");
      } else {
        result.push("origin-top-left left-0");
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
