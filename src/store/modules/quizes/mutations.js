// import Vue from 'vue';
import * as types from '@/store/mutation-types';


export default {
  [types.QUIZES_REQUEST]: (state) => {
    state.loading = true;
  },
  [types.QUIZES_SUCCESS]: (state, quizes) => {
    state.quizes = quizes;
    state.loading = false;
  },
  [types.QUIZES_ERROR]: (state) => {
    state.loading = false;
    state.error = 'There was a problem!';
  },
  [types.QUIZES_JOIN]: (state, { id }) => {
    state.active_quiz = id;
  },
};
