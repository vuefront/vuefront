<template>
  <b-card class="shadow mb-0" no-body>
    <b-card-body class="px-md-5 py-5">
      <div class="mb-5">
        <h6 class="h3">{{$t('elements.common.account.edit.titleText')}}</h6>
        <p class="text-muted mb-0">{{$t('elements.common.account.edit.subTitleText')}}</p>
      </div>
      <b-alert :show="error.message" v-html="error.message"/>
      <b-form>
        <b-form-group :label="$t('elements.common.account.edit.firstNameEntry')" label-for="input-first-name">
          <b-form-input
            id="input-first-name"
            v-model.trim="form.firstName"
            :state="$v.form.firstName.$dirty ? !$v.form.firstName.$error : null"
            aria-describedby="input-first-name-feedback"
          />
          <b-form-invalid-feedback
            id="input-first-name-feedback"
          >{{$t('elements.common.account.edit.firstNameError')}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group :label="$t('elements.common.account.edit.lastNameEntry')" label-for="input-last-name">
          <b-form-input
            id="input-last-name"
            v-model.trim="form.lastName"
            :state="$v.form.lastName.$dirty ? !$v.form.lastName.$error : null"
            aria-describedby="input-last-name-feedback"
          />
          <b-form-invalid-feedback
            id="input-last-name-feedback"
          >{{$t('elements.common.account.edit.lastNameError')}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group :label="$t('elements.common.account.edit.emailEntry')" label-for="input-email">
          <b-form-input
            id="input-email"
            v-model.trim="form.email"
            :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
            aria-describedby="input-email-feedback"
          />
          <b-form-invalid-feedback
            id="input-email-feedback"
          >{{$t('elements.common.account.edit.emailError')}}</b-form-invalid-feedback>
        </b-form-group>
        <div class="mt-4">
          <b-button
            :disabled="$v.form.$invalid"
            size="sm"
            class="rounded-pill btn-icon"
            variant="primary"
            @click="onSubmit"
          >
            {{$t('elements.common.account.edit.buttonSave')}}
            <vf-icon icon="long-arrow-alt-right" size="sm"/>
          </b-button>
        </div>
      </b-form>
    </b-card-body>
    <b-card-footer class="px-md-5">
      <small>{{$t('elements.common.account.edit.footerText')}}</small>
      <b-link to="/account/password" class="small font-weight-bold">{{$t('elements.common.account.edit.footerLinkText')}}</b-link>
    </b-card-footer>
  </b-card>
</template>
<script>
import BCard from "bootstrap-vue/es/components/card/card";
import BCardBody from "bootstrap-vue/es/components/card/card-body";
import BCardFooter from "bootstrap-vue/es/components/card/card-footer";
import BForm from "bootstrap-vue/es/components/form/form";
import BFormGroup from "bootstrap-vue/es/components/form-group/form-group";
import BFormInput from "bootstrap-vue/es/components/form-input/form-input";
import BFormInvalidFeedback from "bootstrap-vue/es/components/form/form-invalid-feedback";
import BButton from "bootstrap-vue/es/components/button/button";
import BLink from "bootstrap-vue/es/components/link/link";
import BAlert from "bootstrap-vue/es/components/alert/alert";
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
import email from "vuelidate/lib/validators/email";
import { mapGetters } from "vuex";

export default {
  components: {
    BAlert,
    BCard,
    BCardBody,
    BCardFooter,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BLink,
    BFormInvalidFeedback
  },
  data() {
    const customer_info = this.$store.getters['common/customer/get']
    return {
      form: {
        firstName: customer_info.firstName,
        lastName: customer_info.lastName,
        email: customer_info.email
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
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    })
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        await this.$store.dispatch("common/customer/edit", {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          email: this.form.email
        });

        if (!this.error) {
          this.$router.push("/account");
        }
      }
    }
  }
};
</script>

