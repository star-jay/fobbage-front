<template>
  <div class="hello">
    <div v-if="activeQuiz">
      <Bluff v-if="questionStatus == 1" />
      <Guess v-if="questionStatus == 2" />
    <h1 v-else>
      {{ activeQuiz.title }}
    </h1>
    </div>
    <div v-else>
      <h2>Select a quiz to play first!</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Bluff from '@/components/quizes/Bluff.vue';
import Guess from '@/components/quizes/Guess.vue';


export default {
  name: 'Play',
  components: { Bluff, Guess },
  computed: {
  // methods: {
    ...mapGetters(['activeQuiz', 'questionStatus']),
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
