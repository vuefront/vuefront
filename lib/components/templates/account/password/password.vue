<template>
  <vf-m-card class="shadow mb-0" no-body>
    <vf-m-card-body class="px-md-5 py-5">
      <vf-o-password-form />
    </vf-m-card-body>
    <vf-m-card-footer class="px-md-5">
      <small>{{$t('elements.common.account.password.footerText')}}</small>
      <vf-a-link
        to="/account/edit"
        class="small font-weight-bold"
      >{{$t('elements.common.account.password.footerLinkText')}}</vf-a-link>
    </vf-m-card-footer>
  </vf-m-card>
</template>