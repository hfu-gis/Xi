<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>


                    <v-img
                            class="white--text align-end"
                            :src="article.imageUrl"
                    >
                        <v-card-title>{{ article.title }}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">Writen by<b> {{ article.firstname }} </b> from <b>{{ article.country }}</b> </v-card-subtitle>

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
            </v-flex>
        </v-layout>
    </v-container>
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