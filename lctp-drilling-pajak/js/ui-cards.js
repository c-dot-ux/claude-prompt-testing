(function () {
  window.LCTP = window.LCTP || {};

  var utils = window.LCTP.utils;
  var MIN_QUESTION_LENGTH = 8;

  var editingCardId = null;

  function showMessage(messageText, messageType) {
    var messageElement = utils.getElement("card-form-message");

    messageElement.textContent = messageText;
    messageElement.className = "form-message";

    if (messageType) {
      messageElement.classList.add("form-message--" + messageType);
    }
  }

  function renderTargetOptions(levels) {
    var select = utils.getElement("select-card-target");
    var previousValue = select.value;

    utils.clearElement(select);

    var customOption = utils.createElement("option", "", "Level Kartu Saya (otomatis, 20 soal per level)");
    customOption.value = window.LCTP.bank.CUSTOM_TARGET_VALUE;
    select.appendChild(customOption);

    levels.forEach(function (level) {
      if (level.isCustom) {
        return;
      }

      var option = utils.createElement("option", "", "Tambahkan ke " + level.label + " – " + level.title);
      option.value = level.id;
      select.appendChild(option);
    });

    if (previousValue) {
      select.value = previousValue;
    }
  }

  function readFormValues() {
    var wrongAnswers = [
      utils.getElement("input-card-wrong-1").value.trim(),
      utils.getElement("input-card-wrong-2").value.trim(),
      utils.getElement("input-card-wrong-3").value.trim()
    ].filter(function (text) {
      return text !== "";
    });

    return {
      id: utils.getElement("input-card-id").value,
      question: utils.getElement("input-card-question").value.trim(),
      answer: utils.getElement("input-card-answer").value.trim(),
      explanation: utils.getElement("input-card-explanation").value.trim(),
      wrong: wrongAnswers,
      target: utils.getElement("select-card-target").value
    };
  }

  function validateFormValues(values) {
    if (values.question.length < MIN_QUESTION_LENGTH) {
      return "Soal terlalu pendek. Tulis minimal " + MIN_QUESTION_LENGTH + " karakter.";
    }

    if (values.answer === "") {
      return "Jawaban benar wajib diisi.";
    }

    var answerKey = utils.normalizeText(values.answer);

    var hasDuplicateWrong = values.wrong.some(function (text) {
      return utils.normalizeText(text) === answerKey;
    });

    if (hasDuplicateWrong) {
      return "Pilihan jawaban salah tidak boleh sama dengan jawaban benar.";
    }

    var wrongKeys = values.wrong.map(function (text) {
      return utils.normalizeText(text);
    });

    var uniqueWrongKeys = wrongKeys.filter(function (key, index) {
      return wrongKeys.indexOf(key) === index;
    });

    if (uniqueWrongKeys.length !== wrongKeys.length) {
      return "Pilihan jawaban salah tidak boleh sama satu sama lain.";
    }

    return "";
  }

  function resetForm() {
    utils.getElement("form-add-card").reset();
    utils.getElement("input-card-id").value = "";
    utils.getElement("card-form-title").textContent = "Tambah Kartu Baru";
    utils.getElement("btn-submit-card").textContent = "Simpan Kartu";
    utils.getElement("btn-cancel-edit").hidden = true;
    utils.getElement("details-card-wrong").open = false;

    editingCardId = null;
  }

  function fillFormForEdit(card) {
    utils.getElement("input-card-id").value = card.id;
    utils.getElement("input-card-question").value = card.question;
    utils.getElement("input-card-answer").value = card.answer;
    utils.getElement("input-card-explanation").value = card.explanation || "";
    utils.getElement("input-card-wrong-1").value = card.wrong[0] || "";
    utils.getElement("input-card-wrong-2").value = card.wrong[1] || "";
    utils.getElement("input-card-wrong-3").value = card.wrong[2] || "";
    utils.getElement("select-card-target").value = card.target || window.LCTP.bank.CUSTOM_TARGET_VALUE;
    utils.getElement("details-card-wrong").open = card.wrong.length > 0;
    utils.getElement("card-form-title").textContent = "Ubah Kartu";
    utils.getElement("btn-submit-card").textContent = "Perbarui Kartu";
    utils.getElement("btn-cancel-edit").hidden = false;

    editingCardId = card.id;

    showMessage("Sedang mengubah kartu. Simpan untuk memperbarui.", "info");
    utils.getElement("input-card-question").focus();
  }

  function handleSubmit(event) {
    event.preventDefault();

    var values = readFormValues();
    var errorMessage = validateFormValues(values);

    if (errorMessage) {
      showMessage(errorMessage, "error");
      return;
    }

    var cards = window.LCTP.app.getCards();

    if (editingCardId) {
      cards = cards.map(function (card) {
        if (card.id !== editingCardId) {
          return card;
        }

        return {
          id: card.id,
          question: values.question,
          answer: values.answer,
          explanation: values.explanation,
          wrong: values.wrong,
          target: values.target,
          createdAt: card.createdAt
        };
      });

      window.LCTP.app.saveCards(cards);
      resetForm();
      showMessage("Kartu berhasil diperbarui. Soal kuis ikut diperbarui otomatis.", "success");
      return;
    }

    cards.push({
      id: utils.generateId("card"),
      question: values.question,
      answer: values.answer,
      explanation: values.explanation,
      wrong: values.wrong,
      target: values.target,
      createdAt: Date.now()
    });

    window.LCTP.app.saveCards(cards);
    resetForm();
    showMessage("Kartu tersimpan! Soal kuis baru sudah otomatis ditambahkan ke drilling.", "success");
  }

  function deleteCard(cardId) {
    var shouldDelete = window.confirm("Hapus kartu ini? Soal kuis dari kartu ini juga akan hilang.");

    if (!shouldDelete) {
      return;
    }

    var remainingCards = window.LCTP.app.getCards().filter(function (card) {
      return card.id !== cardId;
    });

    window.LCTP.app.saveCards(remainingCards);

    if (editingCardId === cardId) {
      resetForm();
    }

    showMessage("Kartu dihapus.", "info");
  }

  function describeTarget(card, levels) {
    if (!card.target || card.target === window.LCTP.bank.CUSTOM_TARGET_VALUE) {
      return "Level Kartu Saya";
    }

    var targetLevel = levels.find(function (level) {
      return level.id === card.target;
    });

    return targetLevel ? targetLevel.label : "Level Kartu Saya";
  }

  function createCardItem(card, levels) {
    var listItem = utils.createElement("li", "card-item");
    var question = utils.createElement("p", "card-item__question", card.question);
    var answer = utils.createElement("p", "card-item__answer", "Jawaban: " + card.answer);
    var meta = utils.createElement("p", "card-item__meta", "Masuk ke: " + describeTarget(card, levels));
    var actions = utils.createElement("div", "card-item__actions");

    var editButton = utils.createElement("button", "button button--small button--ghost", "Ubah");
    editButton.type = "button";

    editButton.addEventListener("click", function () {
      fillFormForEdit(card);
    });

    var deleteButton = utils.createElement("button", "button button--small button--danger", "Hapus");
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function () {
      deleteCard(card.id);
    });

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    listItem.appendChild(question);
    listItem.appendChild(answer);

    if (card.explanation) {
      listItem.appendChild(utils.createElement("p", "card-item__explanation", "Penjelasan: " + card.explanation));
    }

    listItem.appendChild(meta);
    listItem.appendChild(actions);

    return listItem;
  }

  function renderCardList(cards, levels) {
    var list = utils.getElement("card-list");
    var emptyMessage = utils.getElement("card-list-empty");

    utils.clearElement(list);

    utils.getElement("card-count").textContent = String(cards.length);
    utils.getElement("badge-card-count").textContent = String(cards.length);

    emptyMessage.hidden = cards.length > 0;

    cards.slice().reverse().forEach(function (card) {
      list.appendChild(createCardItem(card, levels));
    });
  }

  function handleExport() {
    var cards = window.LCTP.app.getCards();

    if (cards.length === 0) {
      showMessage("Belum ada kartu untuk diekspor.", "error");
      return;
    }

    var payload = JSON.stringify({ version: 1, cards: cards }, null, 2);
    var blob = new Blob([payload], { type: "application/json" });
    var downloadUrl = URL.createObjectURL(blob);
    var link = document.createElement("a");

    link.href = downloadUrl;
    link.download = "kartu-lctp-" + new Date().toISOString().slice(0, 10) + ".json";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(downloadUrl);
    showMessage("Kartu berhasil diekspor ke file JSON.", "success");
  }

  function sanitizeImportedCard(rawCard) {
    if (!rawCard || typeof rawCard.question !== "string" || typeof rawCard.answer !== "string") {
      return null;
    }

    if (rawCard.question.trim() === "" || rawCard.answer.trim() === "") {
      return null;
    }

    var wrongAnswers = Array.isArray(rawCard.wrong) ? rawCard.wrong : [];

    return {
      id: utils.generateId("card"),
      question: rawCard.question.trim(),
      answer: rawCard.answer.trim(),
      explanation: typeof rawCard.explanation === "string" ? rawCard.explanation.trim() : "",
      wrong: wrongAnswers
        .filter(function (text) {
          return typeof text === "string" && text.trim() !== "";
        })
        .slice(0, 3),
      target: typeof rawCard.target === "string" ? rawCard.target : window.LCTP.bank.CUSTOM_TARGET_VALUE,
      createdAt: Date.now()
    };
  }

  function handleImportFile(event) {
    var file = event.target.files[0];

    if (!file) {
      return;
    }

    var reader = new FileReader();

    reader.onload = function () {
      try {
        var parsed = JSON.parse(reader.result);
        var rawCards = Array.isArray(parsed) ? parsed : parsed.cards;

        if (!Array.isArray(rawCards)) {
          throw new Error("Format tidak dikenali");
        }

        var existingCards = window.LCTP.app.getCards();

        var existingKeys = existingCards.map(function (card) {
          return utils.normalizeText(card.question) + "|" + utils.normalizeText(card.answer);
        });

        var addedCount = 0;

        rawCards.forEach(function (rawCard) {
          var cleanCard = sanitizeImportedCard(rawCard);

          if (!cleanCard) {
            return;
          }

          var key = utils.normalizeText(cleanCard.question) + "|" + utils.normalizeText(cleanCard.answer);

          if (existingKeys.indexOf(key) !== -1) {
            return;
          }

          existingKeys.push(key);
          existingCards.push(cleanCard);
          addedCount += 1;
        });

        window.LCTP.app.saveCards(existingCards);
        showMessage(addedCount + " kartu berhasil diimpor.", "success");
      } catch (error) {
        showMessage("Gagal mengimpor: file JSON tidak valid.", "error");
      }

      event.target.value = "";
    };

    reader.readAsText(file);
  }

  function handleClearAll() {
    var cards = window.LCTP.app.getCards();

    if (cards.length === 0) {
      showMessage("Tidak ada kartu untuk dihapus.", "info");
      return;
    }

    var shouldClear = window.confirm("Hapus SEMUA kartu (" + cards.length + ")? Tindakan ini tidak bisa dibatalkan.");

    if (!shouldClear) {
      return;
    }

    window.LCTP.app.saveCards([]);
    resetForm();
    showMessage("Semua kartu dihapus.", "info");
  }

  function bindEvents() {
    utils.getElement("form-add-card").addEventListener("submit", handleSubmit);
    utils.getElement("btn-cancel-edit").addEventListener("click", function () {
      resetForm();
      showMessage("", "");
    });
    utils.getElement("btn-export-cards").addEventListener("click", handleExport);
    utils.getElement("input-import-cards").addEventListener("change", handleImportFile);
    utils.getElement("btn-clear-cards").addEventListener("click", handleClearAll);
  }

  window.LCTP.uiCards = {
    renderTargetOptions: renderTargetOptions,
    renderCardList: renderCardList,
    bindEvents: bindEvents
  };
})();
