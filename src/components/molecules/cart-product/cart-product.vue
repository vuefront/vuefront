<template>
  <vf-m-media no-body class="vf-m-cart-product">
    <vf-m-media-aside class="vf-m-cart-product__image">
      <vf-a-image
        :lazy-src="imageLazy"
        :src="image"
        :width-amp="$vuefront.images.productThumb.width"
        :height-amp="$vuefront.images.productThumb.height"
        :width="160"
      />
    </vf-m-media-aside>
    <vf-m-media-body class="vf-m-cart-product__content">
      <div class="vf-m-cart-product__name">
        <span>{{ cartProduct.product.name }}</span>
      </div>
      <div class="vf-m-cart-product__info">
        <div class="vf-m-cart-product__price">
          <span>{{ $t("molecules.productThumbInline.textPrice") }}:</span
          >{{ cartProduct.product.price }}
        </div>
        <div class="vf-m-cart-product__quantity">
          <vf-m-product-quantity
            size="sm"
            :quantity="cartProduct.quantity"
            @change="handleChangeQuantity"
          />
        </div>
        <span
          v-for="(value, index) in cartProduct.option"
          :key="index"
          class="vf-m-cart-product__option"
        >
          <div>
            <span
              class="vf-m-cart-product__option__name"
              v-html="value.name"
            ></span
            >:
            <span
              class="vf-m-cart-product__option__value"
              v-html="value.value"
            ></span>
          </div>
        </span>
      </div>
      <div class="vf-m-cart-product__total">
        {{ cartProduct.total }}
      </div>
      <div class="vf-m-cart-product__remove" @click="handleRemove">
        <vf-a-icon :icon="mdiTrashCanOutline" :size="16" />
      </div>
    </vf-m-media-body>
  </vf-m-media>
</template>
<script lang="ts" setup>
import { mdiTrashCanOutline } from "@mdi/js";
import { PropType, computed } from "vue";
import { CartProduct } from "vuefront-api";
import placeholder from "../../../../assets/img/placeholder.png";
const props = defineProps({
  cartProduct: {
    type: Object as PropType<CartProduct>,
    default() {
      return null;
    },
  },
  short: {
    type: Boolean,
    default() {
      return false;
    },
  },
});
const emits = defineEmits(["remove", "change-quantity"]);

const image = computed(() =>
  props.cartProduct?.product?.image && props.cartProduct.product.image !== ""
    ? props.cartProduct.product.image
    : placeholder
);
const imageLazy = computed(() =>
  props.cartProduct?.product?.imageLazy &&
  props.cartProduct.product.imageLazy !== ""
    ? props.cartProduct.product.imageLazy
    : placeholder
);
const handleRemove = () => {
  emits("remove", props.cartProduct.key);
};
const handleChangeQuantity = (e: number) => {
  emits("change-quantity", e);
};
</script>
