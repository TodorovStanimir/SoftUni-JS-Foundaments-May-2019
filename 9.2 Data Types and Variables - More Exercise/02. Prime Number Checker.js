function primeNumberChecker(input) {
    isPrimeNumber = true;
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i === 0) {
            isPrimeNumber = false;
            break;
        }
    }
    console.log(isPrimeNumber);
}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);