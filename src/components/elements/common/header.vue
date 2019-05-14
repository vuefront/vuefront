<template>
  <div>
    <vf-header-top/>
    <vf-header-center :logo="logo"/>
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

