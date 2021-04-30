<template>
  <div class="vf-m-row" :class="getClass">
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
        start: "--align-v-start",
        center: "--align-v-center",
        end: "--align-v-end",
      };
    },
    getAlignH() {
      return {
        start: "--align-h-start",
        center: "--align-h-center",
        end: "--align-h-end",
      };
    },
    getClass() {
      const result = [];

      if (!this.noGutters) {
        result.push("--no-gutter");
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