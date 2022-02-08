import VfMTable from "./table.vue";
import VfMThead from "./thead.vue";
import VfMTbody from "./tbody.vue";
import VfMTr from "./tr.vue";
import VfMTh from "./th.vue";
import VfMTd from "./td.vue";
import "./table.scss";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/table",
  component: VfMTable,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMTable, VfMThead, VfMTh, VfMTr, VfMTbody, VfMTd },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-table v-bind="args">
    <vf-m-thead>
      <vf-m-tr>
        <vf-m-th>Age</vf-m-th>
        <vf-m-th>First Name</vf-m-th>
        <vf-m-th>Last Name</vf-m-th>
      </vf-m-tr>
    </vf-m-thead>
    <vf-m-tbody>
      <vf-m-tr>
        <vf-m-td>40</vf-m-td>
        <vf-m-td>Dickerson</vf-m-td>
        <vf-m-td>Macdonald</vf-m-td>
      </vf-m-tr>
      <vf-m-tr>
        <vf-m-td>21</vf-m-td>
        <vf-m-td>Larsen</vf-m-td>
        <vf-m-td>Shaw</vf-m-td>
      </vf-m-tr>
      <vf-m-tr>
        <vf-m-td>89</vf-m-td>
        <vf-m-td>Geneva</vf-m-td>
        <vf-m-td>Wilson</vf-m-td>
      </vf-m-tr>
      <vf-m-tr>
        <vf-m-td>38</vf-m-td>
        <vf-m-td>Jami</vf-m-td>
        <vf-m-td>Carney</vf-m-td>
      </vf-m-tr>
    </vf-m-tbody>
  </vf-m-table>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
