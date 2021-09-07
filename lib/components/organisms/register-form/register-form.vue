<template>
  <vf-o-form @submit="onSubmit" @success="onSuccess">
    <template #title>{{
      $t("elements.common.account.register.titleText")
    }}</template>
    <template #sub-title>{{
      $t("elements.common.account.register.subTitleText")
    }}</template>

    <vf-m-field
      id="input-first-name"
      :state="v$.firstName.$dirty ? !v$.firstName.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.register.firstNameEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.firstName" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.account.register.firstNameError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-first-name"
      :state="v$.lastName.$dirty ? !v$.lastName.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.register.lastNameEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.lastName" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.account.register.lastNameError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-email"
      :state="v$.email.$dirty ? !v$.email.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.register.emailEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.email" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.account.register.emailError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-password"
      :state="v$.password.$dirty ? !v$.password.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.register.passwordEntry")
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
        $t("elements.common.account.register.passwordError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-confirm-password"
      :state="v$.confirmPassword.$dirty ? !v$.confirmPassword.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.register.confirmPasswordEntry")
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
        $t("elements.common.account.register.confirmPasswordError")
      }}</template>
    </vf-m-field>

    <template #button>
      {{ $t("elements.common.account.register.buttonSave") }}
      <vf-a-icon :icon="mdiArrowRight" size="15" />
    </template>
  </vf-o-form>
</template>
<script lang="ts" setup>
import {
  required,
  minLength,
  maxLength,
  sameAs,
  email,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { mdiArrowRight } from "@mdi/js";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { reactive } from "vue";
const form = reactive({
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  confirmPassword: null,
});
const v$ = useVuelidate(
  {
    firstName: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(32),
    },
    lastName: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(32),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(20),
    },
    confirmPassword: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(20),
      sameAsPassword: sameAs("password"),
    },
  },
  form
);
const router = useRouter();
const store = useStore();
const onSuccess = () => {
  router.push("/account");
};
const onSubmit = async () => {
  v$.value.$touch();

  if (!v$.value.$invalid) {
    const status = await store.dispatch("common/customer/register", {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
    });

    if (status) {
      const loginStatus = await store.dispatch("common/customer/login", {
        email: form.email,
        password: form.password,
      });

      if (loginStatus) {
        router.push("/account/success");
      }
    }
  }
};
</script>
