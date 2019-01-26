<template>
  <div class="hello">
    <div v-if="activeQuiz">
      <Bluff v-if="questionStatus == 1" />
      <Guess v-else-if="questionStatus == 2" />
      <div v-else-if="questionStatus == -1">
        <h1 class="title">
          {{ activeQuiz.title }}
        </h1>
        <span>
          no active question
        </span>
      </div>
      <div v-else>
        nothing to do for now...
      </div>
    </div>

    <div v-else>
      <h2>Select a quiz to play first!</h2>
    </div>
     <button class="button" v-on:click="getQuizList()">
        Refresh
      </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Bluff from '@/components/quizes/Bluff.vue';
import Guess from '@/components/quizes/Guess.vue';


export default {
  name: 'Play',
  components: { Bluff, Guess },
  computed: {
    ...mapGetters(['activeQuiz', 'questionStatus']),
  },
  methods: {
    ...mapActions(['getQuizList']),
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
