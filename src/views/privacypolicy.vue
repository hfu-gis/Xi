<template>
    <v-app id="login">

        <!-- HTML-Code aus dem Body-Tag hier einfügen -->
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
                    <h1>Privacy Policy</h1>
                    <p>Your data is safe. Maybe ;)</p>
                </v-col></v-row></v-container>
    </v-app>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'privacypolicy',

        // benötigte Komponenten
        components: {},

        // entspricht den HTML-Attributen
        props: {},

        // Variablen-Speicher
        data() {
            return {}
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
