<template>
  <section class="vf-m-table-horizontal">
    <div
      v-for="(field, fieldKey) in fields"
      :key="fieldKey"
      class="vf-m-table-horizontal__item"
    >
      <div class="vf-m-table-horizontal__title">
        {{ field.label }}
      </div>
      <div
        v-for="(item, itemKey) in items"
        :key="itemKey"
        class="vf-m-table-horizontal__value"
      >
        <template v-if="$slots[field.key]">
          <slot :name="field.key" v-bind="item"></slot>
        </template>
        <div v-else v-html="item[field.key]"></div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
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
