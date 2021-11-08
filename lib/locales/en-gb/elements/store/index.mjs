import cart from "./cart.json";
import category from "./category.json";
import compare from "./compare.json";
import product from "./product.json";
import productSort from "./productSort.json";
import productThumb from "./productThumb.json";
import wishlist from "./wishlist.json";
import productFolder from "./product/index.mjs";
export default {
  cart,
  category,
  compare,
  productSort,
  productThumb,
  wishlist,
  product: { ...product,
    ...productFolder
  }
};
//# sourceMappingURL=index.mjs.map