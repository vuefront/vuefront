<template>
  <div class="vf-o-apollo vf-o-apollo--loaded">
    <slot :data="data"></slot>
  </div>
</template>
<script lang="ts" setup>
import { mockServer } from "graphql-tools";
import schema from "./schema.graphql";
const props = defineProps(["query", "variables"]);
const myMockServer = mockServer(schema);
const { data } = myMockServer.query(props.query, props.variables);
</script>
