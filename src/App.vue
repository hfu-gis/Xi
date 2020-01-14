<template>
  <v-app style="background-image: url(https://desenio.de/bilder/artiklar/zoom/8452_2.jpg); background-repeat:no-repeat; background-size: cover">


    <!-- ****************** SIDEBAR ********************* -->
    <v-navigation-drawer
            v-model="drawer"
            app
            dark
            color="secondary"
    >

      <v-list dense >

        <v-list-item v-if="this.userIsAuthenticated">
          <v-list-item-avatar>
            <v-img :src="user.imageUrl" lazy-src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{user.firstname}} {{user.lastname}}</v-list-item-title>
            <v-list-item-subtitle>You're logged in</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <template v-if="!this.userIsAuthenticated">

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                PERKS!
              </v-list-item-title>
              <v-list-item-subtitle>
                Please sign in!
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{name: 'Login'}">
            <v-list-item-action >
              <v-icon>mdi-lock</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{name: 'Register'}">
            <v-list-item-action>
              <v-icon>mdi-export-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </template>


        <v-divider class="ma-5"></v-divider>


        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Find Perks!
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

        <v-list-item link :to="{name: 'Newsfeed'}">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Show all Perks</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
                prepend-icon="mdi-map-marker-multiple"
                :value="false"
        >

        <template v-slot:activator>
          <v-list-item-title>Continents</v-list-item-title>
        </template>

          <v-list-group
                  no-action
                  sub-group
                  :value="false"
                  v-for="(continent, i) in countries.Continents"
                  :key="i"

          >
            <template v-slot:activator>
              <v-list-item link>
                <v-list-item-action>
                  <v-icon></v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{continent.name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-list-item link
                         v-for="(continent1, x) in countries.Continents[i].country"
                         :key="x"
                         :to="'/perks/country/'+ continent.name"
            >

              <v-list-item-action>
                <v-icon></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{continent1.name}}</v-list-item-title>
              </v-list-item-content>

            </v-list-item>

          </v-list-group>
        </v-list-group>

        <v-list-group
                prepend-icon="mdi-dns"
                :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>Categories</v-list-item-title>
          </template>

              <v-list-item link
                           v-for="(categorie, x) in categories.Categories"
                           :key="x"
                            :to="'/perks/category/'+ categorie">
                <v-list-item-action>
                  <v-icon></v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{categorie}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

        </v-list-group>

      <span  v-if="this.userIsAuthenticated">
        <v-divider class="ma-5"></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Your Perks
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to='"/perks/user/"+ this.user.id'>
          <v-list-item-action>
            <v-icon>mdi-loupe</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Your Perks!</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name: 'BeitragErstellen'}">
          <v-list-item-action>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Create a new Perk</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <span class="hidden-md-and-up">
          <v-divider class="ma-5"></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Your Profil
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{name: 'BeitragErstellen'}">
            <v-list-item-action>
              <v-icon>mdi-tooltip-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Your Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{name: 'BeitragErstellen'}">
            <v-list-item-action>
              <v-icon>mdi-pencil</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Edit Your Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item  @click="onLogout">
          <v-list-item-action >
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        </span>
      </span>

</v-list>

    </v-navigation-drawer>


    <!-- ****************** TOP NAVIGATION ********************* -->
    <v-app-bar app
               color="secondary"
               dark
               >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-app-bar-nav-icon left>
        <router-link to="/" tag="span" style="cursor: pointer">
          <img src="./assets/images/logo.png" height="25" width="25" contain/>
        </router-link>
      </v-app-bar-nav-icon>

      <v-toolbar-title left>
        <router-link to="/" tag="span" style="cursor: pointer">PERKS - Find the News you're looking for!</router-link>
      </v-toolbar-title>
      <v-spacer/>

      <!-- If user not auth -->
      <v-toolbar-items class="hidden-sm-and-down" v-if="!this.userIsAuthenticated">
        <v-btn text :to="{name:'Login'}">
          <v-icon left>mdi-lock</v-icon>
          <span class="hidden-md-and-down">Login</span>
        </v-btn>

        <v-btn text :to="{name:'Register'}">
          <v-icon left>mdi-export-variant</v-icon>
          <span class="hidden-md-and-down">Register</span>
        </v-btn>
      </v-toolbar-items>

      <!-- If user auth-->
      <v-toolbar-items class="hidden-sm-and-down" v-if="this.userIsAuthenticated">

        <v-btn icon @click.stop="openSearch = !openSearch">
          <v-icon >mdi-magnify</v-icon>
        </v-btn>

        <v-container>
        <v-text-field
                solo-inverted
                flat
                hide-details
                label="Search"
                prepend-inner-icon="mdi-magnify"
                v-show="openSearch"
        />
      </v-container>

       <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
        >
          <template v-slot:activator="{ on }">
            <v-btn icon >
              <v-avatar>
                <v-img
                        :src="user.imageUrl"
                        lazy-src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"
                        v-on="on"
                ></v-img>
              </v-avatar>
            </v-btn>

          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="user.imageUrl" lazy-src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"></v-img>
                </v-list-item-avatar>

                <v-list-item-content link>
                  <v-list-item-title>{{user.firstname}} {{user.lastname}}</v-list-item-title>
                  <v-list-item-subtitle>You're logged in!</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>

              <v-subheader>
                What are you up to?
              </v-subheader>

                  <v-list-item link to='/profilanzeigen'>
                    <v-list-item-action>
                      <v-icon>mdi-tooltip-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Show your Profil</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

              <v-list-item link :to="{name:'EditProfil'}">
                <v-list-item-action>
                  <v-icon>mdi-pencil</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Edit your Profil</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-subheader>
                See you later!
              </v-subheader>
              <v-list-item  @click="onLogout">
                <v-list-item-action>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list>
          </v-card>
        </v-menu>

      </v-toolbar-items>

    </v-app-bar>


    <v-btn class="hidden-sm-and-down" v-if="this.userIsAuthenticated"
          fixed
          dark
          fab
          style="bottom: 100px; right: 30px;"
          color="secondary"
           :to="{name: 'BeitragErstellen'}"
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>

    <v-content>
        <router-view />
    </v-content>

    <!-- ****************** FOOTER ********************* -->
    <v-footer
            dark
            app
            padless
            color="secondary"
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
  import Home from './components/Home'
  import Template from "./views/Template";

  export default {
    name: 'App',
    data: () => ({
      countries: {},
      categories: {},
      drawer: false,
      menu: false,
      openSearch: false,
      search: '',
      userData: {}
      //
    }),
    components: {
      Template,
      Home,
    },
    computed: {
      user() {
        return this.$store.getters.user
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }

    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
        this.$router.push('login')
      }
    },
  created() {
    this.countries = require('./assets/country.json');
    this.categories = require('./assets/categories.json');
  }
}
</script>

<style scoped>

</style>

<!-- THERE IS NOTHING COMING ANYMORE! -->
