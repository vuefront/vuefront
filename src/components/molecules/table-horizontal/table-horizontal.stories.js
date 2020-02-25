import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMTableHorizontal from './table-horizontal.vue';
import './table-horizontal.scss';


storiesOf('molecule|Table Horizontal', module)
    .addDecorator((story) => ({
        template: `<div style="width:500px"><story/></div>`
    }))
    .add(
        'default',
        () => ({
            components: { vfMTableHorizontal },
            template: `<vf-m-table-horizontal :items="items" :fields="fields">
                <template #image="item">
                    <vf-m-product-thumb-image :product="item" width="80" height="80" />
                </template>
            </vf-m-table-horizontal>`,
            data() {
                return {
                    fields: [{
                            key: "name",
                            label: "Name"
                        },
                        {
                            key: "image",
                            label: "Image"
                        },
                        {
                            key: "price",
                            label: "Price"
                        },
                        {
                            key: "model",
                            label: "Model"
                        },
                        {
                            key: "stock",
                            label: "Stock"
                        },
                        {
                            key: "shortDescription",
                            label: "Description"
                        }
                    ],
                    items: [{
                            "id": "48",
                            "name": "iPod Classic",
                            "shortDescription": "More room to move.\r\n\t\t\r\n\t\t\tWith 80GB or 160GB of storage and up to 40 hours of battery life, the new..",
                            "model": "product 20",
                            "price": "95.72\u20ac",
                            "special": "",
                            "stock": true,
                            "image": "https:\/\/opencart.vuefront.com\/image\/cache\/catalog\/demo\/ipod_classic_1-228x228.jpg",
                            "imageLazy": "https:\/\/opencart.vuefront.com\/image\/cache\/catalog\/demo\/ipod_classic_1-10x10.jpg",
                            "__typename": "Product"
                        },
                        {
                            "id": "47",
                            "name": "HP LP3065",
                            "shortDescription": "Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel Mon..",
                            "model": "Product 21",
                            "price": "95.72\u20ac",
                            "special": "",
                            "stock": true,
                            "image": "https:\/\/opencart.vuefront.com\/image\/cache\/catalog\/demo\/hp_1-228x228.jpg",
                            "imageLazy": "https:\/\/opencart.vuefront.com\/image\/cache\/catalog\/demo\/hp_1-10x10.jpg",
                            "__typename": "Product"
                        }
                    ]
                }
            }
        }), {
            info: {}
        }
    )