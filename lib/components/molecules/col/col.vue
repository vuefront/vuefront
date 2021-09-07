<template>
  <component :is="tag" class="vf-m-col" :class="classList">
    <slot></slot>
  </component>
</template>
<script lang="ts" setup>
import capitalize from "lodash-es/capitalize";
import { computed, getCurrentInstance, PropType } from "vue";
enum sizeEnum {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}
const props = defineProps({
  alignSelf: {
    type: String,
    default() {
      return null;
    },
  },
  xs: {
    type: [String, Number, Boolean] as PropType<
      string | number | boolean | sizeEnum
    >,
    default() {
      return null;
    },
  },
  sm: {
    type: [String, Number, Boolean] as PropType<
      string | number | boolean | sizeEnum
    >,
    default() {
      return false;
    },
  },
  md: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default() {
      return false;
    },
  },
  lg: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default() {
      return false;
    },
  },
  xl: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default() {
      return false;
    },
  },
  orderXs: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  orderSm: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  orderMd: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  orderLg: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  orderXl: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  offsetXs: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  offsetSm: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  offsetMd: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  offsetLg: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  offsetXl: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  tag: {
    type: String,
    default() {
      return "div";
    },
  },
});
const classList = computed(() => {
  const propsObj = {
    sizes: {
      xs: props.xs,
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
    },
    orders: {
      xs: props.orderXs,
      sm: props.orderSm,
      md: props.orderMd,
      lg: props.orderLg,
      xl: props.orderXl,
    },
    offsets: {
      xs: props.offsetXs,
      sm: props.offsetSm,
      md: props.offsetMd,
      lg: props.offsetLg,
      xl: props.offsetXl,
    },
  };
  let result = [];
  for (let size of Object.entries(propsObj.sizes)) {
    if (size[1] && typeof size[1] !== "boolean") {
      result.push(
        `${size[0] == "xs" ? "" : `${size[0]}:`}vf-m-col${
          size[1] ? `--${size[1]}` : ""
        }`
      );
    } else if (size[1] && typeof size[1] === "boolean") {
      result.push(`${size[0] == "xs" ? "" : `${size[0]}:`}vf-m-col`);
    }
  }
  for (let order of Object.entries(propsObj.orders)) {
    if (order[1]) {
      result.push(
        `${order[0] == "xs" ? "" : `${order[0]}:`}vf-m-col--order-${order[1]}`
      );
    }
  }
  for (let offset of Object.entries(propsObj.offsets)) {
    if (offset[1]) {
      result.push(
        `${offset[0] === "xs" ? "" : `${offset[0]}:`}vf-m-col--offset-${
          offset[1]
        }`
      );
    }
  }
  if (props.alignSelf) {
    result.push(`vf-m-col--align-self-${props.alignSelf}`);
  }

  // if (!this.$parent.noGutters) {
  //   result.push("px-4");
  // }
  return result.join(" ");
});
</script>
