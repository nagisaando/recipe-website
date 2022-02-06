<template>
  <div id="app">
    <Navbar />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {Navbar},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fade-enter-active {
  -webkit-transition: opacity 200ms;
}
.fade-leave-active {
  -webkit-transition: opacity 200ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
