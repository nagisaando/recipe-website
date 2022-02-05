<template>
  <div class="flex justify-center | 1md:w-7/12 | mx-auto mt-28">
    <div>
      <button
        v-if="activePage > 1"
        class="| mr-3 | transition-all ease-in duration-100 |"
        @click="changePage('previous')"
      >
        before
      </button>
    </div>
    <!-- when there is no more than 5 pages -->
    <ul v-if="totalPage < 6 && totalPage > 1" class="flex justify-between">
      <li
        v-for="i in totalPage"
        :key="i"
        class="px-2 mx-1"
        :class="[i === activePage && 'text-orange font-bold']"
        @click="changePage(i)"
      >
        {{ i }}
      </li>
    </ul>
    <!-- when there is more than 5 pages -->
    <ul v-else-if="totalPage > 5" class="flex justify-between">
      <!--  first 2 pages  -->
      <!--  hidden class apply when middle page number is actived due to responsive size -->
      <li
        v-for="i in 2"
        :key="i + 'a'"
        class="px-2 mx-1"
        :class="[
          i !== 1 && activePage > 2 && activePage < totalPage - 1 && 'hidden',
          i === activePage && 'text-orange font-bold',
        ]"
        @click="changePage(i)"
      >
        {{ i }}
      </li>
      <!-- first "..." when middle page number is selected  -->
      <li v-if="activePage > 2 && activePage < totalPage - 1" class="px-2 mx-1">
        <span class="h-5">•••</span>
      </li>
      <!-- middle "..." when first 2 or last 2 page is selected  -->
      <li v-if="activePage < 3 || activePage > totalPage - 2" class="px-2 mx-1">
        <span class="h-5">•••</span>
      </li>
      <!-- middle number and last '...' -->
      <div v-else class="flex">
        <li
          v-for="(item, i) in middlePage"
          :key="i"
          class="px-2 mx-1"
          :class="[item === activePage && 'text-orange font-bold']"
          @click="changePage(item)"
        >
          {{ item }}
        </li>
        <li class="px-2 mx-1">
          <span class="h-5">•••</span>
        </li>
      </div>
      <!-- last page -->
      <li
        v-for="(item, i) in lastPage"
        :key="i"
        class="px-2 mx-1"
        :class="[
          i !== 1 && activePage > 2 && activePage < totalPage - 1 && 'hidden',
          item === activePage && 'text-orange font-bold',
        ]"
        @click="changePage(item)"
      >
        {{ item }}
      </li>
    </ul>
    <div>
      <button v-if="totalPage > activePage" class="" @click="changePage('next')">next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {}
  },
  computed: {
    middlePage() {
      const arr = []
      let page = this.activePage
      let i
      for (i = 0; i < 1; i++) {
        arr.push(page++)
      }
      return arr
    },
    lastPage() {
      const arr = []
      let page = this.totalPage
      let i
      for (i = 0; i < 2; i++) {
        arr.unshift(page--)
      }
      return arr
    },
    activePage() {
      return this.$store.state.activePage
    },
  },
  watch: {},
  methods: {
    changePage(page) {
      let pageNumber = 0
      if (page === 'next' && this.totalPage > this.activePage) {
        pageNumber = this.activePage + 1
      } else if (page === 'previous' && this.activePage > 0) {
        pageNumber = this.activePage - 1
      } else {
        pageNumber = page
      }
      this.$store.dispatch('updateActivePage', pageNumber)
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0
      this.$emit('pageNumberHandler')
    },
  },
}
</script>

<style></style>
