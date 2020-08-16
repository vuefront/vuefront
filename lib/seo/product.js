import omitDeepLodash from 'omit-deep-lodash';
import gql from 'graphql-tag';
export default (async ({
  client
}) => {
  let result = [];

  try {
    let res = await client.query({
      query: gql`
        {
          productsList(page: 1, size: -1) {
            content {
              id
              keyword
              url(url: "/store/product/_id")
            }
          }
        }
      `
    });
    res = omitDeepLodash(res, '__typename');
    result = res.data.productsList.content;
  } catch (e) {}

  return result;
});