import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfALink from "./link.vue";

Vue.component("VfALink", vfALink);
storiesOf("Atom|Link", module).add(
  "default",
  () => '<vf-a-link to="#">Link</vf-a-link>',
  { info: {} }
);
