<template>
  <div :is="tag" class="vf-m-media flex">
    <template v-if="!rightAlign">
      <div
        v-if="$slots.aside"
        class="vf-m-media-aside flex mr-4"
        :class="asideClass"
      >
        <slot name="aside"></slot>
      </div>
    </template>
    <div v-if="!noBody" class="vf-m-media-body">
      <slot></slot>
    </div>
    <slot v-else></slot>
    <template v-if="rightAlign">
      <div
        v-if="$slots.aside"
        class="vf-m-media-aside flex ml-4"
        :class="asideClass"
      >
        <slot name="aside"></slot>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div",
    },
    rightAlign: {
      type: Boolean,
      default: false,
    },
    verticalAlign: {
      type: String,
      default: "top",
    },
    noBody: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    asideClass() {
      const result = [];

      if (this.verticalAlign === "start" || this.verticalAlign === "top") {
        result.push("self-start");
      }
      if (this.verticalAlign === "center") {
        result.push("self-center");
      }
      if (this.verticalAlign === "end" || this.verticalAlign === "bottom") {
        result.push("self-end");
      }

      return result.join(" ");
    },
  },
};
</script>
