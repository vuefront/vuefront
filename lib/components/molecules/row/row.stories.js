import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfMCol from "../col/col.vue";
import vfMRow from "./row.vue";
Vue.component("VfMCol", vfMCol);
Vue.component("VfMRow", vfMRow);
storiesOf("molecule| Row & Col", module).addDecorator(story => ({
  template: `<div style="width:500px"><story/></div>`
})).add("default", () => ({
  components: {
    vfMRow,
    vfMCol
  },
  template: `<vf-m-row><vf-m-col><div style="background:#eee; padding:10px; height:50px; width:100%">Col</div></vf-m-col></vf-m-row>`
}), {
  info: {}
});