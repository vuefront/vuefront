import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMAccountMenu from './account-menu.vue';

import "vuefront/src/components/organisms/header/header.scss";

// import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

Vue.component('vfMAccountMenu', vfMAccountMenu);


storiesOf('molecule|!!!Account Menu', module)
    // .addDecorator(withKnobs)
    .add(
        'default',
        () => ({
            components: { vfMAccountMenu },
            template: `<vf-m-account-menu />`,
            // props: {
            //     isDisabled: {
            //         default: boolean('Disabled', false)
            //     },
            //     text: {
            //         default: text('Text', 'Hello Storybook')
            //     }
            // }
        }), {
            info: {},
        }
    )
    .add(
        '!!!in o-header',
        () => ({
            components: { vfMAccountMenu },
            template: `<section class="vf-o-header">
                <vf-m-account-menu />
            </section>`
        }), {
            info: {
                summary: `<span style="color:red">Important!</span> Needs refactoring becuase requires vf-o-header class (import header.scss)`,
            }
        }
    )