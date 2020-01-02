<template>
    <v-app id="login">

        <!-- HTML-Code aus dem Body-Tag hier einfügen -->
        <v-container
                fluid>
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col
                        cols="12"
                        xs="10"
                        sm="10"
                        md="10"
                        lg="10"
                        xl="8"
                >
                    <h1>Help</h1>
                    <p>How can I help you?</p>

                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'help',

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
