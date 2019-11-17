<template>
    <v-app id="login">
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
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
                    <v-toolbar color="info"
                               dark
                               flat>
                        <v-toolbar-title>Create your own Account!</v-toolbar-title>
                    </v-toolbar>

                    <v-card-text>
                        <v-form>
                            <v-row class="px-3">
                            <v-text-field
                                    name="firstname"
                                    :rules="[rules.required]"
                                    label="First name"
                                    class="input-group--focused px-5"
                                    prepend-inner-icon="mdi-account"
                                    outlined
                            ></v-text-field>

                            <v-text-field
                                    name="lastname"
                                    :rules="[rules.required]"
                                    label="Last name"
                                    class="input-group--focused px-5"
                                    prepend-inner-icon="mdi-account"
                                    outlined
                            ></v-text-field>
                            </v-row>

                            <v-text-field
                                    name="email"
                                    :rules="[rules.required]"
                                    label="eMail"
                                    class="input-group--focused px-5"
                                    prepend-inner-icon="mdi-mail"
                                    outlined
                            ></v-text-field>

                            <v-text-field
                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.min]"
                                    :type="show ? 'text' : 'password'"
                                    name="password"
                                    label="Password"
                                    hint="make it strong!"
                                    value="xxx"
                                    class="input-group--focused px-5"
                                    prepend-inner-icon="mdi-lock"
                                    outlined
                                    @click:append="show = !show"
                            ></v-text-field>

                            <v-text-field
                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.min, rules.confirmation,]"
                                    :type="show ? 'text' : 'password'"
                                    name="password1"
                                    label="Repeat password"
                                    hint="make it strong!"
                                    value="xxx"
                                    class="input-group--focused px-5"
                                    prepend-inner-icon="mdi-lock"
                                    @click:append="show = !show"
                                    outlined
                            ></v-text-field>



                            <v-btn color="primary" dark large class="ml-5 ">Register<v-icon right>mdi-arrow-right</v-icon> </v-btn>

                        </v-form>
                    </v-card-text>
                </v-card>
                    </v-col>
                </v-row>
            </v-container>
    </v-app>
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
                    confirmation: password1 => password1.value == password.value || 'It must be the same!',
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
