<template>
  <div class="hello">
    <ul>
      <li v-for="quiz in quizlist" :key="quiz.name">
        <router-link
          :to="{name: 'quiz', params: { id: quiz.id } }"
        >
          {{ quiz.title }}
        </router-link>

      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Quiz from '@/components/quizes/Quiz.vue';

export default {
  name: 'QuizList',
  components: {
    Quiz,
  },
  computed: {
    ...mapState({
      quizlist: state => state.quizes.quizes,
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
