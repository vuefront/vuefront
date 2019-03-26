<template>
  <section class="product-variation">
    <div v-for="(value, index) in product.variations" :key="index" class="mb-5 mt-3">
      <div class="product-vatiation__name subheading font-weight-medium">{{value.name}}</div>
      <v-item-group>
        <v-item v-for="(option, key) in value.options" :key="key">
          <v-btn slot-scope="{ active, toggle }" :color="active ? 'primary' : ''"
                 :ripple="false"
                 @click="toggle" outline block flat large
                 class="mb-2"
                 depressed>
            <div class="product-variation__value_name body-2">{{option.name}}</div>
          </v-btn>
        </v-item>
      </v-item-group>
    </div>
  </section>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Product} from "~/types";
import {isNull} from 'lodash'

@Component
export default class extends Vue {
  @Prop()
  product!: Product;

  get productImage(): string | NodeRequire {
    if (!isNull(this.product.image)) {
      return this.product.image
    } else {
      return require('~/assets/img/Logo.png')
    }
  }

  get productImageLazy(): string | NodeRequire {
    if (!isNull(this.product.imageLazy)) {
      return this.product.imageLazy
    } else {
      return require('~/assets/img/Logo.png')
    }
  }
}
</script>
