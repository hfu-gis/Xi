<template>
<v-app>
    <br><br>
    <body>
    <header>
    <v-toolbar
            flat
            color="blue-grey"
            dark
    >
        <v-toolbar-title>
            Show Profil
        </v-toolbar-title>
    </v-toolbar>
    </header>
    <br>
    <br>
<v-card class="mx-auto"
        max-width="400">

 <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
</v-img>
    <v-card-text>
    <h2 class="title primary--text">John Smith</h2>
        <br>
        <h3>from United States of America</h3>
        <br>
        <h3>john@smith.com</h3>
<br>
        <h3>work as Journalist</h3>
        <h4> I'm John and i work as Journlist for the New York Times</h4>
    </v-card-text>


    <!-- row- spalten col- zeilen -->



</v-card>
    </body>
    </v-app>

</template>


<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'profilanzeigen',

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

    body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}

</style>

<!--  <v-hover>
            <template v-slot="{ hover }">
                <v-card
                        :elevation="hover ? 24 : 6"
                        class="mx-auto pa-md-12"
                >
                </v-card>
            </template>-->