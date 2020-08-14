import albums from './modules/albums'

export const state = () => ({
  authToken: null,
  userId: null,
  userEmail: null,
  loading: false,
  snackbar: false,
  snackbarIcon: null,
  snackbarIconColor: null,
  snackbarText: null,
  snackTimeout: 0,
})

export const getters = {
  getUser (state) {
    return state.userEmail
  }
}

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims, token }) => {
    if (!authUser) {
      // claims = null
      
      // initiate logout
    } else {
      state.authToken = token
      state.userId = authUser.uid
      state.userEmail = authUser.email
    }
  },

  RESET_USER: (state) => {
    state.authToken = null
    state.userId = null
    state.userEmail = null
  },

  SET_LOADING: (state, payload) => {
    state.loading = payload
  },

  CALL_SNACKBAR: (state, payload) => {
    state.loading = false // set loading to false

    state.snackbar = payload.status
    state.snackbarIcon = payload.icon
    state.snackbarIconColor = payload.iconColor
    state.snackbarText = payload.message
    state.snackbarTimeout = payload.timeout
  },

  CLOSE_SNACKBAR(state) {
    state.snackbarTimeout = -1
    state.snackbar = false
  }
}

export const actions = {
  // nuxtServerInit({ commit }, { res }) {
  //   if (res && res.locals && res.locals.user) {
  //     const { allClaims: claims, idToken: token, ...authUser } = res.locals.user
  //     commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims, token })
  //   }
  // }
}

export const modules = {
  albums: albums
}
