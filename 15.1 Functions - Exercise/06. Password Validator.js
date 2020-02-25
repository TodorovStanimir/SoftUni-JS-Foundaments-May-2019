function passwordValidator(password) {
    let counterNums = 0;
    let isValidPassword = true;
    let isPasswordConsistOnlyLettersAndDigits = true;

    if (password.length < 6 || password.length > 10) {
        isValidPassword = false;
        console.log('Password must be between 6 and 10 characters');
    }

    let modifiedPassword = password.toLowerCase();
    for (let i = 0; i < modifiedPassword.length; i++) {
        if ((modifiedPassword.charCodeAt(i) <= 47 ||
            (modifiedPassword.charCodeAt(i) >= 58 && modifiedPassword.charCodeAt(i) <= 96) ||
            modifiedPassword.charCodeAt(i) >= 123)) {
            isPasswordConsistOnlyLettersAndDigits = false;
        }
    }

    for (let i = 0; i < password.length; i++) {

        if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
            counterNums++;
        }
    }

    if (isPasswordConsistOnlyLettersAndDigits === false) {
        console.log('Password must consist only of letters and digits');
        isValidPassword = false;
    }

    if (counterNums < 2) {
        console.log('Password must have at least 2 digits');
        isValidPassword = false;
    }

    if (isValidPassword) {
        console.log('Password is valid')
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');