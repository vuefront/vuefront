<template>
  <section class="partial-menu">
    <vf-menu :items="items"/>
  </section>
</template>
<script lang="ts">
import {Component, Vue, Getter} from 'nuxt-property-decorator'
import {MenuItem} from "~/types";

@Component
export default class extends Vue {
  @Getter('menu/list') items!: MenuItem[]
}

</script>
<style type="postcss">
.partial-menu {
  border-bottom: 1px solid rgba(31, 45, 61, 0.04);
  border-top: 1px solid rgba(31, 45, 61, 0.04);

  .partial-menu__logo {
    height: 50px;
  }
}
</style>
