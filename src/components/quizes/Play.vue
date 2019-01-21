<template>
  <div class="hello">
    <h1>
      {{ activeQuiz().title }}
    </h1>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'Play',
  props: ['id'],
  computed: {
    ...mapState({
      // active_quiz: state => state.quizes.active_quiz,
      quizlist: state => state.quizes.quizes,
    }),
  },
  methods: {
    ...mapGetters(['activeQuiz']),
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
