<template>
  <div class="hello">
    <h1 class="text-6xl text-center">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>
