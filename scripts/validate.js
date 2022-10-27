const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_inactive',
    inputErrorClass: 'popup__form-input_invalid',
    errorClass: '.popup__form-input-error',
};

const showInputError = (formElement, inputElement, errorMessage, validationSettings) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(validationSettings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationSettings.errorClass);
    //console.log("showInputError работает");
};

const hideInputError = (formElement, inputElement, validationSettings) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validationSettings.inputErrorClass);
    errorElement.classList.remove(validationSettings.errorClass);
    errorElement.textContent = '';
    //console.log("hideInputError работает");
};

const removeInputErrors = (popup) => {
    const inputList = Array.from(popup.querySelectorAll(validationSettings.inputSelector));

    inputList.forEach((inputElement) => {
        hideInputError(popup, inputElement, validationSettings);
    })
    //console.log("removeInputErrors работает");
}

const setInactiveButtonClass = (buttonElement, validationSettings) => {
    buttonElement.classList.add(validationSettings.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
    //console.log("setInactiveButtonClass работает");
}

const setActiveButtonClass = (buttonElement, validationSettings) => {
    buttonElement.classList.remove(validationSettings.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', true);
    //console.log("setActiveButtonClass работает");
}

const enableValidation = (validationSettings) => {
    const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement, validationSettings);
    });
    //console.log("enableValidation работает");
};

const checkInputValidity = (formElement, inputElement, validationSettings) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
        //console.log("checkInputValidity работает");
    } else {
        hideInputError(formElement, inputElement, validationSettings);
        //console.log("else checkInputValidity работает");
    }
};

const setEventListeners = (formElement, validationSettings) => {
    const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
    const buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, validationSettings);
            toggleBtnState(buttonElement, inputList, validationSettings);
            //console.log("setEventListeners работает");
        });
    });
    //console.log("setEventListeners работает");
};

const validateInput = (inputList) => inputList.some((inputElement) => !inputElement.validity.valid);

const toggleBtnState = (buttonElement, inputList, validationSettings) => {
    if (validateInput(inputList)) {
        setInactiveButtonClass(buttonElement, validationSettings);
        //console.log("toggleBtnState работает");
    } else {
        setActiveButtonClass(buttonElement, validationSettings);
        //console.log("toggleBtnState else работает");
    }
};

enableValidation(validationSettings);