import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import { tAccountAccount } from "../../../templates/";
import { aHeading, aLink } from "../../../atoms/";
Vue.component("VfTAccountAccount", tAccountAccount);
Vue.component("VfAHeading", aHeading);
Vue.component("VfALink", aLink);
storiesOf("template|Account/Account", module).add("default", () => "<vf-t-account-account ></vf-t-account-account>");