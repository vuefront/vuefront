<template>
  <section class="product-option">
    <div v-for="(option, index) in product.options" :key="index" class="mb-5 mt-3">
      <div class="product-option__name subheading font-weight-medium">{{option.name}}</div>
      <v-item-group @change="handleOptionChange($event, option)">
        <v-item v-for="(value, key) in option.values" :key="key" :value="value.id">
          <v-btn slot-scope="{ active, toggle }" :color="active ? 'primary' : ''"
                 :ripple="false"
                 @click="toggle" outline block flat large
                 class="mb-2"
                 depressed>
            <div class="product-option__value_name body-2">{{value.name}}</div>
          </v-btn>
        </v-item>
      </v-item-group>
    </div>
  </section>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Product, SelectedOption} from "~/types";
import {isNull, filter} from 'lodash'

@Component
export default class extends Vue {
  @Prop()
  product!: Product;

  selectedOptions: SelectedOption[] = []


  handleOptionChange(e: string, option) {
    let result: SelectedOption[] = filter(this.selectedOptions, (value) => (value.id !== option.id))
    result.push({
      id: option.id,
      value: e
    })

    this.selectedOptions = result

    this.$emit('change', result)
  }
}
</script>
