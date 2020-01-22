import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMInputGroup from './input-group.vue';
storiesOf('molecule|Input Group', module).add('default', function () {
  return {
    components: {
      vfMInputGroup: vfMInputGroup
    },
    template: "<div>\n            <label>:prepend</label>\n            <vf-m-input-group :prepend=\"field.label\" >\n                <vf-a-select v-model=\"field.value\" :options=\"field.options\"  />\n            </vf-m-input-group>\n            <br>\n            <label>:append</label>\n            <vf-m-input-group :append=\"field.label\" >\n                <vf-a-select v-model=\"field.value\" :options=\"field.options\"  />\n            </vf-m-input-group>\n\n            </div>",
    data: function data() {
      return {
        field: {
          id: 'name',
          label: 'Name',
          value: 'John',
          options: ['John', 'Mary', 'Steven']
        }
      };
    },
    description: {
      vfMInputGroup: {
        props: {
          appendHtml: "render HTML labels"
        }
      }
    }
  };
}, {
  info: {}
}).add('html', function () {
  return {
    components: {
      vfMInputGroup: vfMInputGroup
    },
    template: "<div>\n            <label>:prependHtml</label>\n            <vf-m-input-group :prependHtml=\"field.label\" >\n                <vf-a-select v-model=\"field.value\" :options=\"field.options\"  />\n            </vf-m-input-group>\n            <br>\n            <label>:appendHtml</label>\n            <vf-m-input-group :appendHtml=\"field.label\" >\n                <vf-a-select v-model=\"field.value\" :options=\"field.options\"  />\n            </vf-m-input-group>\n\n\n            </div>",
    data: function data() {
      return {
        field: {
          id: 'name',
          label: '<strong>Bold name </strong>',
          value: 'John',
          options: ['John', 'Mary', 'Steven']
        }
      };
    },
    description: {
      vfMInputGroup: {
        props: {
          appendHtml: "render HTML labels"
        }
      }
    }
  };
}, {
  info: {}
});