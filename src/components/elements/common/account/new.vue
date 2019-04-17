<template>
  <b-card class="shadow mb-0" no-body>
    <b-card-body class="px-md-5 py-5">
      <div class="mb-3">
        <h6 class="h3">New Customer</h6>
        <p class="text-muted mb-0">Register Account.</p>
      </div>
      <div
        class="lead"
      >By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</div>
      <div class="mt-4 text-sm-left">
          <b-button size="sm" class="rounded-pill" variant="primary" to="/account/register">Continue</b-button>
        </div>
    </b-card-body>
  </b-card>
</template>
<script>
import BCard from "bootstrap-vue/es/components/card/card";
import BCardBody from "bootstrap-vue/es/components/card/card-body";
import BCardFooter from "bootstrap-vue/es/components/card/card-footer";
import BForm from "bootstrap-vue/es/components/form/form";
import BFormGroup from "bootstrap-vue/es/components/form-group/form-group";
import BFormInput from "bootstrap-vue/es/components/form-input/form-input";
import BButton from "bootstrap-vue/es/components/button/button";
import BLink from "bootstrap-vue/es/components/link/link";

export default {
  components: {
    BCard,
    BCardBody,
    BCardFooter,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BLink
  }
};
</script>

