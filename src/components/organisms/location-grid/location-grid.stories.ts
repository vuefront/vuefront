import VfOLocationGrid from "./location-grid.vue";
import faker from "faker";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "organism/location-grid",
  component: VfOLocationGrid,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfOLocationGrid },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-o-location-grid v-bind="args"/>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  items: [
    {
      address: faker.address.streetAddress(true),
      telephone: faker.phone.phoneNumber(),
      comment: faker.lorem.words(20),
      image: "https://via.placeholder.com/268x50?text=location 1",
      imageLazy: "https://via.placeholder.com/10",
    },
    {
      address: faker.address.streetAddress(true),
      telephone: faker.phone.phoneNumber(),
      comment: faker.lorem.words(20),
      image: "https://via.placeholder.com/268x50?text=location 2",
      imageLazy: "https://via.placeholder.com/10",
    },
    {
      address: faker.address.streetAddress(true),
      telephone: faker.phone.phoneNumber(),
      comment: faker.lorem.words(20),
      image: "https://via.placeholder.com/268x50?text=location 3",
      imageLazy: "https://via.placeholder.com/10",
    }
  ],
};
