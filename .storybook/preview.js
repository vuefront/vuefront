// import { addDecorator } from '@storybook/vue';
// import { withInfo } from '@storybook/addon-info';

// addDecorator(withInfo); 
import '../assets/scss/tailwind.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}