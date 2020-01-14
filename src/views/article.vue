<template>
    <v-container>
        <v-row
                justify="center"
        >
            <v-col
                    cols="12"
                    xs="10"
                    sm="10"
                    md="10"
                    lg="10"
                    xl="8"
            >
                <v-card>


                    <v-img
                            class="white--text align-end"
                            :src="article.imageUrl"
                    >
                        <v-card-title>{{ article.title }}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">Writen by<b> {{ article.user.firstname }} </b> from <b>{{ article.user.country }}</b> </v-card-subtitle>

                    <v-card-text class="text--primary">
                        {{ article.text }}
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                                color="blue"
                                text
                        >
                            Share
                        </v-btn>

                        <v-btn
                                color="blue"
                                text
                        >
                            Explore
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col></v-row></v-container>
</template>

<script>
    const fb = require('../db.js')

    export default {
        name: "perk",
        props: ['id'],

        data () {
            return {

            }
        },

        computed: {
            article () {
                console.log("ID", this.id)
                return this.$store.getters.loadedArticle(this.id)
            }

        },
        methods: {

        },
    }
</script>

<style scoped>

</style>