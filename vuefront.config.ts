export default {
  components: {
    ProductThumb: '~/components/elements/store/productThumb',
    Product: '~/components/elements/store/product',
    ProductImage: '~/components/elements/store/productImage',
    PostThumb: '~/components/elements/blog/postThumb',
    Menu: '~/components/elements/navMenu',
    Nav: '~/components/elements/nav',
    ProductsGrid: '~/components/elements/store/productsGrid',
    Category: '~/components/elements/store/category',
    CategoryBlog: '~/components/elements/blog/categoryBlog',
    PostsGrid: '~/components/elements/blog/postsGrid',
    Notification: '~/components/elements/notificationAlertify',
    Cart: '~/components/elements/store/cart',
    Post: '~/components/elements/blog/post',
    ProductOption: '~/components/elements/store/productOption',
    ProductAttribute: '~/components/elements/store/productAttribute',
    Reviews: '~/components/elements/reviews',
    Pagination: '~/components/elements/pagination',
    Sort: '~/components/elements/sort',
    NavSearch: '~/components/elements/navSearch',
    Search: '~/components/elements/search',
    Empty: '~/components/elements/empty',
    Breadcrumbs: '~/components/elements/breadcrumbs'
  },
  partials: {
    Menu: '~/components/partials/menu',
  },
  modules: {
    SearchProduct: '~/components/modules/searchProduct',
    SearchPost: '~/components/modules/searchPost',
    LatestProduct: '~/components/modules/latestProduct',
    SpecialProduct: '~/components/modules/specialProduct',
    LatestPost: '~/components/modules/latestPost',
    RelatedProduct: '~/components/modules/relatedProduct',
    FeaturedProduct: '~/components/modules/featuredProduct',
    Slideshow: '~/components/modules/slideshow'
  },
  layouts: {
    '/': {
      contentTop: [
        ['Slideshow', {
          items: [
            'http://ecomjewellery.com/upload/product/62/62f14fa84abb764645c87fb206266b06.jpg',
            'http://www.digitalbaazaar.com/image/cache/catalog/macbook-pro-1140x380.jpg',
            'http://www.fundoomart.com/image/cache/catalog/device%204-1140x380.jpg',
          ]
        }],
        ['FeaturedProduct', {
          ids: [43, 40, 42, 30]
        }],
        'LatestProduct',
        'SpecialProduct',
        'LatestPost',
      ]
    },
    '/search/*': {
      contentBottom: [
        'SearchProduct',
        'SearchPost'
      ]
    },
    '/store/category*': {
      contentBottom: [
        'LatestProduct'
      ]
    },
    '/blog/category*': {
      contentBottom: [
        'LatestPost'
      ]
    },
    '/store/product/*': {
      contentBottom: [
        'RelatedProduct'
      ]
    },
    '/blog/post*': {
      columnRight: [
        ['LatestPost', {
          column: true
        }]
      ]
    }
  }
}
