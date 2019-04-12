<template>
  <ApolloQuery v-bind="$props">
    <template slot-scope="{ result: { data }, isLoading }">
      <vf-loader v-if="isLoading"/>
      <slot v-else :data="data"></slot>
    </template>
  </ApolloQuery>
</template>
<script>
import { ApolloQuery } from "vue-apollo";
export default {
  components: {
    ApolloQuery
  },
  props: ["query", "variables"]
};
</script>
