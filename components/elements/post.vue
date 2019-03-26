<template>
  <div>123123</div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Post} from "~/types";

@Component
export default class extends Vue {
  @Prop()
  post!: Post;
}
</script>
