<template>
    <b-breadcrumb v-if="isShow" :items="items"></b-breadcrumb>
</template>
<script>
import BBreadcrumb from 'bootstrap-vue/es/components/breadcrumb/breadcrumb'
import BBreadcrumbItem from 'bootstrap-vue/es/components/breadcrumb/breadcrumb-item'
export default {
    components: {
        BBreadcrumb,
        BBreadcrumbItem
    },
    data() {
      return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    },
    computed: {
        isShow() {
            return this.$route.path !== '/'
        }
    }
}
</script>
