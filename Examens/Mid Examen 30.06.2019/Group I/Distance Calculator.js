function distanceCalculator(input) {
    let numberSteps = parseInt(input[0]);
    let stepsLong = parseFloat(input[1]);
    let distance = parseInt(input[2]);
    let travelledDistance = 0;
    for (let step = 1; step <= numberSteps; step++) {
        if (step % 5 === 0) {
            travelledDistance += 0.70 * stepsLong;
        } else {
            travelledDistance += stepsLong;
        }
    }
    travelledDistance = travelledDistance / 100;

    let persentTravelledDistance = travelledDistance / distance * 100;

    console.log(`You travelled ${persentTravelledDistance.toFixed(2)}% of the distance!`);

}
distanceCalculator(['100', '2', '1']);
distanceCalculator(['5000', '7.5', '500'])