<template>
  <section class="header-section">
    <b-row no-gutters>
      <b-col sm="12" class="d-none d-md-block">
        <vf-header-top />
      </b-col>
      <b-col sm="12" class="d-none d-md-block">
        <vf-header-center>
          <template #left>
            <vf-header-logo :logo="logo" class="d-none d-md-block" />
          </template>
          <template #center>
            <vf-header-search class="mx-auto" />
          </template>
          <template #right>
            <vf-header-cart />
          </template>
        </vf-header-center>
      </b-col>
      <b-col class="d-none d-md-block">
        <b-container>
          <vf-position name="headerMenu" />
        </b-container>
      </b-col>
      <b-col sm="12" class="d-block d-md-none">
        <b-container class="header-section__top">
          <div class="header-section__toggle" v-b-toggle.menu-collapse>
            <vf-a-icon icon="bars"></vf-a-icon>
          </div>
          <vf-header-logo :logo="logo" class="mx-auto ml-2" />
          <vf-header-cart />
        </b-container>
        <b-collapse id="menu-collapse">
          <vf-header-sidebar>
            <template #top>
              <vf-header-search />
            </template>
            <template #bottom>
              <vf-o-currency nav />
              <vf-language />
            </template>
            <template #right>
              <div class="header-section__toggle_close" v-b-toggle.menu-collapse>
                <vf-a-icon icon="times"></vf-a-icon>
              </div>
            </template>
            <vf-position name="headerMenu" />
          </vf-header-sidebar>
        </b-collapse>
      </b-col>
      <vf-notification />
    </b-row>
  </section>
</template>
<script>
import { BRow, BCol, BCollapse, BContainer, VBToggle } from 'bootstrap-vue'
export default {
  components: {
    BRow,
    BCol,
    BCollapse,
    BContainer,
  },
  directives: {
    BToggle: VBToggle,
  },
  props: {
    logo: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss">
.header-section {
  #menu-collapse {
    display: flex;
    &.show {
      .sidebar {
        @media (max-width: 768px) {
          transform: translate(0);
          transition: transform ease 0.3s;
        }
      }
    }
    .sidebar {
      @media (max-width: 768px) {
        transform: translate(-100%);
      }
    }
  }
  &__toggle {
    font-size: 25px;
    &_close {
      font-size: 20px;
      width: 100%;
      text-align: center;
      color: #000000;
      i {
        cursor: pointer;
      }
    }
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      min-height: 80px;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 95;
      background-color: white;
      border-bottom: 3px solid #f5f5f5;
    }
  }
}
</style>
