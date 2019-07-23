<template>
  <div>
    <b-table :items="items" :fields="fields">
      <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
      <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </b-table>
  </div>
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
