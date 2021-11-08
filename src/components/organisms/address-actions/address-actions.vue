<template>
  <div class="vf-o-address-actions">
    <vf-a-button
      class="vf-o-address-actions__edit"
      :to="`/account/address/${address.id}/edit`"
    >
      <vf-a-icon :icon="mdiPencil" />
    </vf-a-button>
    <vf-a-button
      class="vf-o-address-actions__remove"
      color="danger"
      @click="handleRemove"
    >
      <vf-a-icon :icon="mdiDeleteOutline" />
    </vf-a-button>
  </div>
</template>
<script lang="ts" setup>
import { mdiPencil, mdiDeleteOutline } from "@mdi/js";
import { useStore } from "vuex";
const props = defineProps({
  address: {
    type: Object,
    default() {
      return null;
    },
  },
});
const store = useStore();
const handleRemove = async () => {
  await store.dispatch("common/address/remove", {
    id: props.address.id,
  });
};
</script>
