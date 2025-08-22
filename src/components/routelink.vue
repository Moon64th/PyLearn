<script setup>
defineProps({
  to: String,
  child: String
})
</script>

<template>
    <router-link class="text-blue-600 hover:underline hover:tect-blue-800"  :to="to" >{{ child }}</router-link>
</template>

<style scoped>

</style>

