<template>
  <v-app>
    <v-navigation-drawer
            src=""
            v-model="drawer"
            app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>





    <v-app-bar app
               color="primary"
               dark
                height="50">
      <v-toolbar-title left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        NEWS OF THE WORLD
      </v-toolbar-title>
      <v-spacer/>

      <v-toolbar-items>
        <v-btn text to="/login">  <v-icon left>mdi-export-variant</v-icon>Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
        <v-btn text to="/forgot-acc">Link 3</v-btn>
        <v-btn text to="/BeiträgeAnzeigen">Link 4</v-btn>
      </v-toolbar-items>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer
            color="primary"
            app
    >
      <span class="white--text">&copy; 2019 - Nachrichten APP</span>
    </v-footer>

  </v-app>
</template>

<script>
import Home from './components/Home';


export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    drawer: null,
    //
  }),
  created() {
    this.$router.push({path: '/home'})
  }
};
</script>
