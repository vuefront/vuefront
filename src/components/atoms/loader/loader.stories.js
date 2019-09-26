import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aLoader from './loader.vue';


Vue.component('vfALoader', aLoader);
storiesOf('Atom|Loader', module)
    .add('default', () => '<vf-a-loader />', { info: {} })