<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{
      $t("elements.common.address.create.titleText")
    }}</template>
    <template #sub-title>{{
      $t("elements.common.address.create.subTitleText")
    }}</template>
    <vf-m-row>
      <vf-m-col md>
        <vf-m-field
          id="input-first-name"
          :state="$v.form.firstName.$dirty ? !$v.form.firstName.$error : null"
        >
          <template #label>{{
            $t("elements.common.address.create.firstNameEntry")
          }}</template>
          <template #default="data">
            <vf-a-input v-model="form.firstName" v-bind="data" trim />
          </template>
          <template #error>{{
            $t("elements.common.address.create.firstNameError")
          }}</template>
        </vf-m-field>
      </vf-m-col>
      <vf-m-col md>
        <vf-m-field
          id="input-last-name"
          :state="$v.form.lastName.$dirty ? !$v.form.lastName.$error : null"
        >
          <template #label>{{
            $t("elements.common.address.create.lastNameEntry")
          }}</template>
          <template #default="data">
            <vf-a-input v-model="form.lastName" v-bind="data" trim />
          </template>
          <template #error>{{
            $t("elements.common.address.create.lastNameError")
          }}</template>
        </vf-m-field>
      </vf-m-col>
    </vf-m-row>
    <vf-m-field
      id="input-company"
      :state="$v.form.company.$dirty ? !$v.form.company.$error : null"
    >
      <template #label>{{
        $t("elements.common.address.create.companyEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.company" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.address.create.companyError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-address1"
      :state="$v.form.address1.$dirty ? !$v.form.address1.$error : null"
    >
      <template #label>{{
        $t("elements.common.address.create.address1Entry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.address1" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.address.create.address1Error")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-address2"
      :state="$v.form.address2.$dirty ? !$v.form.address2.$error : null"
    >
      <template #label>{{
        $t("elements.common.address.create.address2Entry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.address2" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.address.create.address2Error")
      }}</template>
    </vf-m-field>
    <vf-m-row>
      <vf-m-col md>
        <vf-m-field
          id="input-city"
          :state="$v.form.city.$dirty ? !$v.form.city.$error : null"
        >
          <template #label>{{
            $t("elements.common.address.create.cityEntry")
          }}</template>
          <template #default="data">
            <vf-a-input v-model="form.city" v-bind="data" trim />
          </template>
          <template #error>{{
            $t("elements.common.address.create.cityError")
          }}</template>
        </vf-m-field>
      </vf-m-col>
      <vf-m-col md>
        <vf-m-field
          id="input-zipcode"
          :state="$v.form.zipcode.$dirty ? !$v.form.zipcode.$error : null"
        >
          <template #label>{{
            $t("elements.common.address.create.zipcodeEntry")
          }}</template>
          <template #default="data">
            <vf-a-input v-model="form.zipcode" v-bind="data" trim />
          </template>
          <template #error>{{
            $t("elements.common.address.create.zipcodeError")
          }}</template>
        </vf-m-field>
      </vf-m-col>
      <vf-m-col md>
        <vf-m-field
          id="input-country"
          :state="$v.form.countryId.$dirty ? !$v.form.countryId.$error : null"
        >
          <template #label>{{
            $t("elements.common.address.create.countryEntry")
          }}</template>
          <template #default="data">
            <vf-a-select
              v-model="form.countryId"
              v-bind="data"
              :options="countries.content"
              value-field="id"
              text-field="name"
              trim
              @input="handleChangeCountry"
            />
          </template>
          <template #error>{{
            $t("elements.common.address.create.countryError")
          }}</template>
        </vf-m-field>

        <vf-m-field
          v-if="zones.content.length > 0"
          id="input-zone"
          :state="$v.form.zoneId.$dirty ? !$v.form.zoneId.$error : null"
        >
          <template #label>{{
            $t("elements.common.address.create.zoneEntry")
          }}</template>
          <template #default="data">
            <vf-a-select
              v-model="form.zoneId"
              v-bind="data"
              :options="zones.content"
              value-field="id"
              text-field="name"
              trim
            />
          </template>
          <template #error>{{
            $t("elements.common.address.create.zoneError")
          }}</template>
        </vf-m-field>
      </vf-m-col>
    </vf-m-row>
    <template #button>
      {{ $t("elements.common.address.create.buttonSave") }}
      <vf-a-icon :icon="mdiArrowRight" />
    </template>
  </vf-o-form>
</template>
<script>
import { validationMixin } from "vuelidate";
import isEmpty from "lodash/isEmpty";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
import { mdiArrowRight } from "@mdi/js";
export default {
  mixins: [validationMixin],
  props: {
    countries: {
      type: Object,
      default() {
        return null;
      },
    },
    zones: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      mdiArrowRight,
      form: {
        firstName: "",
        lastName: "",
        company: "",
        address1: "",
        address2: "",
        city: "",
        countryId: "",
        zoneId: "",
        zipcode: "",
      },
    };
  },
  validations() {
    let fields = {};

    if (!isEmpty(this.zones) && this.zones.content.length > 0) {
      fields = {
        ...fields,
        zoneId: {
          required,
        },
      };
    }
    return {
      form: {
        firstName: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(32),
        },
        lastName: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(32),
        },
        company: {
          minLength: minLength(1),
          maxLength: maxLength(32),
        },
        address1: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(128),
        },
        address2: {
          minLength: minLength(3),
          maxLength: maxLength(128),
        },
        city: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(128),
        },
        zipcode: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(10),
        },
        countryId: {
          required,
        },
        ...fields,
      },
    };
  },
  methods: {
    async handleChangeCountry(value) {
      await this.$store.dispatch("common/zone/list", {
        page: 1,
        size: -1,
        country_id: value,
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
            zipcode: this.form.zipcode,
          },
        });

        if (status) {
          this.$router.push("/account/address");
        }
      }
    },
  },
};
</script>
