export default {
  plugins: [],
  css: ['vuefront/scss/main.scss'],
  menu: [],
  locales: {
    'en-gb': ['vuefront/lib/locales/en-gb.js'],
    'ru-ru': ['vuefront/lib/locales/ru-ru.js'] 
  },
  pages: {
    '/':                         'vuefront/lib/components/templates/common/home',
    '/account':                  'vuefront/lib/components/templates/common/account/account',
    '/account/address':          'vuefront/lib/components/templates/common/account/address',
    '/account/address/:id/edit': 'vuefront/lib/components/templates/common/account/editAddress',
    '/account/address/create':   'vuefront/lib/components/templates/common/account/createAddress',
    '/account/edit':             'vuefront/lib/components/templates/common/account/edit',
    '/account/login':            'vuefront/lib/components/templates/common/account/login',
    '/account/password':         'vuefront/lib/components/templates/common/account/password',
    '/account/register':         'vuefront/lib/components/templates/common/account/register',
    '/account/wishlist':         'vuefront/lib/components/templates/store/wishlist',
    '/blog/category/:id':        'vuefront/lib/components/templates/blog/category',
    '/blog/post/:id':            'vuefront/lib/components/templates/blog/post',
    '/contact':                  'vuefront/lib/components/templates/common/contact',
    '/page/:id':                 'vuefront/lib/components/templates/common/page',
    '/search/:slug':             'vuefront/lib/components/templates/common/search',
    '/store/cart':               'vuefront/lib/components/templates/store/cart',
    '/store/category/:id':       'vuefront/lib/components/templates/store/category',
    '/store/compare':            'vuefront/lib/components/templates/store/compare',
    '/store/product/:id':        'vuefront/lib/components/templates/store/product',
    '/store/special':            'vuefront/lib/components/templates/store/special'
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
      path: 'notification',
      module: 'vuefront/lib/store/notification'
    },
    {
      path: 'menu',
      module: 'vuefront/lib/store/menu'
    },
    {
      path: ['menu', 'blog'],
      module: 'vuefront/lib/store/menu/blog'
    },
    {
      path: ['menu', 'store'],
      module: 'vuefront/lib/store/menu/store'
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
      path: ['common', 'country'],
      module: 'vuefront/lib/store/common/country'
    },
    {
      path: ['common', 'zone'],
      module: 'vuefront/lib/store/common/zone'
    },
    {
      path: ['common', 'page'],
      module: 'vuefront/lib/store/common/page'
    },
    {
      path: ['common', 'contact'],
      module: 'vuefront/lib/store/common/contact'
    },
    {
      path: ['common', 'customer'],
      module: 'vuefront/lib/store/common/customer'
    },
    {
      path: ['common', 'address'],
      module: 'vuefront/lib/store/common/address'
    },
    {
      path: ['common', 'language'],
      module: 'vuefront/lib/store/common/language'
    },
    {
      path: ['store']
    },
    {
      path: ['store', 'cart'],
      module: 'vuefront/lib/store/store/cart'
    },
    {
      path: ['store', 'wishlist'],
      module: 'vuefront/lib/store/store/wishlist'
    },
    {
      path: ['store', 'currency'],
      module: 'vuefront/lib/store/store/currency'
    },
    {
      path: ['store', 'compare'],
      module: 'vuefront/lib/store/store/compare'
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
    AccountAddress:       'vuefront/lib/components/elements/common/account/address',
    AccountAddressCreate: 'vuefront/lib/components/elements/common/account/createAddress',
    AccountAddressEdit:   'vuefront/lib/components/elements/common/account/editAddress',
    AccountEdit:          'vuefront/lib/components/elements/common/account/edit',
    AccountLogin:         'vuefront/lib/components/elements/common/account/login',
    AccountNew:           'vuefront/lib/components/elements/common/account/new',
    AccountPassword:      'vuefront/lib/components/elements/common/account/password',
    AccountRegister:      'vuefront/lib/components/elements/common/account/register',
    Apollo:               'vuefront/lib/components/elements/common/apollo',
    Breadcrumbs:          'vuefront/lib/components/elements/common/breadcrumbs',
    Cart:                 'vuefront/lib/components/elements/store/cart',
    Category:             'vuefront/lib/components/elements/store/category',
    CategoryBlog:         'vuefront/lib/components/elements/blog/category',
    Compare:              'vuefront/lib/components/elements/store/compare',
    Contact:              'vuefront/lib/components/elements/common/contact/contact',
    ContactForm:          'vuefront/lib/components/elements/common/contact/form',
    ContactLocation:      'vuefront/lib/components/elements/common/contact/location',
    ContactLocationGrid:  'vuefront/lib/components/elements/common/contact/locationGrid',
    Currency:             'vuefront/lib/components/elements/store/currency',
    Empty:                'vuefront/lib/components/elements/common/empty',
    Footer:               'vuefront/lib/components/elements/common/footer',
    Header:               'vuefront/lib/components/elements/common/header',
    HeaderCenter:         'vuefront/lib/components/elements/common/header/center',
    HeaderSearch:         'vuefront/lib/components/elements/common/header/search',
    HeaderTop:            'vuefront/lib/components/elements/common/header/top',
    Icon:                 'vuefront/lib/components/elements/common/icon',
    Language:             'vuefront/lib/components/elements/common/language',
    Loader:               'vuefront/lib/components/elements/common/loader',
    Menu:                 'vuefront/lib/components/elements/common/header/menu',
    // Notification:      'vuefront/lib/components/elements/common/notification/snackBar',
    Notification:         'vuefront/lib/components/elements/common/notification/toast',
    Page:                 'vuefront/lib/components/elements/common/page',
    Pagination:           'vuefront/lib/components/elements/common/pagination',
    Position:             'vuefront/lib/components/elements/common/position',
    Post:                 'vuefront/lib/components/elements/blog/post',
    PostsGrid:            'vuefront/lib/components/elements/blog/postsGrid',
    PostThumb:            'vuefront/lib/components/elements/blog/postThumb',
    Product:              'vuefront/lib/components/elements/store/product',
    ProductAttribute:     'vuefront/lib/components/elements/store/productAttribute',
    ProductImage:         'vuefront/lib/components/elements/store/productImage',
    ProductOption:        'vuefront/lib/components/elements/store/productOption',
    ProductsGrid:         'vuefront/lib/components/elements/store/productsGrid',
    ProductThumb:         'vuefront/lib/components/elements/store/productThumb',
    Rating:               'vuefront/lib/components/elements/common/rating',
    Reviews:              'vuefront/lib/components/elements/common/reviews',
    Search:               'vuefront/lib/components/elements/common/search',
    Sort:                 'vuefront/lib/components/elements/store/productSort',
    Wishlist:             'vuefront/lib/components/elements/store/wishlist',
  },
  templates: {
    Header: 'vuefront/lib/components/templates/common/header',
    Footer: 'vuefront/lib/components/templates/common/footer',
    Menu: 'vuefront/lib/components/templates/common/menu',
    Layout: 'vuefront/lib/components/templates/common/layout',
    Error: 'vuefront/lib/components/templates/common/error'
  },
  modules: {
    SearchProduct: 'vuefront/lib/components/modules/store/searchProduct',
    SearchPost: 'vuefront/lib/components/modules/blog/searchPost',
    LatestProduct: 'vuefront/lib/components/modules/store/latestProduct',
    SpecialProduct: 'vuefront/lib/components/modules/store/specialProduct',
    LatestPost: 'vuefront/lib/components/modules/blog/latestPost',
    RelatedProduct: 'vuefront/lib/components/modules/store/relatedProduct',
    FeaturedProduct: 'vuefront/lib/components/modules/store/featuredProduct',
    Slideshow: 'vuefront/lib/components/modules/common/slideshow',
    Pages: 'vuefront/lib/components/modules/common/pages',
    StoreCategory: 'vuefront/lib/components/modules/store/category',
    BlogCategory: 'vuefront/lib/components/modules/blog/category',
    Account: 'vuefront/lib/components/modules/common/account',
    AccountLinks: 'vuefront/lib/components/modules/common/accountLinks',
    ExtraLinks: 'vuefront/lib/components/modules/common/extraLinks'
  }
}
