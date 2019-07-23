import {
  quizesAPI,
  bluffsAPI,
  guessAPI,
  activeQuestionsAPI,
} from '@/services/api';


export default {
  getQuizList: ({ commit }) => {
    commit('QUIZES_REQUEST');
    return new Promise((resolve, reject) => {
      quizesAPI.get()
        .then((response) => {
          const quizes = response.data;
          commit('QUIZES_SUCCESS', quizes);
          resolve(response);
        })
        .catch((error) => {
          commit('QUIZES_ERROR');
          reject(error);
        });
    });
  },
  joinQuiz: ({ commit }, { id }) => {
    commit('QUIZES_JOIN', { id });
    return new Promise((resolve, reject) => {
      activeQuestionsAPI.get(id)
        .then((response) => {
          const activeQuestion = response.data;
          commit('ACTIVE_QUESTION_SUCCES', { activeQuestion });
          resolve(response);
        })
        .catch((error) => {
          commit('QUIZES_ERROR');
          reject(error);
        });
    });
  },
  bluff: ({ state, commit }, { text }) => new Promise(
    (resolve, reject) => {
      bluffsAPI.post({ question: state.activeQuestion.id, text })
        .then((response) => {
          commit('BLUFF_SUCCESS', text);
          resolve(response);
        })
        .catch((error) => {
          commit('BLUFF_ERROR');
          reject(error);
        });
    },
  ),
  sendMessage({ state }, { message }) {
    if (state.websocket) {
      state.websocket.send(JSON.stringify({
        message,
      }));
    }
  },
  sendAnswer({ state }, { answer }) {
    console.log(answer);
    if (state.websocket) {
      state.websocket.send(JSON.stringify({
        answer,
      }));
    }
  },
  guess: ({ commit }, { id, guess }) => {
    return new Promise((resolve, reject) => {
      guessAPI.post({ question: id, answer: guess })
        .then((response) => {
          commit('GUESS_SUCCESS', guess);
          resolve(response);
        })
        .catch((error) => {
          commit('GUESS_ERROR');
          reject(error);
        });
    });
  },
  connectToWebSocket: ({ commit }, { scheme, uri }) => {
    // var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    const websocket = new WebSocket(`${scheme}://${uri}`);
    websocket.onopen = (event) => {
      commit('SOCKET_OPEN', { event });
    };
    websocket.onclose = (event) => {
      commit('SOCKET_CLOSE', { event });
    };
    websocket.onmessage = (event) => {
      commit('SOCKET_MESSAGE', { event });
    };
    websocket.onerror = (event) => {
      commit('SOCKET_ERROR', { event });
    };
    commit('SOCKET_SET', { websocket });
  },


};
