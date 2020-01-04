<template>
    <v-app id="login">

            <v-row
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

                    <v-card>
                        <v-toolbar
                                flat
                                color="blue-grey"
                                dark
                        >
                            <v-toolbar-title>Legal Notice</v-toolbar-title>
                        </v-toolbar>

                        <v-card-text>
        Its legal to be here!
                        </v-card-text></v-card></v-col></v-row>
    </v-app>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'legalnotice',

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
