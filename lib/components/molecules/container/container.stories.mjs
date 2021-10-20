import VfMContainer from "./container.vue.mjs";
import "./container.scss.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "molecule/container",
  component: VfMContainer,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "radio"
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfMContainer
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-container v-bind="args">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a iaculis lacus. Proin id mauris at arcu vehicula porta convallis a metus. Etiam ut libero quis augue dapibus rutrum. Aliquam erat volutpat. In hac habitasse platea dictumst. Mauris interdum aliquam diam, eu vulputate massa sollicitudin et. Ut aliquam feugiat libero sit amet maximus. Quisque pulvinar ipsum eu lacinia tempor. Curabitur vel risus vel augue facilisis consequat vel vel nunc. Praesent ac iaculis ante. In sit amet posuere purus. Aenean scelerisque, elit quis commodo mollis, diam felis pretium nulla, et venenatis ipsum dui eget erat. Nunc in magna at risus auctor interdum. Aliquam urna urna, varius id velit vitae, imperdiet rhoncus urna. Maecenas eu diam a quam venenatis commodo sed in metus.</vf-m-container>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  fluid: false,
  size: "md"
};
//# sourceMappingURL=container.stories.mjs.map