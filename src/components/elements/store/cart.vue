  <template>
  <section class="shopping-cart">
    <div class="shopping-cart__products">
      <b-table :fields="fields" :items="cart.products" class="table-cards">
        <template slot="product" slot-scope="data">
          <b-media no-body>
            <b-media-aside vertical-align="center" class="pl-3">
              <b-img-lazy
                :src="mainImage(data.item.product)"
                :blank-src="mainImagelazy(data.item.product)"
                width="80"
                height="80"
              />
            </b-media-aside>
            <b-media-body class="pl-3">
              <div class="lh-100">
                <span class="text-dark font-weight-bold mb-0">{{data.item.product.name}}</span>
              </div>
              <span class="font-weight-bold text-muted" v-for="(value, index) in data.item.option" :key="index">
                <div>
                  <span v-html="value.name"></span>:
                  <span v-html="value.value"></span>
                </div>
              </span>
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
    <b-card body-bg-variant="secondary" class="shopping-cart__footer mt-5">
      <b-row align-v="center" align-h="between">
        <b-col md="6" order-md="2" class="mb-4 mb-md-0">
          <div class="d-flex align-items-center justify-content-md-end">
            <span class="h6 text-muted d-inline-block mr-3 mb-0">{{$t('elements.store.cart.totalText')}}</span>
            <span class="h4 mb-0">{{cart.total}}</span>
          </div>
        </b-col>
        <b-col md="6" order-md="1">
          <b-button :disabled="!isProducts" variant="primary" class="mr-md-2 btn-animated btn-animated-y" to="/store/checkout" nuxt>
            <span class="btn-inner--visible">{{$t('elements.store.cart.checkoutButton')}}</span>
            <span class="btn-inner--hidden">
              <vf-icon icon="shopping-cart"></vf-icon>
            </span>
          </b-button>
          <b-button variant="flat" nuxt to="/" class="btn-link text-sm text-dark font-weight-bold">{{$t('elements.store.cart.returnButton')}}</b-button>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>
<script>
import {
  BTable,
  BImgLazy,
  BMedia,
  BMediaBody,
  BMediaAside,
  BFormInput,
  BCard,
  BCardBody,
  BRow,
  BCol,
  BButton,
  BLink
} from "bootstrap-vue/es/components";
import "vuefront/scss/elements/store/cart.scss";
import isEmpty from 'lodash/isEmpty'
import placeholder from "~/assets/img/placeholder.png";
export default {
  components: { BTable, BImgLazy, BMedia, BMediaBody, BMediaAside, BFormInput, BCard, BCardBody, BRow, BCol, BButton, BLink },
  props: ["cart"],
  data() {
    return {
      fields: [
        {
          key: "product",
          label: this.$t("elements.store.cart.productColumn"),
          sortable: false
        },
        {
          key: "price",
          label: this.$t("elements.store.cart.priceColumn"),
          sortable: false
        },
        {
          key: "quantity",
          label: this.$t("elements.store.cart.quantityColumn"),
          sortable: false
        },
        {
          key: "total",
          label: this.$t("elements.store.cart.totalColumn"),
          sortable: false
        },
        {
          key: "action",
          label: this.$t("elements.store.cart.actionColumn"),
          sortable: false
        }
      ]
    };
  },
  computed: {
    isProducts() {
      return !isEmpty(this.cart.products)
    }
  },
  methods: {
    mainImage(product) {
      return product.image !== "" ? product.image : placeholder;
    },
    mainImagelazy(product) {
      return product.imageLazy !== ""
        ? product.imageLazy
        : placeholder;
    },
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
