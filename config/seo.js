module.exports = {
  "/404": {
    component: "CommonError",
  },
  "/deprecated-api": {
    component: "DeprecatedApi",
  },
  "/": { component: "CommonHome" },
  "/account": {
    generate: false,
    component: "AccountAccount",
  },
  "/account/address": {
    generate: false,
    component: "AccountAddress",
  },
  "/account/address/:id/edit": {
    generate: false,
    component: "AccountAddressEdit",
  },
  "/account/address/create": {
    generate: false,
    component: "AccountAddressCreate",
  },
  "/account/edit": {
    generate: false,
    component: "AccountEdit",
  },
  "/account/login": {
    component: "AccountLogin",
  },
  "/account/password": {
    generate: false,
    component: "AccountPassword",
  },
  "/account/register": {
    package: "vuefront/lib",
    component: "AccountRegister",
  },
  "/account/wishlist": {
    generate: false,
    component: "StoreWishlist",
  },
  "/account/success": {
    generate: false,
    component: "AccountSuccess",
  },
  "/blog/category/:id": {
    component: "BlogCategory",
    loader: "PBlogCategory",
  },
  "/blog/post/:id": {
    component: "BlogPost",
    loader: "PBlogPost",
  },
  "/contact": {
    generate: false,
    component: "CommonContact",
  },
  "/page/:id": {
    component: "CommonPage",
  },
  "/search": { component: "CommonSearch" },
  "/search/:slug": {
    component: "CommonSearch",
  },
  "/store/cart": {
    generate: false,
    component: "StoreCart",
  },
  "/store/checkout": {
    generate: false,
    component: "StoreCheckout",
  },
  "/store/checkout/success": {
    generate: false,
    component: "StoreCheckoutSuccess",
  },
  "/store/category/:id": {
    component: "StoreCategory",
    loader: "PStoreCategory",
  },
  "/store/manufacturer/:id": {
    component: "StoreManufacturer",
    loader: "PStoreManufacturer",
  },
  "/store/manufacturer": {
    component: "StoreManufacturerList",
    loader: "PStoreManufacturerList",
  },
  "/store/compare": {
    generate: false,
    component: "StoreCompare",
  },
  "/store/product/:id": {
    component: "StoreProduct",
    loader: "PStoreProduct",
  },
  "/store/special": {
    component: "StoreSpecial",
    loader: "PStoreSpecial",
  },
};
