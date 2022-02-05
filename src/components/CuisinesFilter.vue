<template>
  <div class="">
    <h3 class="text-3xl">Cuisines</h3>
    <ul class="mt-5">
      <li v-for="(item, i) in cuisinesOptions" :key="i" class="">
        <input
          type="checkbox"
          :id="item"
          :value="item"
          v-model="selectedCuisines"
          @change="filterChangeHandler"
        />
        <label :for="item" class="text-lg ml-2">{{ item }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCuisines: [],
      cuisinesOptions: [
        'African',
        'American',
        'British',
        'Cajun',
        'Caribbean',
        'Chinese',
        'Eastern European',
        'European',
        'French',
        'German',
        'Greek',
        'Indian',
        'Irish',
        'Italian',
        'Japanese',
        'Jewish',
        'Korean',
        'Latin American',
        'Mediterranean',
        'Mexican',
        'Middle Eastern',
        'Nordic',
        'Southern',
        'Spanish',
        'Thai',
        'Vietnamese',
      ],
    }
  },
  methods: {
    filterChangeHandler() {
      this.$store.dispatch('updateSelectedCuisines', this.selectedCuisines)
      this.$store.dispatch('updateActivePage', 1)
      this.$emit('cuisineFilteHandler')
    },
  },
}
</script>

<style></style>
