<template>
    <header id="header">
        <div class="logo">
            <router-link to="/">Vue - Auth Jwt</router-link>
        </div>
        <nav>
            <ul>
                <li v-if="!isAuthenticated">
                    <router-link to="/signin">Sign In</router-link>
                </li>
                <li v-if="isAuthenticated">
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li v-if="isAuthenticated">
                    <button @click="logout">logout</button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
export default {
    name: "toolbar",
    setup() {
        const store  = useStore();
        const router = useRouter();
        const isAuthenticated = computed(() => {
            return store.getters.isAuthenticated;
        });

        function logout() {
            store.dispatch('logout');
            router.push('/')
        }

        return {
            isAuthenticated,
            logout
        }
    }
}
</script>

<style scoped>
#header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px;
}

.logo {
    font-weight: bold;
    color: white;
}

.logo a {
    text-decoration: none;
    color: white;
}

nav {
    height: 100%;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
}

li {
    margin: 0 16px;
}

li a {
    text-decoration: none;
    color: white;
}

li a:hover,
li a:active,
li a.router-link-active {
    color: #fa923f;
}

button {
    background: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
}
</style>
