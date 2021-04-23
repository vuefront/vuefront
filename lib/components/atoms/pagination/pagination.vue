<template>
  <ul class="vf-a-pagination">
    <li class="vf-a-pagination__item">
      <button :class="getClass(1, true)" @click.prevent="handleChange(1)">
        &laquo;
      </button>
    </li>
    <li class="vf-a-pagination__item">
      <button
        :class="getClass(page > 1 ? page - 1 : 1, true)"
        @click.prevent="handleChange(page > 1 ? page - 1 : 1)"
      >
        &lsaquo;
      </button>
    </li>
    <template v-for="(item, index) in pageButtons">
      <li
        v-if="item === 'less' || item === 'more'"
        :key="index"
        class="vf-a-pagination__item"
      >
        <span>&hellip;</span>
      </li>
      <li v-else :key="index" class="vf-a-pagination__item">
        <button :class="getClass(item)" @click.prevent="handleChange(item)">
          {{ item }}
        </button>
      </li>
    </template>
    <li class="vf-a-pagination__item">
      <button
        :class="getClass(page < totalPages ? page + 1 : totalPages, true)"
        @click.prevent="handleChange(page < totalPages ? page + 1 : totalPages)"
      >
        &rsaquo;
      </button>
    </li>
    <li class="vf-a-pagination__item">
      <button
        :class="getClass(totalPages, true)"
        @click.prevent="handleChange(totalPages)"
      >
        &raquo;
      </button>
    </li>
  </ul>
</template>
<script>
import range from "lodash/range";

export default {
  model: {
    prop: "page",
    event: "change",
  },
  props: {
    page: {
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
      const from1 = Number(this.page) - Math.round(this.perPage / 2) + 1;
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

      if (page === this.page && !disabled) {
        result.push("vf-a-pagination__link--active");
      } else if (page === this.page && disabled) {
        result.push("vf-a-pagination__link--disabled");
      }

      return result.join(" ");
    },
    handleChange(e) {
      this.$emit("change", e);
      this.$emit("input", e);
    },
  },
};
</script>
