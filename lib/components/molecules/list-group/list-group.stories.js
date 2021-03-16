import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfMListGroup from "./list-group.vue";
import vfMListGroupItem from "./list-group-item.vue";
storiesOf("molecule|List Group", module).add("default", () => ({
  components: {
    vfMListGroup,
    vfMListGroupItem
  },
  template: `
            <vf-m-list-group>
                <vf-m-list-group-item active to="#">List item one</vf-m-list-group-item>
                <vf-m-list-group-item to="#">List item two</vf-m-list-group-item>
                <vf-m-list-group-item to="#">List item tree</vf-m-list-group-item>
            </vf-m-list-group>`
}), {
  info: {}
});