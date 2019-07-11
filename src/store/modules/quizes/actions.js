import {
  quizesAPI,
  bluffsAPI,
  guessAPI,
} from '@/services/api';

import {
  QUIZES_REQUEST,
  QUIZES_SUCCESS,
  QUIZES_ERROR,
  QUIZES_JOIN,
  BLUFF_SUCCESS,
  BLUFF_ERROR,
  GUESS_ERROR,
  GUESS_SUCCESS,
  NEW_MESSAGE,
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
  joinQuiz: ({ commit }, { id }) => {
    commit(QUIZES_JOIN, { id });
    router.push('play');
  },
  bluff: ({ commit }, { id, bluff }) => {
    console.log(bluff);
    return new Promise((resolve, reject) => {
      bluffsAPI.post({ question: id, text: bluff })
        .then((response) => {
          commit(BLUFF_SUCCESS, bluff);
          resolve(response);
        })
        .catch((error) => {
          commit(BLUFF_ERROR);
          reject(error);
        });
    });
  },
  guess: ({ commit }, { id, guess }) => {
    console.log(guess);
    return new Promise((resolve, reject) => {
      guessAPI.post({ question: id, answer: guess })
        .then((response) => {
          commit(GUESS_SUCCESS, guess);
          resolve(response);
        })
        .catch((error) => {
          commit(GUESS_ERROR);
          reject(error);
        });
    });
  },
  connectToWebSocket(socket) {
    const websocket = new WebSocket(socket);
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
    commit(GUESS_SUCCESS, message);
  },
  onError(event) {
    console.log('An error occured:', event.data);
  },
};
