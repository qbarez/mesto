const popup = document.querySelector('.popup');

const editProfile = document.querySelector('.profile__edit-button');

const closeProfile = document.querySelector('.popup__close-button');

const submitProfile = document.querySelector('.popup__submit-button');

const profileName = document.querySelector('.profile__title');

const profileInfo = document.querySelector('.profile__subtitle');

const popupContainer = document.querySelector('.popup__container');

const formElement = popupContainer.querySelector('.popup__form');

const inputName = formElement.querySelector('input[name="name"]');

const inputInfo = formElement.querySelector('input[name="info"]');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened')
};

function submitPopup(evt) {
  evt.preventDefault();
  popup.classList.remove('popup_opened');
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
};

editProfile.addEventListener('click', openPopup);

closeProfile.addEventListener('click', closePopup);

submitProfile.addEventListener('click', submitPopup);

/*popup.addEventListener('click', function(event){
  if (event.target === event.currentTarget) {
    togglePopup();
  }
});*/
