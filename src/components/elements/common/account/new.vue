<template>
  <b-card class="shadow mb-0" no-body>
    <b-card-body class="px-md-5 py-5">
      <div class="mb-3">
        <h6 class="h3">{{$t('elements.common.account.new.titleText')}}</h6>
        <p class="text-muted mb-0">{{$t('elements.common.account.new.subTitleText')}}</p>
      </div>
      <div class="lead">{{$t('elements.common.account.new.descriptionText')}}</div>
      <div class="mt-4 text-sm-left">
        <b-button
          size="sm"
          pill
          variant="primary"
          to="/account/register"
        >{{$t('elements.common.account.new.buttonContinue')}}</b-button>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
import {
  BCard,
  BCardBody,
  BCardFooter,
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
  BLink
} from "bootstrap-vue/es/components";

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

