<template>
  <router-link :to="`/${recipeInfo.id}`">
    <img :src="recipeInfo.image" :alt="recipeInfo.title" class="object-cover object-center" />
    <h1 class="text-xl mt-2">{{ recipeInfo.title }}</h1>
  </router-link>
</template>

<script>
export default {
  props: {
    recipeInfo: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>
