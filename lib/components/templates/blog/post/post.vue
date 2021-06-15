<template>
  <section class="post-section">
    <vf-a-heading level="1" class="post-section__title mb-3 sm:text-left">{{
      post.title
    }}</vf-a-heading>
    <vf-m-row>
      <vf-m-col xs="6">
        <div class="post-section__date mb-3 h6 sm:text-left">
          {{ $t("elements.blog.post.postByText") }} {{ post.datePublished }}
        </div>
      </vf-m-col>
      <vf-m-col xs="6">
        <vf-m-rating
          v-if="post.rating > 0"
          :value="post.rating"
          color="#ffcc00"
          readonly
          class="text-right"
        />
      </vf-m-col>
    </vf-m-row>
    <vf-m-post-image
      :post="post"
      full-width
      fluid
      class="post-section__image mb-3"
      layout="responsive"
    />
    <div class="post-section__content lead" v-html="post.description" />
    <vf-m-post-nav :post="post" />
    <vf-o-post-reviews :post="post" />
  </section>
</template>
<script>
export default {
  props: ["post"],
};
</script>
