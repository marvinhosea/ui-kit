<template>
  <div id="app">
    <div class="w-full justify-center flex mt-8">
      <img alt="Apps:Lab Logo" class="h-24" src="img/logo.svg">
    </div>
    <Home msg="Tailwind UI Components"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
