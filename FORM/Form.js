document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const passwordStrength = document.getElementById('password-strength');

    const lengthCheck = document.getElementById('length');
    const letterCheck = document.getElementById('letter');
    const capitalCheck = document.getElementById('capital');
    const numberCheck = document.getElementById('number');
    const specialCheck = document.getElementById('special');

    nameInput.addEventListener('input', () => {
        const name = nameInput.value;
        if (/[^a-zA-Z\s]/.test(name)) {
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    });

    passwordInput.addEventListener('focus', () => {
        document.getElementById('message').style.display = 'block';
    });

    passwordInput.addEventListener('blur', () => {
        document.getElementById('message').style.display = 'none';
    });

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const strength = getPasswordStrength(password);
        displayPasswordStrength(strength);
        checkPasswordValidity(password);
    });

    form.addEventListener('submit', (e) => {
        if (nameError.style.display === 'block' || passwordStrength.style.color !== 'green') {
            e.preventDefault();
        }
    });

    function getPasswordStrength(password) {
        let strength = 0;
        const lowerCaseLetters = /[a-z]/g;
        const upperCaseLetters = /[A-Z]/g;
        const numbers = /[0-9]/g;

        if (password.length >= 8) strength++;
        if (password.match(lowerCaseLetters)) strength++;
        if (password.match(upperCaseLetters)) strength++;
        if (password.match(numbers)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength = 0;  

        return strength;
    }

    function displayPasswordStrength(strength) {
        switch (strength) {
            case 0:
                passwordStrength.textContent = '☆☆☆☆☆';
                passwordStrength.style.color = 'red';
                break;
            case 1:
                passwordStrength.textContent = '☆☆☆☆☆';
                passwordStrength.style.color = 'red';
                break;
            case 2:
                passwordStrength.textContent = '☆☆☆☆☆';
                passwordStrength.style.color = 'orange';
                break;
            case 3:
                passwordStrength.textContent = '☆☆☆☆☆';
                passwordStrength.style.color = 'yellowgreen';
                break;
            case 4:
                passwordStrength.textContent = '☆☆☆☆☆';
                passwordStrength.style.color = 'green';
                break;
        }
    }

    function checkPasswordValidity(password) {
        const lowerCaseLetters = /[a-z]/g;
        const upperCaseLetters = /[A-Z]/g;
        const numbers = /[0-9]/g;
        const specialCharacters = /[^a-zA-Z0-9]/;

        if (password.length >= 8) {
            lengthCheck.classList.remove('invalid');
            lengthCheck.classList.add('valid');
        } else {
            lengthCheck.classList.remove('valid');
            lengthCheck.classList.add('invalid');
        }

        if (password.match(lowerCaseLetters)) {
            letterCheck.classList.remove('invalid');
            letterCheck.classList.add('valid');
        } else {
            letterCheck.classList.remove('valid');
            letterCheck.classList.add('invalid');
        }

        if (password.match(upperCaseLetters)) {
            capitalCheck.classList.remove('invalid');
            capitalCheck.classList.add('valid');
        } else {
            capitalCheck.classList.remove('valid');
            capitalCheck.classList.add('invalid');
        }

        if (password.match(numbers)) {
            numberCheck.classList.remove('invalid');
            numberCheck.classList.add('valid');
        } else {
            numberCheck.classList.remove('valid');
            numberCheck.classList.add('invalid');
        }

        if (specialCharacters.test(password)) {
            specialCheck.classList.remove('valid');
            specialCheck.classList.add('invalid');
        } else {
            specialCheck.classList.remove('invalid');
            specialCheck.classList.add('valid');
        }
    }
});
