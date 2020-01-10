<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h6 class="primary--text">{{ article.title }}</h6>
                    </v-card-title>
                    <v-card-media
                            :src="article.imageUrl"
                            height="400px"
                    ></v-card-media>
                    <v-card-text>
                        <div class="info--text">{{ article.country }}</div>
                        <div>{{ article.text }}</div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "article",
        props: ['id'],
        computed: {
            article () {
                return this.$store.getters.loadedArticle(this.id)
            }
        }
    }
</script>

<style scoped>

</style>