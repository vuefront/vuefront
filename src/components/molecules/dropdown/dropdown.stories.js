import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './dropdown.vue';


storiesOf('molecule|Dropdown', module)
    .add(
        'default',
        () => ({
            components: { vfMDropdown: component },
            template: `<vf-m-dropdown show="true">This is an alert message</vf-m-dropdown>`
        }), {
            info: {}
        }
    )