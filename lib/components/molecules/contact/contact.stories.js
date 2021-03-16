import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfMContact from "./contact.vue";
Vue.component("VfMContact", vfMContact);
storiesOf("molecule|Contact", module).add("default", () => ({
  components: {
    vfMContact
  },
  template: `<vf-m-contact :contact="contact"/>`,
  data: () => ({
    contact: {
      address: "12 East 5 Street",
      email: "hello@vuefront.com",
      telephone: "646.454.3232",
      fax: "646.454.3232",
      comment: "Simple comment"
    }
  })
}), {
  info: {
    summary: `contact: {
                    address: '12 East 5 Street',
                    email: "hello@vuefront.com",
                    telephone: "646.454.3232",
                    fax: "646.454.3232",
                    comment: "Simple comment"
                }`
  }
});