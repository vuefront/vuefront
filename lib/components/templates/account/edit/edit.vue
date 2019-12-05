<template>
  <section class="vf-t-account-edit">
    <vf-m-card class="mb-0" no-body>
      <vf-m-card-body class="px-md-5 py-5">
        <vf-o-account-edit-form :account="account" />
      </vf-m-card-body>
      <vf-m-card-footer class="px-md-5">
        <small>{{$t('elements.common.account.edit.footerText')}}</small>
        <vf-a-link
          to="/account/password"
          class="small font-weight-bold"
        >{{$t('elements.common.account.edit.footerLinkText')}}</vf-a-link>
      </vf-m-card-footer>
    </vf-m-card>
  </section>
</template>
<script>
export default {
  props: {
    account: {
      type: Object,
      default() {
        return null;
      }
    }
  }
};
</script>

