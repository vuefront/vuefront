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
          :state="v$.firstName.$dirty ? !v$.firstName.$error : null"
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
          :state="v$.lastName.$dirty ? !v$.lastName.$error : null"
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
      :state="v$.company.$dirty ? !v$.company.$error : null"
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
      :state="v$.address1.$dirty ? !v$.address1.$error : null"
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
      :state="v$.address2.$dirty ? !v$.address2.$error : null"
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
          :state="v$.city.$dirty ? !v$.city.$error : null"
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
          :state="v$.zipcode.$dirty ? !v$.zipcode.$error : null"
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
          :state="v$.countryId.$dirty ? !v$.countryId.$error : null"
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
              @update:modelValue="handleChangeCountry"
            />
          </template>
          <template #error>{{
            $t("elements.common.address.create.countryError")
          }}</template>
        </vf-m-field>

        <vf-m-field
          v-if="zones.content.length > 0"
          id="input-zone"
          :state="v$.zoneId.$dirty ? !v$.zoneId.$error : null"
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
<script lang="ts" setup>
import { useVuelidate } from "@vuelidate/core";
import { isEmpty } from "lodash";
import { required, minLength, maxLength } from "@vuelidate/validators";
import { mdiArrowRight } from "@mdi/js";
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const props = defineProps({
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
});

const form = reactive({
  firstName: "",
  lastName: "",
  company: "",
  address1: "",
  address2: "",
  city: "",
  countryId: "",
  zoneId: "",
  zipcode: "",
});

let fields = {};

if (!isEmpty(props.zones) && props.zones.content.length > 0) {
  fields = {
    ...fields,
    zoneId: {
      required,
    },
  };
}

const v$ = useVuelidate(
  {
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
    zoneId: {},
    ...fields,
  },
  form
);
const store = useStore();
const handleChangeCountry = async (value: string) => {
  await store.dispatch("common/zone/list", {
    page: 1,
    size: -1,
    country_id: value,
  });
  form.zoneId = "";
};
const router = useRouter();
const onSubmit = async () => {
  v$.value.$touch();

  if (!v$.value.$invalid) {
    const status = await store.dispatch("common/address/create", {
      address: {
        firstName: form.firstName,
        lastName: form.lastName,
        company: form.company,
        address1: form.address1,
        address2: form.address2,
        city: form.city,
        countryId: form.countryId,
        zoneId: form.zoneId,
        zipcode: form.zipcode,
      },
    });

    if (status) {
      router.push("/account/address");
    }
  }
};
</script>
