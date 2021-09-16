import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
import { Manufacturer, ManufacturerResult } from "vuefront-api";

export type State = {
  manufacturer: Manufacturer;
  entities: ManufacturerResult;
  mode: string;
};

export const state: State = {
  manufacturer: {},
  entities: {},
  mode: "grid",
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.manufacturer;
  },
  list(state) {
    return state.entities;
  },
  mode(state) {
    return state.mode;
  },
};

export const mutations: MutationTree<State> = {
  setEntities(state, payload) {
    state.entities = payload;
  },
  setManufacturer(state, manufacturer) {
    state.manufacturer = manufacturer;
  },
  setMode(state, payload) {
    state.mode = payload;
  },
};

export const actions: ActionTree<State, RootState> = {};
