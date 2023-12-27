<template>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="toggleSidebar" v-if="showSidebarIcon" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="logout" v-if="showLogoutButton">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Navbar',
    props: {
      title: {
        type: String,
        required: true
      },
      showSidebarIcon: {
        type: Boolean,
        default: true
      },
      showLogoutButton: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      toggleSidebar() {
        this.$emit('expand');
      },
      logout() {
        // Implement your logic to handle logout here
      }
    }
  }
  </script>