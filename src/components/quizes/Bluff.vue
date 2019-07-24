<template>
  <v-container class="xs10 offset-xs1">
    <v-form @submit.prevent="bluff" id="bluff">
      <v-textarea
        v-model="form.bluff"
        name="bluff"
        label="bluff"
        solo
        auto-grow/>
      <v-btn type="submit" color="primary" form="bluff">Bluff</v-btn>
    </v-form>
  </v-container>
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
