module.exports = [
  {
    path: "vuefront",
    module: "common/vuefront/vuefront.mjs",
  },
  {
    path: "position",
    module: "common/position/position.mjs",
  },
  {
    path: "apollo",
    module: "common/apollo/apollo.mjs",
  },
  {
    path: "notification",
    module: "common/notification/notification.mjs",
  },
  {
    path: ["menu"],
  },
  {
    path: ["menu", "blog"],
    module: "menu/blog/blog.mjs",
  },
  {
    path: ["menu", "store"],
    module: "menu/store/store.mjs",
  },
  {
    path: ["menu", "page"],
    module: "menu/page/page.mjs",
  },
  {
    path: ["blog"],
  },
  {
    path: ["blog", "category"],
    module: "blog/category/category.mjs",
  },
  {
    path: ["blog", "post"],
    module: "blog/post/post.mjs",
  },
  {
    path: ["common"],
  },
  {
    path: ["common", "country"],
    module: "common/country/country.mjs",
  },
  {
    path: ["common", "breadcrumbs"],
    module: "common/breadcrumbs/breadcrumbs.mjs",
  },
  {
    path: ["common", "zone"],
    module: "common/zone/zone.mjs",
  },
  {
    path: ["common", "page"],
    module: "common/page/page.mjs",
  },
  {
    path: ["common", "menu"],
    module: "common/menu/menu.mjs",
  },
  {
    path: ["common", "contact"],
    module: "common/contact/contact.mjs",
  },
  {
    path: ["common", "customer"],
    module: "common/customer/customer.mjs",
  },
  {
    path: ["common", "address"],
    module: "common/address/address.mjs",
  },
  {
    path: ["common", "language"],
    module: "common/language/language.mjs",
  },
  {
    path: ["store"],
  },
  {
    path: ["store", "cart"],
    module: "store/cart/cart.mjs",
  },
  {
    path: ["store", "wishlist"],
    module: "store/wishlist/wishlist.mjs",
  },
  {
    path: ["store", "currency"],
    module: "store/currency/currency.mjs",
  },
  {
    path: ["store", "compare"],
    module: "store/compare/compare.mjs",
  },
  {
    path: ["store", "category"],
    module: "store/category/category.mjs",
  },
  {
    path: ["store", "manufacturer"],
    module: "store/manufacturer/manufacturer.mjs",
  },
  {
    path: ["store", "product"],
    module: "store/product/product.mjs",
  },
];
