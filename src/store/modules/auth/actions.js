import { authAPI } from '@/services/api';

import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_REFRESH,
} from '@/store/mutation-types';

import jwtDecode from 'jwt-decode';

export default {
  login({ dispatch, commit }, credentials) {
    commit(AUTH_REQUEST);
    return new Promise((resolve, reject) => {
      authAPI.login(credentials)
        .then((response) => {
          const { token } = response.data;
          const authUser = jwtDecode(token);
          commit(AUTH_SUCCESS, { token, user: authUser });
          dispatch('applySettings');
          resolve(response);
        })
        .catch((error) => {
          commit(AUTH_ERROR);
          authAPI.logout();
          reject(error);
        });
    });
  },
  logout: ({ commit }) => new Promise((resolve) => {
    commit(AUTH_LOGOUT);
    authAPI.logout();
    resolve();
  }),
  refreshToken: ({ commit, state }) => new Promise((resolve, reject) => {
    authAPI.refresh(state.token)
      .then((response) => {
        const { token } = response.data;
        const authUser = jwtDecode(token);
        commit(AUTH_REFRESH, { token, user: authUser });
        resolve(response);
      })
      .catch((error) => {
        commit(AUTH_ERROR);
        authAPI.logout();
        reject(error);
      });
  }),
};
