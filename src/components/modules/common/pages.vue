<template>
  <section class="module-pages">
    <vf-apollo :query="require('~/graphql/modules/pages.graphql')">
      <template v-slot:default="{data}">
        <h6 class="heading mb-3">Pages</h6>
        <ul class="list-unstyled">
          <li v-for="(value, key) in data.pagesList.content" :key="key">
            <router-link :to="`/page/${value.id}`" v-html="value.title"/>
          </li>
        </ul>
      </template>
    </vf-apollo>
  </section>
</template>