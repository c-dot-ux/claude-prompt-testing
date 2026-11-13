(function () {
  window.LCTP = window.LCTP || {};

  function shuffleArray(sourceArray) {
    var copiedArray = sourceArray.slice();

    for (var index = copiedArray.length - 1; index > 0; index--) {
      var swapIndex = Math.floor(Math.random() * (index + 1));
      var temporaryValue = copiedArray[index];
      copiedArray[index] = copiedArray[swapIndex];
      copiedArray[swapIndex] = temporaryValue;
    }

    return copiedArray;
  }

  function generateId(prefix) {
    var timePart = Date.now().toString(36);
    var randomPart = Math.floor(Math.random() * 1000000).toString(36);

    return prefix + "-" + timePart + "-" + randomPart;
  }

  function normalizeText(text) {
    return String(text).trim().toLowerCase().replace(/\s+/g, " ");
  }

  function getElement(elementId) {
    return document.getElementById(elementId);
  }

  function createElement(tagName, className, textContent) {
    var element = document.createElement(tagName);

    if (className) {
      element.className = className;
    }

    if (textContent !== undefined && textContent !== null) {
      element.textContent = textContent;
    }

    return element;
  }

  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  function formatPercent(value) {
    return Math.round(value) + "%";
  }

  window.LCTP.utils = {
    shuffleArray: shuffleArray,
    generateId: generateId,
    normalizeText: normalizeText,
    getElement: getElement,
    createElement: createElement,
    clearElement: clearElement,
    formatPercent: formatPercent
  };
})();
