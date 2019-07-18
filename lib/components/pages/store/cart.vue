<template>
  <vf-cart :cart="cart" />
</template>
<graphql>
{
    cart {
        products {
            key
            quantity
            total
            option {
                name
                value
                type
            }
            product {
                id
                name
                model
                price
                image
                imageLazy
            }
        }
        total
    }
}
</graphql>
<script>
import { mapGetters } from "vuex";
export default {
  head() {
    return {
      title: "Shopping Cart"
    };
  },
  computed: {
    ...mapGetters({
      cart: "store/cart/get"
    })
  },
  async fetch({ store }) {
    await store.dispatch("store/cart/load");
  }
};
</script>
