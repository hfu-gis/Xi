<template>
    <div id="inspire">
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
                lazy-src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"
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

            <br>
            <h2 class="display-1" align="center"> <h2 class="blue-grey--text"> {{UserData.firstname}} {{UserData.lastname}}</h2></h2>
            <br>
            <h3 class="headline" align="center">from {{UserData.country}}</h3>
            <br>
            <h3 class="subtitle-2" align="center">{{UserData.email}}</h3>
            <br>
            <h3 class="headline" align="center">work as {{UserData.job}}</h3>
            <br>
            <h3 class="overline" align="center" >{{UserData.text}}</h3>
        </v-card-text>


</v-card>
            </v-col></v-row>
    </div>

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
