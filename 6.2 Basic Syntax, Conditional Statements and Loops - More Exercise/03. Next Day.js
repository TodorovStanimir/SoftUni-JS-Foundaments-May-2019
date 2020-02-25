function nextDay(year, month, day) {
    if (year === 1) {
        year = 1900 + 1;
    }
    let newYear = 0;
    let newMonth = 0;
    let newDay = 0
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10) {
        if (day === 31) {
            newDay = 1;
            newMonth = month + 1;
            newYear = year;
        } else {
            newDay = day + 1;
            newMonth = month;
            newYear = year;
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day === 30) {
            newDay = 1;
            newMonth = month + 1;
            newYear = year;
        } else {
            newDay = day + 1
            newMonth = month;
            newYear = year;
        }
    } else if (month === 12) {
        if (day === 31) {
            newDay = 1;
            newMonth = month + 1;
            newYear = year + 1;
        } else {
            newDay = day + 1;
            newMonth = month;
            newYear = year;
        }
    } else if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            if (day === 29) {
                newDay = 1;
                newMonth = month + 1;
                newYear = year + 1;
            } else {
                newDay = day + 1;
                newMonth = month;
                newYear = year;
            }
        } else {
            if (day === 28) {
                newDay = 1;
                newMonth = month + 1;
                newYear = year + 1;
            } else {
                newDay = day + 1;
                newMonth = month;
                newYear = year;
            }
        }
    }
    console.log(`${newYear}-${newMonth}-${newDay}`)
}
nextDay(1, 1, 2);