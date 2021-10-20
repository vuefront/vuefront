<template>
  <vf-m-card
    :class="{ 'vf-m-product-thumb--wide': wide }"
    class="vf-m-product-thumb"
    no-body
  >
    <vf-m-row no-gutters>
      <vf-m-col :md="wide ? 3 : 12" class="vf-m-product-thumb__header">
        <vf-a-link :to="url" class="vf-m-product-thumb__image">
          <vf-m-product-thumb-image :product="product" card />
        </vf-a-link>
      </vf-m-col>
      <vf-m-col :md="wide ? 9 : 12">
        <vf-m-card-body class="pt-0">
          <div>
            <vf-a-link :to="url" class="mb-0 vf-m-product-thumb__title">
              <vf-a-heading tag="h3" level="6">{{ product.name }}</vf-a-heading>
            </vf-a-link>
            <vf-m-rating
              v-if="product.rating > 0 && wide"
              :modelValue="product.rating"
              color="#ffcc00"
              readonly
            />
            <div
              class="vf-m-product-thumb__description text-sm mb-3"
              v-html="product.shortDescription"
            ></div>
            <vf-m-product-price
              variant="small"
              :price="product.price"
              :special="product.special"
            />
          </div>
        </vf-m-card-body>
        <vf-m-button-group class="vf-m-product-thumb__buttons" size="sm" block>
          <vf-a-button
            class="vf-m-product-thumb__button-buy"
            color="light"
            @click="handleAddToCart"
          >
            <vf-a-icon :icon="mdiCartOutline" />
            {{ $t("elements.store.product.buttonAddToCart") }}
          </vf-a-button>
          <vf-a-button
            class="vf-m-product-thumb__button-wishlist"
            color="light"
            @click="handleAddToWishlist"
          >
            <vf-a-icon :icon="mdiHeartOutline" />
          </vf-a-button>
          <vf-a-button
            class="vf-m-product-thumb__button-compare"
            color="light"
            @click="handleAddToCompare"
          >
            <vf-a-icon :icon="mdiCompareHorizontal" />
          </vf-a-button>
        </vf-m-button-group>
      </vf-m-col>
    </vf-m-row>
  </vf-m-card>
</template>
<script lang="ts" setup>
import { mdiCartOutline, mdiHeartOutline, mdiCompareHorizontal } from "@mdi/js";
import { computed } from "vue";
const props = defineProps({
  product: {
    type: Object,
    default: () => null,
  },
  wide: {
    type: Boolean,
    default: () => false,
  },
  suffixUrl: {
    type: String,
    default: () => "",
  },
});

const url = computed(() => {
  if (props.product.url) {
    return props.product.url + "?" + props.suffixUrl;
  } else {
    return "/store/product/" + props.product.id + "?" + props.suffixUrl;
  }
});

const emits = defineEmits(["click:cart", "click:wishlist", "click:compare"]);

function handleAddToCart() {
  emits("click:cart");
}
function handleAddToWishlist() {
  emits("click:wishlist");
}
function handleAddToCompare() {
  emits("click:compare");
}
</script>
