import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aBadge from './badge.vue';


Vue.component('vfABadge', aBadge);
storiesOf('Atom|Badge', module)
    .add(
        'default',
        () => ({
            components: { vfABadge: aBadge },
            template: `<vf-a-badge>Badge</vf-a-badge>`
        }), {
            info: {}
        }
    )
    .add(
        '!!!sizes',
        () => ({
            components: { vfABadge: aBadge },
            template: `<div>
            <h1><vf-a-badge>Badge</vf-a-badge></h1>
            <h2><vf-a-badge>Badge</vf-a-badge></h2>
            <h3><vf-a-badge>Badge</vf-a-badge></h3>
            <h4><vf-a-badge>Badge</vf-a-badge></h4>
            <h5><vf-a-badge>Badge</vf-a-badge></h5>
            <h6><vf-a-badge>Badge</vf-a-badge></h6>
        </div>`
        }), {
            info: {}
        }
    )