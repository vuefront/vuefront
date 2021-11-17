<template>
  <section class="post-section">
    <vf-m-post-image
      :post="post"
      full-width
      fluid
      class="post-section__image mb-10"
      layout="responsive"
    />
    <vf-a-heading
      level="1"
      class="post-section__title font-normal mb-5 sm:text-left"
      >{{ post.name }}</vf-a-heading
    >
    <div
      class="post-section__content text-base text-gray-500 mb-6"
      v-html="post.description"
    />
    <vf-m-row class="mb-7">
      <vf-m-col xs="6">
        <div
          class="
            post-section__date
            text-sm
            font-normal
            text-gray-500
            sm:text-left
          "
        >
          {{ $t("elements.blog.post.postByText") }} {{ post.datePublished }}
        </div>
      </vf-m-col>
      <vf-m-col xs="6">
        <vf-m-rating
          v-if="post.rating > 0"
          :modelValue="post.rating"
          readonly
          class="text-right"
        />
      </vf-m-col>
    </vf-m-row>
    <vf-m-post-nav class="mb-5" :post="post" />
    <vf-o-post-reviews :post="post" />
  </section>
</template>
<script lang="ts" setup>
defineProps({
  post: {
    type: Object,
    default: () => null,
  },
});
</script>
