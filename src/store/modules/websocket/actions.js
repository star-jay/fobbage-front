
export default {
  connectToWebSocket: ({ commit, dispatch }, { scheme, uri }) => {
    const websocket = new WebSocket(`${scheme}://${uri}`);
    websocket.onopen = () => {
      commit('SOCKET_OPEN');
    };
    websocket.onclose = () => {
      commit('SOCKET_CLOSE');
    };
    websocket.onerror = (event) => {
      commit('SOCKET_ERROR', { event });
    };
    websocket.onmessage = (event) => {
      dispatch('newMessage', { event });
    };
    commit('SOCKET_SET', { websocket });
  },
  newMessage({ commit }, { event }) {
    const message = JSON.parse(event.data);
    commit('SOCKET_MESSAGE', message);
  },

};
