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

        <v-list-item class="hidden-md-and-up" link v-for="item in menuItems" :key="item.title" text router :to="item.link">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
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
        <router-link to="/" tag="span" style="cursor: pointer">PERKS</router-link>
      </v-toolbar-title>
      <v-spacer/>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="px-6" v-for="item in menuItems" :key="item.title" text router :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>

    </v-app-bar>

      <v-app>

        <router-view />

      </v-app>

    <v-footer
            dark
            padless
    >
      <v-card
              class="flex"
      >
        <v-card-title class="primary">
          &copy; {{ new Date().getFullYear() }} — Perks

          <v-spacer></v-spacer>
          <v-btn text link to="/legal-notice"><v-icon size="24px"></v-icon> Legal Notice </v-btn>
          <v-btn text link to="/privacy-policy"><v-icon size="24px"></v-icon> Privacy policy </v-btn>
        </v-card-title>

      </v-card>
    </v-footer>

  </v-app>
</template>

<script>
  import Home from './components/Home';

  export default {
    name: 'App',

    data: () => ({
      drawer: false,
      //
    }),
    components: {
      Home,
    },
    computed: {
      menuItems() {
        let menuItems = [
          { icon: 'mdi-lock', title: 'Login', link: '/login'},
          { icon: 'mdi-export-variant', title: 'Register', link: '/register' },
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            { icon: 'mdi-tooltip-outline', title: 'Show Articles', link: '/BeiträgeAnzeigen' },
            { icon: 'mdi-pencil', title: 'New Article', link: '/BeitragErstellen' },
          ]
        }
        return menuItems
      },

      userIsAuthenticated () {
       return !!this.$store.getters.user;
      }

    },
  created() {
    this.$router.push({path: '/home'})
  }
};
</script>
