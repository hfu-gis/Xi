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

                            <v-layout class="mx-9 mt-5" v-if="error">
                                <v-flex>
                                    <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                                </v-flex>
                            </v-layout>

                            <v-card-text>
                                <form @submit.prevent="onSignup">
                                    <!-- <v-row class="px-3">
                                   <v-text-field
                                            name="firstname"
                                            :rules="[rules.required]"
                                            label="First name"
                                            class="input-group--focused px-5"
                                            v-model="firstname"
                                            prepend-inner-icon="mdi-account"
                                            outlined
                                    ></v-text-field>

                                    <v-text-field
                                            name="lastname"
                                            :rules="[rules.required]"
                                            label="Last name"
                                            v-model="lastname"
                                            class="input-group--focused px-5"
                                            prepend-inner-icon="mdi-account"
                                            outlined
                                    ></v-text-field>
                                    </v-row>-->

                                    <v-text-field
                                            name="email"
                                            :rules="[rules.required]"
                                            label="eMail"
                                            v-model="email"
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
                                            v-model="password"
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
                                            v-model="password1"
                                            value="xxx"
                                            class="input-group--focused px-5"
                                            prepend-inner-icon="mdi-lock"
                                            @click:append="show = !show"
                                            outlined
                                    ></v-text-field>

                                        <v-checkbox
                                                label="Agree to our Privacy policy!"
                                                name="policy"
                                                class="mx-5"
                                                required
                                        ></v-checkbox>

                                    <v-row class="justify-end mx-5" >
                                        <v-btn type="submit" :disabled="loading" :loading="loading" color="primary" large class="ml-5 mb-5">
                                            Register<v-icon right>mdi-arrow-right</v-icon>
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
                return this.password !== this.password1 ? 'Passwords do not match!' : null
            },
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
        watch: {
            user(value) {
                if (value !== null && value !== undefined) {
                    this.$router.push('/')
                }
            }
        },

        // interne Methoden
        methods: {
            onSignup () {
                this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
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
    /* CSS für diese Seite hier einfügen */
</style>
