import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state: {
    loading: false,
    quizes: [],
    error: '',
  },
  mutations,
  getters,
  actions,
};
