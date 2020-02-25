import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfAPagination from './pagination.vue';


Vue.component('vfAPagination', vfAPagination);
storiesOf('Atom|Pagination', module)
    .add('default', () => '<vf-a-pagination totalPages="100" page="1"></vf-a-pagination>', { info: {} })
    .add('default', () => '<vf-a-pagination totalPages="20" perPage="1" page="1"></vf-a-pagination>', { info: {} })