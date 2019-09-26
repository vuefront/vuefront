import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './collapse.vue';

//required for collapse to work. needs refactoring.
import { VBToggle } from "bootstrap-vue";

storiesOf('molecule|!!!Collapse', module)
    .add(
        '!!!default',
        () => ({
            components: { vfMCollapse: component },
            template: `<div style="width:300px">
            <vf-a-button variant="primary" v-b-toggle.collapse-1>Toggle Collapse</vf-a-button>
            <vf-m-collapse id="collapse-1">
                <vf-m-card>
                    <vf-a-heading level="1">heading</vf-a-heading>
                    <p>Lorem ipsum dolor et sank de lupino isumo</p>
                </vf-m-card>
            </vf-m-collapse>
            </div>`,
            directives: {
                BToggle: VBToggle
            }
        }), {
            info: {
                summary: `<span style="color:red">Important!</span> Collapse requires Boostrap-vue VBToggle to work. Needs refactoring`,
            }
        }
    )