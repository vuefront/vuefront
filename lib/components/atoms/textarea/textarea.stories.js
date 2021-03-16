import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import aTextarea from "./textarea.vue";
Vue.component("VfATextarea", aTextarea);
storiesOf("Atom|Textarea", module).add("default", () => '<vf-a-textarea src="https://via.placeholder.com/150" />', {
  info: {}
});