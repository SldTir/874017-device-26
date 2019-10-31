var link = document.querySelector(".write-to-us-a");
var modalSendingLetter = document.querySelector(".modal-sending-letter");
var close = document.querySelector(".modal-close-index");
var firstNameLastName = modalSendingLetter.querySelector("[name=first-name-last-name]");
var formLetter = modalSendingLetter.querySelector(".sending-letter-form");
var eMail = modalSendingLetter.querySelector(".email-sending-letter");
var storageName = localStorage.getItem("firstNameLastName");
var storageEMail = localStorage.getItem("eMail");
var isStorageSupport = true;
var storageName = "";


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSendingLetter.classList.add("modal-show");
  firstNameLastName.focus();
  if (storageName) {
    firstNameLastName.value = storageName;
    eMail.focus();
  } else {
    firstNameLastName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSendingLetter.classList.remove("modal-show");
  modalSendingLetter.classList.remove("modal-error");
});

formLetter.addEventListener("submit", function (evt) {
  if (!firstNameLastName.value || !eMail.value) {
    evt.preventDefault();
    modalSendingLetter.classList.remove("modal-error");
    modalSendingLetter.offsetWidth = modalSendingLetter.offsetWidth;
    modalSendingLetter.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("firstNameLastName", firstNameLastName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalSendingLetter.classList.contains("modal-show")) {
      evt.preventDefault();
      modalSendingLetter.classList.remove("modal-show");
      modalSendingLetter.classList.remove("modal-error");
    }
  }
});
