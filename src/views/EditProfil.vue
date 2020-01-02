<template>
    <div class="EditProfil">
        <div id="app">

            <v-app id="inspire">
                <v-card>
                    <v-toolbar
                            flat
                            color="blue-grey"
                            dark
                    >
                        <v-toolbar-title>Edit your Profil</v-toolbar-title>
                    </v-toolbar>

                    <v-card-text>

                        <v-layout class="mx-9 mt-5" v-if="error">
                            <v-flex>
                                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                            </v-flex>
                        </v-layout>

                        <form @submit.prevent="onEditProfil">
                            <v-row class="px-3">
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

                            <v-select class="px-5"
                                    v-model="user.country"
                                    :items="countries"
                                    prepend-inner-icon="mdi-map"
                                    menu-props="auto"
                                    label="Where you are from?"
                                    outlined
                            ></v-select>

                            <v-row class="px-8">
                            <v-file-input label="Profil Picture" outlined ></v-file-input>
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
                countries: [
                    'Alabama', 'Alaska', 'American Samoa', 'Arizona',
                    'Arkansas', 'California', 'Colorado', 'Connecticut',
                    'Delaware', 'District of Columbia', 'Federated States of Micronesia',
                    'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
                    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                    'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
                    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                    'Missouri', 'Montana', 'Nebraska', 'Nevada',
                    'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
                    'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
                    'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
                    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                    'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
                    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
                ],

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
                console.log(this.user.lastname)
                this.$store.dispatch('editUser', {user: this.user})
                this.$router.push("/profilanzeigen")
            },
            onDismissed () {
                this.$store.dispatch('clearError')
            }
        },

        // Initialisierung
        created() {}
    }
</script>

<style scoped>

</style>