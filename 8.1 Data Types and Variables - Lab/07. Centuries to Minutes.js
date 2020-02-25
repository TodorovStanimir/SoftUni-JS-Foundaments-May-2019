function centuriesToMinutes(centures) {
    let years = centures * 100;
    let days = Math.trunc(centures * 36524.2422);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centures} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuriesToMinutes(1);
centuriesToMinutes(5);