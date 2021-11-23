<template>
  <vf-o-apollo v-slot="{ data }">
    <section class="vf-e-common-pages">
      <vf-a-heading level="2" class="mb-3 md:vf-a-heading-3">{{
        $t("modules.common.pages.textTitle")
      }}</vf-a-heading>
      <ul class="list-unstyled">
        <li v-for="(value, key) in data.pagesList.content" :key="key">
          <vf-a-link :to="value.url" v-html="value.title" />
        </li>
      </ul>
    </section>
  </vf-o-apollo>
</template>
<graphql>
{
  pagesList (page: 1, size: 4) {
    content {
      id
      title
      url(url: "/page/_id")
    }
  }
}
</graphql>
