import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import card from './card.vue';
import cardBody from './card-body.vue';
import cardFooter from './card-footer.vue';

Vue.component('vfMCard', card)
Vue.component('vfMCardBody', cardBody)
Vue.component('vfMCardFooter', cardFooter)

storiesOf('molecule|!!!Card', module)
    .add(
        'default',
        () => ({
            components: { vfMCard: card, vfMCardBody: cardBody, vfMCardFooter: cardFooter },
            template: `<vf-m-card>
            <vf-m-card-body>Card body</vf-m-card-body>
            <vf-m-card-footer>This is an alert message</vf-m-card-footer>
            </vf-m-card>`
        }), {
            info: {}
        }
    )
    .add(
        'no body',
        () => ({
            components: { vfMCard: card, vfMCardBody: cardBody, vfMCardFooter: cardFooter },
            template: `<vf-m-card noBody>
            <vf-m-card-body>Card body</vf-m-card-body>
            <vf-m-card-footer>This is an alert message</vf-m-card-footer>
            </vf-m-card>`
        }), {
            info: {}
        }
    )
    .add(
        '!!!color',
        () => ({
            components: { vfMCard: card, vfMCardBody: cardBody, vfMCardFooter: cardFooter },
            template: `<vf-m-card bodyBgColor="primary">
            <vf-m-card-body>Card body</vf-m-card-body>
            <vf-m-card-footer>This is an alert message</vf-m-card-footer>
            </vf-m-card>`
        }), {
            info: {
                summary: `<span style="color:red">Important!</span> Background Colors Need Refactoring`,
            }
        }
    )