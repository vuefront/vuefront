import gql from "graphql-tag";
import find from "lodash-es/find";
export const state = {
  cart: {
    products: [],
  },
};

export const getters = {
  get(state) {
    return state.cart;
  },
};

export const mutations = {
  setCart(state, cart) {
    state.cart = cart;
  },
};

export const actions = {
  async add(
    { commit, dispatch, rootGetters },
    { product, quantity = 1, options = [], redirect = false }
  ) {
    await dispatch(
      "apollo/mutate",
      {
        mutation: gql`
          mutation ($id: String, $quantity: Int, $options: [CartOption]) {
            addToCart(id: $id, quantity: $quantity, options: $options) {
              products {
                key
                quantity
                total
                option {
                  name
                  value
                  type
                }
                product {
                  id
                  name
                  model
                  price
                  image
                  imageLazy
                  extra {
                    name
                    value
                  }
                  manufacturer {
                    id
                    name
                    url(url: "/store/manufacturer/_id")
                  }
                }
              }
              total
            }
          }
        `,
        variables: {
          id: product.id,
          quantity,
          options,
        },
      },
      {
        root: true,
      }
    );

    if (!rootGetters["vuefront/error"]) {
      commit("setCart", rootGetters["apollo/get"].addToCart);
      commit(
        "notification/add",
        product.name +
          this.$i18n.t("elements.store.productThumb.notificationText"),
        { root: true }
      );
    } else {
      commit("notification/error", rootGetters["vuefront/error"].message, {
        root: true,
      });

      if (redirect) {
        this.$router.push("/store/product/" + product.id);
      }
    }
  },
  async update({ commit, dispatch, rootGetters }, { key, quantity }) {
    await dispatch(
      "apollo/mutate",
      {
        mutation: gql`
          mutation ($key: String, $quantity: Int) {
            updateCart(key: $key, quantity: $quantity) {
              products {
                key
                quantity
                total
                option {
                  name
                  value
                  type
                }
                product {
                  id
                  name
                  model
                  price
                  image
                  imageLazy
                  extra {
                    name
                    value
                  }
                  manufacturer {
                    id
                    name
                    url(url: "/store/manufacturer/_id")
                  }
                }
              }
              total
            }
          }
        `,
        variables: {
          key,
          quantity,
        },
      },
      {
        root: true,
      }
    );
    if (!rootGetters["vuefront/error"]) {
      commit("setCart", rootGetters["apollo/get"].updateCart);
    }
  },
  async removeByProductId({ dispatch, getters }, { productId }) {
    const product = find(
      getters.get.products,
      (o) => o.product.id === productId
    );
    if (product) {
      await dispatch("remove", { key: product.key });
    }
  },
  async remove({ commit, dispatch, rootGetters }, { key }) {
    await dispatch(
      "apollo/mutate",
      {
        mutation: gql`
          mutation ($key: String) {
            removeCart(key: $key) {
              products {
                key
                quantity
                total
                option {
                  name
                  value
                  type
                }
                product {
                  id
                  name
                  model
                  price
                  image
                  imageLazy
                  extra {
                    name
                    value
                  }
                  manufacturer {
                    id
                    name
                    url(url: "/store/manufacturer/_id")
                  }
                }
              }
              total
            }
          }
        `,
        variables: {
          key,
        },
      },
      {
        root: true,
      }
    );

    if (!rootGetters["vuefront/error"]) {
      commit("setCart", rootGetters["apollo/get"].removeCart);
    }
  },
  async load({ commit, dispatch, rootGetters }) {
    try {
      const { data } = await this.$vfapollo.query({
        query: gql`
          {
            cart {
              products {
                key
                quantity
                total
                option {
                  name
                  value
                  type
                }
                product {
                  id
                  name
                  model
                  price
                  image
                  imageLazy
                  extra {
                    name
                    value
                  }
                  manufacturer {
                    id
                    name
                    url(url: "/store/manufacturer/_id")
                  }
                }
              }
              total
            }
          }
        `,
      });

      commit("setCart", data.cart);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true,
      });
    }
  },
};
