let popup = document.querySelector('.popup');
let editProfile = document.querySelector('.profile__edit-button');
let closeProfile = document.querySelector('.popup__close-button');

function togglePopup() {
  popup.classList.toggle('popup_opened');
};

popup.addEventListener('click', function(event){
  if (event.target === event.currentTarget) {
    togglePopup();
  }
});

editProfile.addEventListener('click', togglePopup);
closeProfile.addEventListener('click', togglePopup);



console.log('ya tut');

