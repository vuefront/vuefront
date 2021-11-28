import gql from "graphql-tag";
export const state = {
  compare: []
};
export const getters = {
  get(state) {
    return state.compare;
  }

};
export const mutations = {
  setCompare(state, compare) {
    state.compare = compare;
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
      product
    } = _ref2;
    await dispatch("apollo/mutate", {
      mutation: gql`
          mutation ($id: Int) {
            addToCompare(id: $id) {
              id
              name
              shortDescription
              model
              price
              special
              stock
              image
              imageLazy
            }
          }
        `,
      variables: {
        id: Number(product.id)
      }
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setCompare", rootGetters["apollo/get"].addToCompare);
      commit("notification/add", product.name + this.$i18n.global.t("elements.store.productThumb.compareNotificationText"), {
        root: true
      });
    }
  },

  async remove(_ref3, _ref4) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref3;
    let {
      id
    } = _ref4;
    await dispatch("apollo/mutate", {
      mutation: gql`
          mutation ($id: String) {
            removeCompare(id: $id) {
              id
              name
              shortDescription
              model
              price
              special
              stock
              image
              imageLazy
            }
          }
        `,
      variables: {
        id
      }
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setCompare", rootGetters["apollo/get"].removeCompare);
    }
  }

};
//# sourceMappingURL=compare.mjs.map