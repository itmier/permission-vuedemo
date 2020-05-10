<template>
    <div class="main-container">
        <TopAside/>
        <Content/>
    </div>
</template>

<script>
import TopAside from './top-aside'
import Content from './content'
// import { mapState } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        // ...mapState(['isSidebarNavCollapse'])
        isSidebarNavCollapse() {
            return false
        }
    },
    components: {
        TopAside,
        Content
    }
}
</script>
