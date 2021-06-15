// albert
import * as seo from "vuefront/lib/seo";
const MainConfig = {
  plugins: {},
  root: {
    components: "vuefront/lib/components",
    store: "vuefront/lib/store",
    locales: "vuefront/lib/locales"
  },
  options: {
    productGridSize: 4,
    productGridNoGutters: false
  },
  cssImport: {},
  css: {
    tailwind: "vuefront/assets/scss/tailwind.scss",
    theme: "vuefront/assets/scss/theme.scss"
  },
  menu: [],
  image: {
    placeholder: {
      path: "vuefront/assets/img/placeholder.png"
    },
    logo: {
      width: "180",
      height: "40"
    },
    product: {
      width: "825",
      height: "825"
    },
    categoryThumb: {
      width: "300",
      height: "300"
    },
    productThumb: {
      width: "300",
      height: "300"
    },
    productThumbInline: {
      width: "200",
      height: "200"
    },
    post: {
      width: "825",
      // 10x6
      height: "495"
    },
    postThumb: {
      width: "300",
      // 10x6
      height: "180"
    },
    postThumbInline: {
      width: "200",
      // 10x6
      height: "120"
    },
    contact: {
      width: "200",
      // 10x6
      height: "120"
    }
  },
  locales: {
    "en-gb": ["en-gb"],
    "ru-ru": ["ru-ru"]
  },
  atoms: {
    Alert: "atoms/alert/alert.vue",
    Badge: "atoms/badge/badge.vue",
    Button: {
      css: "atoms/button/button.scss",
      component: "atoms/button/button.vue"
    },
    Heading: "atoms/heading/heading.vue",
    Icon: {
      css: "atoms/icon/icon.scss",
      component: "atoms/icon/icon.vue"
    },
    Image: {
      css: "atoms/image/image.scss",
      component: "atoms/image/image.vue"
    },
    Input: "atoms/input/input.vue",
    Link: {
      css: "atoms/link/link.scss",
      component: "atoms/link/link.vue"
    },
    Loader: {
      css: "atoms/loader/loader.scss",
      component: "atoms/loader/loader.vue"
    },
    Pagination: "atoms/pagination/pagination.vue",
    Select: "atoms/select/select.vue",
    Textarea: "atoms/textarea/textarea.vue",
    Radio: "atoms/radio/radio.vue",
    RadioGroup: "atoms/radio-group/radio-group.vue",
    Checkbox: "atoms/checkbox/checkbox.vue",
    CheckboxGroup: "atoms/checkbox-group/checkbox-group.vue",
    Datepicker: "atoms/datepicker/datepicker.vue",
    Timepicker: "atoms/timepicker/timepicker.vue"
  },
  molecules: {
    AccountMenu: "molecules/account-menu/account-menu.vue",
    AccountNew: "molecules/account-new/account-new.vue",
    AccountSuccess: {
      css: "molecules/account-success/account-success.scss",
      component: "molecules/account-success/account-success.vue"
    },
    Breadcrumb: {
      css: "molecules/breadcrumb/breadcrumb.scss",
      component: "molecules/breadcrumb/breadcrumb.vue"
    },
    BreadcrumbItem: "molecules/breadcrumb/item.vue",
    ButtonGroup: {
      css: "molecules/button-group/button-block.scss",
      component: "molecules/button-group/button-group.vue"
    },
    CardBody: "molecules/card/body.vue",
    Card: {
      css: "molecules/card/card.scss",
      component: "molecules/card/card.vue"
    },
    CardFooter: "molecules/card/footer.vue",
    CartLink: {
      css: "molecules/cart-link/cart-link.scss",
      component: "molecules/cart-link/cart-link.vue"
    },
    CategoryThumb: {
      css: "molecules/category-thumb/category-thumb.scss",
      component: "molecules/category-thumb/category-thumb.vue"
    },
    CompareLink: "molecules/compare-link/compare-link.vue",
    Contact: "molecules/contact/contact.vue",
    Container: {
      css: "molecules/container/container.scss",
      component: "molecules/container/container.vue"
    },
    Col: {
      css: "molecules/col/col.scss",
      component: "molecules/col/col.vue"
    },
    Dropdown: {
      css: "molecules/dropdown/dropdown.scss",
      component: "molecules/dropdown/dropdown.vue"
    },
    DropdownItem: {
      css: "molecules/dropdown/dropdown-item.scss",
      component: "molecules/dropdown/dropdown-item.vue"
    },
    Empty: "molecules/empty/empty.vue",
    Field: {
      css: "molecules/field/field.scss",
      component: "molecules/field/field.vue"
    },
    InputGroup: {
      css: "molecules/input-group/input-group.scss",
      component: "molecules/input-group/input-group.vue"
    },
    ListGroup: {
      css: "molecules/list-group/list-group.scss",
      component: "molecules/list-group/list-group.vue"
    },
    ListGroupItem: "molecules/list-group/list-group-item.vue",
    LocationThumb: "molecules/location-thumb/location-thumb.vue",
    Logo: "molecules/logo/logo.vue",
    Media: {
      css: "molecules/media/media.scss",
      component: "molecules/media/media.vue"
    },
    MediaAside: "molecules/media/aside.vue",
    MediaBody: "molecules/media/body.vue",
    PostImage: "molecules/post-image/post-image.vue",
    PostNav: {
      css: "molecules/post-nav/post-nav.scss",
      component: "molecules/post-nav/post-nav.vue"
    },
    PostThumb: {
      css: "molecules/post-thumb/post-thumb.scss",
      component: "molecules/post-thumb/post-thumb.vue"
    },
    PostThumbImage: "molecules/post-thumb-image/post-thumb-image.vue",
    PostThumbInline: {
      css: "molecules/post-thumb-inline/post-thumb-inline.scss",
      component: "molecules/post-thumb-inline/post-thumb-inline.vue"
    },
    ProductAttribute: {
      css: "molecules/product-attribute/product-attribute.scss",
      component: "molecules/product-attribute/product-attribute.vue"
    },
    ProductImage: {
      css: "molecules/product-image/product-image.scss",
      component: "molecules/product-image/product-image.vue"
    },
    ProductImagePopup: "molecules/product-image/popup.vue",
    ProductOptionCheckbox: "molecules/product-option/checkbox.vue",
    ProductOptionDate: "molecules/product-option/date.vue",
    ProductOptionDatetime: "molecules/product-option/datetime.vue",
    ProductOptionFile: "molecules/product-option/file.vue",
    ProductOptionRadio: "molecules/product-option/radio.vue",
    ProductOptionSelect: "molecules/product-option/select.vue",
    ProductOptionText: "molecules/product-option/text.vue",
    ProductOptionTextarea: "molecules/product-option/textarea.vue",
    ProductOptionTime: "molecules/product-option/time.vue",
    ProductPrice: {
      css: "molecules/product-price/product-price.scss",
      component: "molecules/product-price/product-price.vue"
    },
    ProductThumb: {
      css: "molecules/product-thumb/product-thumb.scss",
      component: "molecules/product-thumb/product-thumb.vue"
    },
    ProductThumbImage: "molecules/product-thumb-image/product-thumb-image.vue",
    ProductThumbInline: {
      css: "molecules/product-thumb-inline/product-thumb-inline.scss",
      component: "molecules/product-thumb-inline/product-thumb-inline.vue"
    },
    Rating: "molecules/rating/rating.vue",
    Review: {
      css: "molecules/review/review.scss",
      component: "molecules/review/review.vue"
    },
    Row: {
      css: "molecules/row/row.scss",
      component: "molecules/row/row.vue"
    },
    Table: {
      css: "molecules/table/table.scss",
      component: "molecules/table/table.vue"
    },
    TableHorizontal: {
      css: "molecules/table-horizontal/table-horizontal.scss",
      component: "molecules/table-horizontal/table-horizontal.vue"
    },
    CheckoutSuccess: {
      css: "molecules/checkout-success/checkout-success.scss",
      component: "molecules/checkout-success/checkout-success.vue"
    },
    WishlistLink: "molecules/wishlist-link/wishlist-link.vue"
  },
  organisms: {
    Modal: {
      css: "organisms/modal/modal.scss",
      component: "organisms/modal/modal.vue"
    },
    CartProducts: "organisms/cart-products/cart-products.vue",
    SearchInlineForm: "organisms/search-inline-form/search-inline-form.vue",
    Breadcrumb: "organisms/breadcrumb/breadcrumb.vue",
    Sidebar: {
      css: "organisms/sidebar/sidebar.scss",
      component: "organisms/sidebar/sidebar.vue"
    },
    HeaderMobile: {
      css: "organisms/header-mobile/header-mobile.scss",
      component: "organisms/header-mobile/header-mobile.vue"
    },
    Header: {
      css: "organisms/header/header.scss",
      component: "organisms/header/header.vue"
    },
    Footer: {
      css: "organisms/footer/footer.scss",
      component: "organisms/footer/footer.vue"
    },
    Apollo: "organisms/apollo/apollo.vue",
    Position: {
      css: "organisms/position/position.scss",
      component: "organisms/position/position.vue"
    },
    LocationGrid: "organisms/location-grid/location-grid.vue",
    ContactForm: "organisms/contact-form/contact-form.vue",
    // Notification: "organisms/notification-snack-bar/notification-snack-bar.vue",
    Notification: {
      css: "organisms/notification-toast/notification-toast.scss",
      component: "organisms/notification-toast/notification-toast.vue"
    },
    SearchForm: "organisms/search-form/search-form.vue",
    AddressCreateForm: "organisms/address-create-form/address-create-form.vue",
    AddressEditForm: "organisms/address-edit-form/address-edit-form.vue",
    AddressActions: "organisms/address-actions/address-actions.vue",
    AccountEditForm: "organisms/account-edit-form/account-edit-form.vue",
    PasswordForm: "organisms/password-form/password-form.vue",
    RegisterForm: "organisms/register-form/register-form.vue",
    Language: {
      css: "organisms/language/language.scss",
      component: "organisms/language/language.vue"
    },
    LoginForm: "organisms/login-form/login-form.vue",
    PostReviews: {
      css: "organisms/post-reviews/post-reviews.scss",
      component: "organisms/post-reviews/post-reviews.vue"
    },
    PostModule: {
      css: "organisms/post-module/post-module.scss",
      component: "organisms/post-module/post-module.vue"
    },
    BlogCategoryPost: "organisms/blog-category-post/blog-category-post.vue",
    PostGrid: "organisms/post-grid/post-grid.vue",
    Currency: {
      css: "organisms/currency/currency.scss",
      component: "organisms/currency/currency.vue"
    },
    CompareActions: "organisms/compare-actions/compare-actions.vue",
    WishlistActions: "organisms/wishlist-actions/wishlist-actions.vue",
    CartFooter: "organisms/cart-footer/cart-footer.vue",
    CartQuantity: "organisms/cart-quantity/cart-quantity.vue",
    CartActions: "organisms/cart-actions/cart-actions.vue",
    ProductModule: {
      css: "organisms/product-module/product-module.scss",
      component: "organisms/product-module/product-module.vue"
    },
    ProductThumb: "organisms/product-thumb/product-thumb.vue",
    ProductGrid: "organisms/product-grid/product-grid.vue",
    ProductSort: "organisms/product-sort/product-sort.vue",
    ReviewList: "organisms/review-list/review-list.vue",
    ReviewForm: "organisms/review-form/review-form.vue",
    Form: {
      css: "organisms/form/form.scss",
      component: "organisms/form/form.vue"
    },
    ProductReviews: "organisms/product-reviews/product-reviews.vue",
    ProductOptions: {
      css: "organisms/product-options/product-options.scss",
      component: "organisms/product-options/product-options.vue"
    },
    ProductBuy: "organisms/product-buy/product-buy.vue",
    CategoryProduct: "organisms/category-product/category-product.vue",
    ManufacturerProduct: "organisms/manufacturer-product/manufacturer-product.vue",
    CategoryInfo: "organisms/category-info/category-info.vue",
    ManufacturerInfo: "organisms/manufacturer-info/manufacturer-info.vue",
    CategoryGrid: "organisms/category-grid/category-grid.vue",
    ManufacturerList: "organisms/manufacturer-list/manufacturer-list.vue",
    ManufacturerFilter: "organisms/manufacturer-filter/manufacturer-filter.vue"
  },
  pages: {
    StoreCheckoutSuccess: "pages/store/checkout-success/checkout-success.vue",
    AccountAccount: "pages/account/account/account.vue",
    AccountAddress: "pages/account/address/address.vue",
    AccountAddressEdit: "pages/account/addressEdit/addressEdit.vue",
    AccountAddressCreate: "pages/account/addressCreate/addressCreate.vue",
    AccountEdit: "pages/account/edit/edit.vue",
    AccountLogin: "pages/account/login/login.vue",
    AccountSuccess: "pages/account/success/success.vue",
    AccountPassword: "pages/account/password/password.vue",
    AccountRegister: "pages/account/register/register.vue",
    BlogCategory: "pages/blog/category/category.vue",
    BlogPost: "pages/blog/post/post.vue",
    CommonContact: "pages/common/contact/contact.vue",
    CommonHome: "pages/common/home/home.vue",
    CommonPage: "pages/common/page/page.vue",
    CommonSearch: "pages/common/search/search.vue",
    StoreCart: "pages/store/cart/cart.vue",
    StoreCategory: "pages/store/category/category.vue",
    StoreCheckout: "pages/store/checkout/checkout.vue",
    StoreCompare: "pages/store/compare/compare.vue",
    StoreProduct: "pages/store/product/product.vue",
    StoreSpecial: "pages/store/special/special.vue",
    StoreWishlist: "pages/store/wishlist/wishlist.vue",
    StoreManufacturer: "pages/store/manufacturer/manufacturer.vue",
    StoreManufacturerList: "pages/store/manufacturerList/manufacturerList.vue"
  },
  store: [{
    path: "vuefront",
    module: "common/vuefront/vuefront.js"
  }, {
    path: "position",
    module: "common/position/position.js"
  }, {
    path: "apollo",
    module: "common/apollo/apollo.js"
  }, {
    path: "notification",
    module: "common/notification/notification.js"
  }, {
    path: "menu",
    module: "common/menu/menu.js"
  }, {
    path: ["menu", "blog"],
    module: "menu/blog/blog.js"
  }, {
    path: ["menu", "store"],
    module: "menu/store/store.js"
  }, {
    path: ["menu", "page"],
    module: "menu/page/page.js"
  }, {
    path: "blog"
  }, {
    path: ["blog", "category"],
    module: "blog/category/category.js"
  }, {
    path: ["blog", "post"],
    module: "blog/post/post.js"
  }, {
    path: ["common"]
  }, {
    path: ["common", "country"],
    module: "common/country/country.js"
  }, {
    path: ["common", "breadcrumbs"],
    module: "common/breadcrumbs/breadcrumbs.js"
  }, {
    path: ["common", "zone"],
    module: "common/zone/zone.js"
  }, {
    path: ["common", "page"],
    module: "common/page/page.js"
  }, {
    path: ["common", "contact"],
    module: "common/contact/contact.js"
  }, {
    path: ["common", "customer"],
    module: "common/customer/customer.js"
  }, {
    path: ["common", "address"],
    module: "Address"
  }, {
    path: ["common", "language"],
    module: "common/language/language.js"
  }, {
    path: ["store"]
  }, {
    path: ["store", "cart"],
    module: "store/cart/cart.js"
  }, {
    path: ["store", "wishlist"],
    module: "store/wishlist/wishlist.js"
  }, {
    path: ["store", "currency"],
    module: "store/currency/currency.js"
  }, {
    path: ["store", "compare"],
    module: "store/compare/compare.js"
  }, {
    path: ["store", "category"],
    module: "store/category/category.js"
  }, {
    path: ["store", "manufacturer"],
    module: "store/manufacturer/manufacturer.js"
  }, {
    path: ["store", "product"],
    module: "store/product/product.js"
  }],
  templates: {
    StoreCheckoutSuccess: "templates/store/checkout-success/checkout-success.vue",
    CommonLayout: "templates/common/layout/layout.vue",
    LayoutDefault: "templates/layouts/default/default.vue",
    LayoutFullWidth: "templates/layouts/fullWidth/fullWidth.vue",
    AccountAccount: "templates/account/account/account.vue",
    AccountAddress: "templates/account/address/address.vue",
    AccountAddressCreate: "templates/account/addressCreate/addressCreate.vue",
    AccountAddressEdit: "templates/account/addressEdit/addressEdit.vue",
    AccountEdit: "templates/account/edit/edit.vue",
    AccountLogin: "templates/account/login/login.vue",
    AccountPassword: "templates/account/password/password.vue",
    AccountRegister: "templates/account/register/register.vue",
    AccountSuccess: "templates/account/success/success.vue",
    BlogCategory: "templates/blog/category/category.vue",
    BlogPost: "templates/blog/post/post.vue",
    CommonContact: "templates/common/contact/contact.vue",
    CommonError: "templates/common/error/error.vue",
    CommonPage: "templates/common/page/page.vue",
    CommonSearch: "templates/common/search/search.vue",
    StoreCart: "templates/store/cart/cart.vue",
    StoreCategory: "templates/store/category/category.vue",
    StoreManufacturer: "templates/store/manufacturer/manufacturer.vue",
    StoreManufacturerList: "templates/store/manufacturerList/manufacturerList.vue",
    StoreCompare: "templates/store/compare/compare.vue",
    StoreProduct: "templates/store/product/product.vue",
    StoreSpecial: "templates/store/special/special.vue",
    StoreWishlist: "templates/store/wishlist/wishlist.vue"
  },
  extensions: {
    Account: "extensions/account/account/account.vue",
    AccountLinks: "extensions/account/account-links/account-links.vue",
    BlogCategory: "extensions/blog/category/category.vue",
    LatestPost: "extensions/blog/latest-post/latest-post.vue",
    SearchPost: "extensions/blog/search-post/search-post.vue",
    SearchProduct: "extensions/store/search-product/search-product.vue",
    LatestProduct: "extensions/store/latest-product/latest-product.vue",
    SpecialProduct: "extensions/store/special-product/special-product.vue",
    RelatedProduct: "extensions/store/related-product/related-product.vue",
    FeaturedProduct: "extensions/store/featured-product/featured-product.vue",
    Slideshow: "extensions/common/slideshow/slideshow.vue",
    Pages: "extensions/common/pages/pages.vue",
    StoreCategory: "extensions/store/category/category.vue",
    ExtraLinks: "extensions/common/extra-links/extra-links.vue",
    Checkout: "extensions/store/checkout/checkout.vue",
    Menu: {
      css: "extensions/common/menu/menu.scss",
      component: "extensions/common/menu/menu.vue"
    },
    Search: "extensions/common/search/search.vue"
  },
  loaders: {
    MCategoryThumb: "/molecules/category-thumb/category-thumb.loader.vue",
    MPostThumb: "/molecules/post-thumb/post-thumb.loader.vue",
    MProductThumb: "/molecules/product-thumb/product-thumb.loader.vue",
    MProductImage: "/molecules/product-image/product-image.loader.vue",
    MRating: "/molecules/rating/rating.loader.vue",
    MReview: "/molecules/review/review.loader.vue",
    OBreadcrumb: "/organisms/breadcrumb/breadcrumb.loader.vue",
    OCategoryGrid: "/organisms/category-grid/category-grid.loader.vue",
    OCategoryInfo: "/organisms/category-info/category-info.loader.vue",
    OManufacturerInfo: "/organisms/manufacturer-info/manufacturer-info.loader.vue",
    OCategoryProduct: "/organisms/category-product/category-product.loader.vue",
    OManufacturerProduct: "/organisms/manufacturer-product/manufacturer-product.loader.vue",
    OPostGrid: "/organisms/post-grid/post-grid.loader.vue",
    OPostModule: "/organisms/post-module/post-module.loader.vue",
    OProductGrid: "/organisms/product-grid/product-grid.loader.vue",
    OProductModule: "/organisms/product-module/product-module.loader.vue",
    OProductSort: "/organisms/product-sort/product-sort.loader.vue",
    OReviewForm: "/organisms/review-form/review-form.loader.vue",
    OReviewList: "/organisms/review-list/review-list.loader.vue",
    TBlogCategory: "/templates/blog/category/category.loader.vue",
    TBlogPost: "/templates/blog/post/post.loader.vue",
    TStoreProduct: "/templates/store/product/product.loader.vue",
    TStoreCategory: "/templates/store/category/category.loader.vue",
    TStoreManufacturer: "/templates/store/manufacturer/manufacturer.loader.vue",
    TStoreManufacturerList: "/templates/store/manufacturerList/manufacturerList.loader.vue",
    OManufacturerList: "/organisms/manufacturer-list/manufacturer-list.loader.vue",
    OManufacturerFilter: "/organisms/manufacturer-filter/manufacturer-filter.loader.vue",
    TStoreSpecial: "/templates/store/special/special.loader.vue"
  },
  seo: {
    "/": {
      component: "CommonHome"
    },
    "/account": {
      generate: false,
      component: "AccountAccount"
    },
    "/account/address": {
      generate: false,
      component: "AccountAddress"
    },
    "/account/address/:id/edit": {
      generate: false,
      component: "AccountAddressEdit"
    },
    "/account/address/create": {
      generate: false,
      component: "AccountAddressCreate"
    },
    "/account/edit": {
      generate: false,
      component: "AccountEdit"
    },
    "/account/login": {
      component: "AccountLogin"
    },
    "/account/password": {
      generate: false,
      component: "AccountPassword"
    },
    "/account/register": {
      package: "vuefront/lib",
      component: "AccountRegister"
    },
    "/account/wishlist": {
      generate: false,
      component: "StoreWishlist"
    },
    "/account/success": {
      generate: false,
      component: "AccountSuccess"
    },
    "/blog/category/:id": {
      seo: seo.CategoryBlogSeo,
      component: "BlogCategory"
    },
    "/blog/post/:id": {
      component: "BlogPost",
      seo: seo.PostSeo
    },
    "/contact": {
      generate: false,
      component: "CommonContact"
    },
    "/page/:id": {
      component: "CommonPage",
      seo: seo.PageSeo
    },
    "/search": {
      component: "CommonSearch"
    },
    "/search/:slug": {
      component: "CommonSearch"
    },
    "/store/cart": {
      generate: false,
      component: "StoreCart"
    },
    "/store/checkout": {
      generate: false,
      component: "StoreCheckout"
    },
    "/store/checkout/success": {
      generate: false,
      component: "StoreCheckoutSuccess"
    },
    "/store/category/:id": {
      seo: seo.CategorySeo,
      component: "StoreCategory"
    },
    "/store/manufacturer/:id": {
      seo: seo.ManufacturerSeo,
      component: "StoreManufacturer"
    },
    "/store/manufacturer": {
      component: "StoreManufacturerList"
    },
    "/store/compare": {
      generate: false,
      component: "StoreCompare"
    },
    "/store/product/:id": {
      component: "StoreProduct",
      seo: seo.ProductSeo
    },
    "/store/special": {
      component: "StoreSpecial"
    }
  }
};
export default MainConfig;