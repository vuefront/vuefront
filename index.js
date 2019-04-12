export default {
  plugins: [],
  css: ['vuefront/scss/main.scss'],
  pages: {
    '/blog/category/:id': 'vuefront/lib/templates/blog/category',
    '/blog/post/:id': 'vuefront/lib/templates/blog/post',
    '/search/:slug': 'vuefront/lib/templates/common/search',
    '/store/category/:id': 'vuefront/lib/templates/store/category',
    '/store/product/:id': 'vuefront/lib/templates/store/product',
    '/store/cart': 'vuefront/lib/templates/store/cart',
    '/page/:id': 'vuefront/lib/templates/common/page',
    '/': 'vuefront/lib/templates/common/home'
  },
  store: [
    {
      path: 'vuefront',
      module: 'vuefront/lib/store/vuefront'
    },
    {
      path: 'apollo',
      module: 'vuefront/lib/store/apollo'
    },
    {
      path: 'menu',
      module: 'vuefront/lib/store/menu'
    },
    {
      path: 'notification',
      module: 'vuefront/lib/store/notification'
    },
    {
      path: 'blog'
    },
    {
      path: ['blog', 'category'],
      module: 'vuefront/lib/store/blog/category'
    },
    {
      path: ['blog', 'post'],
      module: 'vuefront/lib/store/blog/post'
    },
    {
      path: ['common']
    },
    {
      path: ['common', 'page'],
      module: 'vuefront/lib/store/common/page'
    },
    {
      path: ['store']
    },
    {
      path: ['store', 'cart'],
      module: 'vuefront/lib/store/store/cart'
    },
    {
      path: ['store', 'category'],
      module: 'vuefront/lib/store/store/category'
    },
    {
      path: ['store', 'product'],
      module: 'vuefront/lib/store/store/product'
    }
  ],
  components: {
    Apollo: 'vuefront/lib/elements/common/apollo',
    Loader: 'vuefront/lib/elements/common/loader',
    Page: 'vuefront/lib/elements/common/page',
    Rating: 'vuefront/lib/elements/common/rating',
    Icon: 'vuefront/lib/elements/common/icon',
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
    // Notification: 'vuefront/lib/elements/common/notification/toast',
    Notification: 'vuefront/lib/elements/common/notification/snackBar',
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
    Breadcrumbs: 'vuefront/lib/elements/common/breadcrumbs',
    Header: 'vuefront/lib/elements/common/header',
    Footer: 'vuefront/lib/elements/common/footer'
  },
  positions: {
    Top: 'vuefront/lib/positions/top',
    Bottom: 'vuefront/lib/positions/bottom',
    Left: 'vuefront/lib/positions/left',
    Right: 'vuefront/lib/positions/right'
  },
  templates: {
    Header: 'vuefront/lib/templates/common/header',
    Footer: 'vuefront/lib/templates/common/footer',
    Menu: 'vuefront/lib/templates/common/menu',
    Layout: 'vuefront/lib/templates/common/layout'
  },
  modules: {
    SearchProduct: 'vuefront/lib/modules/store/searchProduct',
    SearchPost: 'vuefront/lib/modules/blog/searchPost',
    LatestProduct: 'vuefront/lib/modules/store/latestProduct',
    SpecialProduct: 'vuefront/lib/modules/store/specialProduct',
    LatestPost: 'vuefront/lib/modules/blog/latestPost',
    RelatedProduct: 'vuefront/lib/modules/store/relatedProduct',
    FeaturedProduct: 'vuefront/lib/modules/store/featuredProduct',
    Slideshow: 'vuefront/lib/modules/common/slideshow',
    Pages: 'vuefront/lib/modules/common/pages'
  }
}
