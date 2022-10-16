const popupProfile = document.querySelector('#popup_edit_profile');
const profileEditbutton = document.querySelector('.profile__edit-button');
const closeProfile = document.querySelector('#profile_close_botton');
const popupPlace = document.querySelector('#popup_new_place');
const addPlaceButton = document.querySelector('.profile__add-content-button');
const closePlaceButton = document.querySelector('#place_close_botton');
const cardsTemplate = document.querySelector('#cards').content;
const card = cardsTemplate.querySelector('#card');
const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');
const popupContainer = document.querySelector('.popup__container');
const formElement = popupContainer.querySelector('.popup__form');
const inputName = formElement.querySelector('input[name="name"]');
const inputInfo = formElement.querySelector('input[name="info"]');
const cardsContainer = document.querySelector('.places__elements');
const popupNewPlace = document.querySelector('#popup_new_place');
const newPlaceForm = popupNewPlace.querySelector('#new_place_form');
const newPlaceName = popupNewPlace.querySelector('#new_place_name');
const newPlaceImage = popupNewPlace.querySelector('#new_place_image_link');
const submitNewPlace = popupNewPlace.querySelector('#submit_new_place');
const popupImage = document.querySelector('#popup_image');
const popupImageView = popupImage.querySelector('.popup__image');
const popupImageCaption = popupImage.querySelector('.popup__image-caption');
const popupImageCloseButton = popupImage.querySelector('#image_close_botton');
const placeImage = document.querySelector('.places__image');
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

function openPopup(element) {
  element.classList.add('popup_opened');
};

function closePopup(element) {
  element.classList.remove('popup_opened');
};

profileEditbutton.addEventListener('click', () => {
  openPopup(popupProfile);
  renderProfileInputs()
});

closeProfile.addEventListener('click', () => {
  closePopup(popupProfile);
});

closePlaceButton.addEventListener('click',() => {
  closePopup(popupPlace)
});

function renderProfileInputs() {
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
}

function formSubmitHandler (event) {
	event.preventDefault();
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
  closePopup(popupProfile);
}

function addInitCards (title, src) {
  const cardsTemplate = document.querySelector('#cards').content;
  const card = cardsTemplate.querySelector('.places__element').cloneNode(true);
  const cardImage = card.querySelector('.places__image');
  cardImage.src = src;
  cardImage.alt = title;
  card.querySelector('.places__title').textContent = title;
  card.querySelector('.places__image').addEventListener('click', () => {
    viewImage(title, src);
});
  card.querySelector('.places__like-button').addEventListener('click', likeCard);
  card.querySelector('.places__trash').addEventListener('click', deleteCard);
return card;
};

for (let i = 0; i < initialCards.length; i++){
  const cardSet = addInitCards(initialCards[i].name, initialCards[i].link);
  renderCard(cardSet, cardsContainer);
};

function addNewCard(event) {
  event.preventDefault();
  cardParam = addInitCards(newPlaceName.value, newPlaceImage.value);
  renderCard(cardParam, cardsContainer);
  closePopup(popupPlace);
};

function renderCard(card, container) {
  container.prepend(card);
};
function likeCard(event) {
  event.target.classList.toggle('places__like-button_active');
};

function deleteCard(event) {
  event.target.closest('.places__element').remove();
};

const viewImage = (title, src) => {
  openPopup(popupImage);
  popupImageView.src = src;
  popupImageView.alt = title;
  popupImageCaption.textContent = title;
};

formElement.addEventListener('submit', formSubmitHandler);

addPlaceButton.addEventListener('click',() => {
  openPopup(popupPlace);
  newPlaceForm.reset();
});

newPlaceForm.addEventListener('submit', addNewCard);

popupImageCloseButton.addEventListener('click', () => {
  closePopup(popupImage)
});