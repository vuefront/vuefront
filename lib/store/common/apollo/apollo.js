// import omitDeepLodash from 'omit-deep-lodash'
import Axios from 'axios';
import FormData from 'form-data';
import { print } from 'graphql/language/printer';
export const state = () => ({
  data: {},
  prefetchData: {}
});
export const getters = {
  get(state) {
    return state.data;
  },

  prefetchData(state) {
    return state.prefetchData;
  }

};
export const mutations = {
  setData(state, payload) {
    state.data = { ...state.data,
      ...payload.data
    };
  },

  setPrefetchData(state, {
    key,
    data
  }) {
    state.prefetchData[key] = data;
  }

};
export const actions = {
  async query({
    commit
  }, options) {
    try {
      // const variables = omitDeepLodash(options.variables, '__typename')
      let {
        data
      } = await this.$axios.post(process.env.API_URL, {
        query: typeof options.query === 'string' ? options.query : print(options.query),
        variables: options.variables
      }); // data = omitDeepLodash(data, '__typename')

      commit('vuefront/setError', false, {
        root: true
      });
      commit('setData', data);
    } catch (e) {
      console.log(e);
      commit('vuefront/setError', e.graphQLErrors ? e.graphQLErrors[0] : e, {
        root: true
      });
    }
  },

  async mutate({
    commit
  }, options) {
    try {
      // const variables = omitDeepLodash(options.variables, '__typename')
      let {
        data
      } = await this.$axios.post(process.env.API_URL, {
        mutation: typeof options.query === 'string' ? options.query : print(options.query),
        variables: options.variables
      });

      if (!data.errors) {
        commit('vuefront/setError', false, {
          root: true
        });
        commit('setData', data);
      } else {
        commit('vuefront/setError', data.errors, {
          root: true
        });
      } // this.$vfapollo.clearStore()

    } catch (e) {
      commit('vuefront/setError', e.graphQLErrors ? e.graphQLErrors[0] : e, {
        root: true
      });
    }
  },

  async upload({
    commit
  }, options) {
    try {
      const variables = omitDeepLodash(options.variables, '__typename');
      let o = {
        query: options.mutation.loc.source.body,
        variables
      };
      let map = {
        '0': 'file'
      };
      let i = 0;
      let fd = new FormData();
      fd.append('operations', JSON.stringify(o));

      for (const key in variables) {
        if (typeof variables[key] === 'object' && variables[key] instanceof File) {
          map[i] = key;
          fd.append(i, variables[key]);
          i++;
        }
      }

      fd.append('map', JSON.stringify(map));
      const axios = Axios.create({
        withCredentials: true
      });
      let {
        data
      } = await axios.post(this.$vuefront.baseURL, fd);

      if (!data.errors) {
        commit('vuefront/setError', false, {
          root: true
        });
        commit('setData', data);
      } else {
        commit('vuefront/setError', res.errors, {
          root: true
        });
      }
    } catch (e) {
      commit('vuefront/setError', e.graphQLErrors ? e.graphQLErrors[0] : e, {
        root: true
      });
    }
  }

};