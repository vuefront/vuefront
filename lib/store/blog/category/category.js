export const state = () => ({
  category: {}
});
export const getters = {
  get(state) {
    return state.category;
  }

};
export const mutations = {
  setCategory(state, category) {
    state.category = category;
  }

};
export const actions = {};