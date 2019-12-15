<template>
    <v-app id="login">

    <!-- HTML-Code aus dem Body-Tag hier einfügen -->
            <v-container
                    fluid>
                <v-row

                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="6"
                    >
        <h1>Legal Notice</h1>
        <p>Its legal to be here!</p>
                </v-col></v-row></v-container>
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
