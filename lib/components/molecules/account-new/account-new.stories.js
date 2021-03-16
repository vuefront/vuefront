import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfMAccountNew from "./account-new.vue";
Vue.component("VfMAccountNew", vfMAccountNew);
storiesOf("Molecule|Account new", module).add("default", () => ({
  components: {
    vfMAccountNew
  },
  template: `<div style="width:500px"><vf-m-account-new /></div>`
}), {
  info: {}
});