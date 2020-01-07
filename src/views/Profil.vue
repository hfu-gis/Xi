
<template>
 <v-app id="inspire">
        <v-spacer></v-spacer>
        Profil


        <v-spacer></v-spacer>

        Profil erstellen
     <main>

         <v-form v-model="valid">
             <v-container>      <!--persönliche daten-->
                 <v-row>
                     <v-col
                             cols="12"
                             md="4"
                     >
                        <v-text-field
                                 v-model="firstname"
                                 label="First name"
                                 required
                         ></v-text-field>
                         <!--     :rules="nameRules"     -->
                     </v-col>

                     <v-col
                             cols="12"
                             md="4"
                     >
                         <v-text-field
                                 v-model="lastname"
                                 label="Last name"
                                 required
                         ></v-text-field>
                        <!-- :rules="nameRules"-->
                     </v-col>

                     <v-col
                             cols="12"
                             md="4"
                     >
                         <v-text-field
                                 v-model="email"

                                 label="E-mail"
                                 required
                         ></v-text-field>
                         <!--:rules="emailRules"-->
                     </v-col>
                     <v-col
                             cols="12"
                             md="4"
                     >
                         <v-text-field
                                 v-model="Country"
                                 label="Country"
                                 required
                         ></v-text-field>
                         <!-- :rules="countryRules" -->
                     </v-col>
                     <v-col
                             cols="12"
                             md="4"
                     >
                         <v-text-field
                                 v-model="Job"
                                 label="Job"
                                 required
                         ></v-text-field>
                         <v-spacer></v-spacer>
                     </v-col>

                     <v-spacer></v-spacer>

                     <v-spacer></v-spacer>                  <!--bild hochladen-->

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





                   <div>
                       <v-date-picker>
                     <md-datepicker v-model="selectedDate":md-open-on-focus="false" />

                           <template scope="{ save, cancel }">
                               <v-card-actions>
                                   <v-spacer></v-spacer>
                                   <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                   <v-btn flat color="primary" @click="save">OK</v-btn>
                               </v-card-actions>
                           </template>
                           <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                           <v-btn flat color="primary" @click="save">OK</v-btn>


                       </v-date-picker>
                 </div>


<v-spacer></v-spacer>





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




         <v-col cols="12" md="6">       <!--Textfeld-->
             <v-textarea
                     solo
                     name="input-7-4"
                     label="Profil"
             ></v-textarea>
         </v-col>



                     <v-col align-self="125" cols="10">     <!-- Edit-Button-->
         <v-btn class="ma-2" tile outlined color="success">

             <v-icon>Edit</v-icon>
         </v-btn>
         </v-col>
                 </v-row>
             </v-container>
         </v-form>
     </main>
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
            return {}
        },

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: {

        },

    }
</script>

<style scoped>
    /* CSS für diese Seite hier einfügen */
</style>

<!--
<v-date-picker

        v-model="picker"
        type="month"
        year-icon="mdi-calendar-blank"
        prev-icon="mdi-skip-previous"
        next-icon="mdi-skip-next"


        data: () => ({
    date: null,
    menu: false,
    modal: false
></v-date-picker>-->