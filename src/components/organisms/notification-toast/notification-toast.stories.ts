import VfONotificationToast from "./notification-toast.vue";
import VfAButton from "../../atoms/button/button.vue";
import { ref } from "vue";
import faker from "faker";
import { useStore } from "vuex";
import "../../atoms/button/button.scss";
import "./notification-toast.scss";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "organism/notification-toast",
  component: VfONotificationToast,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfONotificationToast, VfAButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const show = ref(false);
    const store = useStore();
    const handleClick = () => {
      store.commit("notification/add", faker.lorem.words(2));
    };
    const handleError = () => {
      store.commit("notification/error", faker.lorem.words(2));
    };
    return {
      args,
      show,
      handleClick,
      handleError,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <vf-o-notification-toast v-bind="args" />
  <vf-a-button @click="handleClick" class="mr-2">Notify</vf-a-button>
  <vf-a-button color="danger" @click="handleError">Error</vf-a-button>
  `,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
