import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMField from './field.vue';
storiesOf('molecule|!!!Field', module).add('!!!input', function () {
  return {
    components: {
      vfMField: vfMField
    },
    template: "<div>\n            <vf-m-field :state=\"null\" id=\"input-1\"\n                >\n                <template #label>{{field.label}}</template>\n                <template #default=\"data\">\n                    <vf-a-input v-bind=\"data\"  v-model=\"field.value\"  />\n                </template>\n                <template #error>{{field.error}}</template>\n            </vf-m-field>\n            \n            <vf-m-field :state=\"true\" id=\"input-2\"\n                >\n                <template #label>{{field.label}}</template>\n                <template #default=\"data\">\n                    <vf-a-input v-bind=\"data\"  v-model=\"field.value\"  />\n                </template>\n                <template #error>{{field.error}}</template>\n            </vf-m-field>\n            \n            <vf-m-field :state=\"false\" id=\"input-3\"\n                >\n                <template #label>{{field.label}}</template>\n                <template #default=\"data\">\n                    <vf-a-input v-bind=\"data\"  v-model=\"field.value\"  />\n                </template>\n                <template #error>{{field.error}}</template>\n            </vf-m-field>\n\n            <div>Input value (v-model) : <strong>{{field.value}}</strong></div>\n            </div>",
    data: function data() {
      return {
        field: {
          id: 'name',
          label: 'Name',
          value: 'John',
          error: 'Firstname not provided'
        }
      };
    }
  };
}, {
  info: {
    summary: "Why do we use trim all the time for input"
  }
}).add('!!!textarea', function () {
  return {
    components: {
      vfMField: vfMField
    },
    template: "<div>\n            <vf-m-field :state=\"null\" id=\"textarea-1\"\n                >\n                <template #label>{{field.label}}</template>\n                <template #default=\"data\">\n                    <vf-a-textarea v-bind=\"data\"  v-model=\"field.value\" />\n                </template>\n                <template #error>{{field.error}}</template>\n            </vf-m-field>\n            \n            <vf-m-field :state=\"true\" id=\"textarea-2\"\n                >\n                <template #label>{{field.label}}</template>\n                <template #default=\"data\">\n                    <vf-a-textarea v-bind=\"data\"  v-model=\"field.value\" />\n                </template>\n                <template #error>{{field.error}}</template>\n            </vf-m-field>\n            \n            <vf-m-field :state=\"false\" id=\"textarea-3\"\n                >\n                <template #label>{{field.label}}</template>\n                <template #default=\"data\">\n                    <vf-a-textarea v-bind=\"data\"  v-model=\"field.value\" />\n                </template>\n                <template #error>{{field.error}}</template>\n            </vf-m-field>\n\n            <div>Input value (v-model) : <strong>{{field.value}}</strong></div>\n            </div>",
    data: function data() {
      return {
        field: {
          id: 'name',
          label: 'Name',
          value: 'John',
          error: 'Firstname not provided'
        }
      };
    }
  };
}, {
  info: {
    summary: "the CSS does not have     \n                -webkit-appearance: none;     \n                -moz-appearance: none;   \n                appearance: none;"
  }
}).add('!!!select', function () {
  return {
    components: {
      vfMField: vfMField
    },
    template: "<div>\n            <vf-m-field :state=\"null\" id=\"select-1\"\n                >\n                <template #label>{{field.label}}</template>\n                <template #default=\"data\">\n                    <vf-a-select v-bind=\"data\"  v-model=\"field.value\" :options=\"field.options\" />\n                </template>\n                <template #error>{{field.error}}</template>\n            </vf-m-field>\n            \n            <vf-m-field :state=\"true\" id=\"select-2\"\n                >\n                <template #label>{{field.label}}</template>\n                <template #default=\"data\">\n                    <vf-a-select v-bind=\"data\"  v-model=\"field.value\"  :options=\"field.options\" />\n                </template>\n                <template #error>{{field.error}}</template>\n            </vf-m-field>\n            \n            <vf-m-field :state=\"false\" id=\"select-3\"\n                >\n                <template #label>{{field.label}}</template>\n                <template #default=\"data\">\n                    <vf-a-select v-bind=\"data\"  v-model=\"field.value\"  :options=\"field.options\" />\n                </template>\n                <template #error>{{field.error}}</template>\n            </vf-m-field>\n\n            <div>Input value (v-model) : <strong>{{field.value}}</strong></div>\n            </div>",
    data: function data() {
      return {
        field: {
          id: 'name',
          label: 'Name',
          value: 'John',
          options: ['John', 'Mary', 'Steven'],
          error: 'Firstname not provided'
        }
      };
    }
  };
}, {
  info: {
    summary: "the CSS does not have     \n                -webkit-appearance: none;     \n                -moz-appearance: none;   \n                appearance: none;"
  }
}).add('!!!No Checkbox', function () {
  return {
    components: {
      vfMField: vfMField
    },
    template: "<div>\n             NO Checkboxes\n            </div>"
  };
}, {
  info: {
    summary: "VueFront replaced checkboxes with button toggle"
  }
}).add('!!!No Radio', function () {
  return {
    components: {
      vfMField: vfMField
    },
    template: "<div>\n             NO Radio\n            </div>"
  };
}, {
  info: {
    summary: "VueFront replaced Radio buttons with button toggle"
  }
});