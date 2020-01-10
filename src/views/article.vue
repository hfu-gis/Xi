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

                    <v-card-subtitle class="pb-0">{{ article.country }}</v-card-subtitle>

                    <v-card-text class="text--primary">
                        {{ article.text }}
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                                color="orange"
                                text
                        >
                            Share
                        </v-btn>

                        <v-btn
                                color="orange"
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
    export default {
        name: "article",
        props: ['id'],
        computed: {
            article () {
                console.log(this.id)
                return this.$store.getters.loadedArticle(this.id)
            }
        }
    }
</script>

<style scoped>

</style>