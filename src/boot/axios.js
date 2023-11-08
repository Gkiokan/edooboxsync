import { boot } from 'quasar/wrappers'
import axios from 'axios'
import store from '~/store'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ 
  // baseURL: 'https://api.example.com' 
})


// Base configuration Edoobox 
const edoobox = axios.create({
    baseURL: 'https://app2.edoobox.com/v2',
    headers: {      
      'Content-Type': 'application/json',
    }
})

// Request interceptor for Edoobox
edoobox.interceptors.request.use(request => {
    const token = store.getters['app/token']
    const edid  = store.getters['app/edid']
    
    if (token) {
      request.headers.common['Authorization'] = `Bearer ${token}`
    }

    if (edid) {
      request.headers.common['Authorization'] = `${edid}`
    }
})



export default boot(({ app }) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api
    app.config.globalProperties.$axios = axios
    app.config.globalProperties.$api = api
    app.config.globalProperties.$edoobox = edoobox
})

export { api, edoobox }
