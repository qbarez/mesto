import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { profileEditbutton,
  placeAddButton,
  profileName,
  profileNameSelector,
  profileInfo,
  profileInfoSelector,
  profileForm,
  profileNameInput,
  profileInfoInput,
  cardsContainerSelector,
  newPlaceForm,
  validationSettings,
  imagePopupSelector,
  newPlacePopupSelector,
  profilePopupSelector,
  popupConfirmSelector,
  profileAvatarSelector,
  avatarForm,
  avatarButton,
  popupAvatarSelector
} from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';
import PopupConfirm from "../components/PopupConfirm";

let userId;

const cardsList = new Section({
  renderer: (data) => {
      const card = createCard(data);
      cardsList.addItem(card)
  }
}, cardsContainerSelector);

const createCard = (data) => {
  const card = new Card(
    data, userId,
    '#cards', {
    viewImage,
    like: () => {
      api.likeCard(data._id)
        .then((res) => {
          card.setLike();
          card.setLikesCount(res);
        })
        .catch((err) => {
          console.log(err);
        })
    },
    dislike: () => {
      api.dislikeCard(data._id)
        .then((res) => {
          card.setDislike();
          card.setLikesCount(res);
        })
        .catch((err) => {
          console.log(err);
        })
    },
    deleteCard: () => {
      confirmPopup.open(card);
    }
    });

  const cardsContainerElement = card.generateCardElement();

  return cardsContainerElement;
};

const popupPlace = new PopupWithForm(newPlacePopupSelector, {
  submit: (data) => {
    popupPlace.renderLoading(true);
    api.addNewCard(data)
      .then((res) => {
        const card = createCard(res)
        cardsList.addItem(card);
        popupPlace.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupPlace.renderLoading(false);
        popupPlace.close()
      })
  }
});
popupPlace.setEventListeners();

const confirmPopup = new PopupConfirm(popupConfirmSelector, {
  submit: (card) => {
  api.deleteCard(card._id)
  .then(() => {
      card.delete();
      confirmPopup.close();
    })
    .catch((err) => {
      console.log(err)
  })
}
});

confirmPopup.setEventListeners();

const popupProfle = new PopupWithForm(profilePopupSelector, {
  submit: (data) => {
    popupProfle.renderLoading(true);
    console.log(data);
    api.setUserInfo(data)
      .then((res) => {
        userInfo.getUserInfo(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupProfle.renderLoading(false);
        popupProfle.close();
      })
  }
})


popupProfle.setEventListeners();

const userInfo = new UserInfo({
  profileNameSelector: profileNameSelector,
  profileInfoSelector: profileInfoSelector,
  profileAvatarSelector: profileAvatarSelector
});

profileEditbutton.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  popupProfle.setInputValue(info);
  popupProfle.open();
  renderProfileInputs();
  profileFormValidation.removeInputErrors();
});

const avatarPopup = new PopupWithForm(popupAvatarSelector, {
  submit: (data) => {
    avatarPopup.renderLoading(true);
    api.changeAvatar(data)
      .then((res) => {
        userInfo.setAvatar(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarPopup.renderLoading(false);
        avatarPopup.close();
      })
  }
})
avatarPopup.setEventListeners();

avatarButton.addEventListener('click', () => {
  avatarPopup.open();
  avatarFormValidation.removeInputErrors();
})

const viewImage = (title, src) => {
  popupImage.open(title, src);
};

const renderProfileInputs = () => {
  profileNameInput.value = profileName.textContent;
  profileInfoInput.value = profileInfo.textContent;
};

placeAddButton.addEventListener('click',() => {
  popupPlace.open();
  newPlaceFormValidation.removeInputErrors();
});


const profileFormValidation = new FormValidator(profileForm, validationSettings);
profileFormValidation.enableValidation();

const newPlaceFormValidation = new FormValidator(newPlaceForm, validationSettings);
newPlaceFormValidation.enableValidation();

const avatarFormValidation = new FormValidator(avatarForm, validationSettings);
avatarFormValidation.enableValidation();

const popupImage = new PopupWithImage(imagePopupSelector);
popupImage.setEventListeners();

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-54",
  headers: {
      authorization: "3f147de7-c65a-4296-8c43-0f859e42034e",
      "Content-Type": "application/json",
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    console.log(userData._id);
    userInfo.setUserInfo(userData);
    cardsList.renderItems(cards.reverse());
    })
    .catch((err) => {
      console.log(err);
    });