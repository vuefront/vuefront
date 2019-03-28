import {Component, Vue} from 'nuxt-property-decorator'
import {isUndefined, isString, isArray} from 'lodash'

@Component
export class BaseLayout extends Vue {
  position: string = ''
  get modules() {
    let result: any = []
    for (const route in (this as any).$vuefront.options) {
      const layout = (this as any).$vuefront.options[route]
      let regexRoute = route.replace('*', '.*')
      regexRoute = regexRoute.replace('//', '\\//')
      const regex = new RegExp('^' + regexRoute + '$', 'i')
      const currentRoute = this.$route.path !== '' ? this.$route.path : '/'

      if (regex.test(currentRoute) && !isUndefined(layout[this.position])) {
        for (const key in layout[this.position]) {
          if (isString(layout[this.position][key])) {
            result = [...result, {
              component: 'vfModule' + layout[this.position][key],
              props: {}
            }]
          } else {
            result = [...result, {
              component: 'vfModule' + layout[this.position][key][0],
              props: layout[this.position][key][1]
            }]
          }
        }
      }
    }
    return result
  }
}