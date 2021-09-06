<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{ $t("elements.common.contact.titleText") }}</template>
    <template #sub-title>{{
      $t("elements.common.contact.subTitleText")
    }}</template>

    <vf-m-field
      id="input-name"
      :state="v$.name.$dirty ? !v$.name.$error : null"
    >
      <template #default="data">
        <vf-a-input
          v-model="form.name"
          v-bind="data"
          :placeholder="$t('elements.common.contact.namePlaceholder')"
          size="lg"
          trim
        />
      </template>
      <template #error>{{ $t("elements.common.contact.nameError") }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-email"
      :state="v$.email.$dirty ? !v$.email.$error : null"
    >
      <template #default="data">
        <vf-a-input
          v-model="form.email"
          v-bind="data"
          :placeholder="$t('elements.common.contact.emailPlaceholder')"
          size="lg"
          trim
        />
      </template>
      <template #error>{{ $t("elements.common.contact.emailError") }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-message"
      :state="v$.message.$dirty ? !v$.message.$error : null"
    >
      <template #default="data">
        <vf-a-textarea
          v-model="form.message"
          v-bind="data"
          :placeholder="$t('elements.common.contact.messagePlaceholder')"
          size="lg"
          trim
        />
      </template>
      <template #error>{{
        $t("elements.common.contact.messageError")
      }}</template>
    </vf-m-field>

    <template #button>{{ $t("elements.common.contact.buttonSend") }}</template>
  </vf-o-form>
</template>
<script lang="ts" setup>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";
import { reactive, nextTick } from "vue";
import { useStore } from "vuex";
const form = reactive({
  name: null,
  email: null,
  message: null,
});
const v$ = useVuelidate(
  {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(32),
    },
    email: {
      required,
      email,
    },
    message: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(3000),
    },
  },
  form
);
const store = useStore();
const onSubmit = async () => {
  v$.value.$touch();

  if (!v$.value.$invalid) {
    const status = await store.dispatch("common/contact/send", form);
    if (status) {
      form.email = null;
      form.name = null;
      form.message = null;

      nextTick(() => {
        v$.value.$reset();
      });
    }
  }
};
</script>
