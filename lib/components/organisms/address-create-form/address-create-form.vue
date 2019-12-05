<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{$t('elements.common.address.create.titleText')}}</template>
    <template #sub-title>{{$t('elements.common.address.create.subTitleText')}}</template>
    <vf-m-row>
      <vf-m-col md>
        <vf-m-field
          :state="$v.form.firstName.$dirty ? !$v.form.firstName.$error : null"
          id="input-first-name"
        >
          <template #label>{{$t('elements.common.address.create.firstNameEntry')}}</template>
          <template #default="data">
            <vf-a-input v-bind="data" v-model="form.firstName" trim />
          </template>
          <template #error>{{$t('elements.common.address.create.firstNameError')}}</template>
        </vf-m-field>
      </vf-m-col>
      <vf-m-col md>
        <vf-m-field
          :state="$v.form.lastName.$dirty ? !$v.form.lastName.$error : null"
          id="input-last-name"
        >
          <template #label>{{$t('elements.common.address.create.lastNameEntry')}}</template>
          <template #default="data">
            <vf-a-input v-bind="data" v-model="form.lastName" trim />
          </template>
          <template #error>{{$t('elements.common.address.create.lastNameError')}}</template>
        </vf-m-field>
      </vf-m-col>
    </vf-m-row>
    <vf-m-field :state="$v.form.company.$dirty ? !$v.form.company.$error : null" id="input-company">
      <template #label>{{$t('elements.common.address.create.companyEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.company" trim />
      </template>
      <template #error>{{$t('elements.common.address.create.companyError')}}</template>
    </vf-m-field>

    <vf-m-field
      :state="$v.form.address1.$dirty ? !$v.form.address1.$error : null"
      id="input-address1"
    >
      <template #label>{{$t('elements.common.address.create.address1Entry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.address1" trim />
      </template>
      <template #error>{{$t('elements.common.address.create.address1Error')}}</template>
    </vf-m-field>

    <vf-m-field
      :state="$v.form.address2.$dirty ? !$v.form.address2.$error : null"
      id="input-address2"
    >
      <template #label>{{$t('elements.common.address.create.address2Entry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.address2" trim />
      </template>
      <template #error>{{$t('elements.common.address.create.address2Error')}}</template>
    </vf-m-field>
    <vf-m-row>
      <vf-m-col md>
        <vf-m-field :state="$v.form.city.$dirty ? !$v.form.city.$error : null" id="input-city">
          <template #label>{{$t('elements.common.address.create.cityEntry')}}</template>
          <template #default="data">
            <vf-a-input v-bind="data" v-model="form.city" trim />
          </template>
          <template #error>{{$t('elements.common.address.create.cityError')}}</template>
        </vf-m-field>
      </vf-m-col>
      <vf-m-col md>
        <vf-m-field
          :state="$v.form.zipcode.$dirty ? !$v.form.zipcode.$error : null"
          id="input-zipcode"
        >
          <template #label>{{$t('elements.common.address.create.zipcodeEntry')}}</template>
          <template #default="data">
            <vf-a-input v-bind="data" v-model="form.zipcode" trim />
          </template>
          <template #error>{{$t('elements.common.address.create.zipcodeError')}}</template>
        </vf-m-field>
      </vf-m-col>
      <vf-m-col md>
        <vf-m-field
          :state="$v.form.countryId.$dirty ? !$v.form.countryId.$error : null"
          id="input-country"
        >
          <template #label>{{$t('elements.common.address.create.countryEntry')}}</template>
          <template #default="data">
            <vf-a-select
              v-bind="data"
              v-model="form.countryId"
              :options="countries.content"
              value-field="id"
              text-field="name"
              trim
              @input="handleChangeCountry"
            />
          </template>
          <template #error>{{$t('elements.common.address.create.countryError')}}</template>
        </vf-m-field>

        <vf-m-field
          v-if="zones.content.length > 0"
          :state="$v.form.zoneId.$dirty ? !$v.form.zoneId.$error : null"
          id="input-zone"
        >
          <template #label>{{$t('elements.common.address.create.zoneEntry')}}</template>
          <template #default="data">
            <vf-a-select
              v-bind="data"
              v-model="form.zoneId"
              :options="zones.content"
              value-field="id"
              text-field="name"
              trim
            />
          </template>
          <template #error>{{$t('elements.common.address.create.zoneError')}}</template>
        </vf-m-field>
      </vf-m-col>
    </vf-m-row>
    <template #button>
      {{$t('elements.common.address.create.buttonSave')}}
      <vf-a-icon icon="long-arrow-alt-right" />
    </template>
  </vf-o-form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { isEmpty } from "lodash";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
export default {
  props: {
    countries: {
      type: Object,
      default() {
        return null;
      }
    },
    zones: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        company: "",
        address1: "",
        address2: "",
        city: "",
        countryId: "",
        zoneId: "",
        zipcode: ""
      }
    };
  },
  mixins: [validationMixin],
  validations() {
    let fields = {};

    if (!isEmpty(this.zones) && this.zones.content.length > 0) {
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
        zipcode: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(10)
        },
        countryId: {
          required
        },
        ...fields
      }
    };
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
        const status = await this.$store.dispatch("common/address/create", {
          address: {
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            company: this.form.company,
            address1: this.form.address1,
            address2: this.form.address2,
            city: this.form.city,
            countryId: this.form.countryId,
            zoneId: this.form.zoneId,
            zipcode: this.form.zipcode
          }
        });

        if (status) {
          this.$router.push("/account/address");
        }
      }
    }
  }
};
</script>

