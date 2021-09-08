<template>
  <ul class="vf-a-pagination">
    <li class="vf-a-pagination__item">
      <div :class="getClass(1, true)">
        <button @click.prevent="handleChange(1)">&laquo;</button>
      </div>
    </li>
    <li class="vf-a-pagination__item">
      <div :class="getClass(modelValue > 1 ? modelValue - 1 : 1, true)">
        <button
          @click.prevent="handleChange(modelValue > 1 ? modelValue - 1 : 1)"
        >
          &lsaquo;
        </button>
      </div>
    </li>
    <template v-for="(item, index) in pageButtons" :key="`pagination-${index}`">
      <li
        v-if="item === 'less' || item === 'more'"
        class="vf-a-pagination__item"
      >
        <div class="vf-a-pagination__item__hellip">
          <span>&hellip;</span>
        </div>
      </li>
      <li v-else class="vf-a-pagination__item">
        <button :class="getClass(item)" @click.prevent="handleChange(item)">
          {{ item }}
        </button>
      </li>
    </template>
    <li class="vf-a-pagination__item">
      <div
        :class="
          getClass(modelValue < totalPages ? modelValue + 1 : totalPages, true)
        "
      >
        <button
          @click.prevent="
            handleChange(modelValue < totalPages ? modelValue + 1 : totalPages)
          "
        >
          &rsaquo;
        </button>
      </div>
    </li>
    <li class="vf-a-pagination__item">
      <div :class="getClass(totalPages, true)">
        <button @click.prevent="handleChange(totalPages)">&raquo;</button>
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import range from "lodash-es/range";
import { computed } from "vue";
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  totalPages: {
    type: Number,
    default: 1,
  },
  perPage: {
    type: Number,
    default: 20,
  },
});

const pageButtons = computed(() => {
  const from1 = Number(props.modelValue) - Math.round(props.perPage / 2) + 1;
  const from2 = props.totalPages + 1 - props.perPage;
  const from = Math.max(Math.min(from1, from2), 1);

  const to = Math.min(from + props.perPage - 1, props.totalPages);

  return range(from, to + 1).map((page) => {
    if (page === from && from > 1) {
      return "less";
    }

    if (page === to && to < props.totalPages) {
      return "more";
    }

    return Number(page);
  });
});
const getClass = (page: string | number, disabled: boolean) => {
  const result = [];

  page = Number(page);
  result.push("vf-a-pagination__link");

  if (page === props.modelValue && !disabled) {
    result.push("vf-a-pagination__link--active");
  } else if (page === props.modelValue && disabled) {
    result.push("vf-a-pagination__link--disabled");
  }

  return result.join(" ");
};

const emit = defineEmits(["change", "update:modelValue"]);

const handleChange = (e: any) => {
  emit("change", e);
  emit("update:modelValue", e);
};
</script>
