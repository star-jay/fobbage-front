<template>
  <v-app-bar
    color="amber darken-2"
    dark
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <!-- <router-link to="/"> -->
      <v-toolbar-title light>Fobbage</v-toolbar-title>
    <!-- </router-link> -->
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

  </v-app-bar>
</template>


<script>
export default {
  name: 'NavigationBar',
  props: {
    msg: String,
  },
  data() {
    return {
      menu: {
        title: 'Menu',
        items: [
          {
            link: 'home',
            icon: 'linear_scale',
            title: 'Home',
          },
          {
            link: 'play',
            icon: 'gesture',
            title: 'Play',
          },
          {
            link: 'register',
            icon: 'gesture',
            title: 'Register',
          },
        ],
      },
    };
  },
};
</script>
