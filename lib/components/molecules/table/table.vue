<template>
  <b-table :items="items" :fields="fields" class="vf-m-table table-auto">
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
    <template v-for="(_, name) in $scopedSlots" :slot="`cell(${name})`" slot-scope="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </b-table>
</template>
<script>
import { BTable } from "bootstrap-vue";
export default {
  components: {
    BTable
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    fields: {
      type: [Array, Object],
      default: null
    }
  }
};
</script>