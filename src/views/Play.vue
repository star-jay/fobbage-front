<template>
  <section>
    <div v-if="activeQuiz">
       <h1>
        Quiz : {{ activeQuiz.title }}
        </h1>
      <div v-if="activeQuestion">
        <h1>
        Question : {{ activeQuestion.text }}
        </h1>
        <ul>
          <li v-for="message in messages" v-bind:key="message.id">
            <Message :message="message"/>
          </li>
        </ul>
        <Answer/>
      </div>
    </div>
    <div v-else>
      <h2>Select a quiz to play first!</h2>
      <Quizlist/>
    </div>

  </section>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import Answer from '@/components/quizes/Answer.vue';
// import Guess from '@/components/quizes/Guess.vue';
import Message from '@/components/quizes/Message.vue';
import Quizlist from '@/components/quizes/Quizlist.vue';


export default {
  name: 'Play',
  components: {
    // Bluff, Guess
    Quizlist, Message, Answer,
  },
  props: {
    id: Number,
  },
  created () {
    if (this.id){
      this.$store.dispatch('joinQuiz', { id: this.id });
    }
  },
  computed: {
    ...mapGetters(['activeQuiz', 'questionStatus', ]),
    ...mapState({
        messages: state => state.quizes.messages,
        activeQuestion: state => state.quizes.activeQuestion,
      }),
  },
  methods: {
    ...mapActions(['getQuizList', 'joinQuiz', ]),
    connectToWebSocket() {
      const scheme = window.location.protocol == "https:" ? "wss" : "ws";
      const uri = this.activeQuiz.websocket;
      this.$store.dispatch('connectToWebSocket', { scheme, uri });
    }
  },
  watch: {
    activeQuiz: 'connectToWebSocket',
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
