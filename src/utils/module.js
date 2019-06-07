import isUndefined from 'lodash/isUndefined'
import isEmpty from 'lodash/isEmpty'

export const BaseModule = {
  methods:  {
    checkModules(position) {
      for (const route in this.$vuefront.options.layouts) {
        const layout = this.$vuefront.options.layouts[route]
        let regexRoute = route.replace('*', '.*')
        regexRoute = regexRoute.replace('//', '\\//')
        const regex = new RegExp('^' + regexRoute + '$', 'i')
        let currentRoute = this.$route.path !== '' ? this.$route.path : '/'
        if(!isEmpty(this.$vuefront.params.url)) {
          currentRoute = this.$vuefront.params.url
        }

        currentRoute = currentRoute.replace('/amp', '')

        currentRoute = currentRoute !== '' ? currentRoute : '/'

        if (regex.test(currentRoute) && !isUndefined(layout[position])) {
          if(!isEmpty(layout[position])) {
            return true
          }
        }
      }
      return false
    }
  }
}

