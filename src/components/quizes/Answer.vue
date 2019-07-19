<template>
  <section>
        <b-field label="">
            <b-input type="textarea"
                placeholder="Fill in a witty answer"
                v-model="answer">
            </b-input>
        </b-field>
    <button class="button" v-on:click="bluff()">Answer</button>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Answer',
  data: () => ({
    answer: undefined,
  }),
  computed: {
    ...mapGetters(['activeQuiz']),
  },
  methods: {
    bluff() {
      this.$store.dispatch('sendAnswer', this);
    },
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
