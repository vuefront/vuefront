import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMMedia from './media.vue';
import vfMMediaAside from './aside.vue';
import vfMMediaBody from './body.vue';

Vue.component('vfMMedia', vfMMedia)
Vue.component('vfMMediaAside', vfMMediaAside)
Vue.component('vfMMediaBody', vfMMediaBody)

storiesOf('molecule|!!!Media', module)
    .add(
        'default',
        () => ({
            components: { vfMMedia, vfMMediaAside, vfMMediaBody },
            template: `<div style="width:500px">
    <vf-m-media>
        <template v-slot:aside>
            <vf-a-image src="https://opencart.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-1200x750.jpg" width="150" />
        </template>
        <h5 class="mt-0">Media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </vf-m-media>
    </div>`
        }), {
            info: {}
        }
    )

.add(
    '!!!with components',
    () => ({
        components: { vfMMedia, vfMMediaAside, vfMMediaBody },
        template: `<div style="width:500px">
    <vf-m-media noBody>
        <vf-m-media-aside class="mr-3">
            <vf-a-image src="https://opencart.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-1200x750.jpg" width="150" />
        </vf-m-media-aside>
        <vf-m-media-body>
            <h5 class="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </vf-m-media-body>
    </vf-m-media>

    <vf-m-media noBody>
        <vf-m-media-body>
            <h5 class="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </vf-m-media-body>
        <vf-m-media-aside class="ml-3">
            <vf-a-image src="https://opencart.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-1200x750.jpg" width="150" />
        </vf-m-media-aside>
    </vf-m-media>
    </div>`
    }), {
        info: {
            summary: `Bug fixed: The components do not work properly. the aside component gets rendered inside the body.`
        }
    }
)