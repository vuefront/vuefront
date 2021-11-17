<template>
  <section class="product-section">
    <vf-m-row>
      <vf-m-col xs="12" md="6">
        <vf-m-product-image :product="product" />
      </vf-m-col>
      <vf-m-col xs="12" md="6">
        <div class="product-info pl-lg-5">
          <vf-a-heading
            level="4"
            class="product-info__name font-normal text-4xl"
            tag="h1"
            >{{ product.name }}</vf-a-heading
          >
          <vf-a-heading
            level="6"
            class="product-info__model font-normal text-base"
            >{{ product.model }}</vf-a-heading
          >
          <vf-m-product-price
            class="product-info__price"
            :price="product.price"
            :special="product.special"
          />
          <vf-m-row class="mb-9">
            <vf-m-col xs="12" md="6">
              <vf-m-rating
                v-if="product.rating > 0"
                :model-value="product.rating"
                readonly
              />
            </vf-m-col>
            <vf-m-col xs="12" md="6" class="md:text-right">
              <vf-a-badge color="primary" class="mr-2"
                >{{ $t("elements.store.product.idText")
                }}{{ product.id }}</vf-a-badge
              >
              <vf-a-badge v-if="product.stock" color="success">{{
                $t("elements.store.product.inStockText")
              }}</vf-a-badge>
              <vf-a-badge v-else color="danger">{{
                $t("elements.store.product.outOfStockText")
              }}</vf-a-badge>
            </vf-m-col>
          </vf-m-row>
          <div class="py-4 my-4">
            <vf-o-product-options
              v-if="product.options.length > 0"
              :product="product"
            />
          </div>
          <div
            class="
              flex flex-col
              md:flex-row
              justify-start
              items-center
              md:items-stretch
            "
          >
            <vf-m-product-quantity
              class="md:mr-6 mb-7 md:mb-0"
              :quantity="quantity"
              @change="$emit('change-quantity', $event)"
            />
            <vf-o-product-buy :product="product" :quantity="quantity" />
          </div>
        </div>
      </vf-m-col>
    </vf-m-row>
    <vf-m-tabs class="mb-14 mt-32">
      <vf-m-tab title="Description">
        <div
          class="product-info__description text-sm"
          v-html="product.description"
        />
      </vf-m-tab>
      <vf-m-tab title="Specification" v-if="product.attributes.length > 0"
        ><vf-m-product-attribute :attributes="product.attributes"
      /></vf-m-tab>
      <vf-m-tab title="Reviews">
        <vf-o-product-reviews :product="product" />
      </vf-m-tab>
    </vf-m-tabs>
  </section>
</template>
<script lang="ts" setup>
defineProps({
  product: {
    type: Object,
    default: () => null,
  },
  quantity: {
    type: Number,
    default: () => 1,
  },
});
defineEmits(["change-quantity"]);
</script>
