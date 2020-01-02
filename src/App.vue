<template>
  <v-app>
    <v-navigation-drawer
            src="https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            v-model="drawer"
            app
            dark>

      <v-list dense v-if="!this.userIsAuthenticated">
        <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
          <v-list-item-content>
        <v-list-item-title>Marc Eberhard</v-list-item-title>
        <v-list-item-subtitle>You're logged in</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="mb-5"></v-divider>


        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Find Perks
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

        <v-list-group
                prepend-icon="mdi-earth"
                value="true"
        >
        <template v-slot:activator>
          <v-list-item-title>Continents</v-list-item-title>
        </template>

          <v-list-group
                  value="true"
          >
            <template v-slot:activator>
              <v-list-item link>
                <v-list-item-action>
                  <v-icon></v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Africa</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>

            <v-list-group
                    value="true"
            >
              <template v-slot:activator>
                <v-list-item link>
                  <v-list-item-action>
                    <v-icon></v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Asia</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list-group>

              <v-list-group
                      value="true"
              >
                <template v-slot:activator>
                  <v-list-item link>
                    <v-list-item-action>
                      <v-icon></v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Australia</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list-group>

                <v-list-group
                >
                  <template v-slot:activator>
                    <v-list-item link>
                      <v-list-item-action>
                        <v-icon></v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>Europe</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list-group>

                  <v-list-group
                        value="true"
                >
                  <template v-slot:activator>
                    <v-list-item link>
                      <v-list-item-action>
                        <v-icon></v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>North America</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                  </v-list-group>

                    <v-list-group
                            value="true"
                    >
                      <template v-slot:activator>
                        <v-list-item link>
                          <v-list-item-action>
                            <v-icon></v-icon>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title>South America</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </template>
                    </v-list-group>
        </v-list-group>



        <v-divider class="my-5"></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Your Perks
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item link >
          <v-list-item-action>
            <v-icon>mdi-pencil</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Your Perk</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Create a new Perk</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

      <template v-slot:append>

        <div class="pa-2">
          <v-btn block>Help</v-btn>
        </div>
      </template>
    </v-navigation-drawer>



    <v-app-bar app
               color="primary"
               dark
               src="https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-side-icon left>
        <v-img contain width="40px" src="./assets/images/logo.png" />
      </v-toolbar-side-icon>

      <v-toolbar-title left>
        <router-link to="/" tag="span" style="cursor: pointer">PERKS</router-link>
      </v-toolbar-title>
      <v-spacer/>

   <!--
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="px-6" v-for="item in menuItems" :key="item.title" text router :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    -->

      <!-- If user not auth -->
      <v-toolbar-items class="hidden-sm-and-down" v-if="this.userIsAuthenticated">
        <v-btn text :to="{name:'Login'}">
          <v-icon left>mdi-lock</v-icon> Login
        </v-btn>

        <v-btn text :to="{name:'Register'}">
          <v-icon left>mdi-export-variant</v-icon> Register
        </v-btn>
      </v-toolbar-items>

      <!-- If user auth-->
      <v-toolbar-items class="hidden-sm-and-down" v-if="!this.userIsAuthenticated">

        <v-btn icon @click.stop="openSearch = !openSearch" >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-text-field
                solo-inverted
                flat
                hide-details
                label="Search"
                prepend-inner-icon="mdi-magnify"
                v-show="openSearch"
        />

       <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
        >
          <template v-slot:activator="{ on }">
            <v-btn icon >
              <v-avatar>
                <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                        v-on="on"
                >
              </v-avatar>
            </v-btn>

          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-list-item-avatar>

                <v-list-item-content link>
                  <v-list-item-title>Marc Eberhard</v-list-item-title>
                  <v-list-item-subtitle>Best dude in the world!</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
                  <v-list-item link :to="{name:'Profil'}">
                    <v-list-item-action>
                      <v-icon>mdi-tooltip-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>My Profil</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item link>
                    <v-list-item-action>
                      <v-icon>mdi-keyboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>My Articles</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

              <v-list-item link>
                <v-list-item-action>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Messages</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list>
          </v-card>
        </v-menu>

      </v-toolbar-items>

    </v-app-bar>

      <v-app>
        <router-view />
      </v-app>

    <v-footer
            dark
            app
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
      menu: false,
      openSearch: false,
      search: ''
      //
    }),
    components: {
      Home,
    },
    computed: {
      userIsAuthenticated () {
       return !!this.$store.getters.user;
      }

    },
  created() {
    this.$router.push({path: '/home'})
  }
}
</script>
