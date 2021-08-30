<template>
  <ul class="vf-a-pagination">
    <li class="vf-a-pagination__item">
      <div :class="getClass(1, true)">
        <button @click.prevent="handleChange(1)">
          &laquo;
        </button>
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
      <div          :class="getClass(modelValue < totalPages ? modelValue + 1 : totalPages, true)" >
          <button
          @click.prevent="handleChange(modelValue < totalPages ? modelValue + 1 : totalPages)"
          > 
          &rsaquo;
        </button>
      </div>
    </li>
    <li class="vf-a-pagination__item">
      <div  :class="getClass(totalPages, true)">
        <button
        @click.prevent="handleChange(totalPages)">
        &raquo;
      </button>
      </div>
    </li>
  </ul>
</template>
<script>
import range from "lodash-es/range";

export default {
  props: {
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
  },
  computed: {
    pageButtons() {
      const from1 = Number(this.modelValue) - Math.round(this.perPage / 2) + 1;
      const from2 = this.totalPages + 1 - this.perPage;
      const from = Math.max(Math.min(from1, from2), 1);

      const to = Math.min(from + this.perPage - 1, this.totalPages);

      return range(from, to + 1).map((page) => {
        if (page === from && from > 1) {
          return "less";
        }

        if (page === to && to < this.totalPages) {
          return "more";
        }

        return Number(page);
      });
    },
  },
  methods: {
    getClass(page, disabled) {
      const result = [];

      page = Number(page);
      result.push("vf-a-pagination__link");

      if (page === this.modelValue && !disabled) {
        result.push("vf-a-pagination__link--active");
      } else if (page === this.modelValue && disabled) {
        result.push("vf-a-pagination__link--disabled");
      }

      return result.join(" ");
    },
    handleChange(e) {
      this.$emit("change", e);
      this.$emit("update:modelValue", e);
    },
  },
};
</script>
