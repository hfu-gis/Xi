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
                        <v-form @submit.prevent="onSignup">
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
                                    :rules="[comparePasswords]"
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

                                <v-checkbox
                                        :rules="[v => !!v || 'You must agree to continue!']"
                                        label="Agree to our Privacy policy!"
                                        name="policy"
                                        class="mx-5"
                                        required
                                ></v-checkbox>

                            <v-row class="justify-end mx-5" >
                                <v-btn type="submit" color="primary" dark large class="ml-5 mb-5">Register<v-icon right>mdi-arrow-right</v-icon> </v-btn>
                            </v-row>

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
                policy: '',
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                password1: '',
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min. 8 characters',
                },
            }
        },

        computed: {
            comparePasswords () {
                return this.password !== this.password1 ? 'Passwords do not match!' : true
            }
        },

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: {
            onSignup () {
                console.log({firstname: this.firstname, lastname: this.lastname, email: this.email, password: this.password, password1: this.password1, policy: this.policy})
            }
        },

        // Initialisierung
        created() {}
    }
</script>




<style scoped>
    /* CSS für diese Seite hier einfügen */
</style>
