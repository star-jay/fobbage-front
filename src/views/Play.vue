<template>
  <div class="hero">
    <div v-if="activeQuiz">
      <h1>
      {{ activeQuiz.title }}
    </h1>
        <ul>
          <li v-for="message in messages" v-bind:key="message.id">
            <Message :message="message"/>
          </li>
        </ul>

      <!-- </div> -->
      <!-- <div v-else> -->
        <!-- <h2>no new messages</h2>
      </div> -->

      <!-- <Bluff v-if="questionStatus == 1" />
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
      </div> -->
    </div>
    <div v-else>
      <h2>Select a quiz to play first!</h2>
      <Quizlist/>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import Bluff from '@/components/quizes/Bluff.vue';
// import Guess from '@/components/quizes/Guess.vue';
import Message from '@/components/quizes/Message.vue';
import Quizlist from '@/components/quizes/Quizlist.vue';


export default {
  name: 'Play',
  components: {
    // Bluff, Guess
    Quizlist, Message,
  },
  data() {
    return {
      messages: [],
    };
  },
  computed: {
    ...mapGetters(['activeQuiz', 'questionStatus']),
  },
  methods: {
    ...mapActions(['getQuizList']),
    connectToWebSocket() {
      var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
      const websocket = new WebSocket(ws_scheme+'://' + this.activeQuiz.websocket);
      websocket.onopen = this.onOpen;
      websocket.onclose = this.onClose;
      websocket.onmessage = this.onMessage;
      websocket.onerror = this.onError;
    },
    onOpen(event) {
      console.log('Connection opened.', event.data);
    },
    onClose(event) {
      console.log('Connection closed.', event.data);
    },
    onMessage(event) {
      const message = JSON.parse(event.data);
      this.messages.push(message);
    },
    onError(event) {
      console.log('An error occured:', event.data);
    },
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
