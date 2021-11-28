<template>
  <section class="vf-t-store-wishlist">
    <div class="wishlist__products">
      <vf-m-table class="table-wishlist">
        <vf-m-thead>
          <vf-m-tr>
            <vf-m-th>{{ $t("elements.store.wishlist.productColumn") }}</vf-m-th>
            <vf-m-th>{{ $t("elements.store.wishlist.priceColumn") }}</vf-m-th>
            <vf-m-th class="text-right">{{
              $t("elements.store.wishlist.actionColumn")
            }}</vf-m-th>
          </vf-m-tr>
        </vf-m-thead>
        <vf-m-tbody>
          <vf-m-tr v-for="(value, index) in wishlist" :key="index">
            <vf-m-td>
              <vf-m-product-thumb-inline :product="value" />
            </vf-m-td>
            <vf-m-td class="text-right">
              <vf-o-wishlist-actions :product="value" />
            </vf-m-td>
          </vf-m-tr>
        </vf-m-tbody>
      </vf-m-table>
    </div>
  </section>
</template>
<script lang="ts" setup>
defineProps({
  wishlist: {
    type: Array,
    default: () => [],
  },
});
</script>
<style lang="scss">
.wishlist {
  &__action {
    cursor: pointer;
  }
}
</style>
