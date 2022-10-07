const popupProfile = document.querySelector('#popup_edit_profile');
const editProfile = document.querySelector('.profile__edit-button');
const closeProfile = document.querySelector('#profile_close_botton');
const popupPlace = document.querySelector('#popup_new_place');
const addPlaceButton = document.querySelector('.profile__add-content-buttom');
const closePlaceButton = document.querySelector('#place_close_botton');

function openPopup(element) {
  element.classList.add('popup_opened');
};

function closePopup(element) {
  element.classList.remove('popup_opened');
};

editProfile.addEventListener('click', () => {
  openPopup(popupProfile);
});

closeProfile.addEventListener('click', () => {
  closePopup(popupProfile);
});

addPlaceButton.addEventListener('click',() => {
  openPopup(popupPlace)
});

closePlaceButton.addEventListener('click',() => {
  closePopup(popupPlace)
});

const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');
const popupContainer = document.querySelector('.popup__container');
const formElement = popupContainer.querySelector('.popup__form');
const inputName = formElement.querySelector('input[name="name"]');
const inputInfo = formElement.querySelector('input[name="info"]');

inputName.value = profileName.innerHTML;
inputInfo.value = profileInfo.innerHTML;


function formSubmitHandler (event) {
	event.preventDefault();
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
  closePopup(popupProfile);
}

formElement.addEventListener('submit', formSubmitHandler);

const cardsContainer = document.querySelector('.places__elements');
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
let cardSet = '';

for (let i = 0; i < initialCards.length; i++){
  cardSet = addInitCards(initialCards[i].name, initialCards[i].link);
  renderCard(cardSet, cardsContainer);
};

function addInitCards (title, src) {
  const cardsTemplate = document.querySelector('#cards').content;
  const card = cardsTemplate.querySelector('.places__element').cloneNode(true);
  const cardImage = card.querySelector('.places__image');
  cardImage.src = src;
  cardImage.alt = title;
  card.querySelector('.places__title').textContent = title;
  card.querySelector('.places__image').addEventListener('click', () => {
    cardOpen(title, src);
});
  card.querySelector('.places__like-button').addEventListener('click', likeCard);
  card.querySelector('.places__trash').addEventListener('click', deleteCard);
return card;
};

function renderCard(card, container) {
  container.prepend(card);
};
function likeCard(event) {
  event.target.classList.toggle('places__like-button_active');
};

function addNewCard(evt) {
  evt.preventDefault();
  cardFullItem = fillCard(placeInput.value, placeImageInput.value);
  renderCard(cardFullItem, cardItems);
  closePopup(popupPlace);
}

function deleteCard(event) {
  event.target.closest('.places__element').remove();
};

console.log(editProfile);