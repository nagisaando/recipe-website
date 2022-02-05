import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  recipeSearchValue: '',
}
const getters = {}
const mutations = {
  UPDATE_RECIPE_SEARCH_VALUE(state, recipeSearchValue) {
    state.recipeSearchValue = recipeSearchValue
    console.log('mutation done')
  },
}
const actions = {
  updateRecipeSearchValue({commit}, recipeSearchValue) {
    commit('UPDATE_RECIPE_SEARCH_VALUE', recipeSearchValue)
  },
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
