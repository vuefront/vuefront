import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfMContainer from "./container.vue";
Vue.component("VfMContainer", vfMContainer);
storiesOf("molecule|Container", module).add("default", () => ({
  components: {
    vfMContainer
  },
  template: `
            <div style="width:800px">
            <vf-m-container>
                <vf-m-row>
                    <vf-m-col>
                        <div style="background:#eee; height:50px; width:100%"></div>
                    </vf-m-col>
                    <vf-m-col>
                        <div style="background:#eee; height:50px; width:100%"></div>
                    </vf-m-col>
                </vf-m-row>
                <vf-m-row>
                    <vf-m-col>
                        <div style="background:#eee; height:50px; width:100%"></div>
                    </vf-m-col>
                    <vf-m-col>
                        <div style="background:#eee; height:50px; width:100%"></div>
                    </vf-m-col>
                    <vf-m-col>
                        <div style="background:#eee; height:50px; width:100%"></div>
                    </vf-m-col>
                </vf-m-row>
            </vf-m-container>
            </div>`
}), {
  info: {}
}).add("fluid", () => ({
  components: {
    vfMContainer
  },
  template: `
            <div style="width:1200px">
            <vf-m-container fluid>
                <vf-m-row>
                    <vf-m-col>
                        <div style="background:#eee; height:50px; width:100%"></div>
                    </vf-m-col>
                    <vf-m-col>
                        <div style="background:#eee; height:50px; width:100%"></div>
                    </vf-m-col>
                </vf-m-row>
                <vf-m-row>
                    <vf-m-col>
                        <div style="background:#eee; height:50px; width:100%"></div>
                    </vf-m-col>
                    <vf-m-col>
                        <div style="background:#eee; height:50px; width:100%"></div>
                    </vf-m-col>
                    <vf-m-col>
                        <div style="background:#eee; height:50px; width:100%"></div>
                    </vf-m-col>
                </vf-m-row>
            </vf-m-container>
            </div>`
}), {
  info: {}
});