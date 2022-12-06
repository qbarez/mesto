export class Card {
  constructor(data, selector, viewImage) {
    this._title = data.name;
    this._image = data.link;
    this._selector = selector;
    this._viewPlaceImage = viewImage;
  }

  _getCardElement() {
    const cardTemplate = document
      .querySelector(this._selector)
      .content
      .querySelector('#card')
      .cloneNode(true);

    return cardTemplate;

  }
     
  generateCardElement() {
    this._element = this._getCardElement();
    this._elementImage = this._element.querySelector('.card__image');
    this._elementImage.src = this._image;
    this._elementImage.alt = this._title;
    this._element.querySelector('.card__title').textContent = this._title;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.card__like-button');
    this._elementImage.addEventListener('click', () => {
      this._viewPlaceImage(this._title, this._image);
  });

    this._likeButton.addEventListener('click', () => {
      this._likeCard();
  });

    this._element.querySelector('.card__trash').addEventListener('click', () => {
      this._deleteCard();
  });
    }

  _likeCard() {
    this._likeButton.classList.toggle('card__like-button_active');
    }

  _deleteCard() {
    this._element.remove();
    this._element = null;
    }

}