import Vue from 'vue';
// import Vuex from 'vuex'
import { configure, addDecorator } from '@storybook/vue';
import "vuefront/assets/scss/main.scss";
import centered from '@storybook/addon-centered/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueI18n from 'vue-i18n';
import * as messages from 'vuefront/lib/locales/en-gb';
import placeholder from "vuefront/assets/img/placeholder.png"

// Vue.use(Vuex)
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'en', // set locale
    messages: { en: {...messages } }, // set locale messages
})

addDecorator(withInfo);
addDecorator(centered);
addDecorator(() => {
    return {
        template: '<story/>',
        i18n
    }
});

Vue.prototype.$vuefront = {
    get isAuth() {
        return false;
    },

    get isAMP() {
        return false;
    },
    get options() {
        return {
            image: {
                placeholder: placeholder,
                categoryThumb: {
                    width: 300,
                    height: 180
                },
                product: {
                    width: 825,
                    height: 825

                },
                productThumb: {
                    width: 300,
                    height: 300
                },
                productThumbInline: {
                    width: 200,
                    height: 200
                },
                post: {
                    width: 825, //10x6
                    height: 495
                },
                postThumb: {
                    width: 300, //10x6
                    height: 180
                },
                postThumbInline: {
                    width: 200, //10x6
                    height: 120
                }
            }
        }
    }
}


Vue.component('RouterLink', {
    props: ['to'],
    methods: {
        log() {
            action('link target')(this.to)
        },
    },
    template: '<a href="#"  @click="log()"><slot>RouterLink</slot></a>',
})

Vue.component('NuxtLink', {
    props: ['to'],
    methods: {
        log() {
            action('link target')(this.to)
        },
    },
    template: '<div @click="log()"><slot>NuxtLink</slot></div>',
})


// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);