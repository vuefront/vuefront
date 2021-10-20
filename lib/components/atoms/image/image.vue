<template>
  <div
    v-if="!$vuefront.isAMP"
    :class="`vf-a-image image-wrapper layout-${layout}`"
    :style="styles"
  >
    <div
      class="vf-a-image__sizer image-sizer"
      :style="{ paddingBottom: aspectRatio + '%' }"
    ></div>
    <div
      v-lazy="image"
      class="vf-a-image__img image-img"
      :class="imageClass"
      :style="{ backgroundColor: blankColor || null }"
    ></div>
    <div class="vf-a-image__content" :class="contentClass">
      <slot></slot>
    </div>
  </div>
  <img
    v-else
    :src="src"
    :alt="alt"
    :width="widthAmp"
    :height="heightAmp"
    :heights="heights"
    :layout="layout"
  />
</template>
<script lang="ts" setup>
import { PropType, computed } from "vue";

const props = defineProps({
  contentClass: {
    type: String,
    default: () => "",
  },
  blankColor: {
    type: String,
    default() {
      return null;
    },
  },
  lazySrc: {
    validator() {
      return true;
    },
    default() {
      return "";
    },
  },
  src: {
    validator() {
      return true;
    },
    default() {
      return "";
    },
  },
  srcDark: {
    validator() {
      return true;
    },
    default() {
      return "";
    },
  },
  lazySrcDark: {
    validator() {
      return true;
    },
    default() {
      return "";
    },
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return "";
    },
  },
  alt: {
    type: String,
    default() {
      return "";
    },
  },
  layout: {
    type: String,
    default() {
      return "responsive";
    },
  },
  widthAmp: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return "1";
    },
  },
  heightAmp: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return "1";
    },
  },
  heights: {
    type: String,
    default() {
      return null;
    },
  },
  cover: {
    type: Boolean,
    default() {
      return false;
    },
  },
});

const aspectRatio = computed(() => {
  return 100 / (+props.widthAmp / +props.heightAmp);
});

const styles = computed<{ width?: string; height?: string }>(() => {
  const styles: { width?: string; height?: string } = {};

  if (props.width !== "") {
    styles.width = props.width + "px";
  }

  if (props.layout === "flex-item") {
    styles.width = props.widthAmp + "px";
    styles.height = props.heightAmp + "px";
  }

  return styles;
});

const isDark = computed(() => {
  let theme = false;
  if (document) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = true;
    }
  }

  return theme;
});

const isSVG = computed(() => {
  return /.svg$/.test(props.src);
});

const image = computed(() => {
  let result = props.src;
  if (isDark.value && props.srcDark !== "") {
    result = props.srcDark;
  }

  return result;
});

const lazyImage = computed(() => {
  let result = props.lazySrc;

  if (isDark.value && props.lazySrcDark !== "") {
    result = props.lazySrcDark;
  }

  return result;
});

const imageClass = computed(() => {
  let result = "";

  if (props.cover) {
    result += "vf-a-image__img--cover";
  }
  return result;
});
</script>
