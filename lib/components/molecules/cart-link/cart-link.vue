<template>
  <vf-a-link class="vf-m-cart-link" to="/store/cart">
    <vf-a-icon :icon="mdiCartOutline" />
    <span class="hidden md:inline-block">{{$t('elements.common.header.nav.shoppingCartText')}}</span>
  </vf-a-link>
</template>
<script>
import { mdiCartOutline } from '@mdi/js'
export default {
  data() {
    return {mdiCartOutline}
  }
}
</script>