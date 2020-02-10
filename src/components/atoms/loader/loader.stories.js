import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfALoader from './loader.vue';
import './loader.scss';

Vue.component('vfALoader', vfALoader);
storiesOf('Atom|Loader', module)
    .add('default', () => '<vf-a-loader />', { info: {} })