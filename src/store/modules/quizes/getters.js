
export default {
    activeQuiz: state =>
      state.quizes.find(quiz => quiz.id === state.active_quiz),
    questionStatus: (state, getters) => {
        if (getters.activeQuiz && getters.activeQuiz.active_question)
        {
          return getters.activeQuiz.active_question.status
        }
        return -1;
      }
}