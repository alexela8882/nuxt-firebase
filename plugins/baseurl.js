export default ({}, inject) => {
  const url ='http://192.168.1.18:9090/nuxt-backend/public/api/'
  const uri = uri => {
    return `${url}${uri}`
  }
  inject('baseurl', uri)
}
