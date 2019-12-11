<template>
  <v-app>
    <v-navigation-drawer
            src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            v-model="drawer"
            app
            dark
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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title left>
        <router-link to="/" tag="span" style="cursor: pointer">NEWS OF THE WORLD</router-link>
      </v-toolbar-title>
      <v-spacer/>

      <v-toolbar-items >
        <v-btn  v-for="item in menuItems" :key="item.title" text router :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>

    </v-app-bar>

    <v-main>
      <v-app>
        <router-view />
      </v-app>
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
    drawer: false,
    menuItems: [
      { icon: 'mdi-lock', title: 'Login', link: '/login'},
      { icon: 'mdi-export-variant', title: 'Register', link: '/register' },
      { icon: 'mdi-pencil-box-outline', title: 'Create Article', link: '/BeitragErstellen' },
      { icon: 'mdi-lock', title: 'Show Articles', link: '/profilanzeigen' },

    ]
    //
  }),
  created() {
    this.$router.push({path: '/home'})
  }
}
</script>
