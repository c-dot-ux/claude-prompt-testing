(function () {
  window.LCTP = window.LCTP || {};

  var STORAGE_KEYS = {
    cards: "lctp.cards.v1",
    progress: "lctp.progress.v1",
    settings: "lctp.settings.v1"
  };

  function loadData(storageKey, fallbackValue) {
    try {
      var rawValue = window.localStorage.getItem(storageKey);

      if (rawValue === null) {
        return fallbackValue;
      }

      return JSON.parse(rawValue);
    } catch (error) {
      return fallbackValue;
    }
  }

  function saveData(storageKey, value) {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  function removeData(storageKey) {
    try {
      window.localStorage.removeItem(storageKey);
    } catch (error) {
      return false;
    }

    return true;
  }

  window.LCTP.storage = {
    keys: STORAGE_KEYS,
    load: loadData,
    save: saveData,
    remove: removeData
  };
})();
