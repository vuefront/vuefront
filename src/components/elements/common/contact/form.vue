<template>
  <section class="contact-form">
    <h3>{{$t('elements.common.contact.titleText')}}</h3>
    <p class="lead">{{$t('elements.common.contact.subTitleText')}}</p>
    <b-form class="mt-5" ref="form" v-if="show">
      <b-form-group>
        <b-form-input
          v-model.trim="form.name"
          :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
          :placeholder="$t('elements.common.contact.namePlaceholder')"
          aria-describedby="input-name-feedback"
          size="lg"
        />
        <b-form-invalid-feedback
          id="input-name-feedback"
        >{{$t('elements.common.contact.nameError')}}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model.trim="form.email"
          :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
          :placeholder="$t('elements.common.contact.emailPlaceholder')"
          aria-describedby="input-email-feedback"
          size="lg"
        />
        <b-form-invalid-feedback
          id="input-email-feedback"
        >{{$t('elements.common.contact.emailError')}}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group>
        <b-form-textarea
          v-model.trim="form.message"
          :state="$v.form.message.$dirty ? !$v.form.message.$error : null"
          :placeholder="$t('elements.common.contact.messagePlaceholder')"
          aria-describedby="input-message-feedback"
          size="lg"
          rows="5"
        />
        <b-form-invalid-feedback
          id="input-message-feedback"
        >{{$t('elements.common.contact.messageError')}}</b-form-invalid-feedback>
      </b-form-group>
      <b-button
        variant="dark"
        class="rounded-pill"
        @click="onSubmit"
      >{{$t('elements.common.contact.buttonSend')}}</b-button>
    </b-form>
  </section>
</template>
<script>
import BForm from "bootstrap-vue/es/components/form/form";
import BFormGroup from "bootstrap-vue/es/components/form-group/form-group";
import BFormInput from "bootstrap-vue/es/components/form-input/form-input";
import BFormTextarea from "bootstrap-vue/es/components/form-textarea/form-textarea";
import BFormInvalidFeedback from "bootstrap-vue/es/components/form/form-invalid-feedback";
import BButton from "bootstrap-vue/es/components/button/button";
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
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BButton,
    BFormInvalidFeedback
  },
  data() {
    return {
      loading: false,
      show: true,
      form: {
        name: null,
        email: null,
        message: null
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
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(32)
      },
      email: {
        required,
        email
      },
      message: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(3000)
      }
    }
  },
  methods: {
    async onSubmit(e) {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        await this.$store.dispatch("common/contact/send", this.form);
        if(!this.error) {
          this.$store.commit('notification/add', this.$t('elements.common.contact.successText'))

          e.preventDefault()

          this.form.email = null
          this.form.name = null
          this.form.message = null

          this.show = false
          this.$nextTick(() => {
            this.$v.$reset()
            this.show = true
          })
        }
      }
    }
  }
};
</script>
