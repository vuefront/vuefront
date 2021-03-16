<template>
  <div class="flex flex-wrap" :class="getClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default() {
        return "div";
      },
    },
    noGutters: {
      type: Boolean,
      default() {
        return false;
      },
    },
    alignV: {
      type: String,
      default() {
        return null;
      },
    },
    alignH: {
      type: String,
      default() {
        return null;
      },
    },
  },
  computed: {
    getAlignV() {
      return {
        start: "items-start",
        center: "items-center",
        end: "items-end",
      };
    },
    getAlignH() {
      return {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
      };
    },
    getClass() {
      const result = [];

      if (!this.noGutters) {
        result.push("-mx-4");
      }

      if (this.alignV) {
        result.push(this.getAlignV[this.alignV]);
      }

      if (this.alignH) {
        result.push(this.getAlignH[this.alignH]);
      }

      return result.join(" ");
    },
  },
};
</script>
