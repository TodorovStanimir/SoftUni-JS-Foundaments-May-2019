function passwordValidator(password) {
    let passwordArray = password.split('');
    let enoughtLength = checkLengthPassword(passwordArray);
    let enoughtDigits = checkDigitsInPassword(passwordArray);
    let consistsOnlyLettersAndDigits = checkLettersandDigitsInPassword(passwordArray);
    let passwordIsValid = true;
    if (!enoughtLength) {
        console.log('Password must be between 6 and 10 characters');
        passwordIsValid = false;
    }
    if (!consistsOnlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
        passwordIsValid = false;
    }

    if (!enoughtDigits) {
        console.log('Password must have at least 2 digits');
        passwordIsValid = false;
    }

    if (passwordIsValid) {
        console.log('Password is valid');

    }

    function checkLengthPassword(input) {
        if (6 <= input.length && input.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function checkDigitsInPassword(input) {
        let counterDigits = 0;
        input.forEach(element => {
            if (0 <= Number(element) && Number(element) <= 9) {
                counterDigits++;
            }
        });
        if (counterDigits >= 2) {
            return true;
        } else {
            return false;
        }
    }

    function checkLettersandDigitsInPassword(input) {
        for (let letter of input) {
            let charCode = letter.charCodeAt();
            if ((48 <= charCode && charCode <= 57) ||
                (65 <= charCode && charCode <= 90) ||
                (97 <= charCode && charCode <= 122)) {} else {
                return false;
            }
        }
        return true;
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');