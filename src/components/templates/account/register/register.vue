<template>
  <section class="vf-t-account-register">
    <vf-m-row>
      <vf-m-col xs="12" md="8" offset-md="2">
        <vf-m-card class="mb-0" no-body>
          <vf-m-card-body class="md:px-5 py-5">
            <vf-o-register-form />
          </vf-m-card-body>
          <vf-m-card-footer class="md:px-5">
            <small>{{
              $t("elements.common.account.register.footerText")
            }}</small>
            <vf-a-link to="/account/login" class="small font-bold">{{
              $t("elements.common.account.register.footerLinkText")
            }}</vf-a-link>
          </vf-m-card-footer>
        </vf-m-card>
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
