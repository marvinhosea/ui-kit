<template>
  <div class="">
    <h4 class="text-5xl text-center">{{ msg }}</h4>
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
