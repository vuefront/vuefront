<template>
  <vf-m-tr class="vf-m-cart-product-table-row">
    <vf-m-td>
      <div class="vf-m-cart-product-table-row__product">
        <div class="vf-m-cart-product-table-row__image">
          <vf-a-image
            :lazy-src="imageLazy"
            :src="image"
            :width-amp="$vuefront.images.productThumb.width"
            :height-amp="$vuefront.images.productThumb.height"
            :width="95"
          />
        </div>
        <div class="vf-m-cart-product-table-row__info">
          <div class="vf-m-cart-product-table-row__name">
            <span>{{ cartProduct.product.name }}</span>
          </div>
          <span
            v-for="(value, index) in cartProduct.option"
            :key="index"
            class="vf-m-cart-product-table-row__option"
          >
            <div>
              <span
                class="vf-m-cart-product-table-row__option__name"
                v-html="value.name"
              ></span
              >:
              <span
                class="vf-m-cart-product-table-row__option__value"
                v-html="value.value"
              ></span>
            </div>
          </span>
        </div>
      </div>
    </vf-m-td>
    <vf-m-td class="text-center">
      <span class="vf-m-cart-product-table-row__price">
        {{ cartProduct.product.price }}
      </span>
    </vf-m-td>
    <vf-m-td class="text-center">
      <vf-m-product-quantity
        class="vf-m-cart-product-table-row__quantity"
        size="sm"
        :quantity="cartProduct.quantity"
        @change="handleChangeQuantity"
      />
    </vf-m-td>
    <vf-m-td class="text-center">
      <span class="vf-m-cart-product-table-row__total">
        {{ cartProduct.total }}
      </span>
    </vf-m-td>
    <vf-m-td>
      <span class="vf-m-cart-product-table-row__remove" @click="handleRemove">
        <vf-a-image :src="removeIcon" width="16" />
      </span>
    </vf-m-td>
  </vf-m-tr>
</template>
<script lang="ts" setup>
import { PropType, computed } from "vue";
import { CartProduct } from "vuefront-api";
import placeholder from "../../../../assets/img/placeholder.png";
import removeIcon from "../../../../assets/img/remove-icon.svg";
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
