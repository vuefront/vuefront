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
