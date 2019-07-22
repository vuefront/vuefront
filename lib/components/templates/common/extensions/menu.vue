<template>
  <section class="nav-menu-section">
    <div class="nav-menu-section__item" v-for="(item, index) in menuItems" :key="index">
      <b-link :to="item.to" class="nav-menu-section__item_link">
        <div class="nav-menu-section__item_title body-2" v-b-toggle.menu-collapse>{{item.title}}</div>
        <vf-a-icon
          icon="angle-down"
          v-if="item.children && item.children.length > 0"
          class="nav-menu-section__item_icon"
        />
      </b-link>
      <div
        v-if="item.children && item.children.length > 0"
        class="nav-menu-section__sub_menu nav-menu-section__sub_menu--vertical"
      >
        <div class="nav-menu-section__item" v-for="(subItem, key) in item.children" :key="key">
          <b-link
            :to="subItem.to"
            class="nav-menu-section__item_link nav-menu-section__item_link--size_big"
            v-b-toggle.menu-collapse
          >
            <div class="nav-menu-section__item_title subheading">{{subItem.title}}</div>
            <vf-a-icon
              v-if="subItem.children.length > 0"
              icon="angle-right"
              class="nav-menu-section__item_icon nav-menu-section__item_icon--float"
            />
          </b-link>
          <div
            v-if="subItem.children.length > 0"
            class="nav-menu-section__sub_menu nav-menu-section__sub_menu--horizontal"
          >
            <div
              class="nav-menu-section__item"
              v-for="(value, subKey) in subItem.children"
              :key="subKey"
              v-b-toggle.menu-collapse
            >
              <b-link
                :to="value.to"
                class="nav-menu-section__item_link nav-menu-section__item_link--size_medium"
              >
                <div class="nav-menu-section__item_title subheading">{{value.title}}</div>
              </b-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { BLink, VBToggle } from 'bootstrap-vue'
import { isString } from 'lodash'
export default {
  components: {
    BLink,
  },
  directives: {
    BToggle: VBToggle,
  },
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  computed: {
    loaded() {
      return this.$store.getters['menu/loaded'](this.idHash)
    },
    menuItems() {
      return this.$store.getters['menu/list'](this.idHash)
    },
    idHash() {
      return this.hashCode(JSON.stringify(this.items))
    },
  },
  serverPrefetch() {
    return this.handleLoadMenu()
  },
  mounted() {
    if (!this.loaded) {
      this.handleLoadMenu()
    }
  },
  methods: {
    async handleLoadMenu() {
      if (!this.loaded) {
        let asyncItems = []
        for (const key in this.items) {
          const item = this.items[key]
          if (isString(item)) {
            asyncItems = [
              ...asyncItems,
              this.$store.dispatch(`menu/${item}/load`, {}),
            ]
          }
        }

        await Promise.all(asyncItems)

        let result = []

        for (const key in this.items) {
          const item = this.items[key]
          if (isString(item)) {
            result = [...result, ...this.$store.getters[`menu/${item}/get`]]
          } else {
            result = [...result, item]
          }
        }
        this.$store.commit('menu/setEntities', {
          id: this.idHash,
          items: result,
        })
        this.$store.commit('menu/setLoaded', { id: this.idHash, loaded: true })
      }
    },
    hashCode(str) {
      var hash = 0,
        i,
        chr
      if (str.length === 0) return hash
      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i)
        hash = (hash << 5) - hash + chr
        hash |= 0
      }

      return hash
    },
  },
}
</script>
<style lang="scss">
.nav-menu-section {
  display: flex;
  flex-flow: row;
  min-height: 50px;
  flex-wrap: wrap;
  color: rgba(31, 45, 61, 0.7);
  @media (max-width: 767px) {
    flex-flow: column;
  }

  &__top {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  & > &__item_link > &__item_title {
    flex: 0 0 auto;
  }

  &__item_title {
  }

  &__item_link {
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-flow: row;
    flex: 1;
    align-items: center;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }

  &__item_icon {
    margin-left: 10.2px;
    &--float {
      position: absolute;
      top: 50%;
      right: 25px;
      transform: translate(5px, -50%);
    }
  }

  &__item_link {
    padding: 12px 12px;

    &--size_big {
      padding: 16px 24px;
    }

    &--size_medium {
      padding: 8px 0;
    }
  }

  &__item {
    flex: 0 1 auto;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: ease 0.3s;
    background: #fff;
    @media (max-width: 767px) {
      background: transparent;
      flex-flow: column;
      > * {
        width: 100%;
      }
    }

    &:hover {
      > .nav-menu-section__item_link {
        > .nav-menu-section__item_icon {
          &--float {
            right: 15px;
          }
        }
      }
      > .nav-menu-section__sub_menu {
        display: flex;
        pointer-events: all;
      }
    }
  }

  &__sub_menu {
    z-index: 5;
    position: absolute;
    display: none;
    pointer-events: none;
    min-width: 240px;
    height: auto;
    background-color: #fff;
    border: 0 solid rgba(31, 45, 61, 0);
    border-radius: 6px;
    box-shadow: 0 10px 30px 0 rgba(31, 45, 61, 0.1);
    @media (max-width: 767px) {
      position: relative;
    }
    &--vertical {
      flex-flow: column;
      left: 0;
      top: 50px;
      @media (max-width: 767px) {
        top: 0;
      }
      &:after {
        content: '';
        background: #fff;
        display: block;
        height: 16px;
        width: 16px;
        left: 1.25rem;
        position: absolute;
        bottom: 100%;
        z-index: -6;
        transform: rotate(-45deg) translateY(1rem);
        border-radius: 0.2rem;
        box-shadow: -1px -1px 10px -2px rgba(31, 45, 61, 0.2);
      }

      > .nav-menu-section__item {
        &:hover {
          transform: scale(1.1);
          background: #fff;
          border-radius: 6px;
        }
      }
    }

    &--horizontal {
      flex-flow: column;
      left: 100%;
      top: 0;
      right: auto;
      margin-left: 6px;
      border-radius: 6px;
      padding: 16px 24px;

      &:after {
        content: '';
        border-left: 1.5rem solid transparent;
        position: absolute;
        left: -1rem;
        top: 0;
        height: 100%;
      }
    }
  }
}
</style>
