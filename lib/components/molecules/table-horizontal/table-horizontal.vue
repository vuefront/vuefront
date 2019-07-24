<template>
  <section class="vf-m-table-horizontal">
    <div class="vf-m-table-horizontal__item" v-for="(value, index) in fields" :key="index">
      <div class="vf-m-table-horizontal__item_value border p-2">{{value.title}}</div>
      <div
        class="vf-m-table-horizontal__item_value border p-2"
        v-for="(item, itemKey) in items"
        :key="itemKey"
      >
        <template v-if="$scopedSlots[value.code]">
          <slot :name="value.code" v-bind="item"></slot>
        </template>
        <div v-else v-html="item[value.code]"></div>
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
      }
    },
    fields: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
