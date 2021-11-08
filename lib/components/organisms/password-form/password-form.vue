<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{
      $t("elements.common.account.password.titleText")
    }}</template>
    <template #sub-title>{{
      $t("elements.common.account.password.subTitleText")
    }}</template>

    <vf-m-field
      id="input-password"
      :state="v$.password.$dirty ? !v$.password.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.password.passwordEntry")
      }}</template>
      <template #default="data">
        <vf-a-input
          v-model="form.password"
          v-bind="data"
          type="password"
          trim
        />
      </template>
      <template #error>{{
        $t("elements.common.account.password.passwordError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-confirm-password"
      :state="v$.confirmPassword.$dirty ? !v$.confirmPassword.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.password.confirmPasswordEntry")
      }}</template>
      <template #default="data">
        <vf-a-input
          v-model="form.confirmPassword"
          v-bind="data"
          type="password"
          trim
        />
      </template>
      <template #error>{{
        $t("elements.common.account.password.confirmPasswordError")
      }}</template>
    </vf-m-field>

    <template #button>
      {{ $t("elements.common.account.password.buttonSave") }}
      <vf-a-icon :icon="mdiArrowRight" size="15" />
    </template>
  </vf-o-form>
</template>
<script lang="ts" setup>
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, minLength, sameAs } from "@vuelidate/validators";
import { mdiArrowRight } from "@mdi/js";
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const form = reactive({
  password: null,
  confirmPassword: null,
});
const rules = computed(() => ({
  password: {
    required,
    minLength: minLength(4),
    maxLength: maxLength(20),
  },
  confirmPassword: {
    required,
    minLength: minLength(4),
    maxLength: maxLength(20),
    sameAs: sameAs(form.password),
  },
}));
const v$ = useVuelidate(rules, form);
const store = useStore();
const router = useRouter();
const onSubmit = async () => {
  v$.value.$touch();

  if (!v$.value.$invalid) {
    const status = await store.dispatch("common/customer/editPassword", {
      password: form.password,
    });

    if (status) {
      router.push("/account");
    }
  }
};
</script>
