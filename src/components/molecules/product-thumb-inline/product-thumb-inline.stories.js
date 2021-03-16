import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import product from "@/.storybook/store/product.js";
import vfMProductThumbInline from "./product-thumb-inline.vue";

Vue.component("VfMProductThumbInline", vfMProductThumbInline);

storiesOf("molecule|Product Thumb Inline", module).add(
  "default",
  () => ({
    components: { vfMProductThumbInline },
    template: `<vf-m-product-thumb-inline :product="product"></vf-m-product-thumb-inline>`,
    data: () => ({ product }),
  }),
  {
    info: {},
  }
);
