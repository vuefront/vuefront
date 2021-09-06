<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{
      $t("elements.common.address.edit.titleText")
    }}</template>
    <template #sub-title>{{
      $t("elements.common.address.edit.subTitleText")
    }}</template>

    <vf-m-field
      id="input-first-name"
      :state="v$.firstName.$dirty ? !v$.firstName.$error : null"
    >
      <template #label>{{
        $t("elements.common.address.edit.firstNameEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.firstName" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.address.edit.firstNameError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-last-name"
      :state="v$.lastName.$dirty ? !v$.lastName.$error : null"
    >
      <template #label>{{
        $t("elements.common.address.edit.lastNameEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.lastName" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.address.edit.lastNameError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-company"
      :state="v$.company.$dirty ? !v$.company.$error : null"
    >
      <template #label>{{
        $t("elements.common.address.edit.companyEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.company" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.address.edit.companyError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-address1"
      :state="v$.address1.$dirty ? !v$.address1.$error : null"
    >
      <template #label>{{
        $t("elements.common.address.edit.address1Entry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.address1" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.address.edit.address1Error")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-address2"
      :state="v$.address2.$dirty ? !v$.address2.$error : null"
    >
      <template #label>{{
        $t("elements.common.address.edit.address2Entry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.address2" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.address.edit.address2Error")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-city"
      :state="v$.city.$dirty ? !v$.city.$error : null"
    >
      <template #label>{{
        $t("elements.common.address.edit.cityEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.city" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.address.edit.cityError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-zipcode"
      :state="v$.zipcode.$dirty ? !v$.zipcode.$error : null"
    >
      <template #label>{{
        $t("elements.common.address.edit.zipcodeEntry")
      }}</template>
      <template #default="data">
        <vf-a-input v-model="form.zipcode" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.address.edit.zipcodeError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-country"
      :state="v$.countryId.$dirty ? !v$.countryId.$error : null"
    >
      <template #label>{{
        $t("elements.common.address.edit.countryEntry")
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
        $t("elements.common.address.edit.countryError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      v-if="zones.content.length > 0"
      id="input-zone"
      :state="v$.zoneId.$dirty ? !v$.zoneId.$error : null"
    >
      <template #label>{{
        $t("elements.common.address.edit.zoneEntry")
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
        $t("elements.common.address.edit.zoneError")
      }}</template>
    </vf-m-field>

    <template #button>
      {{ $t("elements.common.address.edit.buttonSave") }}
      <vf-a-icon :icon="mdiArrowRight" size="15" />
    </template>
  </vf-o-form>
</template>
<script lang="ts" setup>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import { mdiArrowRight } from "@mdi/js";
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const props = defineProps(["address", "countries", "zones"]);

const form = reactive({
  firstName: props.address.firstName,
  lastName: props.address.lastName,
  company: props.address.company,
  address1: props.address.address1,
  address2: props.address.address2,
  city: props.address.city,
  countryId: props.address.countryId,
  zoneId: props.address.zoneId,
  zipcode: props.address.zipcode,
});
let fields = {};

if (props.zones.content.length > 0) {
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
    countryId: {
      required,
    },
    zipcode: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(10),
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
    const status = await store.dispatch("common/address/edit", {
      id: props.address.id,
      address: {
        firstName: form.firstName,
        lastName: form.lastName,
        company: form.company,
        address1: form.address1,
        address2: form.address2,
        countryId: form.countryId,
        zoneId: form.zoneId,
        city: form.city,
        zipcode: form.zipcode,
      },
    });

    if (status) {
      router.push("/account/address");
    }
  }
};
</script>
