import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.spoonacular.com/recipes/'
axios.defaults.params = {}
axios.defaults.params['apiKey'] = '8b7f561930e14d52a9c5ec732adbd113'

Vue.prototype.$axios = axios
