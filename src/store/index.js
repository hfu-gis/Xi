import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('../db.js')

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        },
        setLoading (state, payload) {
            state.loading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
        clearError (state, payload) {
            state.error = null
        }
    },
    actions: {

        signUserUp({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            fb.auth.createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.user.uid
                        }

                        fb.db.collection('user').doc(user.user.uid).set({
                            email: payload.email,
                            username: payload.username,
                            firstname: '',
                            lastname: '',
                        }).then(() => {
                            console.log('DONE')
                        }).catch(error => {
                            console.log('NOT DONE')
                            console.log(error)
                        })

                        commit('setUser', newUser)
                        console.log(this.user)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )


        },

        fetchUserData ({commit, getters}) {
            commit('setLoading', true)
            console.log(getters.user.id)

            let docRef = fb.db.collection('user').doc(getters.user.id)

                docRef.get().then(doc => {
                    const updatedUser = doc.data()

                    commit('setLoading', false)
                    commit('setUser', updatedUser)
                })
                .catch(error => {
                    console.log(error)
                    commit('setLoading', false)
                })
        },

        signUserIn ( {commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            fb.auth.signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.user.uid
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error);
                    }
                )
        },
        resetUser ( {commit}, payload) {
            commit('setLoading', true)
            commit('clearError')

            fb.auth.sendPasswordResetEmail(payload.email)
                .then(
                    commit('setLoading', false)
            )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error);
                    }
                )
        },
        autoSignIn ({commit}, payload) {
            commit('setUser', {id: payload.uid})
        },
        logout ({commit}) {
            fb.auth.signOut()
            commit('setUser', null)
        },
        clearError ({commit}) {
            commit('clearError')
        },


        editUser({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')

            fb.db.collection('user').doc(fb.auth.currentUser.uid).set({
                firstname: payload.user.firstname,
                lastname: payload.user.lastname,
                job: payload.user.job,
                text: payload.user.text
            }).then(() => {
                commit('setLoading', false)
                console.log('DONE')
            }).catch(error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
            })
        }

    },
    getters: {
        user (state) {
            return state.user
        },
        loading (state) {
            return state.loading
        },
        error (state) {
            return state.error
        }
    },
    modules: { }
})