import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfAHeading from "./heading.vue";

Vue.component("vfAHeading");
storiesOf("Atom|Heading", module)
  .add(
    "div-tag",
    () => ({
      components: { vfAHeading },
      template: `<div>
            <vf-a-heading level="1">Heading 1</vf-a-heading>
            <vf-a-heading level="2">Heading 2</vf-a-heading>
            <vf-a-heading level="3">Heading 3</vf-a-heading>
            <vf-a-heading level="4">Heading 4</vf-a-heading>
            <vf-a-heading level="5">Heading 5</vf-a-heading>
            <vf-a-heading level="6">Heading 6</vf-a-heading>
            </div>`,
    }),
    {
      info: {
        summary: `For SEO purposes we have made div-tag by default. If you need to an h-tag, you will need to specifically state that in the tag prop.`,
      },
    }
  )
  .add(
    "h-tag",
    () => ({
      components: { vfAHeading },
      template: `<div>
            <vf-a-heading tag="h1" level="1">Heading 1</vf-a-heading>
            <vf-a-heading tag="h2" level="2">Heading 2</vf-a-heading>
            <vf-a-heading tag="h3" level="3">Heading 3</vf-a-heading>
            <vf-a-heading tag="h4" level="4">Heading 4</vf-a-heading>
            <vf-a-heading tag="h5" level="5">Heading 5</vf-a-heading>
            <vf-a-heading tag="h6" level="6">Heading 6</vf-a-heading>
            </div>`,
    }),
    {
      info: {},
    }
  );
