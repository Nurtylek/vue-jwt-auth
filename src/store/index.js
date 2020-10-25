import {createStore} from 'vuex'

export default createStore({
    state: {
        token: '',
        username: ''
    },
    mutations: {
        storeUser(state, {username, token}) {
            state.token = token;
            state.username = username;
        },
        logout(state) {
            state.token = '';
            state.username = '';
        }
    },
    actions: {
        login({commit}, {username, password}) {
            return new Promise((resolve) => {
                setTimeout(() => {

                    commit('storeUser', {
                        username,
                        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
                    });

                    localStorage.setItem('username', username)
                    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');

                    resolve({username, password});
                }, 1000);
            });
        },
        logout({commit}) {
            commit('logout');
            localStorage.clear();
        },
        autoLogin({commit}) {
            const token = localStorage.getItem('token');

            if (!token) {
                return;
            }
            commit('storeUser', {username: 'nurtilek', token})
        }
    },
    getters: {
        username(state) {
            return state && state.username;
        },
        isAuthenticated(state) {
            return state.token;
        }
    }
})
