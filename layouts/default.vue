<template>
  <v-app dark>
    <!-- Navbar -->
    <NavBar v-if="user" />

    <!-- Main -->
    <v-main>
      <nuxt />
    </v-main>

    <!-- Snackbar -->
    <SnackBar />
  </v-app>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  components: {
    NavBar: () => import('@@/components/layouts/NavBar'),
    SnackBar: () => import('@@/components/layouts/Snackbar')
  },

  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
}
</script>
