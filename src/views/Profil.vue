
<template>
 <v-app id="inspire">
    <header>
        <v-spacer></v-spacer>
        Profil
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
                             placeholder="Select your files"
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


<v-spacer></v-spacer>


                                                                    <!--datepicker-->
                             <v-date-picker

                                     v-model="picker"
                                     type="month"
                                     year-icon="mdi-calendar-blank"
                                     prev-icon="mdi-skip-previous"
                                     next-icon="mdi-skip-next"
                             ></v-date-picker>






         <v-col cols="12" md="6">       <!--Textfeld-->
             <v-textarea
                     solo
                     name="input-7-4"
                     label="Profil"
             ></v-textarea>
         </v-col>



                     <v-col align-self="125" cols="10">
         <v-btn class="ma-2" tile outlined color="success">

             <v-icon>Edit</v-icon>
         </v-btn>
         </v-col>
                 </v-row>
             </v-container>
         </v-form>
     </main>
    </header>
 </v-app>
</template>




<script>

    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'Profil',

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
        methods: {


        },

        // Initialisierung
        created() {}

    }
</script>

<style scoped>
    /* CSS für diese Seite hier einfügen */
</style>
