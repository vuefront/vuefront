<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{$t('elements.common.address.edit.titleText')}}</template>
    <template #sub-title>{{$t('elements.common.address.edit.subTitleText')}}</template>

    <vf-m-field
      :state="$v.form.firstName.$dirty ? !$v.form.firstName.$error : null"
      id="input-first-name"
    >
      <template #label>{{$t('elements.common.address.edit.firstNameEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.firstName" trim />
      </template>
      <template #error>{{$t('elements.common.address.edit.firstNameError')}}</template>
    </vf-m-field>

    <vf-m-field
      :state="$v.form.lastName.$dirty ? !$v.form.lastName.$error : null"
      id="input-last-name"
    >
      <template #label>{{$t('elements.common.address.edit.lastNameEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.lastName" trim />
      </template>
      <template #error>{{$t('elements.common.address.edit.lastNameError')}}</template>
    </vf-m-field>

    <vf-m-field :state="$v.form.company.$dirty ? !$v.form.company.$error : null" id="input-company">
      <template #label>{{$t('elements.common.address.edit.companyEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.company" trim />
      </template>
      <template #error>{{$t('elements.common.address.edit.companyError')}}</template>
    </vf-m-field>

    <vf-m-field
      :state="$v.form.address1.$dirty ? !$v.form.address1.$error : null"
      id="input-address1"
    >
      <template #label>{{$t('elements.common.address.edit.address1Entry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.address1" trim />
      </template>
      <template #error>{{$t('elements.common.address.edit.address1Error')}}</template>
    </vf-m-field>

    <vf-m-field
      :state="$v.form.address2.$dirty ? !$v.form.address2.$error : null"
      id="input-address2"
    >
      <template #label>{{$t('elements.common.address.edit.address2Entry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.address2" trim />
      </template>
      <template #error>{{$t('elements.common.address.edit.address2Error')}}</template>
    </vf-m-field>

    <vf-m-field :state="$v.form.city.$dirty ? !$v.form.city.$error : null" id="input-city">
      <template #label>{{$t('elements.common.address.edit.cityEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.city" trim />
      </template>
      <template #error>{{$t('elements.common.address.edit.cityError')}}</template>
    </vf-m-field>

    <vf-m-field :state="$v.form.zipcode.$dirty ? !$v.form.zipcode.$error : null" id="input-zipcode">
      <template #label>{{$t('elements.common.address.edit.zipcodeEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.zipcode" trim />
      </template>
      <template #error>{{$t('elements.common.address.edit.zipcodeError')}}</template>
    </vf-m-field>

    <vf-m-field
      :state="$v.form.countryId.$dirty ? !$v.form.countryId.$error : null"
      id="input-country"
    >
      <template #label>{{$t('elements.common.address.edit.countryEntry')}}</template>
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
      <template #error>{{$t('elements.common.address.edit.countryError')}}</template>
    </vf-m-field>

    <vf-m-field
      v-if="zones.content.length > 0"
      :state="$v.form.zoneId.$dirty ? !$v.form.zoneId.$error : null"
      id="input-zone"
    >
      <template #label>{{$t('elements.common.address.edit.zoneEntry')}}</template>
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
      <template #error>{{$t('elements.common.address.edit.zoneError')}}</template>
    </vf-m-field>

    <template #button>
      {{$t('elements.common.address.edit.buttonSave')}}
      <vf-a-icon :icon="mdiArrowRight" size="15" />
    </template>
  </vf-o-form>
</template>
<script>
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
import {mdiArrowRight} from '@mdi/js'
export default {
  props: ["address", "countries", "zones"],
  data() {
    return {
      mdiArrowRight,
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
        const status = await this.$store.dispatch("common/address/edit", {
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

        if (status) {
          this.$router.push("/account/address");
        }
      }
    }
  }
};
</script>

