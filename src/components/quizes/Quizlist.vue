<template>
  <div class="list">
    <div class="list-item-left" v-for="quiz in quizlist" :key="quiz.name">
      <router-link :to="{name: 'play'}">
        <a class="list-item" @click="joinQuiz(quiz.id)">
        {{ quiz.title }}
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

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
