<template>
    <div id="app">
        <app-toolbar />
        <router-view></router-view>
    </div>
</template>

<script>

import Toolbar from '@/components/header/toolbar.vue';
import {useStore} from 'vuex';
import {onMounted} from 'vue';
export default {
    components: {
        'app-toolbar': Toolbar
    },
    setup() {
        const store = useStore();

        onMounted(() => {
            store.dispatch('autoLogin');
        })
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body, html {
    margin: 0
}

* {
    box-sizing: border-box;
}

</style>
