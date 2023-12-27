<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item v-for="item in menuItems" :key="item.title" link :to="item.link" class="d-flex">
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
export default {
  props: {
    expand: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      drawer: false,
      menuItems: [
        { title: 'Home', icon: 'mdi-home', link: '/'},
        { title: 'About', icon: 'mdi-information', link: '/about'},
        { title: 'Contact', icon: 'mdi-email', link: '/contact' },
      ],
    };
  },
  watch: {
    expand(value) {
      this.drawer = value;
    }
  }
};
</script>