<template>
  <vf-m-card no-body>
    <vf-m-card-body>
      <vf-o-password-form />
    </vf-m-card-body>
    <vf-m-card-footer>
      <small>{{ $t("elements.common.account.password.footerText") }}</small>
      <vf-a-link to="/account/edit" class="text-sm font-semibold ml-1">{{
        $t("elements.common.account.password.footerLinkText")
      }}</vf-a-link>
    </vf-m-card-footer>
  </vf-m-card>
</template>
