<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div style="margin-top: 50px"></div>
  <img alt="sfy logo" src="../assets/water.png">
  <h1>MoonStar Studio</h1>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/">About</router-link>
  </div>
  <p>
    This is a little demo for :
    <a href="/" target="_blank">PeterShen</a>
    +
    <a href="/" target="_blank">Gittes</a>
  </p>

  <p>
    Contact me whenever you need help
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    However
    <code>I can do nothing for you</code> beside knowing you.
  </p>
</template>

<style scoped>
</style>
