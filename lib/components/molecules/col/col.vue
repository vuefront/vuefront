<template>
  <b-col
    :cols="xs"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
    :order="orderXs"
    :order-sm="orderSm"
    :order-md="orderMd"
    :order-lg="orderLg"
    :order-xl="orderXl"
    :offset="offsetXs"
    :offset-sm="offsetSm"
    :offset-md="offsetMd"
    :offset-lg="offsetLg"
    :offset-xl="offsetXl"
    :align-self="alignSelf"
  >
    <slot></slot>
  </b-col>
</template>
<script>
import { BCol } from "bootstrap-vue";
export default {
  components: {
    BCol
  },
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
    }
  }
};
</script>
