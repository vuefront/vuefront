<template>
  <div class="vf-m-account-success">
    <vf-a-heading level="1" class="vf-m-account-success__title">{{
      $t("molecules.accountSuccess.textTitle")
    }}</vf-a-heading>
    <p class="vf-m-account-success__congratulation">
      {{ $t("molecules.accountSuccess.textCongratulations") }}
    </p>
    <p class="vf-m-account-success__description">
      {{ $t("molecules.accountSuccess.textDescription") }}
    </p>
    <p class="vf-m-account-success__questions">
      {{ $t("molecules.accountSuccess.textQuestions") }}
    </p>
    <p class="vf-m-account-success__contact">
      {{ $t("molecules.accountSuccess.textContact") }}

      <vf-a-link to="/contact">{{
        $t("molecules.accountSuccess.linkContact")
      }}</vf-a-link
      >.
    </p>
    <div class="vf-m-account-success__buttons">
      <vf-a-button to="/account" color="primary">{{
        $t("molecules.accountSuccess.buttonContinue")
      }}</vf-a-button>
    </div>
  </div>
</template>
