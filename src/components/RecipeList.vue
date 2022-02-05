<template>
  <div class="mb-20 | flex-grow">
    <div class="grid gap-y-10 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
      <Recipe-card v-for="recipe in recipeList" :key="recipe.id" :recipeInfo="recipe" />
    </div>
    <h2 v-if="recipeList.length === 0" class="text-4xl text-center font-semibold mt-20">
      No results found
    </h2>
  </div>
</template>

<script>
import RecipeCard from './RecipeCard.vue'
export default {
  components: {RecipeCard},
  props: {
    recipeList: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style></style>
