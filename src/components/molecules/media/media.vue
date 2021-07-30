<template>
  <component :is="tag" class="vf-m-media">
    <template v-if="!rightAlign">
      <div
        v-if="$slots.aside"
        class="vf-m-media-aside vf-m-media-aside--left"
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
        class="vf-m-media-aside vf-m-media-aside--right"
        :class="asideClass"
      >
        <slot name="aside"></slot>
      </div>
    </template>
  </component>
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
        result.push("vf-m-media-aside--start");
      }
      if (this.verticalAlign === "center") {
        result.push("vf-m-media-aside--center");
      }
      if (this.verticalAlign === "end" || this.verticalAlign === "bottom") {
        result.push("vf-m-media-aside--end");
      }

      return result.join(" ");
    },
  },
};
</script>