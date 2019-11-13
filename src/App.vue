<template>
  <v-app>
    <v-toolbar short>
      <v-toolbar-title>
        NEWS OF THE WORLD
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/login">  <v-icon left>mdi-export-variant</v-icon>Login</v-btn>
        <v-btn text>Link 2</v-btn>
        <v-btn text>Link 3</v-btn>
      </v-toolbar-items>

    </v-toolbar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
  created() {
    this.$router.push({path: '/home'})
  }
};
</script>
