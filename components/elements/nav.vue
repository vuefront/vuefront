<template>
  <nav class="nav-section">
    <v-container pa-0>
      <v-layout row>
        <v-flex text-xs-left>
          <div class="body-1">Purpose - Website UI Kit</div>
        </v-flex>
        <v-flex text-xs-right>
          <v-layout align-center justify-end row fill-height>
            <nuxt-link to="/store/cart" class="nav-section__link">
              <v-icon>shopping_cart</v-icon>
            </nuxt-link>
            <div class="body-1 ml-1">Support</div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </nav>
</template>
<style type="postcss">
.nav-section {
  padding: 16px 0;
  &__link {
    text-decoration: none;
  }
}
</style>