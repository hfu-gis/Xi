<template>
<v-app>
    <br>
    <br>
    <br>
    Hallo ich bin ein Profil.
    <br>Name: {{UserData.firstname}}
    <br>Nachname: {{UserData.lastname}}
    <br>email: {{UserData.email}}
    <br>country: {{UserData.country}}




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
        </v-card-text>n










    </v-card>



    </v-app>

</template>


<script>
    const fb = require('../db.js')

    export default {
        props: ['id'],
        // gebt jeder Page einen eigenen Namen
        name: 'profilanzeigen',

        // Variablen-Speicher
        data () {
            return {
                UserData: {
                    userid: "",
                    firstname: "",
                    lastname: "",
                    email: "",
                }
            }
        },


        computed: {
            user() {
                return this.$store.getters.user
            }
        },
        // reagieren auf prop-Veränderung
        watch: {
            id: function(newVal, oldVal) {
                console.log('Prop id changed: ', newVal, ' | was: ', oldVal)
                this.getUserData()
            }
        },

        // interne Methoden
        methods: {
            getUserData() {
                    let docRef = "";
                if(this.id == null) {
                    docRef = fb.db.collection('user').doc(fb.auth.currentUser.uid)
                }
                else {
                    docRef = fb.db.collection('user').doc(this.id)
                }

                    docRef.get()
                        .then(doc => {
                            this.UserData = doc.data()
                        })
                        .catch(error => {
                            console.log(error)
                        })

            }

        },

        // Initialisierung
        created() {
           this.getUserData()

        }
    }
</script>

<style scoped>

    body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}

</style>