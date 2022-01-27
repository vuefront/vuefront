<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{
      $t("elements.common.account.edit.titleText")
    }}</template>
    <template #sub-title>{{
      $t("elements.common.account.edit.subTitleText")
    }}</template>

    <vf-m-field
      id="input-first-name"
      :state="v$.firstName.$dirty ? !v$.firstName.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.edit.firstNameEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.firstName" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.account.edit.firstNameError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-first-name"
      :state="v$.lastName.$dirty ? !v$.lastName.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.edit.lastNameEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.lastName" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.account.edit.lastNameError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-email"
      :state="v$.email.$dirty ? !v$.email.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.edit.emailEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.email" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.account.edit.emailError")
      }}</template>
    </vf-m-field>
    <vf-m-field
      id="input-phone"
      :state="v$.email.$dirty ? !v$.email.$error : null"
    >
      <template #label>{{
        $t("elements.common.account.edit.phoneEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.phone" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.account.edit.phoneError")
      }}</template>
    </vf-m-field>

    <template #button>
      {{ $t("elements.common.account.edit.buttonSave") }}
      <vf-a-icon :icon="mdiArrowRight" :size="15" />
    </template>
  </vf-o-form>
</template>
<script lang="ts" setup>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";
import { mdiArrowRight } from "@mdi/js";
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const props = defineProps({
  account: {
    type: Object,
    default() {
      return null;
    },
  },
});
const form = reactive({
  firstName: props.account.firstName,
  lastName: props.account.lastName,
  email: props.account.email,
  phone: props.account.phone,
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
    phone: {},
  },
  form
);
const onSubmit = async () => {
  v$.value.$touch();

  if (!v$.value.$invalid) {
    const status = await store.dispatch("common/customer/edit", {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
    });

    if (status) {
      router.push("/account");
    }
  }
};
</script>
