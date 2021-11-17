<template>
  <section class="vf-t-account-edit">
    <vf-m-card no-body>
      <vf-m-card-body>
        <vf-o-account-edit-form :account="account" />
      </vf-m-card-body>
      <vf-m-card-footer>
        <small>{{ $t("elements.common.account.edit.footerText") }} </small>
        <vf-a-link to="/account/password" class="text-sm ml-1 font-semibold">{{
          $t("elements.common.account.edit.footerLinkText")
        }}</vf-a-link>
      </vf-m-card-footer>
    </vf-m-card>
  </section>
</template>
<script lang="ts" setup>
defineProps({
  account: {
    type: Object,
    default() {
      return null;
    },
  },
});
</script>
