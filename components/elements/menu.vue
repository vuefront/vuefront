<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <section class="top-menu">
    <v-container pa-0>
      <v-toolbar class="elevation-0 px-0 top-menu__wrapper" color="transparent" depressed>
        <v-layout align-center justify-start row fill-height>
          <nuxt-link to="/" class="d-flex"><img src="~/assets/img/Logo.png" alt="" class="top-menu__logo"></nuxt-link>
          <v-menu v-for="(value, key) in items" :key="key" offset-y open-on-hover>
            <template v-slot:activator="{ on }">
              <v-btn
                :to="value.to"
                light
                flat
                v-on="on"
              >
                {{value.title}}
                <v-icon right dark v-if="value.children.length > 0">keyboard_arrow_down</v-icon>
              </v-btn>
            </template>
            <no-ssr>
              <v-list v-if="value.children.length > 0">
                <v-list-tile
                  v-for="(item, index) in value.children"
                  :key="index"
                  :to="item.to"
                  @click=""
                >

                  <v-list-tile-title v-if="item.children.length === 0">
                    {{ item.title }}
                  </v-list-tile-title>
                  <v-list-tile-title v-else>
                    <v-menu offset-x open-on-hover right>
                      <template v-slot:activator="{ on }">
                        <div v-on="on">{{item.title}}</div>
                      </template>
                      <v-list>
                        <v-list-tile
                          v-for="(subItem, subIndex) in item.children"
                          :key="subIndex"
                          :to="subItem.to"
                          @click=""
                        >

                          <v-list-tile-title>
                            {{ subItem.title }}
                          </v-list-tile-title>
                        </v-list-tile>
                      </v-list>
                    </v-menu>
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </no-ssr>
          </v-menu>
        </v-layout>
      </v-toolbar>
    </v-container>
  </section>
</template>
<script lang="ts">
import {Component, Vue, Getter} from 'nuxt-property-decorator'
import {MenuItem} from "~/types";

@Component
export default class extends Vue {
  @Getter('menu/list') items!: MenuItem[]
}

</script>
<style type="postcss">
.top-menu {
  border-bottom: 1px solid rgba(31, 45, 61, 0.04);
  border-top: 1px solid rgba(31, 45, 61, 0.04);

  .top-menu__wrapper {
    color: red;

    .v-toolbar__content {
      padding: 0;
    }
  }

  .top-menu__logo {
    height: 50px;
  }
}
</style>
