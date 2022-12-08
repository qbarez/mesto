export const initialCards = [
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

export const profilePopup = document.querySelector('#popup_edit_profile');
export const profileEditbutton = document.querySelector('.profile__edit-button');
export const profileCloseButton = document.querySelector('#profile_close_botton');
export const placeAddButton = document.querySelector('.profile__add-content-button');
export const placeCloseButton = document.querySelector('#place_close_botton');
export const profileName = document.querySelector('.profile__title');
export const profileInfo = document.querySelector('.profile__subtitle');
export const profileForm = profilePopup.querySelector('#profile_form');
export const profileNameInput = document.querySelector('#userName');
export const profileInfoInput = document.querySelector('#userAbout');
export const cardsContainer = document.querySelector('.card__elements');
export const newPlacePopup = document.querySelector('#popup_new_place');
export const newPlaceForm = newPlacePopup.querySelector('#new_place_form');
export const newPlaceName = newPlacePopup.querySelector('#name');
export const newPlaceImage = newPlacePopup.querySelector('#link');
export const imagePopup = document.querySelector('#popup_image');
export const imageViewPopup = imagePopup.querySelector('.popup__image');
export const imagePopupCaption = imagePopup.querySelector('.popup__image-caption');
export const imagePopupCloseButton = imagePopup.querySelector('#image_close_botton');
export const newPlacePopupSelector = '#popup_new_place';
export const profilePopupSelector = '#popup_edit_profile';
export const imagePopupSelector = '#popup_image';


export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-input-error_active',
};