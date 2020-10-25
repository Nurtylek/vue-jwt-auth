<template>
    <div id="signin">
        <div class="signin-form">
            <form @submit.prevent="onSubmit">
                <div class="input">
                    <label for="text">Username</label>
                    <input
                        type="text"
                        id="text"
                        v-model="username"
                    >
                </div>
                <div class="input">
                    <label for="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        v-model="password"
                    >
                </div>
                <div class="submit">
                    <button type="submit" :disabled="isButtonDisabled">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed, ref} from 'vue';
import {useRouter} from 'vue-router';

export default {
    name: "signin",
    setup() {
        const store = useStore();
        const router = useRouter();
        const username = ref('');
        const password = ref('');

        function onSubmit() {
            const formData = {
                username: username.value,
                password: password.value,
            }

            store.dispatch('login', {username: formData.username, password: formData.password}).then(() => {
                router.push('/dashboard');
            })
        }

        const isButtonDisabled = computed(() => {
            return username.value === '' || password.value === '';
        })

        return {
            username,
            password,
            onSubmit,
            isButtonDisabled
        }
    }
}
</script>

<style scoped>
.signin-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
}

.input {
    margin: 10px auto;
}

.input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
}

.input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    border: 1px solid #ccc;
}

.input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
}

.submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
}

.submit button:hover,
.submit button:active {
    background-color: #521751;
    color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
}
</style>
