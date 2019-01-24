<template>
  <div class="hello">
    <h1>
      {{ activeQuiz.active_question.text }}
    </h1>
    <el-form>
    <div v-for="answer in activeQuiz.active_question.answers" :key="answer.id">
      <span>{{ answer.text }}</span>
      <el-button>
        Vote!
      </el-button>
    </div>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Guess',
  computed: {
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
