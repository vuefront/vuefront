<template>
  <section class="vf-t-account-login">
    <vf-m-row>
      <vf-m-col sm="12" md="6">
        <vf-m-new-customer />
      </vf-m-col>
      <vf-m-col sm="12" md="6">
        <vf-m-card class="shadow mb-0" no-body>
          <vf-m-card-body class="px-md-5 py-5">
            <vf-o-login-form />
          </vf-m-card-body>
          <vf-m-card-footer class="px-md-5">
            <small>{{$t('elements.common.account.login.footerText')}}</small>
            <vf-a-link
              to="/account/register"
              class="small font-weight-bold"
            >{{$t('elements.common.account.login.footerLink')}}</vf-a-link>
          </vf-m-card-footer>
        </vf-m-card>
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
