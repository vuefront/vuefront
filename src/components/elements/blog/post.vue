<template>
  <section class="post-section">
    <div class="post-section__title mb-3 h1 text-sm-left">{{post.title}}</div>
    <b-row>
      <b-col sm="6">
        <div
          class="post-section__date mb-3 h6 text-sm-left"
        >{{$t('elements.blog.post.postByText')}} {{post.datePublished}}</div>
      </b-col>
      <b-col sm="6">
        <vf-rating
          v-if="post.rating > 0"
          :value="post.rating"
          color="#ffcc00"
          readonly
          class="text-right"
        />
      </b-col>
    </b-row>
    <b-img-lazy
      :src="mainImage"
      :blank-src="mainImagelazy"
      fluid
      class="post-section__image mb-3"
      style="width: 100%;"
    />
    <div class="post-section__content lead" v-html="post.description" />
    <div class="border-top border-bottom mb-5">
      <b-row v-if="post.next || post.prev">
        <b-col md="6" class="py-3 pr-3 border-right">
          <b-link :to="url(post.prev)" v-if="post.prev">
            <b-media vertical-align="center">
              <b-img-lazy
                slot="aside"
                :src="postImage(post.prev)"
                :blank-src="postImagelazy(post.prev)"
                width="160"
              ></b-img-lazy>
              <div class="h5 mt-0 mb-1" v-html="post.prev.name" />
              <p
                class="mb-0 text-sm"
                v-html="post.prev.shortDescription"
                style="min-height: 65px;  max-height: 65px; overflow: hidden;"
              />
            </b-media>
          </b-link>
        </b-col>
        <b-col md="6" class="py-3 pl-3">
          <b-link :to="url(post.next)" v-if="post.next">
            <b-media right-align vertical-align="center">
              <b-img-lazy
                slot="aside"
                :src="postImage(post.next)"
                :blank-src="postImagelazy(post.next)"
                width="160"
              ></b-img-lazy>
              <div class="h5 mt-0 mb-1" v-html="post.next.name" />
              <p
                class="mb-0 text-sm"
                v-html="post.next.shortDescription"
                style="min-height: 65px;  max-height: 65px; overflow: hidden;"
              />
            </b-media>
          </b-link>
        </b-col>
      </b-row>
    </div>
    <vf-reviews :reviews="post.reviews" @create="handleCreateReview" />
  </section>
</template>
<script>
import { BImgLazy, BRow, BCol, BLink, BMedia } from "bootstrap-vue";
import placeholder from "~/assets/img/placeholder.png";

export default {
  components: {
    BImgLazy,
    BRow,
    BCol,
    BLink,
    BMedia
  },
  props: ["post"],
  computed: {
    mainImage() {
      return this.post.image !== "" ? this.post.image : placeholder;
    },
    mainImagelazy() {
      return this.post.imageLazy !== "" ? this.post.imageLazy : placeholder;
    }
  },
  methods: {
    async handleCreateReview({ content, author, rating }) {
      await this.$store.dispatch("blog/post/addReview", {
        id: this.post.id,
        content,
        author,
        rating,
        limit: 3
      });
    },
    postImage(post) {
      return post.image !== "" ? post.image : placeholder;
    },
    postImagelazy(post) {
      return post.imageLazy !== "" ? post.imageLazy : placeholder;
    },
    url(post) {
      if (post.keyword && post.keyword !== "") {
        return "/" + post.keyword;
      } else {
        return "/blog/post/" + post.id;
      }
    }
  }
};
</script>
