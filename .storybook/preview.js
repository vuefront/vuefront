import { addDecorator } from '@storybook/vue';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo); 

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}