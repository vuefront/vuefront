import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfAInput from "./input.vue";

Vue.component("VfAInput", vfAInput);
storiesOf("Atom|Input", module)
  .add("default (text)", () => "<vf-a-input  />", { info: {} })
  .add("number", () => '<vf-a-input type="number"/>', { info: {} })
  .add("email", () => '<vf-a-input type="email"/>', { info: {} })
  .add("password", () => '<vf-a-input type="password"/>', { info: {} })
  .add("search", () => '<vf-a-input type="search"/>', { info: {} })
  .add("url", () => '<vf-a-input type="url"/>', { info: {} })
  .add("tel", () => '<vf-a-input type="tel"/>', { info: {} })
  .add("date", () => '<vf-a-input type="date"/>', { info: {} })
  .add("time", () => '<vf-a-input type="time"/>', { info: {} })
  .add("range", () => '<vf-a-input type="range"/>', { info: {} })
  .add(
    "color",
    () => '<div style="width:50px"><vf-a-input type="color"/></div>',
    { info: {} }
  );
