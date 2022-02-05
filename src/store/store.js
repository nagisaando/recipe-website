import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  recipeSearchValue: '',
  selectedCuisines: [],
  activePage: 1,
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
  UPDATE_ACTIVE_PAGE(state, page) {
    state.activePage = page
  },
}
const actions = {
  updateRecipeSearchValue({commit}, recipeSearchValue) {
    commit('UPDATE_RECIPE_SEARCH_VALUE', recipeSearchValue)
  },
  updateSelectedCuisines({commit}, selectedCuisines) {
    commit('UPDATE_SELECTED_CUISINES', selectedCuisines)
  },
  updateActivePage({commit}, page) {
    commit('UPDATE_ACTIVE_PAGE', page)
  },
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
