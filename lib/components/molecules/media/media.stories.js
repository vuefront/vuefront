import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMMedia from './media.vue';
import vfMMediaAside from './aside.vue';
import vfMMediaBody from './body.vue';
Vue.component('vfMMedia', vfMMedia);
Vue.component('vfMMediaAside', vfMMediaAside);
Vue.component('vfMMediaBody', vfMMediaBody);
storiesOf('molecule|!!!Media', module).add('default', function () {
  return {
    components: {
      vfMMedia: vfMMedia,
      vfMMediaAside: vfMMediaAside,
      vfMMediaBody: vfMMediaBody
    },
    template: "<div style=\"width:500px\">\n    <vf-m-media>\n        <template v-slot:aside>\n            <vf-a-image src=\"https://opencart.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-1200x750.jpg\" width=\"150\" />\n        </template>\n        <h5 class=\"mt-0\">Media heading</h5>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n    </vf-m-media></div>"
  };
}, {
  info: {}
}).add('!!!with components', function () {
  return {
    components: {
      vfMMedia: vfMMedia,
      vfMMediaAside: vfMMediaAside,
      vfMMediaBody: vfMMediaBody
    },
    template: "<div style=\"width:500px\">\n    <vf-m-media>\n        <vf-m-media-aside>\n            <vf-a-image src=\"https://opencart.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-1200x750.jpg\" width=\"150\" />\n        </vf-m-media-aside>\n        <vf-m-media-body>\n            <h5 class=\"mt-0\">Media heading</h5>\n            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n        </vf-m-media-body>\n    </vf-m-media>\n    </div>"
  };
}, {
  info: {
    summary: "Bug: The components do not work properly. the aside component gets rendered inside the body."
  }
});