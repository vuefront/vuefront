<template>
  <vf-apollo
    :query="require('~/graphql/modules/searchPost.graphql')"
    :variables="{search:keyword}"
  >
    <template #loader>
      <vf-post-module-loader :column="column"/>
    </template>
     <template #default="{data}">
       <vf-post-module
        v-if="data.searchPosts.content.length > 0"
        :items="data.searchPosts.content"
        :column="column"
      >{{$t('modules.store.searchPost.textTitle')}}</vf-post-module>
     </template>
  </vf-apollo>
</template>
<script>
export default {
  props: {
    column: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    keyword() {
      return this.$route.params.slug ? this.$route.params.slug : "";
    }
  }
};
</script>
