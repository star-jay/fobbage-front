<template>
  <div class="hello">
    <h1>
      {{ activeQuiz.active_question.text }}
    </h1>
    <el-form>
      <el-input/>
      <el-button>Bluff!</el-button>

    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Bluff',
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
