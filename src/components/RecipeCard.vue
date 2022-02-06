<template>
  <router-link
    :to="`/${recipeInfo.id}`"
    class="hover:opacity-70 transition-all duration-100 ease-in | text-center md:text-left"
  >
    <img
      :src="recipeInfo.image"
      :alt="recipeInfo.title"
      class="object-cover object-center | mx-auto md:mx-0"
    />
    <h1 class="text-xl mt-2 font-semibold">{{ recipeInfo.title }}</h1>
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
