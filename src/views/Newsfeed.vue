<template>
    <v-app>
                <v-row

                        justify="space-around"
                >
                    <v-col
                            cols="12"
                            xs="10"
                            sm="10"
                            md="10"
                            lg="10"
                            xl="8"
                            style="display: block"
                            class="d-flex align-content-start justify-start justify-center justify-end justify-space-around justify-space-between flex-wrap "
                    >

                <v-card
                        max-width="344"
                        align="left"
                        v-for="article in articles" :key="article.id"
                >

                            <v-list-item>
                                <v-list-item-avatar color="red">
                                    <v-img :src="article.user.imageUrl" lazy-src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="headlinesmall">{{ article.title }} </v-list-item-title>
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
                                        color="deep-purple accent-4"
                                        :to="'perk/' + article.id"
                                >
                                    Read
                                </v-btn>
                                <v-btn
                                        text
                                        color="deep-purple accent-4"
                                >
                                    Bookmark
                                </v-btn>
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
    </v-app>
</template>



<script>
    export default {
        name: "Newsfeed",
        computed: {
            articles () {
                console.log("NEWSFEED: ", this.$store.getters.loadedArticles)
                return this.$store.getters.loadedArticles
            }
        }
    }

</script>

<style scoped>
    body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}




    .vcard {
        opacity: 0.9;
        border: 0;
        margin: 10px;
    }

    .vcard span {
        background-color: black;
        opacity: 0.9;
    }

    .vcard a {
        color: white;
        margin: 10px;
    }

    span.description {
        background-color: white;
    }

    .icon {
        position: absolute;
        top: 20px;
        right: 20px;
    }
</style>