<template>
  <div class="reviews-section">
    <div class="reviews-section__title h3 mb-3">{{$t('elements.common.reviews.titleText')}}</div>
    <div class="mb-4">
      <b-card v-for="(review, index) in reviews" :key="index" class="mb-3">
        <div>
          <div class="reviews-section__author mb-1 font-weight-bold h5">{{review.author}}</div>
          <div class="review-section_content lead">{{review.content}}</div>
        </div>
      </b-card>
    </div>
    <div class="review-section__new">
      <div class="review-section__new_title title mb-3">{{$t('elements.common.reviews.writeText')}}</div>
      <b-form-group :label="$t('elements.common.reviews.ratingEntry')">
        <vf-rating v-model="rating" color="#ffcc00" aria-describedby="input-rating-feedback"/>
        <b-form-invalid-feedback
          :state="$v.rating.$dirty ? !$v.rating.$error : null"
          id="input-rating-feedback"
        >{{$t('elements.common.reviews.ratingError')}}</b-form-invalid-feedback>
      </b-form-group>
      
      <b-form-group :label="$t('elements.common.reviews.nameEntry')" label-for="input-name">
        <b-form-input
          id="input-name"
          v-model="author"
          :state="$v.author.$dirty ? !$v.author.$error : null"
          aria-describedby="input-author-feedback"
          trim
        />
        <b-form-invalid-feedback
          id="input-author-feedback"
        >{{$t('elements.common.reviews.authorError')}}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group :label="$t('elements.common.reviews.reviewEntry')" label-for="input-review">
        <b-form-textarea
          id="input-review"
          v-model="review"
          :state="$v.review.$dirty ? !$v.review.$error : null"
          aria-describedby="input-review-feedback"
          trim
        />
        <b-form-invalid-feedback
          id="input-review-feedback"
        >{{$t('elements.common.reviews.reviewError')}}</b-form-invalid-feedback>
      </b-form-group>
      <div class="text-sm-right">
        <b-button variant="primary" @click="handleSend">{{$t('elements.common.reviews.buttonSend')}}</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import {
  BButton,
  BCard,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BFormRadioGroup,
  BFormInvalidFeedback
} from "bootstrap-vue/es/components";
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import minValue from "vuelidate/lib/validators/minValue";
import maxLength from "vuelidate/lib/validators/maxLength";
import maxValue from "vuelidate/lib/validators/maxValue";

export default {
  components: {
    BCard,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormRadioGroup,
    BButton,
    BFormInvalidFeedback
  },
  props: {
    reviews: {
      type: Array,
      default: []
    }
  },
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
    handleSend() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$emit("create", {
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
