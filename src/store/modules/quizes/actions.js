import {
  quizesAPI,
} from '@/services/api';

import {
  QUIZES_REQUEST,
  QUIZES_SUCCESS,
  QUIZES_ERROR,
  QUIZES_JOIN,
} from '@/store/mutation-types';

import router from '@/main.js'


export default {
  getQuizList: ({ commit }) => {
    commit(QUIZES_REQUEST);
    return new Promise((resolve, reject) => {
      quizesAPI.get()
        .then((response) => {
          const quizes = response.data;
          commit(QUIZES_SUCCESS, quizes);
          resolve(response);
        })
        .catch((error) => {
          commit(QUIZES_ERROR);
          reject(error);
        });
    });
  },
  joinQuiz: ({ commit}, { id }) => {
    commit(QUIZES_JOIN, { id });
    router.push('play');
  }
};
