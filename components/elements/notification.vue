<template>
  <v-container>
    <v-alert v-model="show" type="success" transition="scale-transition" dismissible>{{messageNotification}}</v-alert>
  </v-container>
</template>
<script lang="ts">
import {Vue, Component, Getter} from "nuxt-property-decorator";

@Component
export default class extends Vue {
  @Getter('notification/get') messageNotification!: string

  show: boolean = false
}
</script>
