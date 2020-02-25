function matchDates(input) {
    let correctNumber;
    let pattern = /(?<day>\d{2})([.\-/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
    while ((correctNumber = pattern.exec(input[0])) !== null){
        console.log(`Day: ${correctNumber.groups.day}, Month: ${correctNumber.groups.month}, Year: ${correctNumber.groups.year}`);
        
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'])