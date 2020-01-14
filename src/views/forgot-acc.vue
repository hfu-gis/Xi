<template>
    <div id="login">
        <v-row
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="6"
            >
                <v-card class="card-log"
                        outlined
                >

                   <v-toolbar color="primary"
                              dark
                              flat>
                       <v-toolbar-title>Forgot account?</v-toolbar-title>
                   </v-toolbar>

                    <v-card-text>

                        <v-layout class="mx-9 mt-5" v-if="error">
                            <v-flex>
                                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                            </v-flex>
                        </v-layout>

                        <p class="mx-5 mb-0">
                            <b>Forgot your account?</b>
                            <br>Please enter your email to search for your account!
                        </p>
                        <v-form @submit.prevent="onResetPW">
                            <br>
                            <v-text-field
                                    name="email"
                                    :rules="[rules.required]"
                                    v-model="email"
                                    label="email"
                                    value=""
                                    class="input-group--focused mx-5"
                                    prepend-inner-icon="mdi-account"
                                    outlined
                            ></v-text-field>

                            <v-row class="justify-end mx-5 mb-5" >
                                <v-btn type="submit" :disabled="loading" :loading="loading" color="primary" large class="ml-5 mb-5">
                                    Get your account back<v-icon right>mdi-arrow-right</v-icon>
                                    <span slot="loader" class="custom-loader">
                                        <v-icon>mdi-cached</v-icon>
                                    </span>
                                </v-btn>

                            </v-row>
                        </v-form>
                    </v-card-text>

                </v-card>
                </v-col>
            </v-row>
    </div>

</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'forgotacc',

        // benötigte Komponenten
        components: {},

        computed: {
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
        data () {
            return {
                show: false,
                email: '',
                rules: {
                    required: value => !!value || 'Required.',
                },
            }
        },

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: {
            onResetPW() {
                this.$store.dispatch('resetUser', {email: this.email})
            },
        },

        // Initialisierung
        created() {}
    }
</script>

<style scoped>
    /* CSS für diese Seite hier einfügen */
</style>
