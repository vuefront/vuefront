import vfMAccountMenu from "./account-menu.vue";


export default {
  component: vfMAccountMenu,
  title: 'molecule|!!!Account menu',
};

export const Default = () => ({
  components: { vfMAccountMenu },
  template: `<vf-m-account-menu isAuth="true"></vf-m-account-menu>`,
});




/* // import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

Vue.component("VfMAccountMenu", vfMAccountMenu);

storiesOf("molecule|!!!Account Menu", module)
  // .addDecorator(withKnobs)
  .add(
    "default",
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
    }),
    {
      info: {},
    }
  )
  .add(
    "!!!in o-header",
    () => ({
      components: { vfMAccountMenu },
      template: `<section class="vf-o-header">
                <vf-m-account-menu />
            </section>`,
    }),
    {
      info: {
        summary: `<span style="color:red">Important!</span> Needs refactoring because requires vf-o-header class (import header.scss)`,
      },
    }
  );
 */