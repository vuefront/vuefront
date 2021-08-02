<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{ $t("elements.common.reviews.writeText") }}</template>

    <vf-m-field
      id="input-rating"
      :state="$v.rating.$dirty ? !$v.rating.$error : null"
    >
      <template #label>{{
        $t("elements.common.reviews.ratingEntry")
      }}</template>
      <template #default="data">
        <vf-m-rating v-model="rating" v-bind="data" color="#ffcc00" />
      </template>
      <template #error>{{
        $t("elements.common.reviews.ratingError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-name"
      :state="$v.author.$dirty ? !$v.author.$error : null"
    >
      <template #label>{{ $t("elements.common.reviews.nameEntry") }}</template>
      <template #default="data">
        <vf-a-input v-model="author" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.reviews.authorError")
      }}</template>
    </vf-m-field>

    <vf-m-field
      id="input-review"
      :state="$v.review.$dirty ? !$v.review.$error : null"
    >
      <template #label>{{
        $t("elements.common.reviews.reviewEntry")
      }}</template>
      <template #default="data">
        <vf-a-textarea v-model="review" v-bind="data" trim />
      </template>
      <template #error>{{
        $t("elements.common.reviews.reviewError")
      }}</template>
    </vf-m-field>

    <template #button>{{ $t("elements.common.reviews.buttonSend") }}</template>
  </vf-o-form>
</template>
<script>
import * as vuelidate from "vuelidate";
import {
  required,
  minLength,
  minValue,
  maxLength,
  maxValue,
} from "vuelidate/lib/validators";
const { validationMixin } = vuelidate;

export default {
  mixins: [validationMixin],
  data() {
    return {
      author: "",
      rating: 0,
      review: "",
    };
  },
  validations: {
    rating: {
      required,
      minValue: minValue(1),
      maxValue: maxValue(5),
    },
    author: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(32),
    },
    review: {
      required,
      minLength: minLength(25),
      maxLength: maxLength(1000),
    },
  },
  methods: {
    onSubmit(e) {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$emit("submit", {
          content: this.review,
          author: this.author,
          rating: this.rating,
        });
        this.author = "";
        this.rating = 0;
        this.review = "";
      }
    },
  },
};
</script>
