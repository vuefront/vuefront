<template>
  <table class="vf-m-table w-full mb-4">
    <thead>
      <tr>
        <th
          v-for="(field, fieldKey) in fields"
          :key="fieldKey"
          class="border-t border-b p-4"
        >
          {{ field.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, itemKey) in items" :key="itemKey">
        <td
          v-for="(field, fieldKey) in fields"
          :key="fieldKey"
          class="border-t p-4"
        >
          <template v-if="$scopedSlots[field.key]">
            <slot :name="field.key" v-bind="{ item }"></slot>
          </template>
          <div v-else v-html="item[field.key]"></div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    fields: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
