import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aIcon from './icon.vue';


Vue.component('vfAIcon', aIcon);
storiesOf('Atom|Icon', module)
    .add('default', () => '<vf-a-icon icon="plus" />', { info: {} })