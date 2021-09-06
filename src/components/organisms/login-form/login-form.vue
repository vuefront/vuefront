<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{
      $t("elements.common.account.login.titleText")
    }}</template>
    <template #sub-title>{{
      $t("elements.common.account.login.subTitleText")
    }}</template>

    <vf-m-field
      id="input-email"
      :state="v$.form.email.$dirty ? !v$.form.email.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.login.emailEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.email" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.account.login.emailError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-password"
      :state="v$.form.password.$dirty ? !v$.form.password.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.login.passwordEntry")
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
        $t("elements.common.account.login.passwordError")
      }}</template>
    </vf-m-field>

    <template #button>{{
      $t("elements.common.account.login.buttonSave")
    }}</template>
  </vf-o-form>
</template>
<script lang="ts" setup>
import { required, minLength, maxLength, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const form = reactive({
  email: "",
  password: "",
});
const v$ = useVuelidate(
  {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(20),
    },
  },
  form
);
const onSubmit = async () => {
  v$.value.$touch();

  if (!v$.value.$invalid) {
    const status = await store.dispatch("common/customer/login", {
      email: form.email,
      password: form.password,
    });

    if (status) {
      router.push("/account");
    }
  }
};
</script>
