<template>
  <div class="flex justify-center | 1md:w-7/12 | mx-auto mt-28">
    <button
      v-if="activePage > 1"
      class="mr-3 | hover:opacity-70 transition-all ease-in duration-100"
      @click="changePage('previous')"
    >
      before
    </button>

    <!-- when there is no more than 5 pages -->
    <div v-if="totalPage < 6 && totalPage > 1" class="flex justify-between">
      <button
        v-for="pageNum in totalPage"
        :key="pageNum"
        class="px-2 mx-1 | hover:opacity-70 transition-all ease-in duration-100"
        :class="[pageNum === activePage && 'text-orange font-bold']"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </button>
    </div>
    <!-- when there is more than 5 pages -->
    <div v-else-if="totalPage > 5" class="flex justify-between">
      <!--  first 2 pages  -->
      <!--  hidden class apply to second page number when middle page number is actived due to responsive size -->
      <button
        v-for="pageNum in 2"
        :key="pageNum + 'a'"
        class="px-2 mx-1 | hover:opacity-70 transition-all ease-in duration-100"
        :class="[
          pageNum !== 1 && activePage > 2 && activePage < totalPage - 1 && 'hidden',
          pageNum === activePage && 'text-orange font-bold',
        ]"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </button>
      <!-- first "..." when middle page number is selected  -->
      <div v-if="activePage > 2 && activePage < totalPage - 1" class="px-2 mx-1">•••</div>
      <!-- middle "..." when first 2 or last 2 page is selected  -->
      <div v-if="activePage < 3 || activePage > totalPage - 2" class="px-2 mx-1">•••</div>
      <!-- middle number and last '...' when first 2 or last 2 page is not selected   -->
      <div v-else class="flex">
        <!--  midle page: activePage > 2 && activePage < totalPage - 1 -->
        <div class="px-2 mx-1 text-orange font-bold">
          {{ activePage }}
        </div>
        <div class="px-2 mx-1">•••</div>
      </div>
      <!-- last page -->
      <!--  hidden class apply to last second page number when middle page number is actived due to responsive size -->
      <button
        v-for="(pageNum, i) in lastPage"
        :key="i"
        class="px-2 mx-1 hover:opacity-70 transition-all ease-in duration-100"
        :class="[
          i !== 1 && activePage > 2 && activePage < totalPage - 1 && 'hidden',
          pageNum === activePage && 'text-orange font-bold',
        ]"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </button>
    </div>

    <button
      v-if="totalPage > activePage"
      class="hover:opacity-70 transition-all ease-in duration-100"
      @click="changePage('next')"
    >
      next
    </button>
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
