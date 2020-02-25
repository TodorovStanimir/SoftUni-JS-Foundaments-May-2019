function solve(arr) {
    let racersObj = {};
    for (let arrElement of arr) {
        let [command, road, racer, nextRoad] = arrElement.split('->');
        switch (command) {
            case 'Add':
                if (racersObj.hasOwnProperty(road)) {
                    racersObj[road].push(racer);
                } else {
                    racersObj[road] = [];
                    racersObj[road].push(racer);
                }
                break;
            case 'Move':
                if (racersObj[road].includes(racer)) {
                    let indexOfRacer = racersObj[road].indexOf(racer);
                    racersObj[road].splice(indexOfRacer, 1);
                    racersObj[nextRoad].push(racer);
                }
                break;
            case 'Close':
                if (racersObj.hasOwnProperty(road)) {
                    delete racersObj[road];
                }
                break;
            case 'END':
                sortAndPrint(racersObj);
                break;
        }
    }

    function sortAndPrint(obj) {
        let newObjEntries = Object.entries(obj)
            .sort((a, b) => {
                if (a[1].length < b[1].length) {
                    return 1;
                } else if (a[1].length > b[1].length) {
                    return -1;
                } else if (a[1].length === b[1].length) {
                    return a[0].localeCompare(b[0]);
                }
            });
        console.log(`Practice sessions:`);
        for (let road of newObjEntries) {
            console.log(road[0]);
            for (let racers of road[1]) {
                console.log(`++${racers}`);
            }
        }
    }
}

// solve(['Add->Glen Vine->Steve Hislop',
//     'Add->Ramsey road->John McGuinness ',
//     'Add->Glen Vine->Ian Hutchinson',
//     'Add->Ramsey road->Dave Molyneux',
//     'Move->Ramsey road->Hugh Earnsson->Glen Vine',
//     'Add->A18 Snaefell mountain road->Mike Hailwood',
//     'Add->Braddan->Geoff Duke',
//     'Move->A18 Snaefell mountain road->Mike Hailwood->Braddan',
//     'Move->Braddan->John McGuinness->Glen Vine',
//     'Close->A18 Snaefell mountain road',
//     'END'
// ]);
solve([
    'END'
])