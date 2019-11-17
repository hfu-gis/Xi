<template>
  <v-app>
    <v-toolbar app
               color="primary"
               dark
                height="50">
      <v-toolbar-title left>
        NEWS OF THE WORLD
      </v-toolbar-title>
      <v-spacer/>

      <v-toolbar-items>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
        <v-btn text>Link 3</v-btn>
        <v-btn text>Link 4</v-btn>

      </v-toolbar-items>

    </v-toolbar>

    <v-main>
      <router-view />
    </v-main>
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
    //
  }),
  created() {
    this.$router.push({path: '/home'})
  }
};
</script>
