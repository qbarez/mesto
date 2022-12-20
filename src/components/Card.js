export class Card {
  constructor(data, userId, selector, {
    viewImage, 
    like, 
    dislike, 
    deleteCard}) {
    this._title = data.name;
    this._image = data.link;
    this._selector = selector;
    this._viewPlaceImage = viewImage;
    this._id = data._id;
    this._likes = data.likes;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._deleteCard = deleteCard;
    this._like = like;
    this._dislike = dislike;

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
    this._likeButton = this._element.querySelector('.card__like-button');
    this._likeCounter = this._element.querySelector('.card__like-counter');
    this._deleteButton = this._element.querySelector('.card__trash');
    this._likeCounter.textContent = `${this._likes.length}`;
    
    this._setEventListeners();
    this._isLiked();
    this.isOwner();

    return this._element;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.card__like-button');
    this._elementImage.addEventListener('click', () => {
      this._viewPlaceImage(this._title, this._image);
    });

    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('card__like-button_active')) {
        this._dislike(this._id);
      } else {
        this._like(this._id);
      }
    });

    this._deleteButton.addEventListener('click', () => {
      console.log(this._id);
      this._deleteCard(this._id);
    });
  }

  isOwner() {
    if (this._userId !== this._ownerId) {
        this._deleteButton.remove();
        this._deleteButton = null;
    }
  }

  _isLiked() {
    this._likes.forEach(() => {
        if (this._likes._id === this._userId) {
            this.setLike();
        } else {
            this.setDislike();
        }
    });
  }

  setLike() {
    this._likeButton.classList.add('card__like-button_active');
  }
  
  setDislike() {
    this._likeButton.classList.remove('card__like-button_active');
  }

  setLikesCount(res) {
    this._likeCounter.textContent = `${res.likes.length}`;
  }
  
  delete() {
    this._element.remove();
    this._element = null;
  }
}