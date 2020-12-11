<template>
  <section class="vf-o-header-mobile">
    <vf-m-container class="vf-o-header-mobile__top">
      <div class="vf-o-header-mobile__toggle" @click="toggleSidebar()">
        <vf-a-icon :icon="mdiApps" size="25"></vf-a-icon>
      </div>
      <vf-m-logo class="mx-auto" />
      <vf-m-cart-link />
    </vf-m-container>
      <vf-o-sidebar>
        <template #top>
          <vf-o-search-inline-form />
        </template>
        <template #bottom>
          <vf-o-currency nav />
          <vf-o-language />
        </template>
        <template #right>
          <div class="vf-o-header-mobile__toggle_close" @click="toggleSidebar()">
            <vf-a-icon :icon="mdiClose"></vf-a-icon>
          </div>
        </template>
        <vf-o-position name="headerMenu" />
      </vf-o-sidebar>
  </section>
</template>
<script>
import {mdiClose, mdiApps} from '@mdi/js'
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      mdiClose,
      mdiApps
    }
  },
  methods: {
    ...mapMutations({
      toggleSidebar: 'vuefront/toggleSidebar'
    })
  }
};
</script>