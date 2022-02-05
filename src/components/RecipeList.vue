<template>
  <div>
    <div class="grid gap-y-10 md:gap-5 md:grid-cols-2 lg:grid-cols-3 | mb-20">
      <Recipe-card v-for="recipe in recipeList" :key="recipe.id" :recipeInfo="recipe" />
    </div>
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
