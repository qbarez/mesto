export class Card {
  constructor(name, link, selector, viewImage) {
    this._title = name;
    this._image = link;
    this._selector = selector;
    this._viewPlaceImage = viewImage;
  }

  _getPlacesElement() {
    const cardTemplate = document
      .querySelector(this._selector)
      .content
      .querySelector('#card')
      .cloneNode(true);

    return cardTemplate;

  }
    
    
  addInitCards() {
    this._placesElement = this._getPlacesElement();
    this._placesElementImage = this._placesElement.querySelector('.places__image');
    this._placesElementImage.src = this._image;
    this._placesElementImage.alt = this._title;
    this._placesElement.querySelector('.places__title').textContent = this._title;

    this._setEventListeners();

    return this._placesElement;
  }

  _setEventListeners() {
    this._likeButton = this._placesElement.querySelector('.places__like-button');
    this._placesElement.querySelector('.places__image').addEventListener('click', () => {
      this._viewPlaceImage(this._title, this._image);
  });

    this._likeButton.addEventListener('click', () => {
      this._likeCard();
  });

    this._placesElement.querySelector('.places__trash').addEventListener('click', () => {
      this._deleteCard();
  });
    }

  _likeCard() {
    this._likeButton.classList.toggle('places__like-button_active');
    }

  _deleteCard() {
    this._placesElement.remove();
    this._placesElement = null;
    }

}