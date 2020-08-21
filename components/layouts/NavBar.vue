<template>
  <section>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      clipped
      fixed
      app
      :color="darkColor"
    >
      <v-list dense>
        <v-list-item two-line :class="miniVariant && 'px-2'">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ userEmail }}
            </v-list-item-title>
            <v-list-item-subtitle>Full Stack Web Developer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          nuxt-link
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-divider></v-divider>
        <div class="py-3 px-4 d-flex justify-space-between">
          <v-chip link outlined label>
            <v-icon left>mdi-tag</v-icon>
            version 1.0.0
          </v-chip>
          <v-btn @click.stop="toggleTheme" icon>
            <v-icon>{{ isDark ? 'mdi-brightness-5' : 'mdi-brightness-7' }}</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
      dense
      dark
      :color="primaryColor"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <v-img width="150" height="55" src="/nuxtjs_logo.png"></v-img>
      </v-toolbar-title>
      <v-spacer />
      <div class="mr-1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            ><v-icon>mdi-bell</v-icon></v-btn>
          </template>
          <span>Notification</span>
        </v-tooltip>

        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          offset-y
          transition="slide-x-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-avatar size="35">
                <img
                  src="https://randomuser.me/api/portraits/men/81.jpg"
                  alt="John"
                >
              </v-avatar>
            </v-btn>
          </template>

          <v-card>
            <v-navigation-drawer
              v-model="menu"
              :color="darkColor"
            >
              <v-list dense outlined>
                <v-list-item>
                  <v-list-item-avatar class="avatar-top">
                    <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      {{ userEmail }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Full Stack Web Developer
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="my-2">
                      <nuxt-link to="/" class="text-decoration-none">Manage your account</nuxt-link>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-list dense nav outlined>
                <v-list-item link @click="logout">
                  <v-list-item-icon>
                    <v-icon>mdi-logout</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Signout</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      menu: false,
      drawer: true,
      miniVariant: false,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Users',
          to: '/users'
        },
        {
          icon: 'mdi-image',
          title: 'Photos',
          to: '/photos'
        },
        {
          icon: 'mdi-help-box',
          title: 'About',
          to: '/about'
        }
      ],
      title: 'Nuxt Vuetify'
    }
  },

  computed: {
    ...mapGetters({
      userEmail: 'getUser'
    }),
    darkColor () {
      return this.$vuetify.theme.dark ? 'rgba(32, 32, 32, 1)' : ''
    },
    primaryColor () {
      return !this.$vuetify.theme.dark ? 'primary' : ''
    },
    isDark () {
      return !this.$vuetify.theme.dark ? true : false
    }
  },

  mounted () {
    const theme = localStorage.getItem("useDarkTheme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else this.$vuetify.theme.dark = false;
    }
  },

  methods: {
    async logout () {
      await this.$fireAuth.signOut()
      this.$store.commit('RESET_USER')
      this.$router.push('login')
      this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'You\'ve logged out' })
    },
    toggleTheme () {
      this.$vuetify.theme.dark=!this.$vuetify.theme.dark;
      localStorage.setItem("useDarkTheme", this.$vuetify.theme.dark)
    }
  }
}
</script>

<style scoped>
.avatar-top {
  margin-top: -20px;
}
</style>