export default {
  plugins: [],
  css: ["vuefront/scss/main.scss"],
  menu: [],
  locales: {
    "en-gb": ["vuefront/lib/locales/en-gb.js"],
    "ru-ru": ["vuefront/lib/locales/ru-ru.js"]
  },
  pages: {
    "/": "vuefront/lib/components/pages/common/home",
    "/account": {
      generate: false,
      component: "vuefront/lib/components/pages/common/account/account"
    },
    "/account/address": {
      generate: false,
      component: "vuefront/lib/components/pages/common/account/address"
    },
    "/account/address/:id/edit": {
      generate: false,
      component: "vuefront/lib/components/pages/common/account/editAddress"
    },
    "/account/address/create": {
      generate: false,
      component: "vuefront/lib/components/pages/common/account/createAddress"
    },
    "/account/edit": {
      generate: false,
      component: "vuefront/lib/components/pages/common/account/edit"
    },
    "/account/login": "vuefront/lib/components/pages/common/account/login",
    "/account/password": {
      generate: false,
      component: "vuefront/lib/components/pages/common/account/password"
    },
    "/account/register":
      "vuefront/lib/components/pages/common/account/register",
    "/account/wishlist": {
      generate: false,
      component: "vuefront/lib/components/pages/store/wishlist"
    },
    "/blog/category/:id": {
      component: "vuefront/lib/components/pages/blog/category",
      seo: "vuefront/lib/seo/blog_category"
    },
    "/blog/post/:id": {
      component: "vuefront/lib/components/pages/blog/post",
      seo: "vuefront/lib/seo/blog_post"
    },
    "/contact": "vuefront/lib/components/pages/common/contact",
    "/page/:id": {
      component: "vuefront/lib/components/pages/common/page",
      seo: "vuefront/lib/seo/page"
    },
    "/search": "vuefront/lib/components/pages/common/search",
    "/search/:slug": "vuefront/lib/components/pages/common/search",
    "/store/cart": {
      generate: false,
      component: "vuefront/lib/components/pages/store/cart"
    },
    "/store/checkout": {
      generate: false,
      component: "vuefront/lib/components/pages/store/checkout"
    },
    "/store/category/:id": {
      component: "vuefront/lib/components/pages/store/category",
      seo: "vuefront/lib/seo/category"
    },
    "/store/compare": {
      generate: false,
      component: "vuefront/lib/components/pages/store/compare"
    },
    "/store/product/:id": {
      component: "vuefront/lib/components/pages/store/product",
      seo: "vuefront/lib/seo/product"
    },
    "/store/special": "vuefront/lib/components/pages/store/special"
  },
  store: [
    {
      path: "vuefront",
      module: "vuefront/lib/store/vuefront"
    },
    {
      path: "apollo",
      module: "vuefront/lib/store/apollo"
    },
    {
      path: "notification",
      module: "vuefront/lib/store/notification"
    },
    {
      path: "menu",
      module: "vuefront/lib/store/menu"
    },
    {
      path: ["menu", "blog"],
      module: "vuefront/lib/store/menu/blog"
    },
    {
      path: ["menu", "store"],
      module: "vuefront/lib/store/menu/store"
    },
    {
      path: ["menu", "page"],
      module: "vuefront/lib/store/menu/page"
    },
    {
      path: "blog"
    },
    {
      path: ["blog", "category"],
      module: "vuefront/lib/store/blog/category"
    },
    {
      path: ["blog", "post"],
      module: "vuefront/lib/store/blog/post"
    },
    {
      path: ["common"]
    },
    {
      path: ["common", "country"],
      module: "vuefront/lib/store/common/country"
    },
    {
      path: ["common", "zone"],
      module: "vuefront/lib/store/common/zone"
    },
    {
      path: ["common", "page"],
      module: "vuefront/lib/store/common/page"
    },
    {
      path: ["common", "contact"],
      module: "vuefront/lib/store/common/contact"
    },
    {
      path: ["common", "customer"],
      module: "vuefront/lib/store/common/customer"
    },
    {
      path: ["common", "address"],
      module: "vuefront/lib/store/common/address"
    },
    {
      path: ["common", "language"],
      module: "vuefront/lib/store/common/language"
    },
    {
      path: ["store"]
    },
    {
      path: ["store", "cart"],
      module: "vuefront/lib/store/store/cart"
    },
    {
      path: ["store", "wishlist"],
      module: "vuefront/lib/store/store/wishlist"
    },
    {
      path: ["store", "currency"],
      module: "vuefront/lib/store/store/currency"
    },
    {
      path: ["store", "compare"],
      module: "vuefront/lib/store/store/compare"
    },
    {
      path: ["store", "category"],
      module: "vuefront/lib/store/store/category"
    },
    {
      path: ["store", "product"],
      module: "vuefront/lib/store/store/product"
    }
  ],
  components: {
    AccountAddress: "vuefront/lib/components/elements/common/account/address",
    AccountAddressCreate:
      "vuefront/lib/components/elements/common/account/createAddress",
    AccountAddressEdit:
      "vuefront/lib/components/elements/common/account/editAddress",
    AccountEdit: "vuefront/lib/components/elements/common/account/edit",
    AccountLogin: "vuefront/lib/components/elements/common/account/login",
    AccountNew: "vuefront/lib/components/elements/common/account/new",
    AccountPassword: "vuefront/lib/components/elements/common/account/password",
    AccountRegister: "vuefront/lib/components/elements/common/account/register",
    Apollo: "vuefront/lib/components/elements/common/apollo",
    Breadcrumbs: "vuefront/lib/components/elements/common/breadcrumbs",
    Cart: "vuefront/lib/components/elements/store/cart",
    Category: "vuefront/lib/components/elements/store/category",
    CategoryBlog: "vuefront/lib/components/elements/blog/category",
    Compare: "vuefront/lib/components/elements/store/compare",
    Contact: "vuefront/lib/components/elements/common/contact/contact",
    ContactForm: "vuefront/lib/components/elements/common/contact/form",
    ContactLocation: "vuefront/lib/components/elements/common/contact/location",
    ContactLocationGrid:
      "vuefront/lib/components/elements/common/contact/locationGrid",
    Currency: "vuefront/lib/components/elements/store/currency",
    Empty: "vuefront/lib/components/elements/common/empty",
    Footer: "vuefront/lib/components/elements/common/footer",
    Header: "vuefront/lib/components/elements/common/header",
    HeaderCart: "vuefront/lib/components/elements/common/header/cart",
    HeaderCenter: "vuefront/lib/components/elements/common/header/center",
    HeaderLogo: "vuefront/lib/components/elements/common/header/logo",
    HeaderSearch: "vuefront/lib/components/elements/common/header/search",
    HeaderSidebar: "vuefront/lib/components/elements/common/header/sidebar",
    HeaderTop: "vuefront/lib/components/elements/common/header/top",
    Icon: "vuefront/lib/components/elements/common/icon",
    Language: "vuefront/lib/components/elements/common/language",
    // Notification:      'vuefront/lib/components/elements/common/notification/snackBar',
    Notification: "vuefront/lib/components/elements/common/notification/toast",
    Page: "vuefront/lib/components/elements/common/page",
    Pagination: "vuefront/lib/components/elements/common/pagination",
    Position: "vuefront/lib/components/elements/common/position",
    Post: "vuefront/lib/components/elements/blog/post",
    PostModule: "vuefront/lib/components/elements/blog/post/module",
    PostThumb: "vuefront/lib/components/elements/blog/post/thumb",
    PostsGrid: "vuefront/lib/components/elements/blog/post/grid",
    Product: "vuefront/lib/components/elements/store/product",
    ProductAttribute:
      "vuefront/lib/components/elements/store/product/attribute",
    ProductImage: "vuefront/lib/components/elements/store/product/image",
    ProductModule: "vuefront/lib/components/elements/store/product/module",
    ProductOption: "vuefront/lib/components/elements/store/product/option",
    ProductOptionCheckbox:
      "vuefront/lib/components/elements/store/product/option/checkbox",
    ProductOptionDate:
      "vuefront/lib/components/elements/store/product/option/date",
    ProductOptionDatetime:
      "vuefront/lib/components/elements/store/product/option/datetime",
    ProductOptionFile:
      "vuefront/lib/components/elements/store/product/option/file",
    ProductOptionRadio:
      "vuefront/lib/components/elements/store/product/option/radio",
    ProductOptionSelect:
      "vuefront/lib/components/elements/store/product/option/select",
    ProductOptionText:
      "vuefront/lib/components/elements/store/product/option/text",
    ProductOptionTextarea:
      "vuefront/lib/components/elements/store/product/option/textarea",
    ProductOptionTime:
      "vuefront/lib/components/elements/store/product/option/time",
    ProductThumb: "vuefront/lib/components/elements/store/product/thumb",
    ProductsGrid: "vuefront/lib/components/elements/store/product/grid",
    Rating: "vuefront/lib/components/elements/common/rating",
    Reviews: "vuefront/lib/components/elements/common/reviews",
    Search: "vuefront/lib/components/elements/common/search",
    Sort: "vuefront/lib/components/elements/store/product/sort",
    Wishlist: "vuefront/lib/components/elements/store/wishlist"
  },
  templates: {
    Header: "vuefront/lib/components/templates/common/header",
    Footer: "vuefront/lib/components/templates/common/footer",
    Layout: "vuefront/lib/components/templates/common/layout",
    Error: "vuefront/lib/components/templates/common/error",
    Category: "vuefront/lib/components/templates/store/category",
    CategoryBlog: "vuefront/lib/components/templates/blog/category",
    Special: "vuefront/lib/components/templates/store/special"
  },
  modules: {
    SearchProduct: "vuefront/lib/components/modules/store/searchProduct",
    SearchPost: "vuefront/lib/components/modules/blog/searchPost",
    LatestProduct: "vuefront/lib/components/modules/store/latestProduct",
    SpecialProduct: "vuefront/lib/components/modules/store/specialProduct",
    LatestPost: "vuefront/lib/components/modules/blog/latestPost",
    RelatedProduct: "vuefront/lib/components/modules/store/relatedProduct",
    FeaturedProduct: "vuefront/lib/components/modules/store/featuredProduct",
    Slideshow: "vuefront/lib/components/modules/common/slideshow",
    Pages: "vuefront/lib/components/modules/common/pages",
    StoreCategory: "vuefront/lib/components/modules/store/category",
    BlogCategory: "vuefront/lib/components/modules/blog/category",
    Account: "vuefront/lib/components/modules/common/account",
    AccountLinks: "vuefront/lib/components/modules/common/accountLinks",
    ExtraLinks: "vuefront/lib/components/modules/common/extraLinks",
    Checkout: "vuefront/lib/components/modules/store/checkout",
    Menu: "vuefront/lib/components/modules/common/menu",
    Search: "vuefront/lib/components/modules/common/search",
  },
  loaders: {
    CategoryBlog: "vuefront/lib/components/loaders/blog/category",
    CategoryBlogPage: "vuefront/lib/components/loaders/blog/page/category",
    Category: "vuefront/lib/components/loaders/store/category",
    CategoryPage: "vuefront/lib/components/loaders/store/page/category",
    Post: "vuefront/lib/components/loaders/blog/post",
    Common: "vuefront/lib/components/loaders/common/loader",
    PostModule: "vuefront/lib/components/loaders/blog/post/module",
    PostThumb: "vuefront/lib/components/loaders/blog/post/thumb",
    PostsGrid: "vuefront/lib/components/loaders/blog/post/grid",
    ProductImage: "vuefront/lib/components/loaders/store/product/image",
    Product: "vuefront/lib/components/loaders/store/product",
    ProductModule: "vuefront/lib/components/loaders/store/product/module",
    ProductThumb: "vuefront/lib/components/loaders/store/product/thumb",
    ProductsGrid: "vuefront/lib/components/loaders/store/product/grid",
    Reviews: "vuefront/lib/components/loaders/common/reviews",
    SpecialPage: "vuefront/lib/components/loaders/store/page/special",
    Sort: "vuefront/lib/components/loaders/store/product/sort",
    Rating: "vuefront/lib/components/loaders/common/rating"
  }
};
