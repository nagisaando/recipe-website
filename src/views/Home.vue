<template>
  <div class="px-5 my-44 | container mx-auto">
    <h1 class="text-7xl font-bold text-center | mb-10">Recipe Finder</h1>
    <Search-recipe-bar @searchInputHandler="searchRecipe" />
    <h2 v-if="recipeSearchValue" class="mt-20 text-3xl text-center">
      Search result: {{ recipeSearchValue }}
    </h2>
    <div class="mt-10 | md:flex gap-5">
      <Recipe-list :recipeList="recipeList" />
      <Cuisines-filter @cuisineFilteHandler="searchRecipe" />
    </div>
  </div>
</template>

<script>
import CuisinesFilter from '../components/CuisinesFilter.vue'
import RecipeList from '../components/RecipeList.vue'
import SearchRecipeBar from '../components/SearchRecipeBar.vue'
export default {
  components: {SearchRecipeBar, CuisinesFilter, RecipeList},
  name: 'Home',
  data() {
    return {
      maximumNumberPerPage: 5,
      searchRecipePath: '/complexSearch',
      randomRecipePath: '/random',
      recipeList: [],
      totalResults: 0,
    }
  },
  computed: {
    recipeSearchValue() {
      return this.$store.state.recipeSearchValue
    },
    stringifiedSelectedCuisines() {
      return this.$store.getters.stringifiedSelectedCuisines
    },
    searchRecipeParams() {
      // adding params if there is search input value
      const params = {}
      if (this.recipeSearchValue) {
        params.query = this.recipeSearchValue
      }
      if (this.stringifiedSelectedCuisines) {
        params.cuisine = this.stringifiedSelectedCuisines
      }
      return params
    },
  },
  methods: {
    async searchRecipe() {
      // bug in axios is ignoring axios default params
      // re-adding default param manually
      try {
        const {data} = await this.$axios.get(this.searchRecipePath, {
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
    async getRandomRecipes() {
      try {
        const {data} = await this.$axios.get(this.randomRecipePath, {
          params: {
            number: this.maximumNumberPerPage,
            ...this.$axios.defaults.params,
          },
        })
        this.recipeList = data.recipes
      } catch (err) {
        console.log(err)
      }
    },
  },
  created() {
    console.log('created')
    this.getRandomRecipes()
  },
}
</script>

<style scoped></style>
