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
      :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
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
      :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
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
<script>
import * as vuelidate from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";

const { validationMixin } = vuelidate;
export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
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
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        const status = await this.$store.dispatch("common/customer/login", {
          email: this.form.email,
          password: this.form.password,
        });

        if (status) {
          this.$router.push("/account");
        }
      }
    },
  },
};
</script>
