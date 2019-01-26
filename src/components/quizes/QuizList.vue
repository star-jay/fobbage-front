<template>
  <div class="content">
    <ul>
      <li v-for="quiz in quizlist" :key="quiz.name">
        <div class="level">
          <div class="level-item-left">
            {{ quiz.title }}
          </div>
          <div class="level-item-right">
          <router-link
            :to="{name: 'play'}"
          >
          <button  class="button" @click="joinQuiz(quiz.id)">Join!</button>
          </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'QuizList',
  computed: {
    ...mapState({
      quizlist: state => state.quizes.quizes,
    })
  },
  methods: {
    joinQuiz(id) {
      this.$store.dispatch('joinQuiz',{ id });
    }
  }
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
