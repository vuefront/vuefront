import omitDeepLodash from "omit-deep-lodash";
import gql from "graphql-tag";
export default async ({ client }) => {
  let result = [];
  try {
    let res = await client.query({
      query: gql`
        {
          categoriesList(page: 1, size: -1) {
            content {
              id
              url(url: "/store/category/_id")
            }
          }
        }
      `,
    });
    res = omitDeepLodash(res, "__typename");
    result = res.data.categoriesList.content;
  } catch (e) {}

  return result;
};
