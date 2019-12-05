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
    template: "\n            <vf-m-dropdown>\n                <vf-m-dropdown-item>Item 1</vf-m-dropdown-item>\n                <vf-m-dropdown-item>Item 2</vf-m-dropdown-item>\n                <vf-m-dropdown-item>Item 3</vf-m-dropdown-item>\n            </vf-m-dropdown>"
  };
}, {
  info: {}
}).add('nav', function () {
  return {
    components: {
      vfMDropdown: vfMDropdown,
      vfMDropdownItem: vfMDropdownItem
    },
    template: "\n            <vf-m-dropdown nav>\n                <vf-m-dropdown-item>Item 1</vf-m-dropdown-item>\n                <vf-m-dropdown-item>Item 2</vf-m-dropdown-item>\n                <vf-m-dropdown-item>Item 3</vf-m-dropdown-item>\n            </vf-m-dropdown>"
  };
}, {
  info: {}
});