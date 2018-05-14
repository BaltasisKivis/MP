// Variables
let email = document.getElementById('email'),
	phone = document.getElementById('phone'),
	message = document.getElementById('message'),
	errorMessage = document.getElementById('error-message'),
	validEmail = false,
	validPhone = false,
	validMessage = false;

// Main function
function validateForm() {
	validate();

	if (validEmail && validPhone && validMessage) {
		return true;
	}
	else {
		// Displaying the error message
		errorMessage.classList.add('contact__form-container__form__submit__error--visible');
		return false;
	}
}

// Running tests
function validate() {
	checkEmailInput();
	checkPhoneInput();
	checkMessageInput();
}

function checkEmailInput() {
    let emailInput = email.value;
	let pattern = /[a-z0-9]+@+[a-z0-9]/; // Desired result -> abc@abc

	if (pattern.test(emailInput)) {
		email.classList.remove('contact__form-container__form__input--error');
		validEmail = true;
	}
	else {
		email.classList.add('contact__form-container__form__input--error');
	}
}

function checkPhoneInput() {
	let phoneNumber = phone.value.split(' ').join('');

	if (isNaN(Number(phoneNumber)) || Number(phoneNumber) === 0) {
		phone.classList.add('contact__form-container__form__input--error');
	}
	else {
		phone.classList.remove('contact__form-container__form__input--error');
		validPhone = true;
	}

}

function checkMessageInput() {
	if (message.value.trim() != '') {
		message.classList.remove('contact__form-container__form__input--error');
		validMessage = true;
	}
	else {
		message.classList.add('contact__form-container__form__input--error');
	}
}

