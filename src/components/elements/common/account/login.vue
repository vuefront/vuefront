<template>
  <b-card class="shadow mb-0" no-body>
    <b-card-body class="px-md-5 py-5">
      <div class="mb-5">
        <h6 class="h3">Login</h6>
        <p class="text-muted mb-0">Sign in to your account to continue.</p>
      </div>

      <b-form>
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
        <div class="mt-4">
          <b-button
            :disabled="$v.form.$invalid"
            size="sm"
            class="rounded-pill"
            variant="primary"
            @click="onSubmit"
          >Sign in</b-button>
        </div>
      </b-form>
    </b-card-body>
    <b-card-footer class="px-md-5">
      <small>Not registered?</small>
      <b-link to="/account/register" class="small font-weight-bold">Create account</b-link>
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
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    })
  },
  mixins: [validationMixin],
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20)
      }
    }
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        await this.$store.dispatch("common/customer/login", {
          email: this.form.email,
          password: this.form.password
        });

        if(!this.error) {
          this.$router.push('/account')
        }
      }
    }
  }
};
</script>

