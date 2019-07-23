<template>
  <!-- <section>
        <b-field label="">
            <b-input type="textarea"
                placeholder="Fill in a witty bluff"
                v-model="bluff">
            </b-input>
        </b-field>
    <button class="button" v-on:click="bluff()">bluff</button>
  </section> -->
  <v-form @submit.prevent="bluff" id="bluff">
  <v-text-field
    v-model="form.bluff"
    prepend-icon=""
    name="bluff"
    label="bluff"
    type="text"></v-text-field>
  <v-btn type="submit" color="primary" form="bluff">Bluff</v-btn>
</v-form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'bluff',
  data() {
    return {
      errors: [],
      form: {
        bluff: '',
      },
    };
  },
  computed: {
    ...mapGetters(['activeQuiz']),
  },
  methods: {
    bluff() {
      this.$store.dispatch('bluff', { text: this.form.bluff });
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
