import Popup from "./Popup.js";

class PopupConfirm extends Popup {
    constructor(popupSelector, {submit}) {
        super(popupSelector);
        this._handleSubmit = submit;
        this._form = this._popup.querySelector('.popup__form');
    }

    open(card) {
        this._card = card;
        super.open();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._card);
        });
    }
}

export default PopupConfirm