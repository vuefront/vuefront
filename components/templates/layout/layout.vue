<template>
  <v-app>
    <Header :logo="logo"/>
    <v-container pa-0>
      <div class="main-content">
        <ContentTop/>
        <v-layout row>
          <v-flex v-if="checkModules('columnLeft')" xs3 hidden-sm-and-down>
            <ColumnLeft/>
          </v-flex>
          <v-flex xs-fill>
            <slot></slot>
          </v-flex>
          <v-flex v-if="checkModules('columnRight')" xs3 hidden-sm-and-down>
            <ColumnRight/>
          </v-flex>
        </v-layout>
        <ContentBottom/>
      </div>
    </v-container>
    <Footer/>
  </v-app>
</template>
<script>
import ContentTop from "vuefront/components/positions/top";
import ContentBottom from "vuefront/components/positions/bottom";
import ColumnLeft from "vuefront/components/positions/left";
import ColumnRight from "vuefront/components/positions/right";
import { BaseModule } from "~/utils/module";
import Header from "vuefront/components/templates/header";
import Footer from "vuefront/components/templates/footer";
import { VContainer, VLayout, VFlex, VApp } from "vuetify/lib";
import "vuefront/scss/templates/layout.scss";

export default {
  name: "vfDefaultTemplatesLayout",
  components: {
    ContentTop,
    ContentBottom,
    ColumnLeft,
    ColumnRight,
    Header,
    Footer,
    VContainer,
    VLayout,
    VFlex,
    VApp
  },
  props: {
    logo: {
      type: String,
      default: ""
    }
  },
  mixins: [BaseModule]
};
</script>
