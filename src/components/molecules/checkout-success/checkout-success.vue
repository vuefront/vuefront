<template>
  <div class="vf-m-checkout-success">
    <vf-a-heading level="1">{{$t('molecules.checkoutSuccess.textTitle')}}</vf-a-heading>
    <p>{{$t('molecules.checkoutSuccess.textDescription')}}</p>
    <p>{{$t('molecules.checkoutSuccess.textQuestions')}} <vf-a-link to="/contact">{{$t('molecules.checkoutSuccess.textLinkStoreOwner')}}</vf-a-link>.</p>
    <p>{{$t('molecules.checkoutSuccess.textThanks')}}</p>
    <div class="vf-m-checkout-success__buttons">
        <vf-a-button to="/" color="primary">{{$t('molecules.checkoutSuccess.buttonContinue')}}</vf-a-button>
    </div>
  </div>
</template>