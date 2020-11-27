<template>
  <ul class="vf-a-pagination table border-collapse text-center bg-white mx-auto mt-2">
    <li class="w-8 h-8 border table-cell">
      <button :class="getClass(1, true)" @click.prevent="handleChange(1)">
        &laquo;
      </button>
      </li>
    <li class="w-8 h-8 border table-cell">
       <button :class="getClass(page > 1 ? page - 1 : 1, true)"  @click.prevent="handleChange(page > 1 ? page - 1 : 1)">&lsaquo;</button>
      </li>
    <template v-for="(item, index) in pageButtons">
      <li v-if="item === 'less' || item === 'more'" class="w-8 h-8 border table-cell"  :key="index">
         <span>&hellip;</span>

         </li>
      <li v-else class="w-8 h-8 border table-cell"  :key="index">
        <button :class="getClass(item)"  @click.prevent="handleChange(item)">{{item}}</button>
      </li>
    </template>
    <li class="w-8 h-8 border table-cell">
      <button :class="getClass(page < totalPages ? page + 1: totalPages, true)" @click.prevent="handleChange(page < totalPages ? page + 1 : totalPages)">&rsaquo;</button>
    </li>
    <li class="w-8 h-8 border table-cell">
      <button :class="getClass(totalPages, true)"  @click.prevent="handleChange(totalPages)">&raquo;</button>
    </li>
  </ul>
</template>
<script>
import range from 'lodash/range';

export default {
  model: {
    prop: 'page',
    event: 'change',
  },
  props: {
    page: {
      type: Number,
      default: 0
    },
    totalPages: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 20
    }
  },
  computed: {
    pageButtons() {
      const from1 = Number(this.page) - Math.round(this.perPage / 2) + 1;
      const from2 = this.totalPages + 1 - this.perPage;
      const from = Math.max(
        Math.min(from1, from2),
        1,
      );

      const to = Math.min(from + this.perPage - 1, this.totalPages);

      return range(from, to + 1).map((page) => {
        if (page === from && from > 1) {
          return 'less';
        }

        if (page === to && to < this.totalPages) {
          return 'more';
        }

        return Number(page);
      });
    },
    activeButton() {
      return 'focus:outline-none bg-primary-darker text-primary-inverted w-full h-full'
    },
    disabledButton() {
      return 'focus:outline-none opacity-25 w-full h-full cursor-not-allowed'
    }
  },
  methods: {
    getClass(page, disabled) {
      let result = []

      page = Number(page)

      if (page === this.page && !disabled) {
        result.push(this.activeButton)
      } else if(page === this.page && disabled) {
        result.push(this.disabledButton)

      } else {
        result.push('focus:outline-none hover:bg-primary hover:text-primary-inverted w-full h-full')
      }

      return result.join(' ')
    },
    handleChange(e) {
      this.$emit("change", e);
    }
  }
};
</script>