<template>
  <vf-apollo :query="require('vuefront/graphql/modules/latestPost.graphql')">
    <template #loader>
      <vf-loader-post-module :column="column"/>
    </template>
    <template #default="{data}">
      <vf-post-module
        :items="data.latestPosts.content"
        :column="column"
      >{{$t('modules.blog.latestPost.textTitle')}}</vf-post-module>
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
  }
};
</script>
