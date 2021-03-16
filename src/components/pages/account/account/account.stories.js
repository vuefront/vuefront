import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import pAccountAccount from "./account.vue";

Vue.component("VfPAccountAccount", pAccountAccount);
storiesOf("page|Account/Account", module).add(
  "default",
  () => "<vf-p-account-account ></vf-p-account-account>"
);
