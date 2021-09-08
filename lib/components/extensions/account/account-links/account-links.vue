<template>
  <section class="module-pages">
    <vf-a-heading level="6" class="heading mb-3">{{
      $t("modules.common.accountLinks.textTitle")
    }}</vf-a-heading>
    <ul class="list-unstyled">
      <li>
        <vf-a-link to="/account/login">{{
          $t("modules.common.accountLinks.signInText")
        }}</vf-a-link>
      </li>
      <li>
        <vf-a-link to="/account/register">{{
          $t("modules.common.accountLinks.registerText")
        }}</vf-a-link>
      </li>
      <li>
        <vf-a-link to="/account">{{
          $t("modules.common.accountLinks.myAccountText")
        }}</vf-a-link>
      </li>
      <li>
        <vf-a-link to="/account/wishlist">{{
          $t("modules.common.accountLinks.wishlistText")
        }}</vf-a-link>
      </li>
    </ul>
  </section>
</template>
