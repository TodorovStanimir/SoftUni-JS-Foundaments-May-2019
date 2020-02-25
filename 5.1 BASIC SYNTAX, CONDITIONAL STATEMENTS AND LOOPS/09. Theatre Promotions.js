function theatrePromotions(day, age) {
    let price = {
        0: {
            weekday: undefined,
            weekend: undefined,
            holiday: undefined
        },
        1: {
            weekday: 12,
            weekend: 15,
            holiday: 5
        },
        2: {
            weekday: 18,
            weekend: 20,
            holiday: 12
        },
        3: {
            weekday: 12,
            weekend: 15,
            holiday: 10
        }
    };
    let ageGroup = 0;
    if (0 <= age && age <= 18) {
        ageGroup = 1;
    } else if (18 < age && age <= 64) {
        ageGroup = 2;
    } else if (64 < age && age <= 122) {
        ageGroup = 3;
    }
    day = day.toLowerCase();
    console.log(price[ageGroup][day] !== undefined ? `${price[ageGroup][day]}$` : 'Error!');
}
theatrePromotions('Weekday', 13);