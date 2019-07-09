import { isUndefined } from 'lodash';

const state = () => ({
  entities: {},
  loaded: {}
});
const getters = {
  list(state) {
    return id => !isUndefined(state.entities[id])? state.entities[id]: []
  },
  loaded(state) {
    return (id) => !isUndefined(state.loaded[id])? state.loaded[id] : false
  }
};
const mutations = {
  setEntities(state, {id, items}) {
    state.entities[id] = items;
  },
  addEntities(state, {id, items}) {
    state.entities[id] = [...state.entities[id], ...items];
  },
  setLoaded(state, {id, loaded}) {
    state.loaded[id] = loaded;
  }
};

export { getters, mutations, state };
