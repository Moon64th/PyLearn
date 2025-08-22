<script setup>
import { RouterLink } from 'vue-router';
import Routelink from './components/routelink.vue';

</script>

<template>
  <header class="fixed [box-shadow:0_4px_6px_rgba(0,0,0,0.1)] p-4 bg-white w-full">
    <div class="ml-10 flex flex-row">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 269 326" role="img" aria-label="Python Logo (Device Only)">
        <image href="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg" width="100%" height="100%"/>
      </svg>
      <p>™</p>
      <h1 class="text-4xl font-bold ml-7"><RouterLink to="/">PyLearn</RouterLink></h1>
    </div>
    <nav>
      <ul class="ml-45 -mt-12 flex flex-row gap-4">
        <li>
          <router-link class="text-blue-600 hover:underline hover:tect-blue-800" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="text-blue-600 hover:underline hover:tect-blue-800" to="/about">About</router-link>
        </li>
        <li>
          <RouterLink class="text-blue-600 hover:underline hover:tect-blue-800" to="/syntax">syntax handbook</RouterLink>
        </li>
        <li>
          <RouterLink class="text-blue-600 hover:underline hover:tect-blue-800" to="/tutorial">tutorial</RouterLink>
        </li>
      </ul>
  </nav>
  </header>
  <router-view/>
  <footer>
    <div class="absolute mt-[65%] box-shadow:4_4px_6px_rgba(0,0,0,0.1) p-4 bg-white w-full">
      <Routelink class="ml-40 mb-10 align-baseline" to="/impressum" child="impressum"/>
    </div>
  </footer>
</template>

<style scoped>

</style>
