<template>
  <div class="vf-m-new-customer">
    <vf-m-card class="shadow mb-0" no-body>
      <vf-m-card-body class="px-md-5 py-5">
        <div class="mb-3">
          <vf-a-heading tag="h6" level="3">{{$t('elements.common.account.new.titleText')}}</vf-a-heading>
          <p class="text-muted mb-0">{{$t('elements.common.account.new.subTitleText')}}</p>
        </div>
        <div class="lead">{{$t('elements.common.account.new.descriptionText')}}</div>
        <div class="mt-4 text-sm-left">
          <vf-a-button
            size="sm"
            rounded
            color="primary"
            to="/account/register"
          >{{$t('elements.common.account.new.buttonContinue')}}</vf-a-button>
        </div>
      </vf-m-card-body>
    </vf-m-card>
  </div>
</template>
