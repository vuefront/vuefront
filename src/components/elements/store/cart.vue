  <template>
  <section class="shopping-cart">
    <div class="shopping-cart__products">
      <b-table :fields="fields" :items="cart.products" class="table-cards">
        <template slot="product" slot-scope="data">
          <b-media no-body>
            <b-media-aside vertical-align="center" class="pl-3">
              <b-img-lazy
                :src="data.item.product.image"
                :blank-src="data.item.product.imageLazy"
                width="80"
                height="80"
              />
            </b-media-aside>
            <b-media-body class="pl-3">
              <div class="lh-100">
                <span class="text-dark font-weight-bold mb-0">{{data.item.product.name}}</span>
              </div>
              <span class="font-weight-bold text-muted">{{data.item.product.model}}</span>
            </b-media-body>
          </b-media>
        </template>
        <template slot="price" slot-scope="data">{{data.item.product.price}}</template>
        <template slot="quantity" slot-scope="data">
          <b-form-input
            :value="data.item.quantity"
            style="width: 80px;"
            @change="handleChangeQuantity($event, data.item)"
          />
        </template>
        <template slot="action" slot-scope="data">
          <div class="shopping-cart__action ma-1" @click="handleRemove(data.item)">
            <vf-icon icon="times"/>
          </div>
        </template>
      </b-table>
    </div>
  </section>
</template>
<script>
import BTable from "bootstrap-vue/es/components/table/table";
import BImgLazy from "bootstrap-vue/es/components/image/img-lazy";
import BMedia from "bootstrap-vue/es/components/media/media";
import BMediaBody from "bootstrap-vue/es/components/media/media-body";
import BMediaAside from "bootstrap-vue/es/components/media/media-aside";
import BFormInput from "bootstrap-vue/es/components/form-input/form-input";
import "vuefront/scss/elements/store/cart.scss";
export default {
  components: { BTable, BImgLazy, BMedia, BMediaBody, BMediaAside, BFormInput },
  props: ["cart"],
  data() {
    return {
      fields: [
        {
          key: "product",
          label: this.$t('elements.store.cart.productColumn'),
          sortable: false
        },
        {
          key: "price",
          label: this.$t('elements.store.cart.priceColumn'),
          sortable: false
        },
        { key: "quantity", label: this.$t('elements.store.cart.quantityColumn'), sortable: false },
        { key: "total", label: this.$t('elements.store.cart.totalColumn'), sortable: false },
        { key: "action", label: this.$t('elements.store.cart.actionColumn'), sortable: false }
      ]
    };
  },
  methods: {
    handleChangeQuantity(e, cartProduct) {
      this.$store.dispatch("store/cart/update", {
        key: cartProduct.key,
        quantity: Number(e)
      });
    },

    handleRemove(cartProduct) {
      this.$store.dispatch("store/cart/remove", {
        key: cartProduct.key
      });
    }
  }
};
</script>
