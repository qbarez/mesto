export class FormValidator {

  constructor(formElement, settings) {
    this._form = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButton = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._bottonElement = this._form.querySelector(this._submitButtonSelector)
  
    }
 
    _setEventListeners() {
      
      this._toggleBtnState();

      this._inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
          this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
          this._checkInputValidity(inputElement);
          this._toggleBtnState();
        });
      });
    }

    removeInputErrors () {
        this._toggleBtnState(this._bottonElement);
      
        this._inputList.forEach((input) => {
        this._errorElement = this._form.querySelector(`.${input.id}-error`);
        this._hideInputError(input);
        })
      }

    _checkInputValidity (inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement);
        } else {
          this._hideInputError(inputElement);
        }
    };

    _showInputError (inputElement) {
        inputElement.classList.add(this._inputErrorClass);
        this._errorElement.textContent = inputElement.validationMessage;
        this._errorElement.classList.add(this._errorClass);
      };  

    _hideInputError (inputElement) {
      if (!this._errorElement) return;
      inputElement.classList.remove(this._inputErrorClass);
      this._errorElement.classList.remove(this._errorClass);
      this._errorElement.textContent = '';
    };

    _validateInput() {
      return this._inputList.some((input) => !input.validity.valid);
    }

    _toggleBtnState() {
        if (this._validateInput()) {
            this._bottonElement.classList.add(this._inactiveButton);
            this._bottonElement.setAttribute('disabled', true);
        } else {
            this._bottonElement.classList.remove(this._inactiveButton);
            this._bottonElement.removeAttribute('disabled', true);
          }
      } 

    enableValidation() {
        this._setEventListeners();
    }
}