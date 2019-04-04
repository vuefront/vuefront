<template>
  <div>
    <vf-nav :logo="logo"/>
    <vf-partial-menu/>
    <vf-notification/>
  </div>
</template>
<script>
export default {
  name: "vfDefaultTemplateHeader",
  props: {
    logo: {
      type: String,
      default: ""
    }
  }
};
</script>

