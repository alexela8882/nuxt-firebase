<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center wrap width="500">
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>
              Please login
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-img width="40" height="30" src="~/assets/nuxtjs_logo.png"></v-img>
          </v-toolbar>
          <v-card-text>
            <v-form :disabled="loading" @submit.prevent>
              <v-text-field
                autofocus
                prepend-icon="person"
                v-model="email"
                label="Username"
                type="text"
                @keydown.enter="login"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                v-model="password"
                label="Password"
                type="password"
                @keydown.enter="login"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              v-if="1 != 1"
              color="secondary"
              @click="loginWithGoogle"
              :loading="loading"
              >Sign In With Google</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="login"
              :loading="loading"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex'

export default {
  middleware: ['notAuthenticated'],

  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },

  asyncData () {
    return {
      email: null,
      password: null,
    }
  },

  created () {
    console.log(this.$store.getters.getUser)
  },

  methods: {
    async login () {
      this.$store.commit('SET_LOADING', true)
      try {
        const response = await this.$fireAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        )
        this.$router.push('/')
        this.$snackbar({ icon: 'mdi-checkbox-marked-circle.green', text: 'You have been logged in.' })
      } catch (e) {
        this.$snackbar({ icon: 'mdi-close-circle.red', text: e })
      }
    },

    loginWithGoogle () {
      const provider = new this.$fireAuth.GoogleAuthProvider()
      this.$fireAuth.signInWithPopup(provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

    }
  }
}
</script>

<style>

</style>
