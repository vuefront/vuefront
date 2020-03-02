import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMField from './field.vue';
storiesOf('molecule|!!!Field', module).add('!!!input', () => ({
  components: {
    vfMField
  },
  template: `<div>
            <vf-m-field :state="null" id="input-1"
                >
                <template #label>{{field.label}}</template>
                <template #default="data">
                    <vf-a-input v-bind="data"  v-model="field.value"  />
                </template>
                <template #error>{{field.error}}</template>
            </vf-m-field>
            
            <vf-m-field :state="true" id="input-2"
                >
                <template #label>{{field.label}}</template>
                <template #default="data">
                    <vf-a-input v-bind="data"  v-model="field.value"  />
                </template>
                <template #error>{{field.error}}</template>
            </vf-m-field>
            
            <vf-m-field :state="false" id="input-3"
                >
                <template #label>{{field.label}}</template>
                <template #default="data">
                    <vf-a-input v-bind="data"  v-model="field.value"  />
                </template>
                <template #error>{{field.error}}</template>
            </vf-m-field>

            <div>Input value (v-model) : <strong>{{field.value}}</strong></div>
            </div>`,

  data() {
    return {
      field: {
        id: 'name',
        label: 'Name',
        value: 'John',
        error: 'Firstname not provided'
      }
    };
  }

}), {
  info: {
    summary: `Why do we use trim all the time for input`
  }
}).add('!!!textarea', () => ({
  components: {
    vfMField
  },
  template: `<div>
            <vf-m-field :state="null" id="textarea-1"
                >
                <template #label>{{field.label}}</template>
                <template #default="data">
                    <vf-a-textarea v-bind="data"  v-model="field.value" />
                </template>
                <template #error>{{field.error}}</template>
            </vf-m-field>
            
            <vf-m-field :state="true" id="textarea-2"
                >
                <template #label>{{field.label}}</template>
                <template #default="data">
                    <vf-a-textarea v-bind="data"  v-model="field.value" />
                </template>
                <template #error>{{field.error}}</template>
            </vf-m-field>
            
            <vf-m-field :state="false" id="textarea-3"
                >
                <template #label>{{field.label}}</template>
                <template #default="data">
                    <vf-a-textarea v-bind="data"  v-model="field.value" />
                </template>
                <template #error>{{field.error}}</template>
            </vf-m-field>

            <div>Input value (v-model) : <strong>{{field.value}}</strong></div>
            </div>`,

  data() {
    return {
      field: {
        id: 'name',
        label: 'Name',
        value: 'John',
        error: 'Firstname not provided'
      }
    };
  }

}), {
  info: {
    summary: `the CSS does not have     
                -webkit-appearance: none;     
                -moz-appearance: none;   
                appearance: none;`
  }
}).add('!!!select', () => ({
  components: {
    vfMField
  },
  template: `<div>
            <vf-m-field :state="null" id="select-1"
                >
                <template #label>{{field.label}}</template>
                <template #default="data">
                    <vf-a-select v-bind="data"  v-model="field.value" :options="field.options" />
                </template>
                <template #error>{{field.error}}</template>
            </vf-m-field>
            
            <vf-m-field :state="true" id="select-2"
                >
                <template #label>{{field.label}}</template>
                <template #default="data">
                    <vf-a-select v-bind="data"  v-model="field.value"  :options="field.options" />
                </template>
                <template #error>{{field.error}}</template>
            </vf-m-field>
            
            <vf-m-field :state="false" id="select-3"
                >
                <template #label>{{field.label}}</template>
                <template #default="data">
                    <vf-a-select v-bind="data"  v-model="field.value"  :options="field.options" />
                </template>
                <template #error>{{field.error}}</template>
            </vf-m-field>

            <div>Input value (v-model) : <strong>{{field.value}}</strong></div>
            </div>`,

  data() {
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

}), {
  info: {
    summary: `the CSS does not have     
                -webkit-appearance: none;     
                -moz-appearance: none;   
                appearance: none;`
  }
}).add('!!!No Checkbox', () => ({
  components: {
    vfMField
  },
  template: `<div>
             NO Checkboxes
            </div>`
}), {
  info: {
    summary: `VueFront replaced checkboxes with button toggle`
  }
}).add('!!!No Radio', () => ({
  components: {
    vfMField
  },
  template: `<div>
             NO Radio
            </div>`
}), {
  info: {
    summary: `VueFront replaced Radio buttons with button toggle`
  }
});