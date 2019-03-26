import {MenuState, MenuItem} from '~/types'
import {MutationTree, GetterTree} from 'vuex'

export const state = (): MenuState => ({
  entities: []
})

export const getters: GetterTree<MenuState, MenuState> = {
  list(state: MenuState): Array<MenuItem> {
    return state.entities
  }
}

export const mutations: MutationTree<MenuState> = {
  setEntities(state: MenuState, items: Array<MenuItem>): void {
    state.entities = items
  },
  addEntities(state: MenuState, items: Array<MenuItem>) {
    state.entities = [...state.entities, ...items]
  }
}