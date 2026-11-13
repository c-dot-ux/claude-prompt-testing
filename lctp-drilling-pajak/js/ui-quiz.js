(function () {
  window.LCTP = window.LCTP || {};

  var utils = window.LCTP.utils;
  var OPTION_LETTERS = ["A", "B", "C", "D"];

  var activeSession = null;

  function getOptionButtons() {
    return utils.getElement("quiz-options").querySelectorAll(".option-button");
  }

  function updateProgress() {
    var totalQuestions = activeSession.questions.length;
    var currentNumber = activeSession.currentIndex + 1;
    var progressPercent = ((currentNumber - 1) / totalQuestions) * 100;

    if (activeSession.isAnswered) {
      progressPercent = (currentNumber / totalQuestions) * 100;
    }

    utils.getElement("quiz-progress-bar").style.width = progressPercent + "%";
    utils.getElement("quiz-progress-text").textContent = "Soal " + currentNumber + " dari " + totalQuestions;
    utils.getElement("quiz-score-live").textContent = "Benar: " + activeSession.correctCount;
  }

  function renderQuestion() {
    var question = window.LCTP.quiz.getCurrentQuestion(activeSession);
    var optionsContainer = utils.getElement("quiz-options");
    var feedbackBox = utils.getElement("quiz-feedback");
    var nextButton = utils.getElement("btn-next-question");

    utils.clearElement(optionsContainer);

    feedbackBox.hidden = true;
    feedbackBox.className = "feedback";
    nextButton.disabled = true;

    var isLastQuestion = activeSession.currentIndex === activeSession.questions.length - 1;
    nextButton.textContent = isLastQuestion ? "Lihat Hasil" : "Soal Berikutnya";

    var sourceText = question.source === "kartu" ? "Dari kartu buatanmu" : "Dari materi";

    utils.getElement("quiz-question-source").textContent = sourceText;
    utils.getElement("quiz-question-text").textContent = question.text;

    question.options.forEach(function (optionText, optionIndex) {
      var listItem = utils.createElement("li", "option-list__item");
      var button = utils.createElement("button", "option-button");

      button.type = "button";
      button.setAttribute("data-option-index", String(optionIndex));

      var letter = utils.createElement("span", "option-button__letter", OPTION_LETTERS[optionIndex]);
      var text = utils.createElement("span", "option-button__text", optionText);

      button.appendChild(letter);
      button.appendChild(text);

      button.addEventListener("click", function () {
        handleAnswer(optionIndex);
      });

      listItem.appendChild(button);
      optionsContainer.appendChild(listItem);
    });

    updateProgress();
  }

  function handleAnswer(selectedIndex) {
    if (!activeSession || activeSession.isAnswered) {
      return;
    }

    var outcome = window.LCTP.quiz.submitAnswer(activeSession, selectedIndex);

    if (!outcome) {
      return;
    }

    var question = window.LCTP.quiz.getCurrentQuestion(activeSession);
    var optionButtons = getOptionButtons();

    optionButtons.forEach(function (button, buttonIndex) {
      button.disabled = true;

      if (buttonIndex === outcome.correctIndex) {
        button.classList.add("option-button--correct");
      } else if (buttonIndex === selectedIndex) {
        button.classList.add("option-button--wrong");
      }
    });

    var feedbackBox = utils.getElement("quiz-feedback");
    var feedbackTitle = utils.getElement("quiz-feedback-title");
    var feedbackText = utils.getElement("quiz-feedback-explanation");

    if (outcome.isCorrect) {
      feedbackBox.classList.add("feedback--correct");
      feedbackTitle.textContent = "✔ Benar!";
    } else {
      feedbackBox.classList.add("feedback--wrong");
      feedbackTitle.textContent = "✘ Belum tepat. Jawaban benar: " + question.correctText;
    }

    feedbackText.textContent = question.explanation || "Tidak ada penjelasan tambahan untuk soal ini.";
    feedbackBox.hidden = false;

    utils.getElement("btn-next-question").disabled = false;
    utils.getElement("btn-next-question").focus();

    updateProgress();
  }

  function handleNext() {
    if (!activeSession || !activeSession.isAnswered) {
      return;
    }

    var hasNext = window.LCTP.quiz.moveToNextQuestion(activeSession);

    if (hasNext) {
      renderQuestion();
    } else {
      showResult();
    }
  }

  function buildStarText(starCount) {
    var starText = "";

    for (var index = 0; index < 3; index++) {
      if (index < starCount) {
        starText += "★";
      } else {
        starText += "☆";
      }
    }

    return starText;
  }

  function buildResultMessage(percent, isPractice) {
    if (percent >= 90) {
      return "Luar biasa! Pemahamanmu sudah sangat kuat.";
    }

    if (percent >= window.LCTP.progress.PASS_PERCENT) {
      return isPractice ? "Bagus! Terus latihan untuk hasil yang lebih tinggi." : "Lulus! Level berikutnya terbuka.";
    }

    return "Belum lulus. Pelajari penjelasan di bawah, lalu coba lagi.";
  }

  function renderReviewList(wrongResults) {
    var reviewList = utils.getElement("result-review-list");
    var reviewSection = utils.getElement("section-review");

    utils.clearElement(reviewList);

    if (wrongResults.length === 0) {
      reviewSection.hidden = true;
      return;
    }

    reviewSection.hidden = false;

    wrongResults.forEach(function (result) {
      var listItem = utils.createElement("li", "review-item");
      var questionText = utils.createElement("p", "review-item__question", result.question.text);
      var yourAnswer = utils.createElement("p", "review-item__your-answer", "Jawabanmu: " + result.question.options[result.selectedIndex]);
      var correctAnswer = utils.createElement("p", "review-item__correct-answer", "Jawaban benar: " + result.question.correctText);
      var explanation = utils.createElement("p", "review-item__explanation", result.question.explanation);

      listItem.appendChild(questionText);
      listItem.appendChild(yourAnswer);
      listItem.appendChild(correctAnswer);

      if (result.question.explanation) {
        listItem.appendChild(explanation);
      }

      reviewList.appendChild(listItem);
    });
  }

  function showResult() {
    var summary = window.LCTP.quiz.getSummary(activeSession);
    var starCount = 0;

    if (!activeSession.isPractice) {
      window.LCTP.progress.recordAttempt(activeSession.levelId, summary.correctCount, summary.totalCount);
      starCount = window.LCTP.progress.calculateStars(summary.percent);
    }

    utils.getElement("result-level-label").textContent = activeSession.label;
    utils.getElement("result-title").textContent = activeSession.title;
    utils.getElement("result-score").textContent = summary.correctCount + " / " + summary.totalCount;
    utils.getElement("result-percent").textContent = utils.formatPercent(summary.percent);
    utils.getElement("result-message").textContent = buildResultMessage(summary.percent, activeSession.isPractice);

    var starElement = utils.getElement("result-stars");
    starElement.textContent = activeSession.isPractice ? "" : buildStarText(starCount);
    starElement.hidden = activeSession.isPractice;

    renderReviewList(summary.wrongResults);

    var nextLevel = window.LCTP.app.getNextLevel(activeSession.levelId);
    var nextButton = utils.getElement("btn-next-level");

    nextButton.hidden = !nextLevel;
    nextButton.setAttribute("data-level-id", nextLevel ? nextLevel.id : "");

    window.LCTP.app.refreshAll();
    window.LCTP.app.showView("result");
  }

  function startSession(session) {
    activeSession = session;

    utils.getElement("quiz-level-label").textContent = session.label;
    utils.getElement("quiz-title").textContent = session.title;

    renderQuestion();
    window.LCTP.app.showView("quiz");
  }

  function getActiveSession() {
    return activeSession;
  }

  function handleKeyDown(event) {
    var quizView = utils.getElement("view-quiz");

    if (!activeSession || quizView.hidden) {
      return;
    }

    var pressedKey = event.key.toLowerCase();
    var keyIndexMap = { "1": 0, "2": 1, "3": 2, "4": 3, "a": 0, "b": 1, "c": 2, "d": 3 };

    if (Object.prototype.hasOwnProperty.call(keyIndexMap, pressedKey)) {
      var optionIndex = keyIndexMap[pressedKey];
      var optionCount = activeSession.questions[activeSession.currentIndex].options.length;

      if (optionIndex < optionCount) {
        handleAnswer(optionIndex);
      }

      return;
    }

    if (pressedKey === "enter" && activeSession.isAnswered) {
      event.preventDefault();
      handleNext();
    }
  }

  function bindEvents() {
    utils.getElement("btn-next-question").addEventListener("click", handleNext);
    document.addEventListener("keydown", handleKeyDown);

    utils.getElement("btn-quit-quiz").addEventListener("click", function () {
      var shouldQuit = window.confirm("Keluar dari kuis? Progres soal ini tidak akan disimpan.");

      if (shouldQuit) {
        activeSession = null;
        window.LCTP.app.showView("home");
      }
    });
  }

  window.LCTP.uiQuiz = {
    startSession: startSession,
    getActiveSession: getActiveSession,
    bindEvents: bindEvents
  };
})();
