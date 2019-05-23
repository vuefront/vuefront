<template>
  <vf-apollo v-slot="{data}" :query="require('~/graphql/modules/checkout.graphql')">
    <div>{{isClient? handleRedirect(data.checkoutLink.link) : ''}}</div>
  </vf-apollo>
</template>
<script>
export default {
  computed: {
    isClient() {
      return process.client;
    }
  },
  methods: {
    handleRedirect(url) {
      window.location.href = url;
    }
  }
};
</script>
