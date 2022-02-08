import VfTAddress from "./address.vue";
import faker from "@faker-js/faker";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "template/account/address",
  component: VfTAddress,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfTAddress },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-t-address v-bind="args"/>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  items: [
    {
      firstName: faker.name.firstName(1),
      lastName: faker.name.lastName(1),
      company: faker.name.jobArea(),
      address1: faker.address.streetAddress(true),
      address2: faker.address.streetAddress(true),
      city: faker.address.city(),
      countryId: 1,
      country: {
        id: 1,
        name: faker.address.country(),
      },
      zoneId: 1,
      zone: {
        id: 1,
        name: faker.address.state(true),
      },
      zipcode: faker.address.zipCode(),
    },
    {
      firstName: faker.name.firstName(1),
      lastName: faker.name.lastName(1),
      company: faker.name.jobArea(),
      address1: faker.address.streetAddress(true),
      address2: faker.address.streetAddress(true),
      city: faker.address.city(),
      countryId: 1,
      country: {
        id: 1,
        name: faker.address.country(),
      },
      zoneId: 1,
      zone: {
        id: 1,
        name: faker.address.state(true),
      },
      zipcode: faker.address.zipCode(),
    },
    {
      firstName: faker.name.firstName(1),
      lastName: faker.name.lastName(1),
      company: faker.name.jobArea(),
      address1: faker.address.streetAddress(true),
      address2: faker.address.streetAddress(true),
      city: faker.address.city(),
      countryId: 1,
      country: {
        id: 1,
        name: faker.address.country(),
      },
      zoneId: 1,
      zone: {
        id: 1,
        name: faker.address.state(true),
      },
      zipcode: faker.address.zipCode(),
    },
  ],
};
