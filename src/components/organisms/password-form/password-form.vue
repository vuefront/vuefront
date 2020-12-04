<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{$t('elements.common.account.password.titleText')}}</template>
    <template #sub-title>{{$t('elements.common.account.password.subTitleText')}}</template>

    <vf-m-field
      :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
      id="input-password"
    >
      <template #label>{{$t('elements.common.account.password.passwordEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.password" type="password" trim />
      </template>
      <template #error>{{$t('elements.common.account.password.passwordError')}}</template>
    </vf-m-field>

    <vf-m-field
      :state="$v.form.confirmPassword.$dirty ? !$v.form.confirmPassword.$error : null"
      id="input-confirm-password"
    >
      <template #label>{{$t('elements.common.account.password.confirmPasswordEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.confirmPassword" type="password" trim />
      </template>
      <template #error>{{$t('elements.common.account.password.confirmPasswordError')}}</template>
    </vf-m-field>

    <template #button>
      {{$t('elements.common.account.password.buttonSave')}}
      <vf-a-icon icon="arrow-right" size="15" />
    </template>
  </vf-o-form>
</template>
<script>
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
import sameAs from "vuelidate/lib/validators/sameAs";
export default {
  data() {
    return {
      form: {
        password: null,
        confirmPassword: null
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20)
      },
      confirmPassword: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
        sameAsPassword: sameAs("password")
      }
    }
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        const status = await this.$store.dispatch(
          "common/customer/editPassword",
          {
            password: this.form.password
          }
        );

        if (status) {
          this.$router.push("/account");
        }
      }
    }
  }
};
</script>
