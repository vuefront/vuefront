<template>
  <section class="product-section">
    <vf-m-row>
      <vf-m-col sm="12" md="6">
        <vf-m-product-image :product="product" />
        <vf-o-product-reviews :product="product" />
      </vf-m-col>
      <vf-m-col sm="12" md="6">
        <div class="product-info pl-lg-5">
          <vf-a-heading level="4" class="product-info__name" tag="h1">{{product.name}}</vf-a-heading>
          <vf-a-heading level="6" class="product-info__model text-sm">{{product.model}}</vf-a-heading>
          <vf-m-row>
            <vf-m-col sm="6">
              <vf-m-rating
                v-if="product.rating > 0"
                :value="product.rating"
                color="#ffcc00"
                readonly
              />
            </vf-m-col>
            <vf-m-col sm="6" class="text-sm-right">
              <vf-a-badge
                color="primary"
                rounded
              >{{$t('elements.store.product.idText')}}{{product.id}}</vf-a-badge>
              <vf-a-badge
                v-if="product.stock"
                color="success"
                rounded
              >{{$t('elements.store.product.inStockText')}}</vf-a-badge>
              <vf-a-badge
                v-else
                color="danger"
                rounded
              >{{$t('elements.store.product.outOfStockText')}}</vf-a-badge>
            </vf-m-col>
          </vf-m-row>
          <div
            class="my-4 py-4 border-top"
            :class="{'border-bottom': product.attributes.lenght > 0}"
          >
            <vf-a-heading
              level="6"
              tag="h6"
              class="product-info__description-title text-sm mb-1"
            >{{$t('elements.store.product.descriptionText')}}</vf-a-heading>
            <div class="product-info__description text-sm" v-html="product.description" />
          </div>
          <vf-m-product-attribute v-if="product.attributes.length > 0" :items="product.attributes" />
          <div class="py-4 my-4 border-bottom border-top">
            <vf-o-product-options v-if="product.options.length > 0" :product="product" />
            <vf-m-row>
              <vf-m-col sm="6" md="5" class="mb-4 mb-sm-0">
                <vf-m-product-price :price="product.price" :special="product.special" />
              </vf-m-col>
              <vf-m-col sm="6" md="7" class="text-sm-right">
                <vf-o-product-buy :product="product" />
              </vf-m-col>
            </vf-m-row>
          </div>
        </div>
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
<script>
export default {
  props: ["product"]
};
</script>