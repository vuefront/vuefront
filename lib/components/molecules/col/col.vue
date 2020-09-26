<template>
  <div
    :is="tag"
    class="vf-m-col"
    :class="classList"
  >
    <slot></slot>
  </div>
</template>
<script>
import {capitalize} from 'lodash'
export default {
  props: {
    alignSelf: {
      type: String,
      default() {
        return null;
      }
    },
    xs: {
      type: Number | Boolean,
      default() {
        return null;
      }
    },
    sm: {
      type: String | Number | Boolean,
      default() {
        return false;
      }
    },
    md: {
      type: String | Number | Boolean,
      default() {
        return false;
      }
    },
    lg: {
      type: String | Number | Boolean,
      default() {
        return false;
      }
    },
    xl: {
      type: String | Number | Boolean,
      default() {
        return false;
      }
    },
    orderXs: {
      type: String | Number,
      default() {
        return null;
      }
    },
    orderSm: {
      type: String | Number,
      default() {
        return null;
      }
    },
    orderMd: {
      type: String | Number,
      default() {
        return null;
      }
    },
    orderLg: {
      type: String | Number,
      default() {
        return null;
      }
    },
    orderXl: {
      type: String | Number,
      default() {
        return null;
      }
    },
    offsetXs: {
      type: String | Number,
      default() {
        return null;
      }
    },
    offsetSm: {
      type: String | Number,
      default() {
        return null;
      }
    },
    offsetMd: {
      type: String | Number,
      default() {
        return null;
      }
    },
    offsetLg: {
      type: String | Number,
      default() {
        return null;
      }
    },
    offsetXl: {
      type: String | Number,
      default() {
        return null;
      }
    },
    tag: {
      type: String,
      default() {
        return "div";
      }
    }
  },
  computed: {
    classList() {
      let result = []

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
      for (const size of sizes) {
        const col = this.createSize(size, this[size])
        if (col) {
          result = [...result, col]
        }
        const offset = this.createSize(size, this[`offset${capitalize(size)}`], '--offset')
        if (offset) {
          result = [...result, offset]
        }
        const order = this.createSize(size, this[`order${capitalize(size)}`], '--order')
        if (order) {
          result = [...result, order]
        }
      }

      if(this.alignSelf) {
        result = [...result, `self-${this.alignSelf}`]
      }

      return result.join(' ')
    }
  },
  methods: {
    createSize(name, value, prefix = '') {
      let result = ''
      // if (name === 'xs') {
      //   name = ''
      // } else {
      //   name = `-${name}`
      // }
      if ((typeof value !== 'undefined' && typeof value !== 'boolean') || (typeof value === 'boolean' && value)) {
        if (value !== null) {

          if (value === '') {
            result =  `flex-1`
          } else {
            result = `${name}:w-${value}/12`
          }
        }
      }

      return result
    }
  }
};
</script>