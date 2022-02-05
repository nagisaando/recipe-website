import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  recipeSearchValue: '',
  selectedCuisines: [],
}
const getters = {
  stringifiedSelectedCuisines(state) {
    return state.selectedCuisines.join(',')
  },
}
const mutations = {
  UPDATE_RECIPE_SEARCH_VALUE(state, recipeSearchValue) {
    state.recipeSearchValue = recipeSearchValue
  },
  UPDATE_SELECTED_CUISINES(state, selectedCuisines) {
    state.selectedCuisines = selectedCuisines
  },
}
const actions = {
  updateRecipeSearchValue({commit}, recipeSearchValue) {
    commit('UPDATE_RECIPE_SEARCH_VALUE', recipeSearchValue)
  },
  updateSelectedCuisines({commit}, selectedCuisines) {
    commit('UPDATE_SELECTED_CUISINES', selectedCuisines)
  },
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
