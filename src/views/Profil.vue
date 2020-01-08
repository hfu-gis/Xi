
<template>
 <v-app id="Profil">
     <header>
        <br><br><br><br>

      <main>
         <v-card class="ma-auto"
                 max-width="500">
         <v-card-text align="center">
             <h3 class="title primary--text">Account Settings</h3>
         <v-form v-model="valid">
             <v-container>      <!--persönliche daten-->
                 <v-row align="center" justify="center">

                     <v-col align-self="125" cols="10">

                        <v-text-field

                                 v-model="form.firstname"
                                 label="First name"

                                 required

                         ></v-text-field>
                         <!--     :rules="nameRules"     -->



                         <v-text-field

                                 v-model="form.lastname"
                                 label="Last name"


                                 required
                         ></v-text-field>
                        <!-- :rules="nameRules"-->



                         <v-text-field

                                 v-model="form.email"
                                 label="E-mail"

                                 required
                         ></v-text-field>
                         <!--:rules="emailRules"-->

                         <v-menu
                                 ref="menu"
                                 v-model="menu"
                                 :close-on-content-click="false"
                                 transition="scale-transition"
                                 offset-y
                                 full-width
                                 min-width="290px"
                         >
                             <template v-slot:activator="{ on }">
                                 <v-text-field
                                         v-model="date"
                                         label="Birthday date"
                                         prepend-icon="mdi-calendar"
                                         readonly
                                         v-on="on"
                                 ></v-text-field>
                             </template>
                             <v-date-picker
                                     ref="picker"
                                     v-model="date"
                                     :max="new Date().toISOString().substr(0, 10)"
                                     min="1950-01-01"
                                     @change="save"
                             ></v-date-picker>
                         </v-menu>

                         <v-text-field
                                 v-model="form.city"
                                 label="Country"


                                 required
                         ></v-text-field>
                         <!-- :rules="countryRules" -->


                         <v-text-field

                                 v-model="form.job"
                                 label="Job"

                                 required

                         ></v-text-field>





<br><br>

                         <!--bild hochladen-->

                         <v-file-input
                                 v-model="files"
                                 color="deep-purple accent-4"
                                 counter
                                 label="File input"
                                 multiple
                                 placeholder="Upload Image"
                                 prepend-icon="mdi-paperclip"
                                 outlined
                                 :show-size="1000"
                         >
                             <template v-slot:selection="{ index, text }">
                                 <v-chip
                                         v-if="index < 2"
                                         color="deep-purple accent-4"
                                         dark
                                         label
                                         small
                                 >
                                     {{ text }}
                                 </v-chip>

                                 <span
                                         v-else-if="index === 2"
                                         class="overline grey--text text--darken-3 mx-2"
                                 >
                                        +{{ files.length - 2 }} File(s)
                                 </span>
                             </template>
                         </v-file-input>
                     </v-col>




           <!--Textfeld-->
                     <v-col align-self="125" cols="10">
             <v-textarea
                     solo
                     name="input-7-4"
                     label="Profil"

             ></v-textarea>
                     </v-col>




                     <v-col align-self="125" cols="10">     <!-- Edit-Button-->
         <v-btn class="ma-2" tile outlined color="success" link to="profilanzeigen" @click="save">

             <v-icon >Edit</v-icon>
         </v-btn>
                     </v-col>
                 </v-row>
             </v-container>
         </v-form>
         </v-card-text>
         </v-card>
<footer>
    <br><br><br><br>
</footer>


     </main>
    </header>
 </v-app>
</template>




<script>

    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'Profil',


        data: () => ({
            date: null,
            menu: false,
        }),
        watch: {
            menu (val) {
                val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
            },
        },
        methods: {
            save (date) {
                this.$refs.menu.save(date)
            },
        },

        // benötigte Komponenten
        components: { },

        // entspricht den HTML-Attributen
        props: {},

        // Variablen-Speicher
        data() {
            return {
                form: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    city: ''
                }
            }
        },

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: [],



    }
</script>

<style scoped>
    /* CSS für diese Seite hier einfügen */
</style>
