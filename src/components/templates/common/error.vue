<template>
  <section class="not-found">
    <b-row align-h="center">
      <b-col lg="7" class="text-center">
        <h6 class="h1 mb-5 font-weight-400">{{$t('elements.common.error.textError')}}</h6>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import {BRow, BCol} from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol
  }
}
</script>

