function ladyBugs(input) {
    let output = []
    let size = input[0];
    for (let i = 0; i < size; i++) {
        output.push(0);
    }
    let bugsPlaces = [];
    bugsPlaces = input[1].split(' ');
    for (let i = 0; i < output.length; i++) {
        for (let y = 0; y < bugsPlaces.length; y++) {
            if (i === Number(bugsPlaces[y])) {
                output[i] = 1;
            }
        }
    }
    for (let i = 2; i < input.length; i++) {
        let activity = input[i].split(' ');
        let positionFrom = Number(activity[0]);
        if (output[positionFrom] === 1) {
            output[positionFrom] = 0;
            let posoka = activity[1];
            let step = Number(activity[2]);
            let newPosition = 0;
            if (posoka === 'right') {
                newPosition = positionFrom + step;
            } else if (posoka === 'left') {
                newPosition = positionFrom - step;
            }
            while (output[newPosition] === 1) {
                if (posoka === 'right') {
                    newPosition += step;
                } else if (posoka === 'left') {
                    newPosition -= step;
                }
            }
            if (newPosition >= 0 && newPosition <= output.length - 1) {
                output[newPosition] = 1;
            }
        }
    }
    console.log(output.join(' '));
}
ladyBugs([3, '0 1', '0 right 1', '2 right 1']);
ladyBugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladyBugs([5, '3', '3 left 2', '1 left -2']);