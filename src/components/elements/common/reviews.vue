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
        <b-form-radio-group v-model="rating" class="pt-2" :options="[1, 2, 3, 4 ,5]"></b-form-radio-group>
      </b-form-group>
      <b-form-group :label="$t('elements.common.reviews.nameEntry')" label-for="input-name">
        <b-form-input id="input-name" v-model="author" trim/>
      </b-form-group>
      <b-form-group :label="$t('elements.common.reviews.reviewEntry')" label-for="input-review">
        <b-form-textarea id="input-review" v-model="review" trim/>
      </b-form-group>
      <div class="text-sm-right">
        <b-button variant="primary" @click="handleSend">{{$t('elements.common.reviews.buttonSend')}}</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import BButton from "bootstrap-vue/es/components/button/button";
import BCard from "bootstrap-vue/es/components/card/card";
import BFormGroup from "bootstrap-vue/es/components/form-group/form-group";
import BFormInput from "bootstrap-vue/es/components/form-input/form-input";
import BFormTextarea from "bootstrap-vue/es/components/form-textarea/form-textarea";
import BFormRadioGroup from "bootstrap-vue/es/components/form-radio/form-radio-group";
export default {
  components: {
    BCard,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormRadioGroup,
    BButton
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
  methods: {
    handleSend() {
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
};
</script>
