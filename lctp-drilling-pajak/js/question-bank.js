(function () {
  window.LCTP = window.LCTP || {};

  var QUESTIONS_PER_LEVEL = 20;
  var OPTIONS_PER_QUESTION = 4;
  var CUSTOM_TARGET_VALUE = "custom";

  function getBuiltInLevels() {
    var sourceLevels = window.LCTP_LEVELS || [];

    var sortedLevels = sourceLevels.slice().sort(function (firstLevel, secondLevel) {
      return firstLevel.number - secondLevel.number;
    });

    return sortedLevels.map(function (level) {
      return {
        id: "level-" + level.number,
        number: level.number,
        label: "Level " + level.number,
        title: level.title,
        description: level.description,
        isCustom: false,
        questions: level.questions.map(function (item, index) {
          return {
            id: "L" + level.number + "-Q" + (index + 1),
            question: item.question,
            correct: item.correct,
            wrong: item.wrong.slice(),
            explanation: item.explanation,
            source: "materi"
          };
        })
      };
    });
  }

  function convertCardToQuestion(card) {
    var wrongAnswers = (card.wrong || []).filter(function (text) {
      return String(text).trim() !== "";
    });

    return {
      id: card.id,
      question: card.question,
      correct: card.answer,
      wrong: wrongAnswers,
      explanation: card.explanation || "",
      source: "kartu"
    };
  }

  function buildCustomLevels(customQuestions) {
    var customLevels = [];

    for (var start = 0; start < customQuestions.length; start += QUESTIONS_PER_LEVEL) {
      var partNumber = customLevels.length + 1;

      customLevels.push({
        id: "custom-" + partNumber,
        number: partNumber,
        label: "Kartu K" + partNumber,
        title: "Kartu Saya – Bagian " + partNumber,
        description: "Soal yang dibuat otomatis dari kartu buatanmu.",
        isCustom: true,
        questions: customQuestions.slice(start, start + QUESTIONS_PER_LEVEL)
      });
    }

    return customLevels;
  }

  function buildAllLevels(cards) {
    var builtInLevels = getBuiltInLevels();
    var customQuestions = [];

    cards.forEach(function (card) {
      var question = convertCardToQuestion(card);
      var targetLevel = null;

      if (card.target && card.target !== CUSTOM_TARGET_VALUE) {
        targetLevel = builtInLevels.find(function (level) {
          return level.id === card.target;
        });
      }

      if (targetLevel) {
        targetLevel.questions.push(question);
      } else {
        customQuestions.push(question);
      }
    });

    return builtInLevels.concat(buildCustomLevels(customQuestions));
  }

  function collectAllQuestions(levels) {
    var allQuestions = [];

    levels.forEach(function (level) {
      level.questions.forEach(function (question) {
        allQuestions.push(question);
      });
    });

    return allQuestions;
  }

  function collectAnswerPool(levels) {
    return collectAllQuestions(levels).map(function (question) {
      return question.correct;
    });
  }

  function pickDistractors(correctText, existingWrong, answerPool, neededCount) {
    var utils = window.LCTP.utils;
    var usedKeys = {};
    var candidates = [];

    usedKeys[utils.normalizeText(correctText)] = true;

    existingWrong.forEach(function (text) {
      usedKeys[utils.normalizeText(text)] = true;
    });

    answerPool.forEach(function (text) {
      var key = utils.normalizeText(text);

      if (!usedKeys[key]) {
        usedKeys[key] = true;
        candidates.push(text);
      }
    });

    var scoredCandidates = utils.shuffleArray(candidates).map(function (text) {
      return {
        text: text,
        distance: Math.abs(text.length - correctText.length)
      };
    });

    scoredCandidates.sort(function (firstItem, secondItem) {
      return firstItem.distance - secondItem.distance;
    });

    var closestCandidates = scoredCandidates.slice(0, Math.max(neededCount * 4, 8));

    return utils.shuffleArray(closestCandidates)
      .slice(0, neededCount)
      .map(function (item) {
        return item.text;
      });
  }

  function prepareQuestion(question, answerPool) {
    var utils = window.LCTP.utils;
    var wrongAnswers = question.wrong.slice(0, OPTIONS_PER_QUESTION - 1);
    var missingCount = OPTIONS_PER_QUESTION - 1 - wrongAnswers.length;

    if (missingCount > 0) {
      var extraAnswers = pickDistractors(question.correct, wrongAnswers, answerPool, missingCount);
      wrongAnswers = wrongAnswers.concat(extraAnswers);
    }

    var shuffledOptions = utils.shuffleArray([question.correct].concat(wrongAnswers));

    return {
      id: question.id,
      text: question.question,
      options: shuffledOptions,
      correctIndex: shuffledOptions.indexOf(question.correct),
      correctText: question.correct,
      explanation: question.explanation,
      source: question.source
    };
  }

  window.LCTP.bank = {
    QUESTIONS_PER_LEVEL: QUESTIONS_PER_LEVEL,
    CUSTOM_TARGET_VALUE: CUSTOM_TARGET_VALUE,
    getBuiltInLevels: getBuiltInLevels,
    buildAllLevels: buildAllLevels,
    collectAllQuestions: collectAllQuestions,
    collectAnswerPool: collectAnswerPool,
    prepareQuestion: prepareQuestion
  };
})();
