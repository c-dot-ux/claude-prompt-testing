(function () {
  window.LCTP = window.LCTP || {};

  var PASS_PERCENT = 70;

  function getAllRecords() {
    return window.LCTP.storage.load(window.LCTP.storage.keys.progress, {});
  }

  function getLevelRecord(levelId) {
    var allRecords = getAllRecords();

    return allRecords[levelId] || {
      bestPercent: 0,
      bestCorrect: 0,
      total: 0,
      attempts: 0,
      passed: false
    };
  }

  function recordAttempt(levelId, correctCount, totalCount) {
    var allRecords = getAllRecords();
    var currentRecord = getLevelRecord(levelId);
    var percent = totalCount > 0 ? (correctCount / totalCount) * 100 : 0;

    if (percent >= currentRecord.bestPercent) {
      currentRecord.bestPercent = percent;
      currentRecord.bestCorrect = correctCount;
      currentRecord.total = totalCount;
    }

    currentRecord.attempts += 1;

    if (percent >= PASS_PERCENT) {
      currentRecord.passed = true;
    }

    allRecords[levelId] = currentRecord;
    window.LCTP.storage.save(window.LCTP.storage.keys.progress, allRecords);

    return currentRecord;
  }

  function calculateStars(percent) {
    if (percent >= 90) {
      return 3;
    }

    if (percent >= 80) {
      return 2;
    }

    if (percent >= PASS_PERCENT) {
      return 1;
    }

    return 0;
  }

  function isLevelUnlocked(levels, levelIndex, unlockAll) {
    var level = levels[levelIndex];

    if (unlockAll || level.isCustom || level.number === 1) {
      return true;
    }

    var previousLevel = levels.find(function (item) {
      return !item.isCustom && item.number === level.number - 1;
    });

    if (!previousLevel) {
      return true;
    }

    return getLevelRecord(previousLevel.id).passed;
  }

  function countPassedLevels(levels) {
    return levels.filter(function (level) {
      return getLevelRecord(level.id).passed;
    }).length;
  }

  function getAveragePercent(levels) {
    var attemptedRecords = levels
      .map(function (level) {
        return getLevelRecord(level.id);
      })
      .filter(function (record) {
        return record.attempts > 0;
      });

    if (attemptedRecords.length === 0) {
      return 0;
    }

    var totalPercent = attemptedRecords.reduce(function (sum, record) {
      return sum + record.bestPercent;
    }, 0);

    return totalPercent / attemptedRecords.length;
  }

  function resetAllProgress() {
    window.LCTP.storage.remove(window.LCTP.storage.keys.progress);
  }

  window.LCTP.progress = {
    PASS_PERCENT: PASS_PERCENT,
    getLevelRecord: getLevelRecord,
    recordAttempt: recordAttempt,
    calculateStars: calculateStars,
    isLevelUnlocked: isLevelUnlocked,
    countPassedLevels: countPassedLevels,
    getAveragePercent: getAveragePercent,
    resetAllProgress: resetAllProgress
  };
})();
