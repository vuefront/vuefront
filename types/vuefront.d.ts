// vuefront.d.ts
import { Store } from "vuex";
import { ComponentCustomProperties, App } from "vue";
import { Router, RouteLocationNormalizedLoaded } from "vue-router";
import { ICookie } from "cookie-universal";
declare module "@vue/runtime-core" {
  // provide typings for `this.$vuefront`
  interface App {
    i18n: any;
  }
  interface ComponentCustomProperties {
    $router: Router;
    $route: RouteLocationNormalizedLoaded;
    $vuefront: any;
    $vfapollo: any;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    app: App;
    $cookies: ICookie;
    $i18n: any;
    $router: Router;
    $route: RouteLocationNormalizedLoaded;
    $vuefront: any;
    $vfapollo: any;
  }
}
