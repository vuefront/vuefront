export default {
  // plugins: ['vuefront/lib/plugins/Vuetify'],
  plugins: [],
  css: ['vuefront/scss/main.scss'],
  components: {
    ProductThumb: 'vuefront/lib/elements/store/productThumb',
    Product: 'vuefront/lib/elements/store/product',
    ProductImage: 'vuefront/lib/elements/store/productImage',
    PostThumb: 'vuefront/lib/elements/blog/postThumb',
    Menu: 'vuefront/lib/elements/common/header/topMenu',
    Nav: 'vuefront/lib/elements/common/header/nav',
    ProductsGrid: 'vuefront/lib/elements/store/productsGrid',
    Category: 'vuefront/lib/elements/store/category',
    CategoryBlog: 'vuefront/lib/elements/blog/category',
    PostsGrid: 'vuefront/lib/elements/blog/postsGrid',
    Notification: 'vuefront/lib/elements/common/notification/toast',
    Cart: 'vuefront/lib/elements/store/cart',
    Post: 'vuefront/lib/elements/blog/post',
    ProductOption: 'vuefront/lib/elements/store/productOption',
    ProductAttribute: 'vuefront/lib/elements/store/productAttribute',
    Reviews: 'vuefront/lib/elements/common/reviews',
    Pagination: 'vuefront/lib/elements/common/pagination',
    Sort: 'vuefront/lib/elements/store/productSort',
    NavSearch: 'vuefront/lib/elements/common/header/navSearch',
    Search: 'vuefront/lib/elements/common/search',
    Empty: 'vuefront/lib/elements/common/empty',
    Breadcrumbs: 'vuefront/lib/elements/common/breadcrumbs'
  },
  partials: {
    Menu: 'vuefront/lib/templates/menu',
    Layout: 'vuefront/lib/templates/layout'
  },
  modules: {
    SearchProduct: 'vuefront/lib/modules/store/searchProduct',
    SearchPost: 'vuefront/lib/modules/blog/searchPost',
    LatestProduct: 'vuefront/lib/modules/store/latestProduct',
    SpecialProduct: 'vuefront/lib/modules/store/specialProduct',
    LatestPost: 'vuefront/lib/modules/blog/latestPost',
    RelatedProduct: 'vuefront/lib/modules/store/relatedProduct',
    FeaturedProduct: 'vuefront/lib/modules/store/featuredProduct',
    Slideshow: 'vuefront/lib/modules/common/slideshow'
  }
}
