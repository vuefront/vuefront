<template>
  <div :class="{ 'vf-m-product-thumb--wide': wide }" class="vf-m-product-thumb">
    <vf-m-row no-gutters>
      <vf-m-col :md="wide ? 3 : 12" class="vf-m-product-thumb__header">
        <div class="vf-m-product-thumb__popup">
          <div class="vf-m-product-thumb__buttons">
            <vf-a-button
              class="vf-m-product-thumb__button-buy"
              color="light"
              size="sm"
              @click="handleAddToCart"
            >
              <vf-a-icon :icon="mdiCartOutline" :size="22" />
            </vf-a-button>
            <vf-a-button
              class="vf-m-product-thumb__button-wishlist"
              color="light"
              size="sm"
              @click="handleAddToWishlist"
            >
              <vf-a-icon :icon="mdiHeartOutline" :size="22" />
            </vf-a-button>
            <vf-a-button
              class="vf-m-product-thumb__button-compare"
              color="light"
              @click="handleAddToCompare"
            >
              <vf-a-icon :icon="mdiCompareHorizontal" :size="22" />
            </vf-a-button>
          </div>
        </div>
        <vf-a-link :to="url" class="vf-m-product-thumb__image">
          <vf-m-product-thumb-image :product="product" />
        </vf-a-link>
      </vf-m-col>
      <vf-m-col :md="wide ? 9 : 12" class="vf-m-product-thumb__footer">
        <div>
          <vf-a-link :to="url" class="mb-0">
            <h3 class="vf-m-product-thumb__title" tag="h3">
              {{ product.name }}
            </h3>
          </vf-a-link>
          <vf-m-product-price
            class="mb-4"
            :class="{ 'text-center': !wide }"
            variant="small"
            :price="product.price"
            :special="product.special"
          />
          <vf-m-rating
            v-if="product.rating > 0"
            :class="{ 'text-center': !wide }"
            :modelValue="product.rating"
            readonly
          />
          <div v-else style="width: 100%; height: 27px"></div>
        </div>
      </vf-m-col>
    </vf-m-row>
  </div>
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
