<template>
  <section class="module-pages">
    <h6 class="heading mb-3">{{$t('modules.common.accountLinks.textTitle')}}</h6>
    <ul class="list-unstyled">
      <li>
        <b-link to="/account/login">{{$t('modules.common.accountLinks.signInText')}}</b-link>
      </li>
      <li>
        <b-link to="/account/register">{{$t('modules.common.accountLinks.registerText')}}</b-link>
      </li>
      <li>
        <b-link to="/account">{{$t('modules.common.accountLinks.myAccountText')}}</b-link>
      </li>
      <li>
        <b-link to="/account/wishlist">{{$t('modules.common.accountLinks.wishlistText')}}</b-link>
      </li>
    </ul>
  </section>
</template>
<script>
import { BLink } from "bootstrap-vue/es/components";
export default {
  components: {
    BLink
  }
};
</script>

