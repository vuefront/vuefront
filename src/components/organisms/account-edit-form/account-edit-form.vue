<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{$t('elements.common.account.edit.titleText')}}</template>
    <template #sub-title>{{$t('elements.common.account.edit.subTitleText')}}</template>

    <vf-m-field
      :state="$v.form.firstName.$dirty ? !$v.form.firstName.$error : null"
      id="input-first-name"
    >
      <template #label>{{$t('elements.common.account.edit.firstNameEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.firstName" trim />
      </template>
      <template #error>{{$t('elements.common.account.edit.firstNameError')}}</template>
    </vf-m-field>

    <vf-m-field
      :state="$v.form.lastName.$dirty ? !$v.form.lastName.$error : null"
      id="input-first-name"
    >
      <template #label>{{$t('elements.common.account.edit.lastNameEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.lastName" trim />
      </template>
      <template #error>{{$t('elements.common.account.edit.lastNameError')}}</template>
    </vf-m-field>

    <vf-m-field :state="$v.form.email.$dirty ? !$v.form.email.$error : null" id="input-email">
      <template #label>{{$t('elements.common.account.edit.emailEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.email" trim />
      </template>
      <template #error>{{$t('elements.common.account.edit.emailError')}}</template>
    </vf-m-field>

    <template #button>
      {{$t('elements.common.account.edit.buttonSave')}}
      <vf-a-icon icon="long-arrow-alt-right" size="sm" />
    </template>
  </vf-o-form>
</template>
<script>
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
import email from "vuelidate/lib/validators/email";
export default {
  props: {
    account: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  data() {
    return {
      form: {
        firstName: this.account.firstName,
        lastName: this.account.lastName,
        email: this.account.email
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
      }
    }
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        const status = await this.$store.dispatch("common/customer/edit", {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          email: this.form.email
        });

        if (status) {
          this.$router.push("/account");
        }
      }
    }
  }
};
</script>
