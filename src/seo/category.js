import omitDeepLodash from 'omit-deep-lodash'
import CategoryGql from '~/graphql/seo/category.graphql'
export default async ({ client }) => {
  let result = []
  try {
    let res = await client.query({ query: CategoryGql })
    res = omitDeepLodash(res, '__typename')
    result = res.data.categoriesList.content
  } catch (e) {}

  return result
}
