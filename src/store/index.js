import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('../db.js')

Vue.use(Vuex);

export const store = new Vuex.Store({
    // declare states
    state: {
        loadedArticles: [],
        user: null,
        loading: false,
        error: null
    },
    // set state
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
        /************************ CREATE NEW ARTICLE ****************************/
        createArticle( {commit, getters}, payload) {
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
                    // get key for the article
                    key = ref.id
                    return key
                })
                .then(key => {
                    //update database with key
                    fb.db.collection('articles').doc(key).update({id:key})
                    //save image
                    const filename = payload.image.name
                    const ext = filename.slice(filename.lastIndexOf('.'))
                    return fb.storage.ref('article/' + key + '.' + ext).put(payload.image)
                })
                .then(fileData => {
                    // create URl from image and save it in firebase
                    fileData.ref.getDownloadURL().then((downloadURL) => {
                        fb.db.collection('articles').doc(key).update({imageUrl: downloadURL})
                    })
                })
                .then((data) => {
                    commit('setLoading', false)
                }).catch(error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
            })
        },

        /************************ LOAD ALL ARTICLES ****************************/
        loadArticles({commit}) {
            commit('setLoading', true)
            const articles = []
            var userName = {}
            //get articles from firebase
            fb.db.collection("articles").get()
                .then((data) => {
                    data.forEach(function (doc) {
                        // get user for each article
                        fb.db.collection("user").doc(doc.data().creatorid).get()
                            .then((user) => {
                                userName = user.data()

                                //save data into articles
                                articles.push({
                                    title: doc.data().title,
                                    text: doc.data().text,
                                    user: userName,
                                    country: doc.data().country,
                                    category: doc.data().categories,
                                    imageUrl: doc.data().imageUrl,
                                    id: doc.data().id
                                })
                            })
                                })
                    //commit the articles into the article state
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

        /************************ DELETE AN ARTICLE ****************************/
        deleteArticle({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            console.log("DELETE ARTICLE",payload)
            // delete article from firebase
            fb.db.collection("articles").doc(payload.deleteid.gbid).delete().then(function() {
                console.log("successfully deleted!");
                commit('setLoading', false)
            }).catch(function(error) {
                commit('setLoading', false)
                commit('setError', error)
            });

        },

        /************************ SIGN USER UP ****************************/
        signUserUp({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            // use fireebase auth to register new user
            fb.auth.createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.user.uid
                        }

                        // save the user in firestore
                        fb.db.collection('user').doc(user.user.uid).set({
                            id: user.user.uid,
                            email: payload.email,
                            firstname: '',
                            lastname: '',
                        }).then(() => { //do nothing here
                        }).catch(error => {
                            console.log(error)
                        })

                        commit('setUser', newUser)
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

        /************************ GET USER DATA FROM FIREBASE ****************************/
        fetchUserData ({commit, getters}) {
            commit('setLoading', true)
            //get the userdata fron firebase by the user.id
            let docRef = fb.db.collection('user').doc(getters.user.id)
                docRef.get().then(doc => {
                    const updatedUser = doc.data()

                    commit('setLoading', false)
                    //update User and set the state of the user
                    commit('setUser', updatedUser)
                })
                .catch(error => {
                    console.log(error)
                            commit('setLoading', false)
                            console.log(error);
                    })
        },

        /************************ SIGN USER IN (LOGIN) ****************************/
        signUserIn ( {commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            // use firebase auth to sign user in
            fb.auth.signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.user.uid
                        }
                        // set state of user
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

        /************************ FORGOT PASSWORD ****************************/
        resetUser ( {commit}, payload) {
            commit('setLoading', true)
            commit('clearError')

            //reset the user with firebase auth.
            // user will get an email to reset the acc.
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

        /************************ AUTO SIGN IN AFTER PAGE REFRESH ****************************/
        autoSignIn ({commit}, payload) {
            //if user is already signed in. set state
            commit('setUser', {id: payload.uid})
        },

        /************************ LOGOUT ****************************/
        logout ({commit}) {
            //sign out with firebase auth
            fb.auth.signOut()
            // set state to null! !important!
            commit('setUser', null)
        },
        clearError ({commit}) {
            commit('clearError')
        },

        /************************ EDIT USER DATA ****************************/
        editUser({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')

            //get userdata from formular
            const user = {
                id: payload.UserData.id,
                firstname: payload.UserData.firstname,
                lastname: payload.UserData.lastname,
                country: payload.UserData.country,
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
                commit('setLoading', false)
            }).catch(error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error);
            })
        },


    },
    getters: {
        // get all articles in firebase available
        loadedArticles (state) {
            return state.loadedArticles
        },
        // get the first five articles.
        // Not in use yet!
        featuredArticles (state, getters) {
            return getters.loadedArticles.slice(0, 5)
        },
        // get specific article
        loadedArticle (state) {
            return (articleId) => {
                return state.loadedArticles.find((article) => {
                    return article.id === articleId
                })
            }
        },
        // get all articles by category
        ArticlesbyCategory (state) {
            return(category) => {
                return state.loadedArticles.filter(article => article.category === category)
            }
        },
        // get all articles by country
        ArticlesbyCountry (state) {
            return(country) => {
                return state.loadedArticles.filter(article => article.country === country)
            }
        },
        // get all articles from one user
        ArticlesbyUser (state) {
            return(id) => {
                return state.loadedArticles.filter(article => article.user.id === id)
            }
        },

        // return user state
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

// Hallo Markus, du hast dir den Code also tatsöchlich angeschaut. xD