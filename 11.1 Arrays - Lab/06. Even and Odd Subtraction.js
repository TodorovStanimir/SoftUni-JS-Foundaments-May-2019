function evenAndOddSubstraction(input) {
    let difference = 0;
    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;
    input.forEach(element => {
        if (element % 2 === 0) {
            sumEvenNumbers += element;
        } else {
            sumOddNumbers += element;
        }
    });
    difference=sumEvenNumbers-sumOddNumbers;
    console.log(difference);
}
evenAndOddSubstraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubstraction([3, 5, 7, 9]);
evenAndOddSubstraction([2, 4, 6, 8, 10]);