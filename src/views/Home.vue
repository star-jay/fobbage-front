<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <QuizList/>
  </div>
</template>

<script>
// @ is an alias to /src
import QuizList from '@/components/quizes/QuizList.vue';

export default {
  name: 'home',
  components: {
    QuizList,
  },
  created() {
    this.$store.dispatch('getQuizList');
      // .catch(error => this.$toasted.global.error({ error }));
  },
};
</script>
