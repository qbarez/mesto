import './index.css';
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import Section from "../components/Section.js";

import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards,
  profileEditbutton,
  placeAddButton,
  profileName,
  profileInfo,
  profileForm,
  profileNameInput,
  profileInfoInput,
  cardsContainer,
  newPlacePopup,
  newPlaceForm,
  validationSettings,
  imagePopupSelector,
  newPlacePopupSelector,
  profilePopupSelector
} from "../utils/constants.js";

const createCard = (data) => {
  const card = new Card(data, '#cards', viewImage);
  const cardsContainerElement = card.generateCardElement();

  return cardsContainerElement;
};

const viewImage = (title, src) => {
  popupImage.open(title, src);
};

const cardsList = new Section({
  items: initialCards,
  renderer: (data) => {
      const card = createCard(data);
      cardsList.addItem(card)
  }
}, cardsContainer);

cardsList.renderItem();



const renderProfileInputs = () => {
  profileNameInput.value = profileName.textContent;
  profileInfoInput.value = profileInfo.textContent;
};

const submitProfileForm = (userData) => {
	userInfo.setUserInfo(userData)
};

const handleAddNewCard = (obj) => {
  const card = createCard(obj)
  cardsList.addItem(card);
  popupPlace.close();
};

profileEditbutton.addEventListener('click', () => {
  popupProfle.open();
  renderProfileInputs();
  profileFormValidation.removeInputErrors();
});

placeAddButton.addEventListener('click',() => {
  popupPlace.open();
  newPlaceFormValidation.removeInputErrors();
});

const profileFormValidation = new FormValidator(profileForm, validationSettings);
profileFormValidation.enableValidation();

const newPlaceFormValidation = new FormValidator(newPlaceForm, validationSettings);
newPlaceFormValidation.enableValidation();

const popupImage = new PopupWithImage(imagePopupSelector);
popupImage.setEventListeners();

const popupPlace = new PopupWithForm(newPlacePopupSelector, handleAddNewCard)
popupPlace.setEventListeners();

const popupProfle = new PopupWithForm(profilePopupSelector, submitProfileForm)
popupProfle.setEventListeners();

const userInfo = new UserInfo({
  profileName: profileName,
  profileInfo: profileInfo
});
