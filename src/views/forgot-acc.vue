<template>
    <v-app id="login">
        <v-container
                class="fill-height"
                fluid>
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col
                        cols="12"
                        sm="8"
                        md="4"
                >
            <v-layout row wrap>
                <v-card class="card-log"
                        outlined
                >

                   <v-toolbar color="info"
                              dark
                              flat>
                       <v-toolbar-title>Forgot account?</v-toolbar-title>
                   </v-toolbar>

                    <v-card-text>
                        <b>Forgot your account?</b>
                        <br>Please enter your email to search for your account.
                        <v-form>
                            <br>
                            <v-text-field
                                    name="name"
                                    :rules="[rules.required]"
                                    label="eMail"
                                    value=""
                                    class="input-group--focused"
                                    prepend-inner-icon="mdi-account"
                                    outlined
                            ></v-text-field>


                            <v-btn color="primary" dark large>Get your account back<v-icon right>mdi-arrow-right</v-icon> </v-btn>
                        </v-form>
                    </v-card-text>

                </v-card>
            </v-layout>
                </v-col>
            </v-row>
        </v-container>
    </v-app>

</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'forgotacc',

        // benötigte Komponenten
        components: {},

        // entspricht den HTML-Attributen
        props: {},

        // Variablen-Speicher
        data () {
            return {
                show: false,
                password: 'Password',
                rules: {
                    required: value => !!value || 'Required.',
                },
            }
        },

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: [],

        // Initialisierung
        created() {}
    }
</script>

<style scoped>
    /* CSS für diese Seite hier einfügen */
</style>
