<template>
  <div class="inline-flex border border-black | w-4/5">
    <input
      v-model="search"
      class="rounded px-5 py-2 | flex-grow"
      @keyup.enter="searchInputHandler"
      placeholder="Find a recipe"
    />
    <button class="px-3 bg-orange" @click="searchInputHandler">
      <i class="fas fa-search text-white"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    searchInputHandler() {
      this.$emit('searchInputHandler', {query: this.search})
    },
  },
}
</script>

<style></style>
