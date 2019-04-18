<template>
  <b-card class="shadow mb-0" no-body>
    <b-card-body class="px-md-5 py-5">
      <div class="mb-5">
        <h6 class="h3">Create account</h6>
        <p class="text-muted mb-0">Made with love by developers for developers.</p>
      </div>
      <b-form>
        <b-form-group label="First Name" label-for="input-first-name">
          <b-form-input
            id="input-first-name"
            v-model.trim="form.firstName"
            :state="$v.form.firstName.$dirty ? !$v.form.firstName.$error : null"
            aria-describedby="input-first-name-feedback"
          />
          <b-form-invalid-feedback
            id="input-first-name-feedback"
          >First Name must be between 1 and 32 characters!</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label="Last Name" label-for="input-last-name">
          <b-form-input
            id="input-last-name"
            v-model.trim="form.lastName"
            :state="$v.form.lastName.$dirty ? !$v.form.lastName.$error : null"
            aria-describedby="input-last-name-feedback"
          />
          <b-form-invalid-feedback
            id="input-last-name-feedback"
          >Last Name must be between 1 and 32 characters!</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label="Email address" label-for="input-email">
          <b-form-input
            id="input-email"
            v-model.trim="form.email"
            :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
            aria-describedby="input-email-feedback"
          />
          <b-form-invalid-feedback
            id="input-email-feedback"
          >E-Mail Address does not appear to be valid!</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label="Password" label-for="input-password">
          <b-form-input
            id="input-password"
            v-model.trim="form.password"
            type="password"
            :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
            aria-describedby="input-password-feedback"
          />
          <b-form-invalid-feedback
            id="input-password-feedback"
          >Password must be between 4 and 20 characters!</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label="Confirm password" label-for="input-confirm-password" class="mb-4">
          <b-form-input
            id="input-confirm-password"
            v-model="form.confirmPassword"
            type="password"
            :state="$v.form.confirmPassword.$dirty ? !$v.form.confirmPassword.$error : null"
            aria-describedby="input-confirm-password-feedback"
          />
          <b-form-invalid-feedback
            id="input-confirm-password-feedback"
          >Password confirmation does not match password!</b-form-invalid-feedback>
        </b-form-group>
        <div class="mt-4">
          <b-button
            :disabled="$v.form.$invalid"
            size="sm"
            class="rounded-pill btn-icon"
            variant="primary"
            @click="onSubmit"
          >
            Create my account
            <vf-icon icon="long-arrow-alt-right" size="sm"/>
          </b-button>
        </div>
      </b-form>
    </b-card-body>
    <b-card-footer class="px-md-5">
      <small>Already have an acocunt?</small>
      <b-link to="/account/login" class="small font-weight-bold">Sign in</b-link>
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
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
import sameAs from "vuelidate/lib/validators/sameAs";
import email from "vuelidate/lib/validators/email";
import { mapGetters } from "vuex";

export default {
  components: {
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

