<template>
    <div class="BeitragErstellen">

        <div id="app">

            <v-app id="inspire">

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
                        <v-toolbar
                                flat
                                color="blue-grey"
                                dark
                        >
                            <v-toolbar-title>Create an article</v-toolbar-title>
                        </v-toolbar>

                        <form @submit.prevent="onCreateArticle">

                        <v-card-text>
                            <v-text-field
                                    name="title"
                                    :rules="[rules.required]"
                                    label="Your title!"
                                    class="input-group--focused px-5"
                                    v-model="article.title"
                                    prepend-inner-icon="mdi-account"
                                    outlined
                            ></v-text-field>

                            <v-row class="px-3">

                                <v-select
                                        :items="countries.Continents"
                                        item-text='name'
                                        v-model="article.country"
                                        prepend-inner-icon="mdi-map"
                                        menu-props="auto"
                                        class="input-group--focused px-5"
                                        label="Where did it happen? - Continent"
                                        outlined
                                ></v-select>
                                <!--<v-select
                                        :items="countries.Continents"
                                        item-text='name'
                                        prepend-inner-icon="mdi-map"
                                        menu-props="auto"
                                        class="input-group--focused px-5"
                                        label="Where did it happen? - Country"
                                        outlined
                                ></v-select>-->
                            </v-row>

                            <v-textarea
                                    name="text"
                                    :rules="[rules.required]"
                                    label="Your article!"
                                    class="input-group--focused px-5"
                                    v-model="article.text"
                                    prepend-inner-icon="mdi-account"
                                    outlined
                            ></v-textarea>

                            <v-divider class="my-2"></v-divider>

                            <v-row class="px-8">
                                <v-file-input v-model="article.image" label="Profil Picture" outlined @change="onFilePicked"></v-file-input>
                            </v-row>


                          <!--  <v-item-group multiple>
                                <v-subheader>Hashtags</v-subheader>
                                <v-item
                                        v-for="n in 8"
                                        :key="n"
                                        v-slot:default="{ active, toggle }"
                                >
                                    <v-chip
                                            active-class="purple--text"
                                            :input-value="active"
                                            @click="toggle"
                                    >
                                            Tag {{ n }}
                                    </v-chip>
                                </v-item>
                            </v-item-group> -->

                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-row class="justify-end mx-5" >
                                <v-btn type="submit" :disabled="loading" :loading="loading" color="primary"  large class="ml-5">
                                    Post <v-icon right>mdi-arrow-right</v-icon>
                                    <span slot="loader" class="custom-loader">
                                 <v-icon>mdi-cached</v-icon>
                             </span>
                                </v-btn>
                            </v-row>
                        </v-card-actions>
                        </form>
                    </v-card>

                    </v-col>
                </v-row>
            </v-app>

        </div>
    </div>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'BeitragErstellen',

        // benötigte Komponenten
        components: {},

        computed: {
            user() {
                return this.$store.getters.user
            },
            error () {
                return this.$store.getters.error
            },
            loading () {
                return this.$store.getters.loading
            }
        },

        // entspricht den HTML-Attributen
        props: {},

        // Variablen-Speicher
        data() {
            return {
                countries: {},
                article: {
                    image: null,
                },
                selected: null,
                rules: {
                    required: value => !!value || 'Required.',
                },
            }
        },

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: {
            onCreateArticle() {
                if(this.image) {
                    this.article.image = this.image
                }
                const articleData = {
                    title: this.article.title,
                    country: this.article.country,
                    text: this.article.text,
                    image: this.article.image
                }

                this.$store.dispatch('createArticle', articleData)

            },

            onDismissed () {
                this.$store.dispatch('clearError')
            },

            onFilePicked (event) {
                const files = event
                let filename = files.name
                if (filename.lastIndexOf('.') <= 0) {
                    return alert('Please add a valid file!')
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.article.imageUrl = fileReader.result
                })
                fileReader.readAsDataURL(files)
                this.article.image = files
            }

        },

        // Initialisierung
        created() {
            this.countries = require('../assets/country.json');
        }
    }
</script>

<style scoped>

    ul {
        list-style-type: lower-roman;
        display: block;
        color: dodgerblue;
        text-align: center;
        padding: 16px;
        margin: 0;
        overflow: hidden;
        background-color: dodgerblue;
    }
</style>
