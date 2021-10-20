import VfOManufacturerProduct from "./manufacturer-product.vue.mjs";
import faker from "faker"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "organism/manufacturer-product",
  component: VfOManufacturerProduct,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    mode: {
      options: ["grid", "list"],
      control: {
        type: "radio"
      }
    },
    sort: {
      options: ["id|ASC", "name|ASC", "name|DESC", "price|ASC", "price|DESC", "rating|ASC", "rating|DESC", "model|ASC", "model|DESC"],
      control: {
        type: "radio"
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfOManufacturerProduct
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-o-manufacturer-product v-bind="args"/>'
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  mode: "grid",
  sort: "id|ASC",
  gridSize: 4,
  gridSizeTablet: 2,
  products: {
    totalPages: 12,
    number: 7,
    content: [{
      id: 1,
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2),
      shortDescription: faker.lorem.paragraphs(1),
      rating: faker.datatype.number(5),
      model: faker.random.word(),
      price: faker.commerce.price() + "$",
      special: faker.commerce.price() + "$",
      description: faker.lorem.paragraphs(4)
    }, {
      id: 1,
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2),
      shortDescription: faker.lorem.paragraphs(1),
      rating: faker.datatype.number(5),
      model: faker.random.word(),
      price: faker.commerce.price() + "$",
      special: faker.commerce.price() + "$",
      description: faker.lorem.paragraphs(4)
    }, {
      id: 1,
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2),
      shortDescription: faker.lorem.paragraphs(1),
      rating: faker.datatype.number(5),
      model: faker.random.word(),
      price: faker.commerce.price() + "$",
      special: faker.commerce.price() + "$",
      description: faker.lorem.paragraphs(4)
    }, {
      id: 1,
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2),
      shortDescription: faker.lorem.paragraphs(1),
      rating: faker.datatype.number(5),
      model: faker.random.word(),
      price: faker.commerce.price() + "$",
      special: faker.commerce.price() + "$",
      description: faker.lorem.paragraphs(4)
    }, {
      id: 1,
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2),
      shortDescription: faker.lorem.paragraphs(1),
      rating: faker.datatype.number(5),
      model: faker.random.word(),
      price: faker.commerce.price() + "$",
      special: faker.commerce.price() + "$",
      description: faker.lorem.paragraphs(4)
    }, {
      id: 1,
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2),
      shortDescription: faker.lorem.paragraphs(1),
      rating: faker.datatype.number(5),
      model: faker.random.word(),
      price: faker.commerce.price() + "$",
      special: faker.commerce.price() + "$",
      description: faker.lorem.paragraphs(4)
    }]
  }
};
//# sourceMappingURL=manufacturer-product.stories.mjs.map