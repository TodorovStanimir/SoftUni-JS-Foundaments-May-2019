function login(input) {
    let userName = input.shift();
    let userPassowrd = userName.split('').reverse().join('');
    let counter = 0;

    for (let checkedPassword of input) {
        if (checkedPassword !== userPassowrd) {
            counter++;
            if (counter===4) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${userName} logged in.`);
            break;
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
