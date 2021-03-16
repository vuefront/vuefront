import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfAButton from "./button.vue";
import "./button.scss";

Vue.component("VfAButton", vfAButton);
storiesOf("Atom|!!! Button", module)
  .add(
    "default",
    () => ({
      components: { vfAButton },
      template: `<vf-a-button>Primary</vf-a-button>`,
    }),
    {
      info: {
        summary: `buttons have extra SCSS styles that need to be reviewed`,
      },
    }
  )
  .add(
    "colors",
    () => ({
      components: { vfAButton },
      template: `<div>
                <vf-a-button color="primary">Primary</vf-a-button>
                <vf-a-button color="success">Success</vf-a-button>
                <vf-a-button color="danger">Danger</vf-a-button>
                <vf-a-button color="warning">Warning</vf-a-button>
                <vf-a-button color="info">Info</vf-a-button>
                <vf-a-button color="light">Info</vf-a-button>
                <vf-a-button color="dark">Info</vf-a-button>
            </div>
            `,
    }),
    {
      info: {},
    }
  )
  .add(
    "!!!sizes",
    () => ({
      components: { vfAButton },
      template: `<div>
                <vf-a-button size="sm">Primary</vf-a-button>
                <vf-a-button size="md">Primary</vf-a-button>
                <vf-a-button size="lg">Primary</vf-a-button>
            </div>
            `,
    }),
    {
      info: {
        summary: `<span style="color:red">Important!</span> Need to add Sizes`,
      },
    }
  )
  .add(
    "pressed",
    () => ({
      components: { vfAButton },
      template: `<div>
                <vf-a-button pressed="true" color="primary">Primary</vf-a-button>
                <vf-a-button pressed="true" color="success">Success</vf-a-button>
                <vf-a-button pressed="true" color="danger">Danger</vf-a-button>
                <vf-a-button pressed="true" color="warning">Warning</vf-a-button>
                <vf-a-button pressed="true" color="info">Info</vf-a-button>
            </div>
            `,
    }),
    {
      info: {},
    }
  )
  .add(
    "active",
    () => ({
      components: { vfAButton },
      template: `<div>
                <vf-a-button active="true" color="primary">Primary</vf-a-button>
                <vf-a-button active="true" color="success">Success</vf-a-button>
                <vf-a-button active="true" color="danger">Danger</vf-a-button>
                <vf-a-button active="true" color="warning">Warning</vf-a-button>
                <vf-a-button active="true" color="info">Info</vf-a-button>
            </div>
            `,
    }),
    {
      info: {},
    }
  );
