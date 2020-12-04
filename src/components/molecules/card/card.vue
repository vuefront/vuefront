<template>
  <div class="vf-m-card border rounded shadow-inner" v-bind="$props">
    <slot></slot>
  </div>
</template>
<script>
import { BCard } from "bootstrap-vue";
export default {
  components: {
    BCard
  },
  props: {
    title: {
      type: String,
      default() {
        return null
      }
    },
    subTitle: {
      type: String,
      default() {
        return null
      }
    },
    noBody: {
      type: Boolean,
      default() {
        return false;
      }
    },
    bodyBgColor: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>