<template>
  <div class="vf-m-account-new">
    <div class="mb-5">
      <vf-a-heading class="vf-m-account-new__title" tag="h6" level="3">{{
        $t("elements.common.account.new.titleText")
      }}</vf-a-heading>
      <p class="mb-0 vf-m-account-new__subtitle">
        {{ $t("elements.common.account.new.subTitleText") }}
      </p>
    </div>
    <div class="lead vf-m-account-new__description">
      {{ $t("elements.common.account.new.descriptionText") }}
    </div>
    <div class="mt-4">
      <vf-a-button
        class="vf-m-account-new__button"
        color="primary"
        to="/account/register"
        >{{ $t("elements.common.account.new.buttonContinue") }}</vf-a-button
      >
    </div>
  </div>
</template>
