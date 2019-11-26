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
                            md="6"
                    >

        <v-card class="card-log"
                outlined
        >
            <v-toolbar color="info"
                       dark
                       flat>
                 <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>

            <v-card-text ma="4" class="py-8">
            <v-form @submit.prevent="onSignin">
                    <v-text-field
                        name="email"
                        v-model="email"
                        :rules="[rules.required]"
                        label="eMail"
                        value="info@mail.com"
                        class="input-group--focused px-5"
                        prepend-inner-icon="mdi-account"
                        outlined
                    ></v-text-field>

                    <v-text-field
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required]"
                            :type="show ? 'text' : 'password'"
                            name="passowrd"
                            label="Password"
                            v-model="password"
                            value="xxx"
                            class="input-group--focused px-5"
                            prepend-inner-icon="mdi-lock"
                            outlined
                            @click:append="show = !show"
                    ></v-text-field>

                <v-row class="justify-end ma-5 mt-0" >
                    <v-btn to="/forgot-acc" text >Forgot account?</v-btn>
                </v-row>

                <v-row class="justify-end mx-5" >
                     <v-btn to="/register" large color="warning" dark class="mx-5">Create new Acc!<v-icon right>mdi-arrow-right</v-icon> </v-btn>
                     <v-btn type="submit" color="primary" dark large class="ml-5">Login <v-icon right>mdi-arrow-right</v-icon> </v-btn>
                </v-row>
            </v-form>
            </v-card-text>
        </v-card>
                    </v-col></v-row>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'login',

        // benötigte Komponenten
        components: {},

        // entspricht den HTML-Attributen
        props: {},

        // Variablen-Speicher
        data () {
            return {
                show: false,
                policy: '',
                email: '',
                password: '',
                rules: {
                    required: value => !!value || 'Required.',
                },
            }
        },

        computed: {
            user() {
                return this.$store.getters.user
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
            onSignin () {
                this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
            }
        },

        // Initialisierung
        created() {}
    }
</script>




<style scoped>
    /* CSS für diese Seite hier einfügen */
</style>
