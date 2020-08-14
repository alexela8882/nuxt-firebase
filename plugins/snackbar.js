export default ({ store }, inject) => {
  const args = arg => {
    const splitIcon = arg.icon.split('.')
    const icon = splitIcon[0]
    const iconColor = splitIcon[1]
    let payload = {
      status: true,
      icon: icon,
      iconColor: iconColor,
      message: arg.text,
      timeout: 5000
    }
    store.commit('CALL_SNACKBAR', payload)
    setTimeout(() => {
      store.commit('CLOSE_SNACKBAR')
    }, payload.timeout);
  }

  inject('snackbar', args)
}