let popup = document.querySelector('.popup');

let editProfile = document.querySelector('.profile__edit-button');

let closeProfile = document.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__title');

let profileInfo = document.querySelector('.profile__subtitle');

let popupContainer = document.querySelector('.popup__container');

let formElement = popupContainer.querySelector('.popup__form');

let inputName = formElement.querySelector('input[name="name"]');

let inputInfo = formElement.querySelector('input[name="info"]');

function togglePopup() {
  popup.classList.toggle('popup_opened');
};

function saveProfileData() {
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
};

function formSubmitHandler (evt) {
	evt.preventDefault();
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
  togglePopup();
}

editProfile.addEventListener('click', togglePopup);

editProfile.addEventListener('click', saveProfileData);

closeProfile.addEventListener('click', togglePopup);

formElement.addEventListener('submit', formSubmitHandler);

/*popup.addEventListener('click', function(event){
  if (event.target === event.currentTarget) {
    togglePopup();
  }
});*/
