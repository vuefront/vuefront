import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfMProductPrice from "./product-price.vue";
import "./product-price.scss";

Vue.component("VfMProductPrice", vfMProductPrice);

storiesOf("molecule|Product Price", module)
  .add(
    "default",
    () => ({
      components: { vfMProductPrice },
      template: `<vf-m-product-price price="$10"></vf-m-product-price>`,
    }),
    {
      info: {},
    }
  )
  .add(
    "special",
    () => ({
      components: { vfMProductPrice },
      template: `<vf-m-product-price price="$10" special="$5"></vf-m-product-price>`,
    }),
    {
      info: {},
    }
  )
  .add(
    "small",
    () => ({
      components: { vfMProductPrice },
      template: `<vf-m-product-price price="$10" special="$5" variant="small"></vf-m-product-price>`,
    }),
    {
      info: {},
    }
  );
