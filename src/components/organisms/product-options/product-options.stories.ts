import VfOProductOptions from "./product-options.vue";
import faker from "@faker-js/faker";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "organism/product-options",
  component: VfOProductOptions,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfOProductOptions },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-o-product-options v-bind="args"/>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  product: {
    id: 1,
    options: [
      {
        id: "218",
        name: "Radio",
        type: "radio",
        values: [
          {
            id: "5",
            name: "Small",
          },
          {
            id: "6",
            name: "Medium",
          },
          {
            id: "7",
            name: "Large",
          },
        ],
      },
      {
        id: "223",
        name: "Checkbox",
        type: "checkbox",
        values: [
          {
            id: "8",
            name: "Checkbox 1",
          },
          {
            id: "9",
            name: "Checkbox 2",
          },
          {
            id: "10",
            name: "Checkbox 3",
          },
          {
            id: "11",
            name: "Checkbox 4",
          },
        ],
      },
      {
        id: "208",
        name: "Text",
        type: "text",
        values: [],
      },
      {
        id: "217",
        name: "Select",
        type: "select",
        values: [
          {
            id: "4",
            name: "Red",
          },
          {
            id: "3",
            name: "Blue",
          },
          {
            id: "1",
            name: "Green",
          },
          {
            id: "2",
            name: "Yellow",
          },
        ],
      },
      {
        id: "209",
        name: "Textarea",
        type: "textarea",
        values: [],
      },
      {
        id: "222",
        name: "File",
        type: "file",
        values: [],
      },
      {
        id: "219",
        name: "Date",
        type: "date",
        values: [],
      },
      {
        id: "221",
        name: "Time",
        type: "time",
        values: [],
      },
      {
        id: "220",
        name: "Date &amp; Time",
        type: "datetime",
        values: [],
      },
    ],
  },
};
