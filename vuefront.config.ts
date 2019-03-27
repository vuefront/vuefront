export default {
  components: {
    ProductThumb: '~/components/elements/product-thumb',
    Product: '~/components/elements/product',
    ProductImage: '~/components/elements/product-image',
    PostThumb: '~/components/elements/post-thumb',
    Menu: '~/components/elements/menu',
    Nav: '~/components/elements/nav',
    ProductsGrid: '~/components/elements/products-grid',
    Category: '~/components/elements/category',
    PostsGrid: '~/components/elements/posts-grid',
    Notification: '~/components/elements/notification-alertify',
    Cart: '~/components/elements/cart',
    Post: '~/components/elements/post',
    ProductOption: '~/components/elements/product-option',
    Reviews: '~/components/elements/reviews'
  },
  moduleFilter: {},
  layouts: {
    '*': {
      columnLeft: [
        ['@dreamvention/moduleFilter', {
          attribute: true
        }],
        '@dreamvention/moduleFilter'
      ]
    },
    'category/:id': {}
  }
}
