import omitDeepLodash from 'omit-deep-lodash'
import ProductGql from '~/graphql/seo/product.graphql'
export default async ({ client }) => {
  let result = []
  try {
    let res = await client.query({ query: ProductGql })
    res = omitDeepLodash(res, '__typename')
    result = res.data.productsList.content
  } catch (e) {}

  return result
}
