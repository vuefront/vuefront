<template>
    <font-awesome-icon v-bind="$props" />
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
config.autoAddCss = false
library.add(fas)
library.add(far)
export default {
    components: {
        FontAwesomeIcon
    },
    props: ['icon', 'size']
}
</script>
