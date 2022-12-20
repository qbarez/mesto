import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {submit} ) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._popup.querySelectorAll('.popup__form-input');
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._submitButtonText = this._submitButton.textContent;
    this._submitEvtHandler = this._submitEvtHandler.bind(this);
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
}

  _getInputValues() {
    const inputsList = Array.from(this._form.querySelectorAll('.popup__form-input'));
    const data = {};
    inputsList.forEach(input => {
      data[input.id] = input.value;
    })
    return data;
  }

  _submitEvtHandler(evt) {
    evt.preventDefault();
    this._submit(this._getInputValues());
}

    setInputValue(data) {
        this._inputs.forEach((item) => {
            item.value = data[item.name];
        })
    }

    setEventListeners() {
        this._form.addEventListener('submit', this._submitEvtHandler);
        super.setEventListeners();
      }

    close() {
        this._form.reset();
        this._form.removeEventListener('submit', this._submitEvtHandler);
        super.close();
    }
}