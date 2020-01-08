import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('../db.js')

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loadedArticles: [
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
                id: 'afajfjadfaadfa323',
                title: 'Meetup in New York',
                location: 'New York',
                description: 'New York, New York!'
            },
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
                id: 'aadsfhbkhlk1241',
                title: 'Meetup in Paris',
                location: 'Paris',
                description: 'It\'s Paris!'
            }

        ],
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        setLoadedArticles (state, payload) {
            state.loadedArticles = payload
        },
        createArticle (state, payload) {
            state.loadedArticles.push(payload)
        },
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

        createArticle( {commit, getters}, payload) {
            console.log('I am here!')
            console.log(getters.user.id)
            commit('setLoading', true)
            const article = {
                title: payload.title,
                country: payload.country,
                text: payload.text,
                creatorid: getters.user.id,
            }

            var docRef = fb.db.collection('articles').doc()
                docRef.set(article)
                .then(() => {
                    commit('setLoading', false)
                console.log('DONE')
            }).catch(error => {
                console.log('NOT DONE')
                commit('setLoading', false)
                console.log(error)
            })

        },

        loadArticles({commit}) {
            commit('setLoading', true)
            fb.db.collection("articles").get()
                .then((data) => {
                    const articles = []
                    data.forEach(function (doc) {
                        articles.push({
                            title: doc.data().title,
                            text: doc.data().text,
                            creatorid: doc.data().creatorid
                        })
                    })



                    commit('setLoadedArticles', articles)
                    commit('setLoading', false)
                })
                .catch(
                    (error) => {
                        console.log(error)
                        commit('setLoading', false)
                    }
                )
        },


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
                            id: user.user.uid,
                            email: payload.email,
                            //username: payload.username,
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
                    console.log(doc.data())
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

            const user = {
                firstname: payload.UserData.firstname,
                lastname: payload.UserData.lastname,
                job: payload.UserData.job,
                text: payload.UserData.text,
            }

            let imageUrl
            let key
            let userdb

            const ref = fb.db.collection('user').doc(fb.auth.currentUser.uid)
            console.log("key: "+ref.id)
            ref.set(user)
                .then(() => {
                    key = ref.id
                    return key
                })
                .then(key => {
                    const filename = payload.UserData.image.name
                    const ext = filename.slice(filename.lastIndexOf('.'))
                    return fb.storage.ref('user/' + key + '.' + ext).put(payload.UserData.image)
                })
                .then(fileData => {
                        fileData.ref.getDownloadURL().then((downloadURL) => {
                            fb.db.collection('user').doc(key).update({imageUrl: downloadURL})
                        })
                })
                .then((data) => {
                    console.log("DATA "+data)
                commit('setLoading', false)
                console.log('DONE')
            }).catch(error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
            })
        },


    },
    getters: {

        loadedArticles (state) {
            return state.loadedArticles.sort((articleA, articleB) => {
                return articleA.date > articleB.date
            })
        },
        featuredArticles (state, getters) {
            return getters.loadedArticles.slice(0, 5)
        },
        loadedArticle (state) {
            return (articleId) => {
                return state.loadedArticles.find((article) => {
                    return article.id === articleId
                })
            }
        },

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