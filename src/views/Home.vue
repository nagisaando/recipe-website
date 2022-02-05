<template>
  <div class="px-5 md:px-10 my-44 | container mx-auto">
    <h1 class="text-7xl font-bold mb-10">Recipe Finder</h1>
    <Search-product-bar @searchInputHandler="updateURLQueryParam($event)" />
  </div>
</template>

<script>
import SearchProductBar from '../components/SearchProductBar.vue'
export default {
  components: {SearchProductBar},
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
    searchRecipeParams() {
      // adding params if there is searchInput
      const params = {}
      if (this.$route.query.query) {
        params.query = this.$route.query.query
      }
      return params
    },
  },
  methods: {
    updateURLQueryParam(newQuery) {
      this.$router.push({query: {...this.$route.query, ...newQuery}}).catch((error) => {
        if (
          // hiding NavigationDuplicated error
          error.name !== 'NavigationDuplicated' &&
          !error.message.includes('Avoided redundant navigation to current location')
        ) {
          console.log(error)
        }
      })
    },
    async searchData() {
      // bug in axios is ignoring axios default params
      // re-adding default param manually
      const {data} = await this.$axios.get(this.path, {
        params: {
          number: this.maximumNumberPerPage,
          ...this.$axios.defaults.params,
          ...this.searchRecipeParams,
        },
      })
      this.recipeList = data.results
      this.totalResults = data.totalResults
    },
  },
  watch: {
    $route() {
      console.log('changed')
      this.searchData()
    },
  },
}
</script>

<style scoped></style>
