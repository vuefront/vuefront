<template>
  <b-card class="shadow mb-0" no-body>
    <b-card-body class="px-md-5 py-5">
      <div class="mb-5">
        <h6 class="h3">Change Password</h6>
        <p class="text-muted mb-0">Made with love by developers for developers.</p>
      </div>
      <b-alert :show="error.message" v-html="error.message"/>
      <b-form>
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
            Save changes
            <vf-icon icon="long-arrow-alt-right" size="sm"/>
          </b-button>
        </div>
      </b-form>
    </b-card-body>
    <b-card-footer class="px-md-5">
      <small>Want to change your account information?</small>
      <b-link to="/account/edit" class="small font-weight-bold">My Account</b-link>
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
import sameAs from "vuelidate/lib/validators/sameAs";
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
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    })
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        await this.$store.dispatch("common/customer/editPassword", {
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

