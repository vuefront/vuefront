export default {
  plugins: [],
  css: ['vuefront/assets/scss/main.scss'],
  menu: [],
  atoms: {
    Button: {
      package: 'vuefront/lib',
      el: 'aButton'
    },
    Icon: {
      package: 'vuefront/lib',
      el: 'aIcon'
    },
    Link: {
      package: 'vuefront/lib',
      el: 'aLink'
    },
    Image: {
      package: 'vuefront/lib',
      el: 'aImage'
    },
    AmpImage: {
      package: 'vuefront/lib',
      el: 'aAmpImage'
    },
    Badge: {
      package: 'vuefront/lib',
      el: 'aBadge'
    },
    Heading: {
      package: 'vuefront/lib',
      el: 'aHeading'
    },
    Select: {
      package: 'vuefront/lib',
      el: 'aSelect'
    },
    Input: {
      package: 'vuefront/lib',
      el: 'aInput'
    },
    Textarea: {
      package: 'vuefront/lib',
      el: 'aTextarea'
    }
  },
  molecules: {
    ButtonGroup: {
      package: 'vuefront/lib',
      el: 'mButtonGroup'
    },
    InputGroup: {
      package: 'vuefront/lib',
      el: 'mInputGroup'
    },
    Row: {
      package: 'vuefront/lib',
      el: 'mRow'
    },
    Col: {
      package: 'vuefront/lib',
      el: 'mCol'
    },
    Card: {
      package: 'vuefront/lib',
      el: 'mCard'
    },
    CardBody: {
      package: 'vuefront/lib',
      el: 'mCardBody'
    },
    ProductPrice: {
      package: 'vuefront/lib',
      el: 'mProductPrice'
    },
    ProductThumb: {
      package: 'vuefront/lib',
      el: 'mProductThumb'
    },
    ProductAttribute: {
      package: 'vuefront/lib',
      el: 'mProductAttribute'
    },
    ProductThumbImage: {
      package: 'vuefront/lib',
      el: 'mProductThumbImage'
    },
    ProductImage: {
      package: 'vuefront/lib',
      el: 'mProductImage'
    },
    ProductImagePopup: {
      package: 'vuefront/lib',
      el: 'mProductImagePopup'
    },
    ProductOptionCheckbox: {
      package: 'vuefront/lib',
      el: 'mProductOptionCheckbox'
    },
    ProductOptionDate: {
      package: 'vuefront/lib',
      el: 'mProductOptionDate'
    },
    ProductOptionDatetime: {
      package: 'vuefront/lib',
      el: 'mProductOptionDateTime'
    },
    ProductOptionFile: {
      package: 'vuefront/lib',
      el: 'mProductOptionFile'
    },
    ProductOptionRadio: {
      package: 'vuefront/lib',
      el: 'mProductOptionRadio'
    },
    ProductOptionSelect: {
      package: 'vuefront/lib',
      el: 'mProductOptionSelect'
    },
    ProductOptionText: {
      package: 'vuefront/lib',
      el: 'mProductOptionText'
    },
    ProductOptionTextarea: {
      package: 'vuefront/lib',
      el: 'mProductOptionTextarea'
    },
    ProductOptionTime: {
      package: 'vuefront/lib',
      el: 'mProductOptionTime'
    },
    Rating: {
      package: 'vuefront/lib',
      el: 'mRating'
    },
    Review: {
      package: 'vuefront/lib',
      el: 'mReview'
    },
    Field: {
      package: 'vuefront/lib',
      el: 'mField'
    },
    CategoryThumb: {
      package: 'vuefront/lib',
      el: 'mCategoryThumb'
    }
  },
  organisms: {
    ProductModule: {
      package: 'vuefront/lib',
      el: 'oProductModule'
    },
    ProductThumb: {
      package: 'vuefront/lib',
      el: 'oProductThumb'
    },
    ProductGrid: {
      package: 'vuefront/lib',
      el: 'oProductGrid'
    },
    ProductSort: {
      package: 'vuefront/lib',
      el: 'oProductSort'
    },
    ReviewList: {
      package: 'vuefront/lib',
      el: 'oReviewList'
    },
    ReviewForm: {
      package: 'vuefront/lib',
      el: 'oReviewForm'
    },
    Form: {
      package: 'vuefront/lib',
      el: 'oForm'
    },
    ProductReviews: {
      package: 'vuefront/lib',
      el: 'oProductReviews'
    },
    ProductOptions: {
      package: 'vuefront/lib',
      el: 'oProductOptions'
    },
    ProductBuy: {
      package: 'vuefront/lib',
      el: 'oProductBuy'
    }
  },
  locales: {
    'en-gb': [
      {
        package: 'vuefront/lib',
        path: ['locales', 'EnGb']
      }
    ],
    'ru-ru': [
      {
        package: 'vuefront/lib',
        path: ['locales', 'RuRu']
      }
    ]
  },
  pages: {
    '/': { package: 'vuefront/lib', el: 'HomePage' },
    '/account': {
      generate: false,
      package: 'vuefront/lib',
      el: 'AccountPage'
    },
    '/account/address': {
      generate: false,
      package: 'vuefront/lib',
      el: 'AccountAddressPage'
    },
    '/account/address/:id/edit': {
      generate: false,
      package: 'vuefront/lib',
      el: 'AccountEditAddressPage'
    },
    '/account/address/create': {
      generate: false,
      package: 'vuefront/lib',
      el: 'AccountCreateAddressPage'
    },
    '/account/edit': {
      generate: false,
      package: 'vuefront/lib',
      el: 'AccountEditPage'
    },
    '/account/login': {
      package: 'vuefront/lib',
      el: 'AccountLoginPage'
    },
    '/account/password': {
      generate: false,
      package: 'vuefront/lib',
      el: 'AccountPasswordPage'
    },
    '/account/register': {
      package: 'vuefront/lib',
      el: 'AccountRegisterPage'
    },
    '/account/wishlist': {
      generate: false,
      package: 'vuefront/lib',
      el: 'WishlistPage'
    },
    '/blog/category/:id': {
      seo: {
        package: 'vuefront/lib/seo',
        path: 'CategoryBlogSeo'
      },
      package: 'vuefront/lib',
      el: 'CategoryBlogPage'
    },
    '/blog/post/:id': {
      package: 'vuefront/lib',
      el: 'PostPage',
      seo: {
        package: 'vuefront/lib/seo',
        path: 'PostSeo'
      }
    },
    '/contact': { package: 'vuefront/lib', el: 'ContactPage' },
    '/page/:id': {
      package: 'vuefront/lib',
      el: 'PagePage',
      seo: {
        package: 'vuefront/lib/seo',
        path: 'PageSeo'
      }
    },
    '/search': { package: 'vuefront/lib', el: 'SearchPage' },
    '/search/:slug': {
      package: 'vuefront/lib',
      el: 'SearchPage'
    },
    '/store/cart': {
      generate: false,
      package: 'vuefront/lib',
      el: 'CartPage'
    },
    '/store/checkout': {
      generate: false,
      package: 'vuefront/lib',
      el: 'CheckoutPage'
    },
    '/store/category/:id': {
      seo: {
        package: 'vuefront/lib/seo',
        path: 'CategorySeo'
      },
      package: 'vuefront/lib',
      el: 'CategoryPage'
    },
    '/store/compare': {
      generate: false,
      package: 'vuefront/lib',
      el: 'ComparePage'
    },
    '/store/product/:id': {
      package: 'vuefront/lib',
      el: 'ProductPage',
      seo: {
        package: 'vuefront/lib/seo',
        path: 'ProductSeo'
      }
    },
    '/store/special': {
      package: 'vuefront/lib',
      el: 'SpecialPage'
    }
  },
  store: [
    {
      path: 'vuefront',
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Vuefront']
      }
    },
    {
      path: 'apollo',
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Apollo']
      }
    },
    {
      path: 'notification',
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Notification']
      }
    },
    {
      path: 'menu',
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Menu']
      }
    },
    {
      path: ['menu', 'blog'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'BlogMenu']
      }
    },
    {
      path: ['menu', 'store'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'StoreMenu']
      }
    },
    {
      path: ['menu', 'page'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'PageMenu']
      }
    },
    {
      path: 'blog'
    },
    {
      path: ['blog', 'category'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'CategoryBlog']
      }
    },
    {
      path: ['blog', 'post'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Post']
      }
    },
    {
      path: ['common']
    },
    {
      path: ['common', 'country'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Country']
      }
    },
    {
      path: ['common', 'zone'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Zone']
      }
    },
    {
      path: ['common', 'page'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Page']
      }
    },
    {
      path: ['common', 'contact'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Contact']
      }
    },
    {
      path: ['common', 'customer'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Customer']
      }
    },
    {
      path: ['common', 'address'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Address']
      }
    },
    {
      path: ['common', 'language'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Language']
      }
    },
    {
      path: ['store']
    },
    {
      path: ['store', 'cart'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Cart']
      }
    },
    {
      path: ['store', 'wishlist'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Wishlist']
      }
    },
    {
      path: ['store', 'currency'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Currency']
      }
    },
    {
      path: ['store', 'compare'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Compare']
      }
    },
    {
      path: ['store', 'category'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Category']
      }
    },
    {
      path: ['store', 'product'],
      module: {
        package: 'vuefront/lib',
        path: ['store', 'Product']
      }
    }
  ],
  components: {
    AccountAddress: {
      package: 'vuefront/lib',
      el: 'AccountAddress'
    },
    AccountAddressCreate: {
      package: 'vuefront/lib',
      el: 'AccountCreateAddress'
    },
    AccountAddressEdit: {
      package: 'vuefront/lib',
      el: 'AccountEditAddress'
    },
    AccountEdit: { package: 'vuefront/lib', el: 'AccountEdit' },
    AccountLogin: {
      package: 'vuefront/lib',
      el: 'AccountLogin'
    },
    AccountNew: { package: 'vuefront/lib', el: 'AccountNew' },
    AccountPassword: {
      package: 'vuefront/lib',
      el: 'AccountPassword'
    },
    AccountRegister: {
      package: 'vuefront/lib',
      el: 'AccountRegister'
    },
    Apollo: { package: 'vuefront/lib', el: 'Apollo' },
    Breadcrumbs: { package: 'vuefront/lib', el: 'Breadcrumbs' },
    Cart: { package: 'vuefront/lib', el: 'Cart' },
    Category: { package: 'vuefront/lib', el: 'Category' },
    CategoryBlog: {
      package: 'vuefront/lib',
      el: 'CategoryBlog'
    },
    Compare: { package: 'vuefront/lib', el: 'Compare' },
    Contact: { package: 'vuefront/lib', el: 'Contact' },
    ContactForm: { package: 'vuefront/lib', el: 'ContactForm' },
    ContactLocation: {
      package: 'vuefront/lib',
      el: 'ContactLocation'
    },
    ContactLocationGrid: {
      package: 'vuefront/lib',
      el: 'ContactLocationGrid'
    },
    Currency: { package: 'vuefront/lib', el: 'Currency' },
    Empty: { package: 'vuefront/lib', el: 'Empty' },
    Footer: { package: 'vuefront/lib', el: 'Footer' },
    Header: { package: 'vuefront/lib', el: 'Header' },
    HeaderCart: { package: 'vuefront/lib', el: 'HeaderCart' },
    HeaderCenter: {
      package: 'vuefront/lib',
      el: 'HeaderCenter'
    },
    HeaderLogo: { package: 'vuefront/lib', el: 'HeaderLogo' },
    HeaderSearch: {
      package: 'vuefront/lib',
      el: 'HeaderSearch'
    },
    HeaderSidebar: {
      package: 'vuefront/lib',
      el: 'HeaderSidebar'
    },
    HeaderTop: { package: 'vuefront/lib', el: 'HeaderTop' },
    Language: { package: 'vuefront/lib', el: 'Language' },
    Notification: {
      package: 'vuefront/lib',
      el: 'NotificationToast'
    },
    Page: { package: 'vuefront/lib', el: 'Page' },
    Pagination: { package: 'vuefront/lib', el: 'Pagination' },
    Position: { package: 'vuefront/lib', el: 'Position' },
    Post: { package: 'vuefront/lib', el: 'Post' },
    PostModule: { package: 'vuefront/lib', el: 'PostModule' },
    PostThumb: { package: 'vuefront/lib', el: 'PostThumb' },
    PostsGrid: { package: 'vuefront/lib', el: 'PostGrid' },
    Product: { package: 'vuefront/lib', el: 'Product' },
    Search: { package: 'vuefront/lib', el: 'Search' },
    Wishlist: { package: 'vuefront/lib', el: 'Wishlist' }
  },
  templates: {
    Header: { package: 'vuefront/lib', el: 'HeaderTemplate' },
    Footer: { package: 'vuefront/lib', el: 'FooterTemplate' },
    Layout: { package: 'vuefront/lib', el: 'LayoutTemplate' },
    Error: { package: 'vuefront/lib', el: 'ErrorTemplate' },
    Category: {
      package: 'vuefront/lib',
      el: 'CategoryTemplate'
    },
    CategoryBlog: {
      package: 'vuefront/lib',
      el: 'CategoryBlogTemplate'
    },
    Special: { package: 'vuefront/lib', el: 'SpecialTemplate' },
    Product: {
      package: 'vuefront/lib',
      el: 'tProduct'
    }
  },
  modules: {
    SearchProduct: {
      package: 'vuefront/lib',
      el: 'SearchProductModule'
    },
    SearchPost: {
      package: 'vuefront/lib',
      el: 'SearchPostModule'
    },
    LatestProduct: {
      package: 'vuefront/lib',
      el: 'LatestProductModule'
    },
    SpecialProduct: {
      package: 'vuefront/lib',
      el: 'SpecialProductModule'
    },
    LatestPost: {
      package: 'vuefront/lib',
      el: 'LatestPostModule'
    },
    RelatedProduct: {
      package: 'vuefront/lib',
      el: 'RelatedProductModule'
    },
    FeaturedProduct: {
      package: 'vuefront/lib',
      el: 'FeaturedProductModule'
    },
    Slideshow: {
      package: 'vuefront/lib',
      el: 'SlideshowModule'
    },
    Pages: { package: 'vuefront/lib', el: 'PagesModule' },
    StoreCategory: {
      package: 'vuefront/lib',
      el: 'CategoryModule'
    },
    BlogCategory: {
      package: 'vuefront/lib',
      el: 'CategoryBlogModule'
    },
    Account: { package: 'vuefront/lib', el: 'AccountModule' },
    AccountLinks: {
      package: 'vuefront/lib',
      el: 'AccountLinksModule'
    },
    ExtraLinks: {
      package: 'vuefront/lib',
      el: 'ExtraLinksModule'
    },
    Checkout: { package: 'vuefront/lib', el: 'CheckoutModule' },
    Menu: { package: 'vuefront/lib', el: 'MenuModule' },
    Search: { package: 'vuefront/lib', el: 'SearchModule' }
  },
  loaders: {
    CategoryBlog: {
      package: 'vuefront/lib',
      el: 'CategoryBlogLoader'
    },
    CategoryBlogPage: {
      package: 'vuefront/lib',
      el: 'CategoryBlogPageLoader'
    },
    Category: { package: 'vuefront/lib', el: 'CategoryLoader' },
    CategoryPage: {
      package: 'vuefront/lib',
      el: 'CategoryPageLoader'
    },
    Post: { package: 'vuefront/lib', el: 'PostLoader' },
    Common: { package: 'vuefront/lib', el: 'Loader' },
    PostModule: {
      package: 'vuefront/lib',
      el: 'PostModuleLoader'
    },
    PostThumb: {
      package: 'vuefront/lib',
      el: 'PostThumbLoader'
    },
    PostsGrid: {
      package: 'vuefront/lib',
      el: 'PostGridLoader'
    },
    ProductImage: {
      package: 'vuefront/lib',
      el: 'ProductImageLoader'
    },
    Product: { package: 'vuefront/lib', el: 'ProductLoader' },
    ProductModule: {
      package: 'vuefront/lib',
      el: 'ProductModuleLoader'
    },
    ProductThumb: {
      package: 'vuefront/lib',
      el: 'ProductThumbLoader'
    },
    ProductsGrid: {
      package: 'vuefront/lib',
      el: 'ProductGridLoader'
    },
    Reviews: { package: 'vuefront/lib', el: 'ReviewsLoader' },
    SpecialPage: {
      package: 'vuefront/lib',
      el: 'SpecialPageLoader'
    },
    Sort: { package: 'vuefront/lib', el: 'ProductSortLoader' },
    Rating: { package: 'vuefront/lib', el: 'RatingLoader' }
  }
}
