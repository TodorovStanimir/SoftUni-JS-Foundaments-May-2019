function gramophone(firstString, secondString, thirdString) {
    let songtimes = secondString.length * firstString.length * thirdString.length / 2;
    let songRoutation = Math.ceil(songtimes / 2.5);
    console.log(`The plate was rotated ${songRoutation} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');