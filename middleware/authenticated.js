export default function ({ store, redirect, res }) {
  if (res && res.locals && res.locals.user) {
    const { allClaims: claims, idToken: token, ...authUser } = res.locals.user
    store.commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims, token })
  }
  if (res && !res.locals.user) return redirect('/login')
}
