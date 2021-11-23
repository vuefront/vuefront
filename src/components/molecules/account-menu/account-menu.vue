<template>
  <vf-m-dropdown class="vf-m-account-menu" variant="link" size="sm" right link>
    <template v-slot:button-content>
      <vf-a-image :src="AccountIcon" width="18" class="mr-2"></vf-a-image>
    </template>
    <vf-m-dropdown-item
      v-if="!$vuefront.isAuth"
      class="vf-m-account-menu__item"
      to="/account/login"
      >{{ $t("elements.common.header.topNav.signInText") }}</vf-m-dropdown-item
    >
    <vf-m-dropdown-item
      v-if="!$vuefront.isAuth"
      class="vf-m-account-menu__item"
      to="/account/register"
      >{{
        $t("elements.common.header.topNav.registerText")
      }}</vf-m-dropdown-item
    >
    <vf-m-dropdown-item
      v-if="$vuefront.isAuth"
      class="vf-m-account-menu__item"
      to="/account"
      >{{
        $t("elements.common.header.topNav.myAccountText")
      }}</vf-m-dropdown-item
    >
    <vf-m-dropdown-item
      v-if="$vuefront.isAuth"
      class="vf-m-account-menu__item"
      @click="$vuefront.logout"
      >{{ $t("elements.common.header.topNav.signOutText") }}</vf-m-dropdown-item
    >
  </vf-m-dropdown>
</template>
<script lang="ts" setup>
import AccountIcon from "../../../../assets/img/account-icon.svg";
</script>
