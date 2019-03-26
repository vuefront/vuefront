<template>
  <div></div>
</template>
<script lang="ts">
import {Vue, Component, Getter, Watch} from "nuxt-property-decorator";

@Component
export default class extends Vue {
  @Getter('notification/get') messageNotification!: string

  @Watch('messageNotification')
  onMessageChanged(val: string, oldVal: string) {
    (this as any).$alertify.success(val)
  }

}
</script>
