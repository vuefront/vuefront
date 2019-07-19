<template>
  <vf-a-heading :level="variant === 'normal' ? 4 : 3" class="mb-0 vf-m-price">
    <span v-if="special !== ''" class="vf-m-price__special">{{special}}</span>
    <vf-a-heading
      :level="variant === 'normal' ? 6: 5"
      :class="{'font-weight-regular': special !== ''}"
    >{{ price }}</vf-a-heading>
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
