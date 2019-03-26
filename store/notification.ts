import {NotificationState} from '~/types'
import {MutationTree, GetterTree} from 'vuex'

export const state = (): NotificationState => ({
  message: ''
})

export const getters: GetterTree<NotificationState, NotificationState> = {
  get(state: NotificationState): string {
    return state.message
  }
}

export const mutations: MutationTree<NotificationState> = {
  add(state: NotificationState, message: string) {
    state.message = message
  }
}