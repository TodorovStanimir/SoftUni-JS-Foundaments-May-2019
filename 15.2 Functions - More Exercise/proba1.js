function practiceSessions(input) {
 
    let practiceSessios = [];
    let road = '';
    let racer = '';
    let currentRoad = '';
    let nextRoad = '';
 
    let currentOperation = input.shift().split('->');
 
    while (currentOperation[0] !== 'END') {
 
        if (currentOperation[0] === 'Add') {
            road = currentOperation[1];
            racer = currentOperation[2];
            let RoadNotExist = true;
            for (let i = 0; i < practiceSessios.length; i++) {
                if (practiceSessios[i].road === road) {
                    practiceSessios[i].racer.push(racer);
                    RoadNotExist = false;
                    break;
                }
            }
            if (RoadNotExist) {
                practiceSessios.push({
                    road: road,
                    racer: [racer]
                });
            }
 
        } else if (currentOperation[0] === 'Move') {
            currentRoad = currentOperation[1];
            racer = currentOperation[2];
            nextRoad = currentOperation[3];
            let racerExist = false;
            for (let i = 0; i < practiceSessios.length; i++) {
                if (practiceSessios[i].road === currentRoad) {
                    for (let y = 0; y < practiceSessios[i].racer.length; y++) {
                        if (practiceSessios[i].racer[y] === racer) {
                            practiceSessios[i].racer.splice(y, 1);
                            racerExist = true;
                            break;
                        }
                    }
                }
                if (racerExist === true) {
                    break;
                }
            }
            if (racerExist === true) {
                for (let i = 0; i < practiceSessios.length; i++) {
                    if (practiceSessios[i].road === nextRoad) {
                        practiceSessios[i].racer.push(racer);
 
                    }
                }
            }
        } else if (currentOperation[0] === 'Close') {
            closedRoad = currentOperation[1];
            for (let i = 0; i < practiceSessios.length; i++) {
                if (practiceSessios[i].road === closedRoad) {
                    practiceSessios.splice(i, 1);
                }
 
            }
        }
 
        currentOperation = input.shift().split('->');
    }
    practiceSessios.sort(sortRoads);
 
    function sortRoads(a, b) {
        if (a.racer.length < b.racer.length) {
            return 1;
        } else if (a.racer.length > b.racer.length) {
            return -1;
        } else if (a.racer.length === b.racer.length) {
            return a.road.localeCompare(b.road);
        }
    }
    console.log('Practice sessions:')
    for (let i = 0; i < practiceSessios.length; i++) {
        console.log(`${practiceSessios[i].road}`);
        for (let y = 0; y < practiceSessios[i].racer.length; y++) {
            console.log(`++${practiceSessios[i].racer[y]}`);
        }
    }
}
// practiceSessions(['Add->Glen Vine->Steve Hislop',
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
practiceSessions(['Add->Glencrutchery Road->Giacomo Agostini',
    'Add->Braddan->Geoff Duke',
    'Add->Peel road->Mike Hailwood',
    'Add->Glencrutchery Road->Guy Martin',
    'Move->Glencrutchery Road->Giacomo Agostini->Peel road',
    'Close->Braddan',
    'END'
])