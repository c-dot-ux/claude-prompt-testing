(function () {
  window.LCTP = window.LCTP || {};

  var utils = window.LCTP.utils;
  var RANDOM_PRACTICE_SIZE = 20;

  var state = {
    levels: [],
    cards: [],
    settings: {
      unlockAll: false
    }
  };

  function loadState() {
    var storage = window.LCTP.storage;

    state.cards = storage.load(storage.keys.cards, []);
    state.settings = storage.load(storage.keys.settings, { unlockAll: false });
    state.levels = window.LCTP.bank.buildAllLevels(state.cards);
  }

  function refreshAll() {
    state.levels = window.LCTP.bank.buildAllLevels(state.cards);

    window.LCTP.uiLevels.renderStats(state.levels, state.cards);
    window.LCTP.uiLevels.renderLevelGrid(state.levels, state.settings.unlockAll);
    window.LCTP.uiCards.renderTargetOptions(state.levels);
    window.LCTP.uiCards.renderCardList(state.cards, state.levels);

    utils.getElement("input-unlock-all").checked = state.settings.unlockAll;
  }

  function getCards() {
    return state.cards.slice();
  }

  function saveCards(updatedCards) {
    var storage = window.LCTP.storage;
    var wasSaved = storage.save(storage.keys.cards, updatedCards);

    state.cards = updatedCards;
    refreshAll();

    if (!wasSaved) {
      window.alert("Peringatan: penyimpanan browser tidak tersedia, kartu hanya tersimpan selama halaman terbuka.");
    }
  }

  function showView(viewName) {
    var viewNames = ["home", "quiz", "result", "cards"];

    viewNames.forEach(function (name) {
      utils.getElement("view-" + name).hidden = name !== viewName;
    });

    utils.getElement("btn-nav-home").classList.toggle("is-active", viewName !== "cards");
    utils.getElement("btn-nav-cards").classList.toggle("is-active", viewName === "cards");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function findLevelById(levelId) {
    return state.levels.find(function (level) {
      return level.id === levelId;
    });
  }

  function startLevel(levelId) {
    var level = findLevelById(levelId);

    if (!level) {
      return;
    }

    if (level.questions.length === 0) {
      window.alert("Level ini belum memiliki soal.");
      return;
    }

    var session = window.LCTP.quiz.createSession({
      levelId: level.id,
      label: level.label,
      title: level.title,
      isPractice: false,
      questions: level.questions,
      answerPool: window.LCTP.bank.collectAnswerPool(state.levels)
    });

    window.LCTP.uiQuiz.startSession(session);
  }

  function startRandomPractice() {
    var allQuestions = window.LCTP.bank.collectAllQuestions(state.levels);
    var selectedQuestions = utils.shuffleArray(allQuestions).slice(0, RANDOM_PRACTICE_SIZE);

    var session = window.LCTP.quiz.createSession({
      levelId: "random",
      label: "Latihan Acak",
      title: "Campuran Semua Materi",
      isPractice: true,
      questions: selectedQuestions,
      answerPool: window.LCTP.bank.collectAnswerPool(state.levels)
    });

    window.LCTP.uiQuiz.startSession(session);
  }

  function getNextLevel(levelId) {
    var currentIndex = state.levels.findIndex(function (level) {
      return level.id === levelId;
    });

    if (currentIndex === -1) {
      return null;
    }

    var nextLevel = state.levels[currentIndex + 1];

    if (!nextLevel) {
      return null;
    }

    var isUnlocked = window.LCTP.progress.isLevelUnlocked(state.levels, currentIndex + 1, state.settings.unlockAll);

    return isUnlocked ? nextLevel : null;
  }

  function handleRetry() {
    var session = window.LCTP.uiQuiz.getActiveSession();

    if (!session) {
      showView("home");
      return;
    }

    if (session.isPractice) {
      startRandomPractice();
    } else {
      startLevel(session.levelId);
    }
  }

  function handleNextLevel() {
    var nextLevelId = utils.getElement("btn-next-level").getAttribute("data-level-id");

    if (nextLevelId) {
      startLevel(nextLevelId);
    }
  }

  function handleUnlockToggle(event) {
    var storage = window.LCTP.storage;

    state.settings.unlockAll = event.target.checked;
    storage.save(storage.keys.settings, state.settings);
    refreshAll();
  }

  function handleResetProgress() {
    var shouldReset = window.confirm("Reset semua progres level (skor dan bintang)? Kartu buatanmu tidak ikut terhapus.");

    if (!shouldReset) {
      return;
    }

    window.LCTP.progress.resetAllProgress();
    refreshAll();
  }

  function bindEvents() {
    utils.getElement("btn-nav-home").addEventListener("click", function () {
      showView("home");
    });

    utils.getElement("btn-nav-cards").addEventListener("click", function () {
      showView("cards");
    });

    utils.getElement("btn-start-random").addEventListener("click", startRandomPractice);

    utils.getElement("btn-go-cards").addEventListener("click", function () {
      showView("cards");
    });

    utils.getElement("btn-retry-level").addEventListener("click", handleRetry);
    utils.getElement("btn-next-level").addEventListener("click", handleNextLevel);

    utils.getElement("btn-back-home").addEventListener("click", function () {
      showView("home");
    });

    utils.getElement("input-unlock-all").addEventListener("change", handleUnlockToggle);
    utils.getElement("btn-reset-progress").addEventListener("click", handleResetProgress);

    window.LCTP.uiQuiz.bindEvents();
    window.LCTP.uiCards.bindEvents();
  }

  function init() {
    loadState();
    bindEvents();
    refreshAll();
    showView("home");
  }

  window.LCTP.app = {
    init: init,
    refreshAll: refreshAll,
    showView: showView,
    startLevel: startLevel,
    startRandomPractice: startRandomPractice,
    getNextLevel: getNextLevel,
    getCards: getCards,
    saveCards: saveCards
  };

  document.addEventListener("DOMContentLoaded", init);
})();
