import { isUndefined } from "lodash";
export const state = () => ({
    items: null
})

export const getters = {
    get(state) {
        return state.items
    }
}

export const mutations = {
    setItems(state, payload) {
        state.items = payload
    }
}

export const actions = {
    async load({ dispatch, rootGetters, commit }, contactData) {
        let breadcrumbs = [];
        console.log(contactData);
        // if (contactData && contactData.length > 0) {
        //     breadcrumbs = contactData;
        // }
        console.log('eee');
        if (this.$router.currentRoute.matched.length > 0) {

            const component = this.$router.currentRoute.matched[0].instances.default;
            if (!isUndefined(component) &&
                !isUndefined(component.$options.breadcrumbs)
            ) {
                const result = component.$options.breadcrumbs.call(component);
                //
                breadcrumbs = [
                    ...breadcrumbs,
                    ...result
                ];
            }
        }

        commit('setItems', breadcrumbs);
    }
}