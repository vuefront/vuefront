  <template>
  <section class="shopping-cart">
    <div class="shopping-cart__products">
      <b-table :fields="fields" :items="cart.products" class="table-cards">
        <template slot="product" slot-scope="data">
          <b-media no-body>
            <b-media-aside vertical-align="center" class="pl-3">
              <vf-a-image
                :lazy-src="mainImage(data.item.product)"
                :src="mainImagelazy(data.item.product)"
                width="80"
                height="80"
              />
            </b-media-aside>
            <b-media-body class="pl-3">
              <div class="lh-100">
                <span class="text-dark font-weight-bold mb-0">{{data.item.product.name}}</span>
              </div>
              <span
                class="font-weight-bold text-muted"
                v-for="(value, index) in data.item.option"
                :key="index"
              >
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
            <vf-a-icon icon="times" />
          </div>
        </template>
      </b-table>
    </div>
    <vf-m-card body-bg-color="secondary" class="shopping-cart__footer mt-5">
      <vf-m-row align-v="center" align-h="between">
        <vf-m-col md="6" order-md="2" class="mb-4 mb-md-0">
          <div class="d-flex align-items-center justify-content-md-end">
            <span
              class="h6 text-muted d-inline-block mr-3 mb-0"
            >{{$t('elements.store.cart.totalText')}}</span>
            <vf-a-heading level="4" tag="span" class="mb-0">{{cart.total}}</vf-a-heading>
          </div>
        </vf-m-col>
        <vf-m-col md="6" order-md="1">
          <vf-a-button
            :disabled="!isProducts"
            color="primary"
            class="mr-md-2"
            to="/store/checkout"
            animated-y
            nuxt
          >
            <template #visible>{{$t('elements.store.cart.checkoutButton')}}</template>
            <template #hidden>
              <vf-a-icon icon="shopping-cart"></vf-a-icon>
            </template>
          </vf-a-button>
          <vf-a-button
            color="flat"
            nuxt
            to="/"
            class="btn-link text-sm text-dark font-weight-bold"
          >{{$t('elements.store.cart.returnButton')}}</vf-a-button>
        </vf-m-col>
      </vf-m-row>
    </vf-m-card>
  </section>
</template>
<script>
import {
  BTable,
  BMedia,
  BMediaBody,
  BMediaAside,
  BFormInput
} from "bootstrap-vue";
import { isEmpty } from "lodash";
import placeholder from "vuefront/assets/img/placeholder.png";
export default {
  components: {
    BTable,
    BMedia,
    BMediaBody,
    BMediaAside,
    BFormInput
  },
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
      return !isEmpty(this.cart.products);
    }
  },
  methods: {
    mainImage(product) {
      return product.image !== "" ? product.image : placeholder;
    },
    mainImagelazy(product) {
      return product.imageLazy !== "" ? product.imageLazy : placeholder;
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
<style lang="scss">
.shopping-cart {
  &__action {
    cursor: pointer;
  }
  &__footer {
  }
}
</style>
