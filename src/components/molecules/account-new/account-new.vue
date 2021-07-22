<template>
  <div class="vf-m-account-new">
    <div class="vf-m-account-new__header">
      <vf-a-heading class="vf-m-account-new__header__title" tag="h6" level="3">{{
        $t("elements.common.account.new.titleText")
      }}</vf-a-heading>
      <p class="vf-m-account-new__header__subtitle">
        {{ $t("elements.common.account.new.subTitleText") }}
      </p>
    </div>
    <div class="lead vf-m-account-new__description">
      {{ $t("elements.common.account.new.descriptionText") }}
    </div>
    <div class="vf-m-account-new__bottom">
      <vf-a-button
        class="vf-m-account-new__bottom__button"
        color="primary"
        to="/account/register"
        >{{ $t("elements.common.account.new.buttonContinue") }}</vf-a-button
      >
    </div>
  </div>
</template>
