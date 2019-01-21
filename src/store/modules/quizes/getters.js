
export default {
    activeQuiz: state =>
      state.quizes.find(quiz => quiz.id === state.active_quiz),
}