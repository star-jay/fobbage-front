import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state: {
    loading: false,
    quizes: [],
    active_quiz : null,
    error: '',
    bluff: '',
  },
  mutations,
  getters,
  actions,
};
