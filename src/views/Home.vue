<template>
  <div class="px-5 md:px-10 my-44 | container mx-auto">
    <h1 class="text-7xl font-bold text-center | mb-10">Recipe Finder</h1>
    <Search-recipe-bar @searchInputHandler="searchRecipe" />
    <h2 v-if="recipeSearchValue" class="mt-20 text-3xl text-center">
      Search result: {{ recipeSearchValue }}
    </h2>
  </div>
</template>

<script>
import SearchRecipeBar from '../components/SearchRecipeBar.vue'
export default {
  components: {SearchRecipeBar},
  name: 'Home',
  data() {
    return {
      maximumNumberPerPage: 5,
      path: '/complexSearch',
      recipeList: [],
      totalResults: 0,
    }
  },
  computed: {
    recipeSearchValue() {
      return this.$store.state.recipeSearchValue
    },
    searchRecipeParams() {
      // adding params if there is search input value
      const params = {}
      if (this.recipeSearchValue) {
        params.query = this.recipeSearchValue
      }
      return params
    },
  },
  methods: {
    async searchRecipe() {
      // bug in axios is ignoring axios default params
      // re-adding default param manually
      try {
        const {data} = await this.$axios.get(this.path, {
          params: {
            number: this.maximumNumberPerPage,
            ...this.$axios.defaults.params,
            ...this.searchRecipeParams,
          },
        })
        this.recipeList = data.results
        this.totalResults = data.totalResults
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style scoped></style>
