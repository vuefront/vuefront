import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './button-group.vue';


storiesOf('molecule|Button Group', module)
    .add(
        'default',
        () => ({
            components: { vfMButtonGroup: component },
            template: `<vf-m-button-group>
                <vf-a-button>Submit</vf-a-button>
                <vf-a-button>Cancel</vf-a-button>
            </vf-m-button-group>`
        }), {
            info: {}
        }
    )