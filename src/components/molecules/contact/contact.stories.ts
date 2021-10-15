import VfMContact from "./contact.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/contact",
  component: VfMContact,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMContact },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-contact v-bind="args"/>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  contact: {
    address: " 670 S State 590 Rte, Elmore, OH, 43416",
    email: "test@test.ru",
    telephone: "(419) 898-7017",
    fax: "(419) 898-7016",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a iaculis lacus. Proin id mauris at arcu vehicula porta convallis a metus. Etiam ut libero quis augue dapibus rutrum. Aliquam erat volutpat. In hac habitasse platea dictumst. Mauris interdum aliquam diam, eu vulputate massa sollicitudin et. Ut aliquam feugiat libero sit amet maximus. Quisque pulvinar ipsum eu lacinia tempor. Curabitur vel risus vel augue facilisis consequat vel vel nunc. Praesent ac iaculis ante. In sit amet posuere purus. Aenean scelerisque, elit quis commodo mollis, diam felis pretium nulla, et venenatis ipsum dui eget erat. Nunc in magna at risus auctor interdum. Aliquam urna urna, varius id velit vitae, imperdiet rhoncus urna. Maecenas eu diam a quam venenatis commodo sed in metus.",
  }
};
