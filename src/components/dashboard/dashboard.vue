<template>
    <div id="dashboard">
        <h1>That's the dashboard!</h1>
        <p>You should only get here if you're authenticated!</p>
        <p>Your username: {{ username }}</p>
    </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
export default {
    name: "dashboard",
    setup() {
        const store = useStore();
        const username = computed(() => {
            return store.getters.username;
        });

        return {username}
    }
}
</script>

<style scoped>
h1, p {
    text-align: center;
}

p {
    color: red;
}
</style>
