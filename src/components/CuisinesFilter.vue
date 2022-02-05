<template>
  <div class="">
    <button class="flex gap-5 items-center" @click="buttonClickHandler">
      <h3 class="text-3xl">Cuisines</h3>
      <i class="fas fa-caret-down | transform" :class="{'rotate-180': openOptions}"></i>
    </button>
    <ul v-if="openOptions" class="mt-5">
      <li v-for="(item, i) in cuisinesOptions" :key="i" class="flex items-center gap-2">
        <input
          type="checkbox"
          :id="item"
          :value="item"
          v-model="selectedCuisines"
          @change="filterChangeHandler"
        />
        <label :for="item" class="text-lg">{{ item }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openOptions: true,
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
    buttonClickHandler() {
      this.openOptions = !this.openOptions
    },
    filterChangeHandler() {
      this.$store.dispatch('updateSelectedCuisines', this.selectedCuisines)
      this.$emit('cuisineFilteHandler')
    },
  },
}
</script>

<style></style>
