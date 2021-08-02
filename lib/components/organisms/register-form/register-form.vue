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
      :state="$v.form.firstName.$dirty ? !$v.form.firstName.$error : null"
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
      :state="$v.form.lastName.$dirty ? !$v.form.lastName.$error : null"
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
      :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
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
      :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
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
      :state="
        $v.form.confirmPassword.$dirty ? !$v.form.confirmPassword.$error : null
      "
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
<script>
import * as vuelidate from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  sameAs,
  email,
} from "vuelidate/lib/validators";
import { mdiArrowRight } from "@mdi/js";
const { validationMixin } = vuelidate;
export default {
  mixins: [validationMixin],
  data() {
    return {
      mdiArrowRight,
      form: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
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
  },
  methods: {
    onSuccess() {
      this.$router.push("/account");
    },
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        const status = await this.$store.dispatch("common/customer/register", {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          email: this.form.email,
          password: this.form.password,
        });

        if (status) {
          const loginStatus = await this.$store.dispatch(
            "common/customer/login",
            {
              email: this.form.email,
              password: this.form.password,
            }
          );

          if (loginStatus) {
            this.$router.push("/account/success");
          }
        }
      }
    },
  },
};
</script>
