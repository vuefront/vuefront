import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfMCard from "./card.vue";
import vfMCardBody from "./body.vue";
import vfMCardFooter from "./footer.vue";

Vue.component("VfMCard", vfMCard);
Vue.component("VfMCardBody", vfMCardBody);
Vue.component("VfMCardFooter", vfMCardFooter);

storiesOf("molecule|!!!Card", module)
  .add(
    "default",
    () => ({
      components: { vfMCard, vfMCardBody, vfMCardFooter },
      template: `
            <vf-m-card style="width:300px;">
                <vf-m-card-body>Card body</vf-m-card-body>
                <vf-m-card-footer>Card footer</vf-m-card-footer>
            </vf-m-card>`,
    }),
    {
      info: {},
    }
  )
  .add(
    "no body",
    () => ({
      components: { vfMCard, vfMCardBody, vfMCardFooter },
      template: `
            <vf-m-card noBody style="width:300px;">
                <vf-m-card-body>Card body</vf-m-card-body>
                <vf-m-card-footer>Card footer</vf-m-card-footer>
            </vf-m-card>`,
    }),
    {
      info: {},
    }
  )
  .add(
    "!!!color",
    () => ({
      components: { vfMCard, vfMCardBody, vfMCardFooter },
      template: `<div style="width:300px;">
            <vf-m-card noBody bodyBgColor="primary" >
                <vf-m-card-body>Card body</vf-m-card-body>
                <vf-m-card-footer>Card footer</vf-m-card-footer>
            </vf-m-card>

            <vf-m-card bodyBgColor="primary" >
                <vf-m-card-body>Card body</vf-m-card-body>
                <vf-m-card-footer>Card footer</vf-m-card-footer>
            </vf-m-card>

            <vf-m-card bodyBgColor="danger">
                <vf-m-card-body>Card body</vf-m-card-body>
                <vf-m-card-footer>Card footer</vf-m-card-footer>
            </vf-m-card>

            <vf-m-card bodyBgColor="warning">
                <vf-m-card-body>Card body</vf-m-card-body>
                <vf-m-card-footer>Card footer</vf-m-card-footer>
            </vf-m-card>

            <vf-m-card bodyBgColor="success">
                <vf-m-card-body>Card body</vf-m-card-body>
                <vf-m-card-footer>Card footer</vf-m-card-footer>
            </vf-m-card>

            <vf-m-card bodyBgColor="info">
                <vf-m-card-body>Card body</vf-m-card-body>
                <vf-m-card-footer>Card footer</vf-m-card-footer>
            </vf-m-card>

            <vf-m-card bodyBgColor="light">
                <vf-m-card-body>Card body</vf-m-card-body>
                <vf-m-card-footer>Card footer</vf-m-card-footer>
            </vf-m-card>
            
            <vf-m-card bodyBgColor="dark">
                <vf-m-card-body>Card body</vf-m-card-body>
                <vf-m-card-footer>Card footer</vf-m-card-footer>
            </vf-m-card></div>`,
    }),
    {
      info: {
        summary: `<span style="color:red">Important!</span> Background Colors Need Refactoring and does not work with noBody prop`,
      },
    }
  );
