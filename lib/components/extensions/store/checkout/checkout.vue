<template>
  <vf-o-apollo v-slot="{ data }" class="vf-e-store-checkout">
    <div>{{ isClient ? handleRedirect(data.checkoutLink.link) : "" }}</div>
  </vf-o-apollo>
</template>
<script>
export default {
  computed: {
    isClient() {
      return process.client;
    },
  },
  methods: {
    handleRedirect(url) {
      window.location.href = url;
    },
  },
};
</script>
<graphql>
{
  checkoutLink {
    link
  }
}
</graphql>
