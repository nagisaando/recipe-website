<template>
  <div class="px-5 my-32 | container mx-auto">
    <h1 class="text-7xl font-bold text-center | mb-10">Recipe Finder</h1>
    <Search-recipe-bar @searchInputHandler="searchRecipe" />
    <h2 v-if="recipeSearchValue" class="mt-20 text-3xl text-center">
      Search result: {{ recipeSearchValue }}
    </h2>
    <div class="mt-10 | md:flex flex-row-reverse gap-10">
      <div class="mb-20 | flex-grow">
        <Recipe-list :recipeList="recipeList" />
        <Pagination :totalPage="totalPage" @pageNumberHandler="searchRecipe" />
      </div>
      <Cuisines-filter @cuisineFilteHandler="searchRecipe" />
    </div>
  </div>
</template>

<script>
import CuisinesFilter from '../components/CuisinesFilter.vue'
import Pagination from '../components/Pagination.vue'
import RecipeList from '../components/RecipeList.vue'
import SearchRecipeBar from '../components/SearchRecipeBar.vue'
export default {
  components: {SearchRecipeBar, CuisinesFilter, RecipeList, Pagination},
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
    offSet() {
      return this.maximumNumberPerPage * (this.$store.state.activePage - 1)
    },
    searchRecipeParams() {
      // adding params if there is search input value
      const params = {}
      if (this.recipeSearchValue) {
        params.titleMatch = this.recipeSearchValue
      }
      if (this.stringifiedSelectedCuisines) {
        params.cuisine = this.stringifiedSelectedCuisines
      }
      if (this.offSet > 0) {
        params.offset = this.offSet
      }
      return params
    },
    totalPage() {
      return Math.ceil(this.totalResults / 5)
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
  },
  created() {
    this.searchRecipe()
  },
}
</script>

<style scoped></style>
