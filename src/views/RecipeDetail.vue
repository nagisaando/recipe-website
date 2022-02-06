<template>
  <div class="px-5 my-40 | container mx-auto">
    <h1 class="text-5xl font-bold">{{ recipeData.title }}</h1>
    <ul v-if="recipeData.diets.length > 0" class="my-5 | flex flex-wrap gap-3">
      <li
        v-for="(item, i) in recipeData.diets"
        :key="i"
        class="border-2 border-orange | py-1 px-2 | rounded-lg | capitalize"
      >
        {{ item }}
      </li>
    </ul>
    <img :src="recipeData.image" :alt="recipeData.title" />
    <p v-html="recipeData.summary" class="mt-10"></p>
    <hr class="my-16" />
    <h2 class="text-2xl font-semibold">Ingredients:</h2>
    <ul class="list-disc ml-5 mt-5">
      <li v-for="(el, i) in recipeData.extendedIngredients" :key="i" class="my-2">
        {{ `${el.amount} ${el.unit} ${el.name}` }}
      </li>
    </ul>
    <hr class="my-16" />
    <h2 class="text-2xl font-semibold">instructions:</h2>
    <ol class="list-decimal | ml-5 mt-5">
      <li v-for="(el, i) in recipeData.analyzedInstructions[0].steps" :key="i" class="my-2">
        {{ el.step }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'RecipeDetail',
  data() {
    return {
      recipeData: {},
    }
  },
  computed: {
    path() {
      return `${this.$route.params.id}/information`
    },
  },
  methods: {
    async getRecipeData() {
      try {
        const {data} = await this.$axios.get(this.path)
        this.recipeData = data
      } catch (err) {
        console.log(err)
        this.$router.replace({name: 'NotFound'})
      }
    },
  },
  created() {
    this.getRecipeData()
  },
}
</script>

<style scoped></style>
