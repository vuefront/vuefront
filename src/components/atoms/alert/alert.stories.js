import vfAAlert from "./alert.vue";

export default {
  component: vfAAlert,
  title: "atom|!!!Alert",
};

export const Default = () => ({
  components: { vfAAlert },
  template: `<vf-a-alert show="true">This is an alert message</vf-a-alert>`,
});
Default.story = {
  parameters: {
    info: {
      inline: true,
      text: `<span style="color:red">Important!</span> Alert should be a molecule since it can include other components via Slots.`,
    },
  },
};

export const Dismissible = () => ({
  components: { vfAAlert },
  template: `<vf-a-alert show="true" dismissible>This is an alert message</vf-a-alert>`,
});
Dismissible.story = {
  parameters: {
    info: {
      inline: true,
      text: `<span style="color:red">Important!</span> Alert should be a molecule since it can include other components via Slots.`,
    },
  },
};
