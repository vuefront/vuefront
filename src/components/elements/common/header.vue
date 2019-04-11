<template>
  <div>
    <vf-nav :logo="logo"/>
    <vf-template-menu/>
    <vf-notification/>
  </div>
</template>
<script>
export default {
  props: {
    logo: {
      type: String,
      default: ""
    }
  }
};
</script>

