import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfAIcon from './icon.vue';
import './icon.scss'

Vue.component('vfAIcon', vfAIcon);
storiesOf('Atom|Icon', module)
    .add(
        'default',
        () => ({
            components: { vfAIcon },
            template: `<div>
            <vf-a-icon icon="plus" />
            <vf-a-icon icon="shopping-cart" />
            <vf-a-icon icon="heart" />
            <vf-a-icon icon="exchange-alt" />
            <vf-a-icon icon="user-circle" />
            <vf-a-icon icon="long-arrow-alt-right" />
            <vf-a-icon icon="angle-down" />
            <vf-a-icon icon="angle-search" />
            </div>`
        }), {
            info: {
                summary: ``
            }
        }
    )