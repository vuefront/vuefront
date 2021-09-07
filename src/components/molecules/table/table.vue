<template>
  <table class="vf-m-table">
    <thead>
      <tr>
        <th v-for="(field, fieldKey) in fields" :key="fieldKey">
          {{ field.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, itemKey) in items" :key="itemKey">
        <td v-for="(field, fieldKey) in fields" :key="fieldKey">
          <template v-if="$slots[field.key]">
            <slot :name="field.key" v-bind="{ item }"></slot>
          </template>
          <div v-else v-html="item[field.key]"></div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts" setup>
defineProps({
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
});
</script>
