import VfMMedia from "./media.vue.mjs";
import VfMMediaBody from "./body.vue.mjs";
import VfAImage from "../../atoms/image/image.vue.mjs";
import "../../atoms/image/image.scss.mjs";
import "./media.scss.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "molecule/media",
  component: VfMMedia,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    verticalAlign: {
      options: ["start", "center", "end"],
      control: {
        type: "radio"
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfMMedia,
    VfMMediaBody,
    VfAImage
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-media v-bind="args">
    <template #aside :vertical-align="args.verticalAlign">
      <vf-a-image width="64" src="https://via.placeholder.com/64" />
    </template>
    <vf-m-media-body v-if="!args.noBody">
      <h5 class="mt-0">Media Title</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>
      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
    </vf-m-media-body>
    <template v-else>
      <h5 class="mt-0">Nested Media</h5>
      Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
      faucibus.
    </template>
  </vf-m-media>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  tag: "div",
  rightAlign: false,
  verticalAlign: "start",
  noBody: false
};
//# sourceMappingURL=media.stories.mjs.map