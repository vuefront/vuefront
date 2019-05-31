  <template>
  <section class="wishlist">
    <div class="wishlist__products">
      <b-table :fields="fields" :items="wishlist" class="table-wishlist">
        <template slot="product" slot-scope="data">
          <b-media no-body>
            <b-media-aside vertical-align="center" class="pl-3">
              <b-img-lazy
                :src="mainImage(data.item)"
                :blank-src="mainImagelazy(data.item)"
                width="80"
                height="80"
              />
            </b-media-aside>
            <b-media-body class="pl-3">
              <div class="lh-100">
                <span class="text-dark font-weight-bold mb-0">{{data.item.name}}</span>
              </div>
              <span class="font-weight-bold text-muted">{{data.item.model}}</span>
            </b-media-body>
          </b-media>
        </template>
        <template slot="price" slot-scope="data">{{data.item.price}}</template>
        <template slot="action" slot-scope="data">
          <div class="wishlist__action m-1 d-inline" @click="handleAddToCart(data.item)">
            <vf-icon :icon="['fas', 'shopping-cart']"/>
          </div>
          <div class="wishlist__action m-1 ml-2 d-inline" @click="handleRemove(data.item)">
            <vf-icon icon="times"/>
          </div>
        </template>
      </b-table>
    </div>
  </section>
</template>
<script>
import {
  BTable,
  BImgLazy,
  BMedia,
  BMediaBody,
  BMediaAside,
  BFormInput
} from "bootstrap-vue/es/components";
import "vuefront/scss/elements/store/wishlist.scss";
import placeholder from "~/assets/img/placeholder.png";
export default {
  components: { BTable, BImgLazy, BMedia, BMediaBody, BMediaAside, BFormInput },
  props: ["wishlist"],
  data() {
    return {
      fields: [
        {
          key: "product",
          label: this.$t("elements.store.wishlist.productColumn"),
          sortable: false
        },
        {
          key: "price",
          label: this.$t("elements.store.wishlist.priceColumn"),
          sortable: false
        },
        {
          key: "action",
          label: this.$t("elements.store.wishlist.actionColumn"),
          sortable: false
        }
      ]
    };
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
    handleRemove(wishlistProduct) {
      this.$store.dispatch("store/wishlist/remove", {
        id: wishlistProduct.id
      });
    },
    async handleAddToCart(wishlistProduct) {
      this.$store.commit(
        "notification/add",
        wishlistProduct.name +
          this.$t("elements.store.wishlist.notificationText")
      );

      await this.$store.dispatch("store/cart/add", {
        id: wishlistProduct.id,
        quantity: 1,
        options: []
      });
    }
  }
};
</script>
