import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfAButton from './button.vue';
import './button.scss';

Vue.component('vfAButton', vfAButton)
storiesOf('Atom|Button', module)
    .add(
        'default',
        () => ({
            components: { vfAButton: vfAButton },
            template: `<vf-a-button>Primary</vf-a-button>`
        }), {
            info: {}
        }
    ).add(
        'colors',
        () => ({
            components: { vfAButton: vfAButton },
            template: `<div>
                <vf-a-button color="primary">Primary</vf-a-button>
                <vf-a-button color="success">Success</vf-a-button>
                <vf-a-button color="danger">Danger</vf-a-button>
                <vf-a-button color="warning">Warning</vf-a-button>
                <vf-a-button color="info">Info</vf-a-button>
                <vf-a-button color="light">Info</vf-a-button>
                <vf-a-button color="dark">Info</vf-a-button>
            </div>
            `
        }), {
            info: {}
        }
    ).add(
        '!!!sizes',
        () => ({
            components: { vfAButton: vfAButton },
            template: `<div>
                NEEDS SIZES!
            </div>
            `
        }), {
            info: {
                summary: `<span style="color:red">Important!</span> Need to add Sizes`
            }
        }
    ).add(
        'pressed',
        () => ({
            components: { vfAButton: vfAButton },
            template: `<div>
                <vf-a-button pressed="true" color="primary">Primary</vf-a-button>
                <vf-a-button pressed="true" color="success">Success</vf-a-button>
                <vf-a-button pressed="true" color="danger">Danger</vf-a-button>
                <vf-a-button pressed="true" color="warning">Warning</vf-a-button>
                <vf-a-button pressed="true" color="info">Info</vf-a-button>
            </div>
            `
        }), {
            info: {}
        }
    ).add(
        'active',
        () => ({
            components: { vfAButton: vfAButton },
            template: `<div>
                <vf-a-button active="true" color="primary">Primary</vf-a-button>
                <vf-a-button active="true" color="success">Success</vf-a-button>
                <vf-a-button active="true" color="danger">Danger</vf-a-button>
                <vf-a-button active="true" color="warning">Warning</vf-a-button>
                <vf-a-button active="true" color="info">Info</vf-a-button>
            </div>
            `
        }), {
            info: {}
        }
    )