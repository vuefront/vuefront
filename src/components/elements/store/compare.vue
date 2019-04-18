  <template>
  <section class="compare">
    <div class="compare__products">
      <!-- <b-table :fields="fields" :items="items" class="table-compare">
        <template slot="product" slot-scope="data">
          <b-media no-body>
            <b-media-aside vertical-align="center" class="pl-3">
              <b-img-lazy
                :src="data.item.image"
                :blank-src="data.item.imageLazy"
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
          <div class="compare__action m-1 d-inline" @click="handleAddToCart(data.item)">
            <vf-icon :icon="['fas', 'shopping-cart']"/>
          </div>
          <div class="compare__action m-1 ml-2 d-inline" @click="handleRemove(data.item)">
            <vf-icon icon="times"/>
          </div>
        </template>
      </b-table>-->
      <div class="compare__item">
        <div class="compare__item_value border p-2">Product</div>
        <div
          v-for="(value, index) in compare"
          :key="index"
          class="compare__item_value border p-2"
          v-html="value.name"
        />
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2">Image</div>
        <div v-for="(value, index) in compare" :key="index" class="compare__item_value border p-2">
          <b-img-lazy :src="value.image" :blank-src="value.imageLazy" width="80" height="80"/>
        </div>
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2">Price</div>
        <div v-for="(value, index) in compare" :key="index" class="compare__item_value border p-2">
          <div class="card-product__price h4">
            <span v-if="value.special !== ''" class="card-product__price_special">{{value.special}}</span>
            <span :class="{'font-weight-regular': value.special !== ''}">{{ value.price }}</span>
          </div>
        </div>
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2">Model</div>
        <div
          v-for="(value, index) in compare"
          :key="index"
          class="compare__item_value border p-2"
        >{{value.model}}</div>
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2">Availability</div>
        <div v-for="(value, index) in compare" :key="index" class="compare__item_value border p-2">
          <div v-if="value.stock">In stock</div>
          <div v-else>Out of stock</div>
        </div>
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2">Rating</div>
        <div v-for="(value, index) in compare" :key="index" class="compare__item_value border p-2">
          <vf-rating
            :value="value.rating"
            color="#ffcc00"
            readonly
          />
        </div>
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2">Summary</div>
        <div v-for="(value, index) in compare" :key="index" class="compare__item_value border p-2" v-html="value.shortDescription"/>
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2"></div>
        <div v-for="(value, index) in compare" :key="index" class="compare__item_value border p-2">
          <div class="compare__action m-1 d-inline" @click="handleAddToCart(value)">
            <vf-icon :icon="['fas', 'shopping-cart']"/>
          </div>
          <div class="compare__action m-1 ml-2 d-inline" @click="handleRemove(value)">
            <vf-icon icon="times"/>
          </div>
        </div>
      </div>
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
import "vuefront/scss/elements/store/compare.scss";
export default {
  components: { BTable, BImgLazy, BMedia, BMediaBody, BMediaAside, BFormInput },
  props: ["compare"],
  data() {
    let fields = [
      {
        key: 0,
        label: ""
      }
    ];
    for (const key in this.compare) {
      const product = this.compare[key];
      fields = [
        ...fields,
        {
          key: product.id,
          label: this.compare[key].name,
          sortable: false
        }
      ];
    }
    return {
      fields
    };
  },
  computed: {
    items() {
      let result = [];
      const row = { 0: "Product" };
      for (const key in this.compare) {
        const product = this.compare[key];
        row[product.id] = product.name;
      }

      result = [...result, row];

      return result;
    }
  },
  methods: {
    handleRemove(compareProduct) {
      this.$store.dispatch("store/compare/remove", {
        id: compareProduct.id
      });
    },
    async handleAddToCart(compareProduct) {
      this.$store.commit(
        "notification/add",
        `${compareProduct.name} product successfully added to cart`
      );

      await this.$store.dispatch("store/cart/add", {
        id: Number(compareProduct.id),
        quantity: 1,
        options: []
      });
    }
  }
};
</script>
