<template>
  <t-alert class="vf-a-alert" :show="show" v-on="$listeners" :dismissible="dismissible" :variant="variant">
    <slot></slot>
  </t-alert>
</template>
<script>
export default {
  props: {
    show: {
      type: [Boolean, Number, String],
      default: false
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    variant:{
      type:[String],
      default: 'Default'
    }
  }
};
</script>