<template>
  <vf-a-heading :level="variant === 'normal' ? 3 : 4" class="vf-m-price">
    <span v-if="special !== ''" class="vf-m-price__special">{{special}}</span>
    <vf-a-heading tag="span" v-if="special !== ''" :level="6" class="font-weight-regular">{{ price }}</vf-a-heading>
    <span v-else>{{price}}</span>
  </vf-a-heading>
</template>
<script>
export default {
  props: {
    price: {
      type: String,
      default() {
        return "";
      }
    },
    special: {
      type: String,
      default() {
        return "";
      }
    },
    variant: {
      type: String,
      default() {
        return "normal";
      }
    }
  }
};
</script>
