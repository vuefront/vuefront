export default {
  components: {
    ProductThumb: '~/components/elements/product-thumb',
    Product: '~/components/elements/product',
    ProductImage: '~/components/elements/product-image',
    PostThumb: '~/components/elements/post-thumb',
    Menu: '~/components/elements/nav-menu',
    Nav: '~/components/elements/nav',
    ProductsGrid: '~/components/elements/products-grid',
    Category: '~/components/elements/category',
    CategoryBlog: '~/components/elements/category-blog',
    PostsGrid: '~/components/elements/posts-grid',
    Notification: '~/components/elements/notification-alertify',
    Cart: '~/components/elements/cart',
    Post: '~/components/elements/post',
    ProductOption: '~/components/elements/product-option',
    Reviews: '~/components/elements/reviews'
  },
  partials: {
      Menu: '~/components/partials/menu',
  },
  modules: {
    LatestProduct: '~/components/modules/latestProduct',
    LatestPost: '~/components/modules/latestPost',
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
        'LatestProduct',
        'LatestPost',
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
    '/blog/post*': {
      columnRight: [
        ['LatestPost', {
          column: true
        }]
      ]
    }
  }
}
