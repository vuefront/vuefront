<template>
  <div class="reviews-section">
    <div class="reviews-section__title title mb-3">Comments</div>
    <div class="mb-4">
      <v-card v-for="(review, index) in reviews" :key="index" class="mb-3">
        <v-card-title primary-title>
          <div>
            <div
              class="reviews-section__author subheading font-weight-medium mb-1"
            >{{review.author}}</div>
            <div class="review-section_content body-1">{{review.content}}</div>
          </div>
        </v-card-title>
      </v-card>
    </div>
    <div class="review-section__new">
      <div class="review-section__new_title title mb-3">Write a review</div>
      <v-form ref="form">
        <div class="text-xs-left mb-3">
          <v-label>Rating</v-label>
          <v-rating v-model="rating" hover dense/>
        </div>
        <div class="text-xs-left mb-3">
          <v-label>Your Name</v-label>
          <v-text-field v-model="author" hide-details solo/>
        </div>
        <div class="text-xs-left mb-3">
          <v-label>Your Review</v-label>
          <v-textarea v-model="review" hide-details solo/>
        </div>
        <div class="text-xs-right">
          <v-btn color="primary" @click="handleSend">Send</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>
<script>
import isNull from "lodash/isNull";
import filter from "lodash/filter";
import {
  VForm,
  VCard,
  VCardTitle,
  VLabel,
  VTextarea,
  VRating,
  VBtn,
  VTextField
} from "vuetify/lib";
export default {
  name: "vfCommonReviewsDefault",
  components: {
    VForm,
    VLabel,
    VTextarea,
    VCard,
    VCardTitle,
    VRating,
    VBtn,
    VTextField
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
