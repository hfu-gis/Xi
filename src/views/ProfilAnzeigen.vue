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