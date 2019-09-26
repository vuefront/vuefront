import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './contact.vue';


storiesOf('molecule|Contact', module)
    .add(
        'default',
        () => ({
            components: { vfMContact: component },
            template: `<vf-m-contact :contact="contact"/>`,
            data() {
                return {
                    contact: {
                        address: '12 East 5 Street',
                        email: "hello@vuefront.com",
                        telephone: "646.454.3232",
                        fax: "646.454.3232",
                        comment: "Simple comment"
                    }
                }
            }
        }), {
            info: {}
        }
    )