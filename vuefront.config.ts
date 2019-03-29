export default {
  components: {
    ProductThumb: '~/components/elements/store/product-thumb',
    Product: '~/components/elements/store/product',
    ProductImage: '~/components/elements/store/product-image',
    PostThumb: '~/components/elements/blog/post-thumb',
    Menu: '~/components/elements/nav-menu',
    Nav: '~/components/elements/nav',
    ProductsGrid: '~/components/elements/store/products-grid',
    Category: '~/components/elements/store/category',
    CategoryBlog: '~/components/elements/blog/category-blog',
    PostsGrid: '~/components/elements/blog/posts-grid',
    Notification: '~/components/elements/notification-alertify',
    Cart: '~/components/elements/store/cart',
    Post: '~/components/elements/blog/post',
    ProductOption: '~/components/elements/store/product-option',
    ProductAttribute: '~/components/elements/store/product-attribute',
    Reviews: '~/components/elements/reviews',
    Pagination: '~/components/elements/pagination'
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
