<template>
  <v-navigation-drawer
    v-model="$store.state.navigationDrawer"
    fixed
    app
  >
    <v-list>
      <v-list-tile
        v-for="menuItem in menu.items"
        :key="menuItem.title"
        :to="menuItem.link ? { name: menuItem.link } : undefined"
      >
        <v-list-tile-action>
          <v-icon>{{ menuItem.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ menuItem.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
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
