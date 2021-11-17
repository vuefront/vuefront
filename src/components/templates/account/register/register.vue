<template>
  <section class="vf-t-account-register">
    <vf-m-row>
      <vf-m-col xs="12" md="8" offset-md="2">
        <vf-m-card no-body>
          <vf-m-card-body>
            <vf-o-register-form />
          </vf-m-card-body>
          <vf-m-card-footer>
            <small>{{
              $t("elements.common.account.register.footerText")
            }}</small>
            <vf-a-link to="/account/login" class="text-sm ml-1 font-semibold">{{
              $t("elements.common.account.register.footerLinkText")
            }}</vf-a-link>
          </vf-m-card-footer>
        </vf-m-card>
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
