import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMDropdown from "./dropdown.vue";
import vfMDropdownItem from "./dropdown-item.vue";

Vue.component('vfMDropdown', vfMDropdown);
Vue.component('vfMDropdownItem', vfMDropdownItem);

storiesOf('molecule|Dropdown', module)
    .add(
        'default',
        () => ({
            components: { vfMDropdown, vfMDropdownItem },
            template: `
            <vf-m-dropdown>
                <vf-m-dropdown-item>Item 1</vf-m-dropdown-item>
                <vf-m-dropdown-item>Item 2</vf-m-dropdown-item>
                <vf-m-dropdown-item>Item 3</vf-m-dropdown-item>
            </vf-m-dropdown>`
        }), {
            info: {}
        }
    )
    .add(
        'nav',
        () => ({
            components: { vfMDropdown, vfMDropdownItem },
            template: `
            <vf-m-dropdown nav>
                <vf-m-dropdown-item>Item 1</vf-m-dropdown-item>
                <vf-m-dropdown-item>Item 2</vf-m-dropdown-item>
                <vf-m-dropdown-item>Item 3</vf-m-dropdown-item>
            </vf-m-dropdown>`
        }), {
            info: {}
        }
    )