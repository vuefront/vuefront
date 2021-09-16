import omitDeepLodash from "omit-deep-lodash";
import gql from "graphql-tag";
export default async ({ client }) => {
  let result = [];
  try {
    let res = await client.query({
      query: gql`
        {
          manufacturerList(page: 1, size: -1) {
            content {
              id
              url(url: "/store/manufacturer/_id")
            }
          }
        }
      `,
    });
    res = omitDeepLodash(res, "__typename");
    result = res.data.manufacturerList.content;
  } catch (e) {}

  return result;
};
