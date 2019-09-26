import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aBadge from './badge.vue';


Vue.component('vfABadge', aBadge);
storiesOf('Atom|Badge', module)
    .add('default', () => '<vf-a-badge>Badge</vf-a-badge>', { info: {} })