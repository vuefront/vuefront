import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import product from "@/.storybook/store/product.js";
import vfMProductThumbImage from "./product-thumb-image.vue";
Vue.component("VfMProductThumbImage", vfMProductThumbImage);
storiesOf("molecule|Product Thumb Image", module).add("default", () => ({
  components: {
    vfMProductThumbImage
  },
  template: `<vf-m-product-thumb-image :product="product">This is an alert message</vf-m-product-thumb-image>`,
  data: () => ({
    product
  })
}), {
  info: {}
});