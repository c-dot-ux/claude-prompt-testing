(function () {
  window.LCTP = window.LCTP || {};

  var utils = window.LCTP.utils;

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

  function findLockedReason(levels, level) {
    var previousLevel = levels.find(function (item) {
      return !item.isCustom && item.number === level.number - 1;
    });

    if (!previousLevel) {
      return "Terkunci";
    }

    return "Selesaikan " + previousLevel.label + " (min. " + window.LCTP.progress.PASS_PERCENT + "%)";
  }

  function createLevelCard(levels, level, isUnlocked) {
    var record = window.LCTP.progress.getLevelRecord(level.id);
    var stars = window.LCTP.progress.calculateStars(record.bestPercent);

    var listItem = utils.createElement("li", "level-grid__item");
    var button = utils.createElement("button", "level-card");

    button.type = "button";
    button.setAttribute("data-level-id", level.id);

    if (level.isCustom) {
      button.classList.add("level-card--custom");
    }

    if (record.passed) {
      button.classList.add("level-card--passed");
    }

    if (!isUnlocked) {
      button.classList.add("level-card--locked");
      button.disabled = true;
    }

    var badgeText = level.isCustom ? "K" + level.number : String(level.number);
    var badge = utils.createElement("span", "level-card__badge", badgeText);
    var title = utils.createElement("span", "level-card__title", level.title);
    var description = utils.createElement("span", "level-card__description", level.description);
    var questionCount = utils.createElement("span", "level-card__count", level.questions.length + " soal");

    var statusText = "";

    if (!isUnlocked) {
      statusText = "🔒 " + findLockedReason(levels, level);
    } else if (record.attempts > 0) {
      statusText = "Terbaik " + utils.formatPercent(record.bestPercent) + " · " + record.attempts + "× main";
    } else {
      statusText = "Belum dicoba";
    }

    var status = utils.createElement("span", "level-card__status", statusText);
    var starElement = utils.createElement("span", "level-card__stars", buildStarText(stars));

    starElement.setAttribute("aria-label", stars + " dari 3 bintang");

    var header = utils.createElement("span", "level-card__header");
    header.appendChild(badge);
    header.appendChild(starElement);

    var footer = utils.createElement("span", "level-card__footer");
    footer.appendChild(questionCount);
    footer.appendChild(status);

    button.appendChild(header);
    button.appendChild(title);
    button.appendChild(description);
    button.appendChild(footer);

    button.addEventListener("click", function () {
      window.LCTP.app.startLevel(level.id);
    });

    listItem.appendChild(button);

    return listItem;
  }

  function renderLevelGrid(levels, unlockAll) {
    var grid = utils.getElement("level-grid");

    utils.clearElement(grid);

    levels.forEach(function (level, levelIndex) {
      var isUnlocked = window.LCTP.progress.isLevelUnlocked(levels, levelIndex, unlockAll);
      grid.appendChild(createLevelCard(levels, level, isUnlocked));
    });
  }

  function renderStats(levels, cards) {
    var totalQuestions = window.LCTP.bank.collectAllQuestions(levels).length;
    var passedLevels = window.LCTP.progress.countPassedLevels(levels);
    var averagePercent = window.LCTP.progress.getAveragePercent(levels);

    utils.getElement("stat-total-questions").textContent = String(totalQuestions);
    utils.getElement("stat-levels-passed").textContent = passedLevels + " / " + levels.length;
    utils.getElement("stat-average-score").textContent = utils.formatPercent(averagePercent);
    utils.getElement("stat-custom-cards").textContent = String(cards.length);
  }

  window.LCTP.uiLevels = {
    renderLevelGrid: renderLevelGrid,
    renderStats: renderStats
  };
})();
