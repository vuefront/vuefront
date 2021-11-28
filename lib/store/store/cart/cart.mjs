import gql from "graphql-tag";
import { find } from "lodash";
export const state = {
  cart: {
    products: []
  }
};
export const getters = {
  get(state) {
    return state.cart;
  }

};
export const mutations = {
  setCart(state, cart) {
    state.cart = cart;
  }

};
export const actions = {
  async add(_ref, _ref2) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref;
    let {
      product,
      quantity = 1,
      options = [],
      redirect = false
    } = _ref2;
    await dispatch("apollo/mutate", {
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
        options
      }
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setCart", rootGetters["apollo/get"].addToCart);

      if (!rootGetters["vuefront/sidebarCart"]) {
        commit("vuefront/toggleSidebarCart", {}, {
          root: true
        });
      }
    } else {
      commit("notification/error", rootGetters["vuefront/error"], {
        root: true
      });

      if (redirect) {
        this.$router.push("/store/product/" + product.id);
      }
    }
  },

  async update(_ref3, _ref4) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref3;
    let {
      key,
      quantity
    } = _ref4;
    await dispatch("apollo/mutate", {
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
        quantity
      }
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setCart", rootGetters["apollo/get"].updateCart);
    }
  },

  async removeByProductId(_ref5, _ref6) {
    let {
      dispatch,
      getters
    } = _ref5;
    let {
      productId
    } = _ref6;
    const product = find(getters.get.products, o => o.product.id === productId);

    if (product) {
      await dispatch("remove", {
        key: product.key
      });
    }
  },

  async remove(_ref7, _ref8) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref7;
    let {
      key
    } = _ref8;
    await dispatch("apollo/mutate", {
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
        key
      }
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setCart", rootGetters["apollo/get"].removeCart);
    }
  },

  async load(_ref9) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref9;

    try {
      const {
        data
      } = await this.$vfapollo.query({
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
        `
      });
      commit("setCart", data.cart);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true
      });
    }
  }

};
//# sourceMappingURL=cart.mjs.map