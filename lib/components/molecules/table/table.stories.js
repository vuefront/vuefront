import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMTable from './table.vue';
storiesOf('molecule|Table', module).add('!!!default', function () {
  return {
    components: {
      vfMTable: vfMTable
    },
    template: "<vf-m-table :items=\"items\" :fields=\"fields\"></vf-m-table>",
    data: function data() {
      return {
        fields: ['first_name', 'last_name', 'age'],
        items: [{
          age: 40,
          first_name: 'Dickerson',
          last_name: 'Macdonald'
        }, {
          age: 21,
          first_name: 'Larsen',
          last_name: 'Shaw'
        }, {
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson'
        }, {
          age: 38,
          first_name: 'Jami',
          last_name: 'Carney'
        }]
      };
    }
  };
}, {
  info: {
    summary: "Never used"
  }
});