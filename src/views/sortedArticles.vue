<template>
    <div>

        <article class="ueberschriften" style="margin-top: 30px;">  <!-- HTML-Code aus dem Body-Tag hier einfügen -->
            <header><h1 class="text-center">Perks by {{descr}}: </h1></header>
            <h3 class="text-center">{{id}}</h3>
        </article>

        <v-row justify="space-around">

            <v-col
                    cols="12"
                    xs="10"
                    sm="10"
                    md="10"
                    lg="10"
                    xl="8"
                    style="display: block"
                    class="d-flex align-content-start justify-center flex-wrap "
            >



                <v-card
                        max-width="344"
                        align="left"
                        v-for="article in articles" :key="article.id"
                        class="ma-5"
                >

                    <v-list-item>
                        <v-list-item-avatar color="red">
                            <v-img :src="article.user.imageUrl" lazy-src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headlinesmall">{{ article.title }}</v-list-item-title>
                            <v-list-item-subtitle>Author: {{article.user.firstname}} {{article.user.lastname}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-img
                            :src="article.imageUrl" height="194" width="400"
                    >

                    </v-img>


                    <v-card-actions>
                        <v-btn
                                text
                                color="blue accent-4"
                                :to="'../../perk/' + article.id"
                        >
                            Read
                        </v-btn>
                        <v-btn
                                v-if="descr==='user' && userIsAuthenticated && article.user.id === user.id"
                                dark
                                color="red"
                                @click="snackbar = true"
                        >
                            Delete
                        </v-btn>

                        <v-snackbar
                                v-model="snackbar"
                        >
                            Are you sure?
                            <v-btn
                                    color="red"
                                    text
                                    @click="snackbar = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                    color="green"
                                    text
                                    @click="onDelete(article.id)"
                            >
                                Delete
                            </v-btn>
                        </v-snackbar>

                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>

                    </v-card-actions>


                </v-card>

            </v-col>
        </v-row>
    </div>
</template>

<script>
    const fb = require('../db.js')

    export default {
        name: "sortedArticles",
        props: ['id','descr'],
        deleted: "",

        data () {
            return {
                snackbar: false
            }
        },

        computed: {
            articles () {
                if(this.descr == "category") {
                    console.log("ID category", this.id)
                    return this.$store.getters.ArticlesbyCategory(this.id)
                }
                else if(this.descr == "country") {
                    console.log("ID COUNTRY", this.id)
                    return this.$store.getters.ArticlesbyCountry(this.id)
                }
                else if(this.descr == "user") {
                    console.log("ID USER", this.id)
                    return this.$store.getters.ArticlesbyUser(this.id)
                }
            },
                user() {
                console.log("USERRRR:",this.$store.getters.user)
                    return this.$store.getters.user
                },
                userIsAuthenticated () {
                    return this.$store.getters.user !== null && this.$store.getters.user !== undefined
                }

        },
        methods: {
            onDelete(deleteId) {
                return this.$store.dispatch('deleteArticle', deleteId)
            }
        },
    }
</script>

<style scoped>

</style>