import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMDropdown from "./dropdown.vue";
import vfMDropdownItem from "./dropdown-item.vue";
Vue.component('vfMDropdown', vfMDropdown);
Vue.component('vfMDropdownItem', vfMDropdownItem);
storiesOf('molecule|Dropdown', module).add('default', function () {
  return {
    components: {
      vfMDropdown: vfMDropdown,
      vfMDropdownItem: vfMDropdownItem
    },
    template: "\n            <vf-m-dropdown>\n                <template slot=\"button-content\">\n                    <vf-a-icon :icon=\"['far', 'user-circle']\" />\n                    Label\n                </template>\n                <vf-m-dropdown-item>Item 1</vf-m-dropdown-item>\n                <vf-m-dropdown-item>Item 2</vf-m-dropdown-item>\n                <vf-m-dropdown-item>Item 3</vf-m-dropdown-item>\n            </vf-m-dropdown>"
  };
}, {
  info: {}
}).add('link', function () {
  return {
    components: {
      vfMDropdown: vfMDropdown,
      vfMDropdownItem: vfMDropdownItem
    },
    template: "\n                <vf-m-dropdown variant=\"link\" right>\n                    <template slot=\"button-content\">\n                        <vf-a-icon :icon=\"['far', 'user-circle']\" />\n                        Label\n                    </template>\n                    <vf-m-dropdown-item>Item 1</vf-m-dropdown-item>\n                    <vf-m-dropdown-item>Item 2</vf-m-dropdown-item>\n                    <vf-m-dropdown-item>Item 3</vf-m-dropdown-item>\n                </vf-m-dropdown>"
  };
}, {
  info: {
    summary: "Dropdown with link is used in the header top menu"
  }
}).add('!!!nav (as li)', function () {
  return {
    components: {
      vfMDropdown: vfMDropdown,
      vfMDropdownItem: vfMDropdownItem
    },
    template: "\n            <ul>\n                <vf-m-dropdown nav right>\n                    <template slot=\"button-content\">\n                        <vf-a-icon :icon=\"['far', 'user-circle']\" />\n                        Label\n                    </template>\n                    <vf-m-dropdown-item>Item 1</vf-m-dropdown-item>\n                    <vf-m-dropdown-item>Item 2</vf-m-dropdown-item>\n                    <vf-m-dropdown-item>Item 3</vf-m-dropdown-item>\n                </vf-m-dropdown>\n            </ul>"
  };
}, {
  info: {
    summary: "Dropdown with Nav is used only to strip the bootstrap dropdown from button tag. Can be used with b-nav. Currently not used."
  }
});