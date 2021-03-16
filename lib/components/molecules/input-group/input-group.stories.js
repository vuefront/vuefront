import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfMInputGroup from "./input-group.vue";
storiesOf("molecule|Input Group", module).add("default", () => ({
  components: {
    vfMInputGroup
  },
  template: `<div>
            <label>:prepend</label>
            <vf-m-input-group :prepend="field.label" >
                <vf-a-select v-model="field.value" :options="field.options"  />
            </vf-m-input-group>
            <br>
            <label>:append</label>
            <vf-m-input-group :append="field.label" >
                <vf-a-select v-model="field.value" :options="field.options"  />
            </vf-m-input-group>

            </div>`,

  data() {
    return {
      field: {
        id: "name",
        label: "Name",
        value: "John",
        options: ["John", "Mary", "Steven"]
      }
    };
  },

  description: {
    vfMInputGroup: {
      props: {
        appendHtml: `render HTML labels`
      }
    }
  }
}), {
  info: {}
}).add("html", () => ({
  components: {
    vfMInputGroup
  },
  template: `<div>
            <label>:prependHtml</label>
            <vf-m-input-group :prependHtml="field.label" >
                <vf-a-select v-model="field.value" :options="field.options"  />
            </vf-m-input-group>
            <br>
            <label>:appendHtml</label>
            <vf-m-input-group :appendHtml="field.label" >
                <vf-a-select v-model="field.value" :options="field.options"  />
            </vf-m-input-group>


            </div>`,

  data() {
    return {
      field: {
        id: "name",
        label: "<strong>Bold name </strong>",
        value: "John",
        options: ["John", "Mary", "Steven"]
      }
    };
  },

  description: {
    vfMInputGroup: {
      props: {
        appendHtml: `render HTML labels`
      }
    }
  }
}), {
  info: {}
});