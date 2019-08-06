<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created() {
    this.$store.dispatch('getQuizList');
  },
};
</script>
