(function () {
  window.LCTP = window.LCTP || {};

  function createSession(config) {
    var shuffledQuestions = window.LCTP.utils.shuffleArray(config.questions);

    var preparedQuestions = shuffledQuestions.map(function (question) {
      return window.LCTP.bank.prepareQuestion(question, config.answerPool);
    });

    return {
      levelId: config.levelId,
      label: config.label,
      title: config.title,
      isPractice: Boolean(config.isPractice),
      questions: preparedQuestions,
      currentIndex: 0,
      correctCount: 0,
      isAnswered: false,
      results: []
    };
  }

  function getCurrentQuestion(session) {
    return session.questions[session.currentIndex];
  }

  function submitAnswer(session, selectedIndex) {
    if (session.isAnswered) {
      return null;
    }

    var currentQuestion = getCurrentQuestion(session);
    var isCorrect = selectedIndex === currentQuestion.correctIndex;

    session.isAnswered = true;

    if (isCorrect) {
      session.correctCount += 1;
    }

    session.results.push({
      question: currentQuestion,
      selectedIndex: selectedIndex,
      isCorrect: isCorrect
    });

    return {
      isCorrect: isCorrect,
      correctIndex: currentQuestion.correctIndex
    };
  }

  function moveToNextQuestion(session) {
    if (session.currentIndex + 1 >= session.questions.length) {
      return false;
    }

    session.currentIndex += 1;
    session.isAnswered = false;

    return true;
  }

  function getSummary(session) {
    var totalCount = session.questions.length;
    var percent = totalCount > 0 ? (session.correctCount / totalCount) * 100 : 0;

    var wrongResults = session.results.filter(function (result) {
      return !result.isCorrect;
    });

    return {
      totalCount: totalCount,
      correctCount: session.correctCount,
      percent: percent,
      wrongResults: wrongResults
    };
  }

  window.LCTP.quiz = {
    createSession: createSession,
    getCurrentQuestion: getCurrentQuestion,
    submitAnswer: submitAnswer,
    moveToNextQuestion: moveToNextQuestion,
    getSummary: getSummary
  };
})();
