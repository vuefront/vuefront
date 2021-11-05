import faker from "faker";
import { capitalize } from "lodash";
export const getPost = () => ({
  id: faker.datatype.number(),
  name: capitalize(faker.lorem.words(2)),
  shortDescription: faker.lorem.paragraph(1),
  image: "https://via.placeholder.com/825x495",
  imageLazy: "https://via.placeholder.com/10x6",
  datePublished: faker.date.past().toLocaleDateString("en"),
  reviews: {
    content: [
      {
        author: faker.name.findName() + " " + faker.name.lastName(),
        content: faker.lorem.paragraph(1),
      },
      {
        author: faker.name.findName() + " " + faker.name.lastName(),
        content: faker.lorem.paragraph(1),
      },
      {
        author: faker.name.findName() + " " + faker.name.lastName(),
        content: faker.lorem.paragraph(1),
      },
      {
        author: faker.name.findName() + " " + faker.name.lastName(),
        content: faker.lorem.paragraph(1),
      },
    ],
  },
  prev: {
    id: faker.datatype.number(),
    name: capitalize(faker.lorem.words(2)),
    shortDescription: faker.lorem.paragraph(1),
    image: "https://via.placeholder.com/300x180",
    imageLazy: "https://via.placeholder.com/10",
  },
  next: {
    id: faker.datatype.number(),
    name: capitalize(faker.lorem.words(2)),
    shortDescription: faker.lorem.paragraph(1),
    image: "https://via.placeholder.com/300x180",
    imageLazy: "https://via.placeholder.com/10",
  },
});

export const getContact = () => ({
  address: faker.address.streetAddress(true),
  email: faker.internet.email(),
  telephone: faker.phone.phoneNumber(),
  fax: faker.phone.phoneNumber(),
  comment: faker.lorem.paragraph(),
  locations: [getLocation(), getLocation(), getLocation(), getLocation()],
});

export const getLocation = () => ({
  address: faker.address.streetAddress(true),
  telephone: faker.phone.phoneNumber(),
  comment: faker.lorem.words(20),
  image: "https://via.placeholder.com/268x50?text=location image",
  imageLazy: "https://via.placeholder.com/10",
});

export const getPage = () => ({
  title: capitalize(faker.lorem.words(2)),
  description: faker.lorem.paragraphs(5),
});

export const getCart = () => ({
  total: faker.commerce.price() + "$",
  products: [getCartProduct(), getCartProduct(), getCartProduct()],
});

export const getCartOption = () => ({
  name: faker.lorem.word(),
  value: faker.lorem.word(),
});

export const getCartProduct = () => {
  const productInfo = getProduct();
  return {
    key: faker.datatype.number(),
    price: productInfo.special,
    product: getProduct(),
    option: [getCartOption(), getCartOption(), getCartOption()],
    quantity: 2,
    total: Number(productInfo.special.slice(0, -1)) * 2 + "$",
  };
};

export const getProduct = () => ({
  id: faker.datatype.number(),
  name: capitalize(faker.lorem.words(2)),
  model: faker.lorem.word(),
  shortDescription: faker.lorem.paragraph(),
  rating: faker.datatype.number({ min: 0, max: 5 }),
  price: faker.commerce.price() + "$",
  special: faker.commerce.price() + "$",
  stock: faker.datatype.boolean(),
  image: "https://via.placeholder.com/300x300",
  imageBig: "https://via.placeholder.com/825x825?text=Big image",
  imageLazy: "https://via.placeholder.com/10x10",
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
  reviews: {
    content: [
      {
        author: faker.name.findName() + " " + faker.name.lastName(),
        content: faker.lorem.paragraph(1),
      },
      {
        author: faker.name.findName() + " " + faker.name.lastName(),
        content: faker.lorem.paragraph(1),
      },
      {
        author: faker.name.findName() + " " + faker.name.lastName(),
        content: faker.lorem.paragraph(1),
      },
      {
        author: faker.name.findName() + " " + faker.name.lastName(),
        content: faker.lorem.paragraph(1),
      },
    ],
  },
  attributes: [
    {
      name: capitalize(faker.lorem.words(2)),
      options: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    },
    {
      name: capitalize(faker.lorem.words(2)),
      options: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    },
    {
      name: capitalize(faker.lorem.words(2)),
      options: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    },
  ],
  images: [
    {
      image: "https://via.placeholder.com/825x825?text=Image 1",
      imageBig: "https://via.placeholder.com/825x825?text=Image 1",
      imageLazy: "https://via.placeholder.com/10x10?text=Image 1",
    },
    {
      image: "https://via.placeholder.com/825x825?text=Image 2",
      imageBig: "https://via.placeholder.com/825x825?text=Image 2",
      imageLazy: "https://via.placeholder.com/10x10?text=Image 2",
    },
    {
      image: "https://via.placeholder.com/825x825?text=Image 3",
      imageBig: "https://via.placeholder.com/825x825?text=Image 3",
      imageLazy: "https://via.placeholder.com/10x10?text=Image 3",
    },
  ],
});

export const getCategory = () => ({
  name: capitalize(faker.random.words(2)),
  description: faker.lorem.paragraphs(4),
  categories: [
    getSubCategory(),
    getSubCategory(),
    getSubCategory(),
    getSubCategory(),
  ],
});

export const getSubCategory = () => ({
  name: capitalize(faker.lorem.words(2)),
  keyword: faker.lorem.slug(2),
  image: "https://via.placeholder.com/300",
  imageLazy: "https://via.placeholder.com/10x7",
});

export const getManufacturer = () => ({
  id: faker.datatype.number(),
  name: faker.lorem.word(),
});

export const getManufacturers = (count: number) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(getManufacturer());
  }
  return result;
};

export const getMenuLink = () => {
  let result: any = {
    title: capitalize(faker.lorem.words(1)),
    to: "/",
    children: [],
  };
  for (
    let i = 0;
    i < faker.datatype.number({ min: 0, max: 5, precision: 1 });
    i++
  ) {
    let subResult: any = {
      title: capitalize(faker.lorem.words(1)),
      to: "/",
      children: [],
    };
    for (
      let j = 0;
      j < faker.datatype.number({ min: 0, max: 5, precision: 1 });
      j++
    ) {
      subResult.children.push({
        title: capitalize(faker.lorem.words(1)),
        to: "/",
        children: [],
      });
    }
    result.children.push(subResult);
  }
  return result;
};
