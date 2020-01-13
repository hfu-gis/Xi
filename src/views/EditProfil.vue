<template>
    <div class="EditProfil">
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
                        <v-toolbar-title>Edit your Profil</v-toolbar-title>
                    </v-toolbar>

                    <v-card-text>

                        <v-img :src="user.imageUrl" lazy-src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" height="300px" class="ma-5"></v-img>

                        <v-layout class="mx-9 mt-5" v-if="error">
                            <v-flex>
                                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                            </v-flex>
                        </v-layout>

                        <form @submit.prevent="onEditProfil">
                            <v-row class="px-3 pt-5">
                           <v-text-field
                                    name="firstname"
                                    :rules="[rules.required]"
                                    label="First name"
                                    class="input-group--focused px-5"
                                    v-model="user.firstname"
                                    prepend-inner-icon="mdi-account"
                                    outlined
                            ></v-text-field>

                            <v-text-field
                                    name="lastname"
                                    :rules="[rules.required]"
                                    label="Last name"
                                    v-model="user.lastname"
                                    class="input-group--focused px-5"
                                    prepend-inner-icon="mdi-account"
                                    outlined
                            ></v-text-field>

                            </v-row>
                            <v-row class="px-8">
                                <v-file-input v-model="user.image" label="Profil Picture" outlined @change="onFilePicked"></v-file-input>
                            </v-row>


                            <v-text-field
                                    class="px-5"
                                    :rules="[rules.required]"
                                    v-model="user.job"
                                    label="job"
                                    prepend-inner-icon="mdi-shape-plus"
                                    outlined
                            ></v-text-field>


                            <v-select
                                    :items="countries.Continents"
                                    item-text='name'
                                    v-model="user.country"
                                    prepend-inner-icon="mdi-map-marker"
                                    menu-props="auto"
                                    class="input-group--focused px-5"
                                    label="Where did it happen? - Continent"
                                    outlined
                            ></v-select>

                            <v-row class="px-8">       <!--Textfeld-->
                                <v-textarea
                                        outlined
                                        v-model="user.text"
                                        prepend-inner-icon="mdi-pencil"
                                        name="input-7-4"
                                        label="Write something about you!"
                                ></v-textarea>
                            </v-row>

                            <v-row class="justify-end mx-5" >
                                <v-btn type="submit" :disabled="loading" :loading="loading" color="primary" large class="ml-5 mb-5">
                                    Update Profil<v-icon right>mdi-arrow-right</v-icon>
                                    <span slot="loader" class="custom-loader">
                                                <v-icon>mdi-cached</v-icon>
                                            </span>
                                </v-btn>
                            </v-row>

                        </form>
                    </v-card-text>



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
        name: 'EditProfil',

        // benötigte Komponenten
        components: {},

        // entspricht den HTML-Attributen
        props: {},

        // Variablen-Speicher
        data () {
            return {
                UserData: {
                    image : null,
                },

                countries: {},

                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min. 8 characters',
                },
            }
        },

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
        // reagieren auf prop-Veränderung

        // interne Methoden
        methods: {
            onEditProfil () {
                if(this.UserData.image) {
                    this.user.image = this.UserData.image
                }
                const UserData = {
                    id: this.$store.getters.user.id,
                    firstname: this.user.firstname,
                    lastname: this.user.lastname,
                    country: this.user.country,
                    job: this.user.job,
                    text: this.user.text,
                    image: this.user.image
                }

                console.log(this.user.lastname)
                this.$store.dispatch('editUser', {UserData})
                this.$router.push({ name: 'profilanzeigen' })
            },
            onDismissed () {
                this.$store.dispatch('clearError')
            },

            onFilePicked (event) {
                const files = event
                let filename = files.name
                console.log("FILENAME", filename)
                if (filename.lastIndexOf('.') <= 0) {
                    return alert('Please add a valid file!')
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.user.imageUrl = fileReader.result
                })
                fileReader.readAsDataURL(files)
                this.UserData.image = files
            }

        },

        // Initialisierung
        created() {
            this.countries = require('../assets/country.json');
        }
    }
</script>

<style scoped>

</style>