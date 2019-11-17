<template>
    <div id="login">
        <v-container sm-12>
            <v-layout wrap>
        <v-card class="card-log"
                outlined
        >
            <v-toolbar color="info"
                       dark
                       flat>
                 <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>

            <v-card-text ma="4">
            <v-form>
                    <v-text-field
                        name="name"
                        :rules="[rules.required]"
                        label="eMail"
                        value="info@mail.com"
                        class="input-group--focused"
                        prepend-inner-icon="mdi-account"
                        outlined
                    ></v-text-field>

                    <v-text-field
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show ? 'text' : 'password'"
                            name="passowrd"
                            label="Password"
                            hint="make it strong!"
                            value="xxx"
                            class="input-group--focused"
                            prepend-inner-icon="mdi-lock"
                            outlined
                            @click:append="show = !show"
                    ></v-text-field>

                    <v-btn color="primary" dark large>Login <v-icon right>mdi-arrow-right</v-icon> </v-btn>

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
        name: 'login',

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
