<template>
    <v-footer app color="black" class="d-flex align-center justify-center">
      <span>&copy; {{ currentYear }} Your App Name</span>
    </v-footer>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>