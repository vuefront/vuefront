<template>
  <div>
    <vf-header :logo="logo"/>
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

