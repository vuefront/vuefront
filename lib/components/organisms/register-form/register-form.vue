<template>
  <vf-o-form @submit="onSubmit" @success="onSuccess">
    <template #title>{{$t('elements.common.account.register.titleText')}}</template>
    <template #sub-title>{{$t('elements.common.account.register.subTitleText')}}</template>

    <vf-m-field
      :state="$v.form.firstName.$dirty ? !$v.form.firstName.$error : null"
      id="input-first-name"
    >
      <template #label>{{$t('elements.common.account.register.firstNameEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.firstName" trim />
      </template>
      <template #error>{{$t('elements.common.account.register.firstNameError')}}</template>
    </vf-m-field>

    <vf-m-field
      :state="$v.form.lastName.$dirty ? !$v.form.lastName.$error : null"
      id="input-first-name"
    >
      <template #label>{{$t('elements.common.account.register.lastNameEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.lastName" trim />
      </template>
      <template #error>{{$t('elements.common.account.register.lastNameError')}}</template>
    </vf-m-field>

    <vf-m-field :state="$v.form.email.$dirty ? !$v.form.email.$error : null" id="input-email">
      <template #label>{{$t('elements.common.account.register.emailEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.email" trim />
      </template>
      <template #error>{{$t('elements.common.account.register.emailError')}}</template>
    </vf-m-field>

    <vf-m-field
      :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
      id="input-password"
    >
      <template #label>{{$t('elements.common.account.register.passwordEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.password" type="password" trim />
      </template>
      <template #error>{{$t('elements.common.account.register.passwordError')}}</template>
    </vf-m-field>

    <vf-m-field
      :state="$v.form.confirmPassword.$dirty ? !$v.form.confirmPassword.$error : null"
      id="input-confirm-password"
    >
      <template #label>{{$t('elements.common.account.register.confirmPasswordEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.confirmPassword" type="password" trim />
      </template>
      <template #error>{{$t('elements.common.account.register.confirmPasswordError')}}</template>
    </vf-m-field>

    <template #button>
      {{$t('elements.common.account.register.buttonSave')}}
      <vf-a-icon icon="long-arrow-alt-right" size="sm" />
    </template>
  </vf-o-form>
</template>
<script>
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
import sameAs from "vuelidate/lib/validators/sameAs";
import email from "vuelidate/lib/validators/email";
export default {
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(32)
      },
      lastName: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(32)
      },
      email: {
        required,
        email
      },
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
          password: this.form.password
        });

        if (status) {
          this.$router.push("/account/login");
        }
      }
    }
  }
};
</script>
