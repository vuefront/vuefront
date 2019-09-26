import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aInput from './input.vue';


Vue.component('vfAInput', aInput);
storiesOf('Atom|Input', module)
    .add('default', () => '<vf-a-input  />', { info: {} })