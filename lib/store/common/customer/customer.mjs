import gql from "graphql-tag";
export const state = {
  customer: {},
  auth: false,
  token: false
};
export const getters = {
  get(state) {
    return state.customer;
  },

  auth(state) {
    return state.auth;
  },

  token(state) {
    return state.token;
  }

};
export const mutations = {
  setCustomer(state, payload) {
    state.customer = payload;
  },

  setAuth(state, payload) {
    state.auth = payload;
  },

  setToken(state, payload) {
    state.token = payload;
  }

};
export const actions = {
  async login(_ref, customerData) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref;
    await dispatch("apollo/mutate", {
      mutation: gql`
          mutation ($email: String, $password: String) {
            accountLogin(email: $email, password: $password) {
              token
              customer {
                id
                firstName
                lastName
                email
              }
            }
          }
        `,
      variables: customerData
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      const {
        accountLogin
      } = rootGetters["apollo/get"];
      commit("setCustomer", accountLogin.customer);
      commit("setToken", accountLogin.token);
      this.$cookies.set("token", accountLogin.token);
      commit("setAuth", true);
      return true;
    }

    return false;
  },

  async logout(_ref2) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref2;
    await dispatch("apollo/mutate", {
      mutation: gql`
          mutation {
            accountLogout {
              status
            }
          }
        `
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setCustomer", {});
      commit("setToken", null);
      this.$cookies.remove("token");
      commit("setAuth", rootGetters["apollo/get"].accountLogout.status);
    }
  },

  async edit(_ref3, customerData) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref3;
    await dispatch("apollo/mutate", {
      mutation: gql`
          mutation ($customer: CustomerInput) {
            accountEdit(customer: $customer) {
              id
              firstName
              lastName
              email
            }
          }
        `,
      variables: {
        customer: customerData
      }
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setCustomer", rootGetters["apollo/get"].accountEdit);
      return true;
    }

    return false;
  },

  async editPassword(_ref4, _ref5) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref4;
    let {
      password
    } = _ref5;
    await dispatch("apollo/mutate", {
      mutation: gql`
          mutation ($password: String) {
            accountEditPassword(password: $password) {
              id
              firstName
              lastName
              email
            }
          }
        `,
      variables: {
        password
      }
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setCustomer", rootGetters["apollo/get"].accountEditPassword);
      return true;
    }

    return false;
  },

  async register(_ref6, customerData) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref6;
    await dispatch("apollo/mutate", {
      mutation: gql`
          mutation ($customer: CustomerInput) {
            accountRegister(customer: $customer) {
              id
              firstName
              lastName
              email
            }
          }
        `,
      variables: {
        customer: customerData
      }
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setCustomer", rootGetters["apollo/get"].accountRegister);
      return true;
    }

    return false;
  },

  async checkLogged(_ref7) {
    let {
      commit
    } = _ref7;

    try {
      const {
        data
      } = await this.$vfapollo.query({
        query: gql`
          {
            accountCheckLogged {
              status
              customer {
                id
                lastName
                firstName
                email
              }
            }
          }
        `
      });

      if (data.accountCheckLogged && data.accountCheckLogged.customer) {
        commit("setCustomer", data.accountCheckLogged.customer);
        commit("setAuth", data.accountCheckLogged.status); // if (!rootGetters["apollo/get"].accountCheckLogged.status) {
        //   commit("setToken", null);
        // }
      }
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true
      });
    }
  }

};
//# sourceMappingURL=customer.mjs.map