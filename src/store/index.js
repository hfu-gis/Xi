import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('../db.js')

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loadedArticles: [],
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
                categories: payload.categories,
                creatorid: getters.user.id,
            }


            let imageUrl
            let key
            let userdb

            const ref = fb.db.collection('articles').doc()
            ref.set(article)
                .then(() => {
                    key = ref.id
                    return key
                })
                .then(key => {
                    fb.db.collection('articles').doc(key).update({id:key})
                    const filename = payload.image.name
                    const ext = filename.slice(filename.lastIndexOf('.'))
                    return fb.storage.ref('article/' + key + '.' + ext).put(payload.image)
                })
                .then(fileData => {
                    fileData.ref.getDownloadURL().then((downloadURL) => {
                        fb.db.collection('articles').doc(key).update({imageUrl: downloadURL})
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

        loadArticles({commit}) {
            commit('setLoading', true)
            const articles = []
            var userName = {}
            fb.db.collection("articles").get()
                .then((data) => {
                    data.forEach(function (doc) {

                        fb.db.collection("user").doc(doc.data().creatorid).get()
                            .then((user) => {
                                console.log("AUTHOR", user.data())
                                userName = user.data()
                                    console.log("USER IS ADDED")

                                articles.push({
                                    title: doc.data().title,
                                    text: doc.data().text,
                                    user: userName,
                                    country: doc.data().country,
                                    imageUrl: doc.data().imageUrl,
                                    id: doc.data().id
                                })
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
                id: payload.UserData.id,
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
            return state.loadedArticles
        },
        featuredArticles (state, getters) {
            return getters.loadedArticles.slice(0, 5)
        },
        loadedArticle (state) {
            console.log("loaded artikle")
            console.log(state)
            return (articleId) => {
                return state.loadedArticles.find((article) => {
                    return article.id === articleId
                })
            }
        },
        ArticlebyCategory (state) {
            console.log("State country", state)
            return(category) => {
                console.log("Category",category)
                return state.loadedArticles.filter(article => article.country === category)
            }
        },
        ArticlesbyUser (state) {
            console.log("State user", state)
            return(id) => {
                console.log("User",id)
                return state.loadedArticles.filter(article => article.user.id === id)
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