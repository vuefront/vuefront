import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfMDropdown from "./dropdown.vue";
import vfMDropdownItem from "./dropdown-item.vue";

Vue.component("VfMDropdown", vfMDropdown);
Vue.component("VfMDropdownItem", vfMDropdownItem);

storiesOf("molecule|Dropdown", module)
  .add(
    "default",
    () => ({
      components: { vfMDropdown, vfMDropdownItem },
      template: `
            <vf-m-dropdown>
                <template slot="button-content">
                    <vf-a-icon :icon="['far', 'user-circle']" />
                    Label
                </template>
                <vf-m-dropdown-item>Item 1</vf-m-dropdown-item>
                <vf-m-dropdown-item>Item 2</vf-m-dropdown-item>
                <vf-m-dropdown-item>Item 3</vf-m-dropdown-item>
            </vf-m-dropdown>`,
    }),
    {
      info: {},
    }
  )
  .add(
    "link",
    () => ({
      components: { vfMDropdown, vfMDropdownItem },
      template: `
                <vf-m-dropdown variant="link" right>
                    <template slot="button-content">
                        <vf-a-icon :icon="['far', 'user-circle']" />
                        Label
                    </template>
                    <vf-m-dropdown-item>Item 1</vf-m-dropdown-item>
                    <vf-m-dropdown-item>Item 2</vf-m-dropdown-item>
                    <vf-m-dropdown-item>Item 3</vf-m-dropdown-item>
                </vf-m-dropdown>`,
    }),
    {
      info: {
        summary: `Dropdown with link is used in the header top menu`,
      },
    }
  )
  .add(
    "!!!nav (as li)",
    () => ({
      components: { vfMDropdown, vfMDropdownItem },
      template: `
            <ul>
                <vf-m-dropdown nav right>
                    <template slot="button-content">
                        <vf-a-icon :icon="['far', 'user-circle']" />
                        Label
                    </template>
                    <vf-m-dropdown-item>Item 1</vf-m-dropdown-item>
                    <vf-m-dropdown-item>Item 2</vf-m-dropdown-item>
                    <vf-m-dropdown-item>Item 3</vf-m-dropdown-item>
                </vf-m-dropdown>
            </ul>`,
    }),
    {
      info: {
        summary: `Dropdown with Nav is used only to strip the bootstrap dropdown from button tag. Can be used with b-nav. Currently not used.`,
      },
    }
  );
