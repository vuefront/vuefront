import {Component, Vue} from 'nuxt-property-decorator'
import {isUndefined, isString, isArray, isEmpty} from 'lodash'

@Component
export class BaseModule extends Vue {
  checkModules(position: string) {
    for (const route in (this as any).$vuefront.options) {
      const layout = (this as any).$vuefront.options[route]
      let regexRoute = route.replace('*', '.*')
      regexRoute = regexRoute.replace('//', '\\//')
      const regex = new RegExp('^' + regexRoute + '$', 'i')
      const currentRoute = this.$route.path !== '' ? this.$route.path : '/'

      if (regex.test(currentRoute) && !isUndefined(layout[position])) {
        if(!isEmpty(layout[position])) {
          return true
        }
      }
    }
    return false
  }
}