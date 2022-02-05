import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.spoonacular.com/recipes/'
axios.defaults.params = {}
axios.defaults.params['apiKey'] = process.env.VUE_APP_API_KEY

Vue.prototype.$axios = axios
