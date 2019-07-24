<template>
  <div class="list">
    <div class="list-item-left" v-for="quiz in quizlist" :key="quiz.name">
      <router-link :to="{name: 'play', params: { id: quiz.id }}">
        <a class="list-item" @click="joinQuiz(quiz.id)">
          {{ quiz.title }}
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import router from '@/router';


export default {
  name: 'Quizlist',
  computed: {
    ...mapState({
      quizlist: state => state.quizes.quizes,
    }),
  },
  methods: {
    joinQuiz(id) {
      this.$store.dispatch('joinQuiz', { id });
    },
  },
  created() {
    this.$store.dispatch('getQuizList');
  },
};
</script>
