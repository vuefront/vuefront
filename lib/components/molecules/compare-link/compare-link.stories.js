import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfMCompareLink from "./compare-link.vue";
Vue.component("VfMCompareLink", vfMCompareLink);
storiesOf("molecule|Compare Link", module).add("default", () => ({
  components: {
    vfMCompareLink
  },
  template: `<vf-m-compare-link />`
}), {
  info: {}
});