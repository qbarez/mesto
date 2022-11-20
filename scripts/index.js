import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { initialCards } from "./initialCardsData.js";

const profilePopup = document.querySelector('#popup_edit_profile');
const profileEditbutton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('#profile_close_botton');
const placeAddButton = document.querySelector('.profile__add-content-button');
const placeCloseButton = document.querySelector('#place_close_botton');
const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');
const profileForm = profilePopup.querySelector('#profile_form');
const profileNameInput = document.querySelector('input[name="name"]');
const profileInfoInput = document.querySelector('input[name="info"]');
const cardsContainer = document.querySelector('.card__elements');
const newPlacePopup = document.querySelector('#popup_new_place');
const newPlaceForm = newPlacePopup.querySelector('#new_place_form');
const newPlaceName = newPlacePopup.querySelector('#new_place_name');
const newPlaceImage = newPlacePopup.querySelector('#new_place_image_link');
const imagePopup = document.querySelector('#popup_image');
const imageViewPopup = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__image-caption');
const imagePopupCloseButton = imagePopup.querySelector('#image_close_botton');


export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__form-input_invalid',
  errorClass: '.popup__form-input-error',
};

const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupEscKey);
};

const closePopup = (element) => {
  element.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupEscKey);
};

const renderProfileInputs = () => {
  profileNameInput.value = profileName.textContent;
  profileInfoInput.value = profileInfo.textContent;
}

const submitProfileForm = (event) => {
	event.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileInfo.textContent = profileInfoInput.value;
  closePopup(profilePopup);
}

const handleAddNewCard = (event) => {
  event.preventDefault();
  const cardParam = createCard(newPlaceName.value, newPlaceImage.value);
  renderCard(cardParam, cardsContainer);
  closePopup(newPlacePopup);
};

const renderCard = (card, container) => {
  container.prepend(card);
};

const viewImage = (title, src) => {
  imageViewPopup.src = src;
  imageViewPopup.alt = title;
  imagePopupCaption.textContent = title;
  openPopup(imagePopup);
};

const createCard = (name, link) => {
  const card = new Card(name, link, '#cards', viewImage);
  const cardsContainerElement = card.generateCardElement();

  return cardsContainerElement;
}

initialCards.forEach((item) => {
  const cardSet = createCard(item.name, item.link);
  renderCard(cardSet, cardsContainer);
})

const closePopupEscKey = (event) => {
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
};

const closePopupOverlayClick = (event) => {
  if (event.target.classList.contains('popup')){
    closePopup(event.target);
  }
};

profileEditbutton.addEventListener('click', () => {
  openPopup(profilePopup);
  renderProfileInputs();
  profileFormValidation.removeInputErrors();
});

profileCloseButton.addEventListener('click', () => {
  closePopup(profilePopup);
});

placeCloseButton.addEventListener('click',() => {
  closePopup(newPlacePopup)
});

profileForm.addEventListener('submit', submitProfileForm);

placeAddButton.addEventListener('click',() => {
  openPopup(newPlacePopup);
  newPlaceForm.reset();
  newPlaceFormValidation.removeInputErrors(newPlacePopup);
});

newPlaceForm.addEventListener('submit', handleAddNewCard);

imagePopupCloseButton.addEventListener('click', () => {
  closePopup(imagePopup)
});

newPlacePopup.addEventListener('click', closePopupOverlayClick);
profilePopup.addEventListener('click', closePopupOverlayClick);
imagePopup.addEventListener('click', closePopupOverlayClick);

const profileFormValidation = new FormValidator(profileForm, validationSettings);
profileFormValidation.enableValidation();
const newPlaceFormValidation = new FormValidator(newPlaceForm, validationSettings);
newPlaceFormValidation.enableValidation();
