<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <transition name="flip" mode="out-in" enter-active-class="animated flipInY" enter-leave-class="animated flipOutY"> -->
      <router-view class="animated"></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
