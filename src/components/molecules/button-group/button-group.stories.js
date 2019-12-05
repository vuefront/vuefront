import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMButtonGroup from './button-group.vue';

Vue.component('vfMButtonGroup', vfMButtonGroup)

storiesOf('molecule|Button Group', module)
    .add(
        'default',
        () => ({
            components: { vfMButtonGroup },
            template: `<vf-m-button-group>
                <vf-a-button>Submit</vf-a-button>
                <vf-a-button>Cancel</vf-a-button>
            </vf-m-button-group>`
        }), {
            info: {}
        }
    )