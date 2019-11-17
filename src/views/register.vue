<template>
    <div id="login">
        <v-container grid-list>
            <v-layout row wrap>
                <v-card class="card-log"
                        outlined
                >
                    <v-toolbar color="info"
                               dark
                               flat>
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>

                    <v-card-text>
                        <v-form>
                            <v-row justify-sm="">
                            <v-text-field
                                    name="firstname"
                                    :rules="[rules.required]"
                                    label="First name"
                                    class="input-group--focused"
                                    prepend-inner-icon="mdi-account"
                                    outlined
                            ></v-text-field>

                            <v-text-field
                                    name="lastname"
                                    :rules="[rules.required]"
                                    label="Last name"
                                    class="input-group--focused"
                                    prepend-inner-icon="mdi-account"
                                    outlined
                            ></v-text-field>
                            </v-row>

                                <v-text-field
                                        name="email"
                                        :rules="[rules.required]"
                                        label="eMail"
                                        class="input-group--focused pa-2"
                                        prepend-inner-icon="mdi-mail"
                                        outlined
                                ></v-text-field>

                                <v-text-field
                                        name="email"
                                        :rules="[rules.required]"
                                        label="Password"
                                        class="input-group--focused pa-2"
                                        prepend-inner-icon="mdi-lock"
                                        outlined
                                ></v-text-field>

                                <v-text-field
                                        name="repeatmail"
                                        :rules="[rules.required]"
                                        label="Repeat password"
                                        class="input-group--focused pa-2"
                                        prepend-inner-icon="mdi-lock"
                                        outlined
                                ></v-text-field>


                            <v-btn color="primary" dark large>Register<v-icon right>mdi-arrow-right</v-icon> </v-btn>

                        </v-form>
                    </v-card-text>
                </v-card>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'register',

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
                    min: v => v.length >= 8 || 'Min. 8 characters',
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
