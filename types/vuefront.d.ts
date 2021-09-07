// vuefront.d.ts
import { ComponentCustomProperties } from "vue";

declare module "@vue/runtime-core" {
  // provide typings for `this.$vuefront`
  interface ComponentCustomProperties {
    $vuefront: any;
  }
}
