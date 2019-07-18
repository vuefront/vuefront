<template>
  <section class="account-address-edit">
    <b-card class="shadow mb-0" no-body>
      <b-card-body class="px-md-5 py-5">
        <div class="mb-5">
          <h6 class="h3">{{$t('elements.common.address.edit.titleText')}}</h6>
          <p class="text-muted mb-0">{{$t('elements.common.address.edit.subTitleText')}}</p>
        </div>
        <b-alert :show="error.message" v-html="error.message"/>
        <b-form>
          <b-form-group
            :label="$t('elements.common.address.edit.firstNameEntry')"
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
            >{{$t('elements.common.address.edit.firstNameError')}}</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group
            :label="$t('elements.common.address.edit.lastNameEntry')"
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
            >{{$t('elements.common.address.edit.lastNameError')}}</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group
            :label="$t('elements.common.address.edit.companyEntry')"
            label-for="input-company"
          >
            <b-form-input
              id="input-company"
              v-model.trim="form.company"
              :state="$v.form.company.$dirty ? !$v.form.company.$error : null"
              aria-describedby="input-company-feedback"
            />
            <b-form-invalid-feedback
              id="input-company-feedback"
            >{{$t('elements.common.address.edit.companyError')}}</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group
            :label="$t('elements.common.address.edit.address1Entry')"
            label-for="input-address-1"
          >
            <b-form-input
              id="input-address-1"
              v-model.trim="form.address1"
              :state="$v.form.address1.$dirty ? !$v.form.address1.$error : null"
              aria-describedby="input-address-1-feedback"
            />
            <b-form-invalid-feedback
              id="input-address-1-feedback"
            >{{$t('elements.common.address.edit.address1Error')}}</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group
            :label="$t('elements.common.address.edit.address2Entry')"
            label-for="input-address-2"
          >
            <b-form-input
              id="input-address-2"
              v-model.trim="form.address2"
              :state="$v.form.address2.$dirty ? !$v.form.address2.$error : null"
              aria-describedby="input-address-2-feedback"
            />
            <b-form-invalid-feedback
              id="input-address-2-feedback"
            >{{$t('elements.common.address.edit.address2Error')}}</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group
            :label="$t('elements.common.address.edit.cityEntry')"
            label-for="input-city"
          >
            <b-form-input
              id="input-city"
              v-model.trim="form.city"
              :state="$v.form.city.$dirty ? !$v.form.city.$error : null"
              aria-describedby="input-city-feedback"
            />
            <b-form-invalid-feedback
              id="input-city-feedback"
            >{{$t('elements.common.address.edit.cityError')}}</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group
            :label="$t('elements.common.address.edit.zipcodeEntry')"
            label-for="input-zipcode"
          >
            <b-form-input
              id="input-zipcode"
              v-model.trim="form.zipcode"
              :state="$v.form.zipcode.$dirty ? !$v.form.zipcode.$error : null"
              aria-describedby="input-zipcode-feedback"
            />
            <b-form-invalid-feedback
              id="input-zipcode-feedback"
            >{{$t('elements.common.address.edit.zipcodeError')}}</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group
            :label="$t('elements.common.address.edit.countryEntry')"
            label-for="input-country"
          >
            <b-form-select
              id="input-country"
              v-model.trim="form.countryId"
              :state="$v.form.countryId.$dirty ? !$v.form.countryId.$error : null"
              :options="countries.content"
              aria-describedby="input-country-feedback"
              value-field="id"
              text-field="name"
              @input="handleChangeCountry"
            />
            <b-form-invalid-feedback
              id="input-country-feedback"
            >{{$t('elements.common.address.edit.countryError')}}</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group
            v-if="zones.content.length > 0"
            :label="$t('elements.common.address.edit.zoneEntry')"
            label-for="input-country"
          >
            <b-form-select
              id="input-country"
              v-model.trim="form.zoneId"
              :state="$v.form.zoneId.$dirty ? !$v.form.zoneId.$error : null"
              :options="zones.content"
              aria-describedby="input-zone-feedback"
              value-field="id"
              text-field="name"
            />
            <b-form-invalid-feedback
              id="input-zone-feedback"
            >{{$t('elements.common.address.edit.zoneError')}}</b-form-invalid-feedback>
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
              {{$t('elements.common.address.edit.buttonSave')}}
              <vf-icon icon="long-arrow-alt-right" size="sm"/>
            </b-button>
          </div>
        </b-form>
      </b-card-body>
      <b-card-footer class="px-md-5">
        <small>{{$t('elements.common.address.edit.footerText')}}</small>
        <b-link
          to="/account/password"
          class="small font-weight-bold"
        >{{$t('elements.common.address.edit.footerLinkText')}}</b-link>
      </b-card-footer>
    </b-card>
  </section>
</template>
<script>
import {
  BCard,
  BCardBody,
  BCardFooter,
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormInvalidFeedback,
  BButton,
  BLink,
  BAlert
} from "bootstrap-vue";
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
import { mapGetters } from "vuex";
export default {
  props: ["address", "countries", "zones"],
  components: {
    BAlert,
    BCard,
    BCardBody,
    BCardFooter,
    BForm,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BButton,
    BLink,
    BFormInvalidFeedback
  },
  data() {
    return {
      form: {
        firstName: this.address.firstName,
        lastName: this.address.lastName,
        company: this.address.company,
        address1: this.address.address1,
        address2: this.address.address2,
        city: this.address.city,
        countryId: this.address.countryId,
        zoneId: this.address.zoneId,
        zipcode: this.address.zipcode
      }
    };
  },
  mixins: [validationMixin],
  validations() {
    let fields = {};

    if (this.zones.content.length > 0) {
      fields = {
        ...fields,
        zoneId: {
          required
        }
      };
    }

    return {
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
        company: {
          minLength: minLength(1),
          maxLength: maxLength(32)
        },
        address1: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(128)
        },
        address2: {
          minLength: minLength(3),
          maxLength: maxLength(128)
        },
        city: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(128)
        },
        countryId: {
          required
        },
        zipcode: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(10)
        },
        ...fields
      }
    };
  },
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    })
  },
  methods: {
    async handleChangeCountry(value) {
      await this.$store.dispatch("common/zone/list", {
        page: 1,
        size: -1,
        country_id: value
      });
      this.form.zoneId = "";
    },
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        await this.$store.dispatch("common/address/edit", {
          id: this.address.id,
          address: {
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            company: this.form.company,
            address1: this.form.address1,
            address2: this.form.address2,
            countryId: this.form.countryId,
            zoneId: this.form.zoneId,
            city: this.form.city,
            zipcode: this.form.zipcode
          }
        });

        if (!this.error) {
          this.$router.push("/account/address");
        }
      }
    }
  }
};
</script>
