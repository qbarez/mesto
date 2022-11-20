import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

const profilePopup = document.querySelector('#popup_edit_profile');
const profileEditbutton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('#profile_close_botton');
const placeAddButton = document.querySelector('.profile__add-content-button');
const placeCloseButton = document.querySelector('#place_close_botton');
//const cardsTemplate = document.querySelector('#cards').content;
//const card = cardsTemplate.querySelector('#card');
const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');
const profileForm = profilePopup.querySelector('#profile_form');
const profileFormSubmitButton = profilePopup.querySelector('.popup__submit-button');
const profileNameInput = document.querySelector('input[name="name"]');
const profileInfoInput = document.querySelector('input[name="info"]');
const cardsContainer = document.querySelector('.places__elements');
const newPlacePopup = document.querySelector('#popup_new_place');
const newPlaceForm = newPlacePopup.querySelector('#new_place_form');
const newPlaceName = newPlacePopup.querySelector('#new_place_name');
const newPlaceImage = newPlacePopup.querySelector('#new_place_image_link');
//const newPlaceSubmitButton = newPlacePopup.querySelector('#submit_new_place');
const imagePopup = document.querySelector('#popup_image');
const imageViewPopup = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__image-caption');
const imagePopupCloseButton = imagePopup.querySelector('#image_close_botton');
const popupInputs = document.querySelector('.popup__form-input');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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

const addNewCard = (event) => {
  event.preventDefault();
  cardParam = addInitCards(newPlaceName.value, newPlaceImage.value);
  renderCard(cardParam, cardsContainer);
  closePopup(newPlacePopup);
};

const renderCard = (card, container) => {
  container.prepend(card);
};

const viewImage = (title, src) => {
  openPopup(imagePopup);
  imageViewPopup.src = src;
  imageViewPopup.alt = title;
  imagePopupCaption.textContent = title;
};

const addInitCards = (name, link) => {
  const card = new Card(name, link, '#cards', viewImage);
  const cardsContainerElement = card.addInitCards();

  return cardsContainerElement;
}

initialCards.forEach((item) => {
  const cardSet = addInitCards(item.name, item.link);
  cardsContainer.prepend(cardSet);
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

newPlaceForm.addEventListener('submit', addNewCard);

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
