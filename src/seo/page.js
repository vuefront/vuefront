import omitDeepLodash from 'omit-deep-lodash'
import PageGql from '~/graphql/seo/page.graphql'
export default async ({ client }) => {
  let result = []
  try {
    let res = await client.query({ query: PageGql })
    res = omitDeepLodash(res, '__typename')
    result = res.data.pagesList.content
  } catch (e) {}

  return result
}
