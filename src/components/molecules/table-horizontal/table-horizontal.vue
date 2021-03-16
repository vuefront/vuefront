<template>
  <section class="vf-m-table-horizontal">
    <div
      v-for="(field, fieldKey) in fields"
      :key="fieldKey"
      class="vf-m-table-horizontal__item"
    >
      <div class="vf-m-table-horizontal__title border p-2">
        {{ field.label }}
      </div>
      <div
        v-for="(item, itemKey) in items"
        :key="itemKey"
        class="vf-m-table-horizontal__value border p-2"
      >
        <template v-if="$scopedSlots[field.key]">
          <slot :name="field.key" v-bind="item"></slot>
        </template>
        <div v-else v-html="item[field.key]"></div>
      </div>
    </div>
  </section>
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
