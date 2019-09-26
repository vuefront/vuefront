import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './category-thumb.vue';
import loader from './category-thumb.loader.vue';



storiesOf('molecule|Category Thumb', module)
    .add(
        'default',
        () => ({
            components: { vfMCategoryThumb: component },
            template: `<vf-m-category-thumb :category="category"/>`,
            data() {
                return {
                    category: {
                        keyword: "test",
                        image: "https://via.placeholder.com/150x100",
                        imageLazy: "https://via.placeholder.com/150x100",
                        name: "Shoes"
                    }
                }
            }
        }), {
            info: {}
        }
    )
    .add(
        'loading',
        () => ({
            components: { vfLCategoryThumb: loader },
            template: `<div style="width:150px">
            <vf-l-category-thumb/>
            </div>`
        }), {
            info: {}
        }
    )
    .add(
        'loaded',
        () => ({
            components: { vfMCategoryThumb: component, vfLCategoryThumb: loader },
            template: `<div style="width:150px">
            <vf-m-category-thumb v-if="loaded" :category="category"/>
            <vf-l-category-thumb v-else />
            </div>`,
            data() {
                return {
                    category: {
                        keyword: "test",
                        image: "https://via.placeholder.com/150x100",
                        imageLazy: "https://via.placeholder.com/1",
                        name: "Shoes"
                    },
                    loaded: false
                }
            },
            mounted() {
                setTimeout(() => {
                    this.loaded = true;
                }, 1500);
            }
        }), {
            info: {}
        }
    )