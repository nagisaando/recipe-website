<template>
  <div class="hello">
    <div>Home page</div>
    <button @click="getData">click</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    async getData() {
      try {
        const data = await this.$axios.get('/716429/information')
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style scoped></style>
