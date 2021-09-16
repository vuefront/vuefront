import { State as CartState } from "./cart/cart";
import { State as CategoryState } from "./category/category";
import { State as CompareState } from "./compare/compare";
import { State as CurrencyState } from "./currency/currency";
import { State as ManufacturerState } from "./manufacturer/manufacturer";
import { State as ProductState } from "./product/product";
import { State as WishlistState } from "./wishlist/wishlist";
export type StoreState = {
  cart: CartState;
  category: CategoryState;
  compare: CompareState;
  currency: CurrencyState;
  manufacturer: ManufacturerState;
  product: ProductState;
  wishlist: WishlistState;
};
