<template>
  <b-card class="shadow mb-0" no-body>
    <b-card-body class="px-md-5 py-5">
      <div class="mb-5">
        <h6 class="h3">{{$t('elements.common.account.register.titleText')}}</h6>
        <p class="text-muted mb-0">{{$t('elements.common.account.register.subTitleText')}}</p>
      </div>
      <b-alert :show="error.message" v-html="error.message"/>
      <b-form>
        <b-form-group
          :label="$t('elements.common.account.register.firstNameEntry')"
          label-for="input-first-name"
        >
          <b-form-input
            id="input-first-name"
            v-model.trim="form.firstName"
            :state="$v.form.firstName.$dirty ? !$v.form.firstName.$error : null"
            aria-describedby="input-first-name-feedback"
          />
          <b-form-invalid-feedback
            id="input-first-name-feedback"
          >{{$t('elements.common.account.register.firstNameError')}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          :label="$t('elements.common.account.register.lastNameEntry')"
          label-for="input-last-name"
        >
          <b-form-input
            id="input-last-name"
            v-model.trim="form.lastName"
            :state="$v.form.lastName.$dirty ? !$v.form.lastName.$error : null"
            aria-describedby="input-last-name-feedback"
          />
          <b-form-invalid-feedback
            id="input-last-name-feedback"
          >{{$t('elements.common.account.register.lastNameError')}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          :label="$t('elements.common.account.register.emailEntry')"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model.trim="form.email"
            :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
            aria-describedby="input-email-feedback"
          />
          <b-form-invalid-feedback
            id="input-email-feedback"
          >{{$t('elements.common.account.register.emailError')}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          :label="$t('elements.common.account.register.passwordEntry')"
          label-for="input-password"
        >
          <b-form-input
            id="input-password"
            v-model.trim="form.password"
            type="password"
            :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
            aria-describedby="input-password-feedback"
          />
          <b-form-invalid-feedback
            id="input-password-feedback"
          >{{$t('elements.common.account.register.passwordError')}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          :label="$t('elements.common.account.register.confirmPasswordEntry')"
          label-for="input-confirm-password"
          class="mb-4"
        >
          <b-form-input
            id="input-confirm-password"
            v-model="form.confirmPassword"
            type="password"
            :state="$v.form.confirmPassword.$dirty ? !$v.form.confirmPassword.$error : null"
            aria-describedby="input-confirm-password-feedback"
          />
          <b-form-invalid-feedback
            id="input-confirm-password-feedback"
          >{{$t('elements.common.account.register.confirmPasswordError')}}</b-form-invalid-feedback>
        </b-form-group>
        <div class="mt-4">
          <b-button
            :disabled="$v.form.$invalid"
            size="sm"
            pill
            class="btn-icon"
            variant="primary"
            @click="onSubmit"
          >
            {{$t('elements.common.account.register.buttonSave')}}
            <vf-a-icon icon="long-arrow-alt-right" size="sm"/>
          </b-button>
        </div>
      </b-form>
    </b-card-body>
    <b-card-footer class="px-md-5">
      <small>{{$t('elements.common.account.register.footerText')}}</small>
      <b-link
        to="/account/login"
        class="small font-weight-bold"
      >{{$t('elements.common.account.register.footerLinkText')}}</b-link>
    </b-card-footer>
  </b-card>
</template>
<script>
import {
  BCard,
  BCardBody,
  BCardFooter,
  BForm,
  BFormGroup,
  BFormInput,
  BFormInvalidFeedback,
  BButton,
  BLink,
  BAlert
} from "bootstrap-vue";
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
import sameAs from "vuelidate/lib/validators/sameAs";
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
    return {
      loading: false,
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
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    })
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        await this.$store.dispatch("common/customer/register", {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          email: this.form.email,
          password: this.form.password
        });

        if (!this.error) {
          this.$router.push("/account");
        }
      }
    }
  }
};
</script>

