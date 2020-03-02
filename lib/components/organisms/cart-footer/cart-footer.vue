<template>
  <vf-m-card class="mt-5">
    <vf-m-row align-v="center" align-h="between">
      <vf-m-col md="6" order-md="2" class="mb-4 mb-md-0">
        <div class="d-flex align-items-center justify-content-md-end">
          <span
            class="h6 text-muted d-inline-block mr-3 mb-0"
          >{{$t('elements.store.cart.totalText')}}</span>
          <vf-a-heading level="4" tag="span" class="mb-0">{{cart.total}}</vf-a-heading>
        </div>
      </vf-m-col>
      <vf-m-col md="6" order-md="1">
        <vf-a-button
          :disabled="!isProducts"
          color="primary"
          class="mr-md-2"
          to="/store/checkout"
          animated-y
          nuxt
        >
          <template #visible>{{$t('elements.store.cart.checkoutButton')}}</template>
          <template #hidden>
            <vf-a-icon icon="shopping-cart"></vf-a-icon>
          </template>
        </vf-a-button>
        <vf-a-button
          color="flat"
          nuxt
          to="/"
          class="btn-link text-sm text-dark font-weight-bold"
        >{{$t('elements.store.cart.returnButton')}}</vf-a-button>
      </vf-m-col>
    </vf-m-row>
  </vf-m-card>
</template>
<script>
export default {
  name: 'vf-o-cart-footer',
  props: ["cart"],
  computed: {
    isProducts() {
      return this.cart.products.length > 0;
    }
  }
};
</script>
