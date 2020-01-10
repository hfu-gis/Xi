<template>
    <v-app id="inspire">
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
<v-card class="mx-auto"
        max-width="400">

        <v-img
                :aspect-ratio="16/9"
                :src="UserData.imageUrl"
                lazy-src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png"
        >
            <template v-slot:placeholder>
                <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
            </template>
        </v-img>
        <v-card-text>
            <h2 class="title primary--text">{{UserData.firstname}} {{UserData.lastname}}</h2>
            <br>
            <h3>from {{UserData.country}}</h3>
            <br>
            <h3>{{UserData.email}}</h3>
            <br>
            <h3>work as {{UserData.job}}</h3>
            <br>
            <br>{{UserData.text}}
        </v-card-text>


</v-card>
            </v-col></v-row>
    </v-app>

</template>


<script>
    const fb = require('../db.js')

    export default {
        props: ['id'],
        // gebt jeder Page einen eigenen Namen
        name: 'profilanzeigen',

        // benötigte Komponenten
        components: {},

        // Variablen-Speicher
        data () {
            return {
                UserData: {
                    userid: "",
                    firstname: "",
                    lastname: "",
                    email: "",
                    text: "",
                    imageUrl: ""
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
                    console.log("User is YOU")
                    docRef = fb.db.collection('user').doc(fb.auth.currentUser.uid)
                }
                else {
                    console.log("User is somerwhere elso")
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
