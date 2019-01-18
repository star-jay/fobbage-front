import {
  quizesAPI,
} from '@/services/api';

import {
  QUIZES_REQUEST,
  QUIZES_SUCCESS,
  QUIZES_ERROR,
} from '@/store/mutation-types';

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
};
