import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aPagination from './pagination.vue';


Vue.component('vfAPagination', aPagination);
storiesOf('Atom|Pagination', module)
    .add('default', () => '<vf-a-pagination totalPages=5 value="0" />', { info: {} })