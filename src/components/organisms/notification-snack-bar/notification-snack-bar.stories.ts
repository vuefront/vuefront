import VfONotificationSnackBar from "./notification-snack-bar.vue";
import VfAButton from "../../atoms/button/button.vue";
import { ref } from "vue";
import faker from "faker";
import { useStore } from "vuex";
import "../../atoms/button/button.scss";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "organism/notification-snack-bar",
  component: VfONotificationSnackBar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfONotificationSnackBar, VfAButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const show = ref(false);
    const store = useStore();
    const handleClick = () => {
      store.commit("notification/add", faker.lorem.words(2));
    };
    return {
      args,
      show,
      handleClick,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <vf-o-notification-snack-bar v-bind="args" />
  <vf-a-button @click="handleClick">Notify</vf-a-button>
  `,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
