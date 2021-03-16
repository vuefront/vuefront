<template>
  <section class="vf-t-store-wishlist">
    <div class="wishlist__products">
      <vf-m-table :fields="fields" :items="wishlist" class="table-wishlist">
        <template #product="data">
          <vf-m-product-thumb-inline :product="data.item" />
        </template>
        <template #action="data">
          <vf-o-wishlist-actions :product="data.item" />
        </template>
      </vf-m-table>
    </div>
  </section>
</template>
<script>
export default {
  props: ["wishlist"],
  data() {
    return {
      fields: [
        {
          key: "product",
          label: this.$t("elements.store.wishlist.productColumn"),
          sortable: false,
        },
        {
          key: "price",
          label: this.$t("elements.store.wishlist.priceColumn"),
          sortable: false,
        },
        {
          key: "action",
          class: "vf-t-store-wishlist__actions text-right",
          label: this.$t("elements.store.wishlist.actionColumn"),
          sortable: false,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.wishlist {
  &__action {
    cursor: pointer;
  }
}
</style>
