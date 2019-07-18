<template>
  <vf-apollo v-slot="{data}" :query="require('vuefront/graphql/modules/checkout.graphql')">
    <div>{{isClient? handleRedirect(data.checkoutLink.link) : ''}}</div>
  </vf-apollo>
</template>
<script>
export default {
  computed: {
    isClient() {
      return this.process.client;
    }
  },
  methods: {
    handleRedirect(url) {
      window.location.href = url;
    }
  }
};
</script>
