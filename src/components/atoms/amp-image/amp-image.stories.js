import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import component from "./amp-image.vue";

storiesOf("atom|!!!Amp Image", module).add(
  "default",
  () => ({
    components: { vfAAmpImage: component },
    template: `<vf-a-amp-image src="https://via.placeholder.com/150"/>`,
  }),
  {
    info: {
      summary: `<span style="color:red">Important!</span> what does it do?`,
    },
  }
);
