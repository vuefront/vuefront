<template>
  <vf-o-form class="vf-o-account-edit-form" @submit="onSubmit">
    <template #title>{{
      $t("elements.common.account.edit.titleText")
    }}</template>
    <template #sub-title>{{
      $t("elements.common.account.edit.subTitleText")
    }}</template>

    <vf-m-field
      id="input-first-name"
      :state="$v.form.firstName.$dirty ? !$v.form.firstName.$error : null"
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
      :state="$v.form.lastName.$dirty ? !$v.form.lastName.$error : null"
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
      :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
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

    <template #button>
      {{ $t("elements.common.account.edit.buttonSave") }}
      <vf-a-icon :icon="mdiArrowRight" :size="15" />
    </template>
  </vf-o-form>
</template>
<script>
import * as vuelidate from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
import { mdiArrowRight } from "@mdi/js";
const { validationMixin } = vuelidate;
export default {
  mixins: [validationMixin],
  props: {
    account: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      mdiArrowRight,
      form: {
        firstName: this.account.firstName,
        lastName: this.account.lastName,
        email: this.account.email,
      },
    };
  },
  validations: {
    form: {
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
    },
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        const status = await this.$store.dispatch("common/customer/edit", {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          email: this.form.email,
        });

        if (status) {
          this.$router.push("/account");
        }
      }
    },
  },
};
</script>
