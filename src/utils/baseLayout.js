import {mapGetters} from 'vuex'
export const BaseLayout = {
  data() {
    this.$store.dispatch('position/loadModules', {position: this.name})
    this.$store.commit('position/setParams', this.$vuefront.params)
    this.$store.commit('position/setRoute', this.$route)
    return {}
  },
  computed: {
    ...mapGetters({
      modulesList: 'position/modules'
    }),
    modules() {
      return this.modulesList(this.name)
    },
  },
}
