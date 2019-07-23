<template>
  <vf-o-form @submit="onSubmit">
    <template #label>{{$t('elements.common.reviews.writeText')}}</template>

    <vf-m-field :state="$v.rating.$dirty ? !$v.rating.$error : null" id="input-rating">
      <template #label>{{$t('elements.common.reviews.ratingEntry')}}</template>
      <template #default="data">
        <vf-m-rating v-bind="data" v-model="rating" color="#ffcc00" />
      </template>
      <template #error>{{$t('elements.common.reviews.ratingError')}}</template>
    </vf-m-field>

    <vf-m-field :state="$v.author.$dirty ? !$v.author.$error : null" id="input-name">
      <template #label>{{$t('elements.common.reviews.nameEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="author" trim />
      </template>
      <template #error>{{$t('elements.common.reviews.authorError')}}</template>
    </vf-m-field>

    <vf-m-field :state="$v.review.$dirty ? !$v.review.$error : null" id="input-review">
      <template #label>{{$t('elements.common.reviews.reviewEntry')}}</template>
      <template #default="data">
        <vf-a-textarea v-bind="data" v-model="review" trim />
      </template>
      <template #error>{{$t('elements.common.reviews.reviewError')}}</template>
    </vf-m-field>

    <template #button>{{$t('elements.common.reviews.buttonSend')}}</template>
  </vf-o-form>
</template>
<script>
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import minValue from "vuelidate/lib/validators/minValue";
import maxLength from "vuelidate/lib/validators/maxLength";
import maxValue from "vuelidate/lib/validators/maxValue";

export default {
  data() {
    return {
      author: "",
      rating: 0,
      review: ""
    };
  },
  mixins: [validationMixin],
  validations: {
    rating: {
      required,
      minValue: minValue(1),
      maxValue: maxValue(5)
    },
    author: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(32)
    },
    review: {
      required,
      minLength: minLength(25),
      maxLength: maxLength(1000)
    }
  },
  methods: {
    onSubmit(e) {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$emit("submit", {
          content: this.review,
          author: this.author,
          rating: this.rating
        });
        this.author = "";
        this.rating = 0;
        this.review = "";
      }
    }
  }
};
</script>

