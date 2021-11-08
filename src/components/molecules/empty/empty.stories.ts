import VfMEmpty from "./empty.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/empty",
  component: VfMEmpty,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMEmpty },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-empty v-bind="args">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac leo ligula. Aenean semper, lectus ut blandit congue, est lorem pulvinar leo, vitae dignissim augue mi vitae sapien. Ut pretium ut est quis blandit. Donec tristique mi nec augue consectetur, ut molestie dui auctor. Praesent eu ex iaculis, facilisis nibh eu, vestibulum neque. Fusce rutrum elit bibendum pharetra efficitur. In id enim velit. Nulla malesuada sem ac lectus condimentum, nec dignissim sem consequat. Nulla ultricies mauris et erat posuere cursus. Ut sagittis laoreet quam in pulvinar.
  </vf-m-empty>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
};
