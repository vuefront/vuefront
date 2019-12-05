<template>
  <div class="vf-o-account-new">
    <div class="mb-5">
      <vf-a-heading tag="h6" level="3">{{$t('elements.common.account.new.titleText')}}</vf-a-heading>
      <p class="mb-0">{{$t('elements.common.account.new.subTitleText')}}</p>
    </div>
    <div class="lead">{{$t('elements.common.account.new.descriptionText')}}</div>
    <div class="mt-4">
      <vf-a-button
        color="primary"
        to="/account/register"
      >{{$t('elements.common.account.new.buttonContinue')}}</vf-a-button>
    </div>
  </div>
</template>
